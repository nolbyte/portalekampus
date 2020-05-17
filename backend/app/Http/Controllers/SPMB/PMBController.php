<?php

namespace App\Http\Controllers\SPMB;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use GuzzleHttp\Client;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Kemahasiswaan\FormuliPendaftaranModel;
use App\Models\System\ConfigurationModel;
use App\Helpers\Helper;
use App\Mail\MahasiswaBaruRegistered;
use App\Mail\VerifyEmailAddress;

use Ramsey\Uuid\Uuid;

class PMBController extends Controller {         
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $this->hasPermissionTo('SPMB-PMB_BROWSE');

        $this->validate($request, [           
            'TA'=>'required'
        ]);
        
        $ta=$request->input('TA');

        $data = User::role('mahasiswabaru')
                    ->where('ta',$ta)
                    ->get();
        
        return Response()->json([
                                'status'=>1,
                                'pid'=>'fetchdata',
                                'pmb'=>$data,
                                'message'=>'Fetch data calon mahasiswa baru berhasil diperoleh'
                            ],200);  
    }    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name'=>'required',            
            'email'=>'required|string|email|unique:users',
            'nomor_hp'=>'required|unique:users',
            'nama_ibu_kandung'=>'required',
            'prodi_id'=>'required',
            'username'=>'required|string|unique:users',
            'password'=>'required',
            'captcha_response'=>[
                                'required',
                                function ($attribute, $value, $fail) 
                                {
                                    $client = new Client ();
                                    $response = $client->post(
                                        'https://www.google.com/recaptcha/api/siteverify',
                                        ['form_params'=>
                                            [
                                                'secret'=>ConfigurationModel::getCache('CAPTCHA_PRIVATE_KEY'),
                                                'response'=>$value
                                            ]
                                        ]);    
                                    $body = json_decode((string)$response->getBody());
                                    if (!$body->success)
                                    {
                                        $fail('Token Google Captcha, salah !!!.');
                                    }
                                }
                            ]
        ]);
        $user = \DB::transaction(function () use ($request){
            $now = \Carbon\Carbon::now()->toDateTimeString();                   
            $code=mt_rand(1000,9999);
            $ta=ConfigurationModel::getCache('DEFAULT_TAHUN_PENDAFTARAN');
            $user=User::create([
                'id'=>Uuid::uuid4()->toString(),
                'name'=>$request->input('name'),
                'email'=>$request->input('email'),
                'username'=> $request->input('username'),
                'password'=>Hash::make($request->input('password')),
                'nomor_hp'=>$request->input('nomor_hp'),
                'ta'=>$ta,
                'email_verified_at'=>'',
                'theme'=>'default',  
                'code'=>$code,          
                'active'=>0,          
                'created_at'=>$now, 
                'updated_at'=>$now
            ]);            
            $role='mahasiswabaru';   
            $user->assignRole($role);
            $permission=Role::findByName('mahasiswabaru')->permissions;
            $user->givePermissionTo($permission->pluck('name'));             
            
            FormuliPendaftaranModel::create([
                'user_id'=>$user->id,
                'nama_mhs'=>$request->input('name'),
                'nama_ibu_kandung'=>$request->input('nama_ibu_kandung'),
                'telp_hp'=>$request->input('nomor_hp'),
                'kjur1'=>$request->input('prodi_id'),
                'ta'=>$ta,
            ]);

            return $user;
        });
        if (!is_null($user))
        {
            app()->mailer->to($request->input('email'))->send(new VerifyEmailAddress($user->code));
        }       

        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'store',
                                    'email'=>$user->email,                                                                                                  
                                    'message'=>'Data Mahasiswa baru berhasil disimpan.'
                                ],200); 

    }           
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function konfirmasi(Request $request)
    {
        $this->validate($request, [            
            'email'=>'required|string|email',
            'code'=>'required|numeric',                        
        ]);
        $now = \Carbon\Carbon::now()->toDateTimeString();       
        $email= $request->input('email');
        $code= $request->input('code');  
        
        $user = \DB::table('users')->where('email',$email)->where('code',$code)->get();        
        if ($user->count()>0)
        {
            $user=User::find($user[0]->id);
            $user->code=0;
            $user->active=1;
            $user->save();            
            app()->mailer->to($email)->send(new MahasiswaBaruRegistered($user));

            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'update',                                                                                                                                        
                                        'message'=>'Email Mahasiswa berhasil diverifikasi.'
                                    ],200);
        }
        else
        {
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'update',                                                                                                                                        
                                        'message'=>['Email Registrasi Mahasiswa gagal diverifikasi.']
                                    ],422);
        }

    }        
    /**
     * Menghapus calon mahasiwa baru
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id)
    { 
        $this->hasPermissionTo('SPMB-PMB_DESTROY');

        $user = User::where('isdeleted','1')
                    ->find($id); 
        
        if (is_null($user))
        {
            return Response()->json([
                                    'status'=>1,
                                    'pid'=>'destroy',                
                                    'message'=>"Calon Mahasiswa Baru dengan ID ($id) gagal dihapus"
                                ],200); 
        }
        else
        {
            $name=$user->name;
            $user->delete();

            \App\Models\System\ActivityLog::log($request,[
                                                                'object' => $this->guard()->user(), 
                                                                'object_id' => $this->guard()->user()->id, 
                                                                'user_id' => $this->guard()->user()->id, 
                                                                'message' => 'Menghapus Mahasiswa Baru ('.$name.') berhasil'
                                                            ]);
        
            return Response()->json([
                                        'status'=>1,
                                        'pid'=>'destroy',                
                                        'message'=>"Mahasiswa Baru ($name) berhasil dihapus"
                                    ],200);         
        }
                  
    }   
}