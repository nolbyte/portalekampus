<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormulirPendaftaranTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   
        Schema::defaultStringLength(191);

        Schema::create('pe3_formulir_pendaftaran', function (Blueprint $table) {                                   
            $table->uuid('id')->primary();                        
            $table->uuid('user_id');                        
            $table->string('no_formulir',11)->nullable();
            $table->string('nama_mhs')->nullable(); 
            $table->string('tempat_lahir')->nullable(); 
            $table->date('tanggal_lahir')->nullable(); 
            $table->enum('jk',['L','P'])->default('L');
            $table->tinyInteger('idagama')->nullable(); 
            
            $table->enum('idwarga',['WNI','WNA'])->default('WNI');
            $table->string('nik',60)->nullable(); 
            $table->enum('status_pekerjaan',['TIDAK_BEKERJA','BEKERJA'])->default('TIDAK_BEKERJA'); 
            $table->string('alamat_kantor')->nullable();             
            $table->string('telp_kantor')->nullable(); 

            $table->string('address1_desa_id',10)->nullable(); 
            $table->string('address1_kelurahan')->nullable(); 
            $table->string('address1_kecamatan_id',7)->nullable(); 
            $table->string('address1_kecamatan')->nullable(); 
            $table->string('address1_kabupaten_id',4)->nullable(); 
            $table->string('address1_kabupaten')->nullable(); 
            $table->string('address1_provinsi_id',2)->nullable(); 
            $table->string('address1_provinsi')->nullable(); 
            $table->string('alamat_rumah')->nullable(); 
            
            $table->string('telp_rumah')->nullable(); 
            $table->string('telp_hp')->nullable(); 

            $table->string('nama_ibu_kandung'); 
            $table->tinyInteger('id_jenispekerjaan_ortu')->nullable(); 

            $table->string('pendidikan_terakhir',40)->nullable(); 
            $table->string('jurusan')->nullable(); 
            $table->string('address2_kabupaten_id',4)->nullable(); 
            $table->string('address2_kota')->nullable(); 
            $table->string('address2_provinsi_id',2)->nullable(); 
            $table->string('address2_provinsi')->nullable(); 
            $table->year('tahun_pa')->nullable();
            $table->enum('jenis_slta',['SMA','SMK','MA'])->default('SMA'); 
            $table->string('asal_slta',150)->nullable(); 
            $table->enum('status_slta',['NEGERI','SWASTA'])->default('NEGERI'); 
            $table->string('nomor_ijazah',60)->nullable(); 

            $table->tinyInteger('kjur1')->nullable(); 
            $table->tinyInteger('kjur2')->nullable(); 
            $table->string('idkelas',1)->nullable(); 
            $table->year('ta');
            $table->tinyInteger('idsmt')->default(1);

            $table->string('descr')->nullable(); 
            $table->timestamps();
            $table->unique('user_id'); 
            
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade') 
                ->onUpdate('cascade');  

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pe3_formulir_pendaftaran');
    }
}