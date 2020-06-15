<?php

namespace App\Models\SPMB;

use Illuminate\Database\Eloquent\Model;

class SoalPMBModel extends Model {    
     /**
     * nama tabel model ini.
     *
     * @var string
     */
    protected $table = 'pe3_soal';
    /**
     * primary key tabel ini.
     *
     * @var string
     */
    protected $primaryKey = 'id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [        
        'id',                      
        'soal',    
        'gambar', 
        'prodi_id',         
        'ta',         
        'semester',         
    ];
    /**
     * enable auto_increment.
     *
     * @var string
     */
    public $incrementing = false;
    /**
     * activated timestamps.
     *
     * @var string
     */
    public $timestamps = true;

    public function jawaban()
    {
        return $this->belongsTo('App\Models\SPMB\JawabanSoalModel','soal_id','id');
    }
}