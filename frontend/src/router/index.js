import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import NotFoundComponent from '../components/NotFoundComponent'

Vue.use(VueRouter)
const routes = [
	{
		path: '/',
		name: 'FrontDashboard',
		meta:{
			title: "DASHBOARD"
		},
		component: () => import('../views/pages/front/Home.vue')
	},
	{
		path: '/pmb',
		name: 'FrontPMB',
		meta:{
			title: "PENDAFTARAN MAHASISWA BARU"
		},
		component: () => import('../views/pages/front/PMB.vue')
	},
	{
		path: '/login',
		name: 'FrontLogin',
		meta:{
			title: "LOGIN"
		},
		component: () => import('../views/pages/front/Login.vue')
	},
	{
		path: '/dashboard/:token',
		name: 'AdminDashboard',
		meta:{
			title: "DASHBOARD",			
        },
		component: () => import('../views/pages/admin/Dashboard.vue'),		
	},
	//dmaster	
	{
		path: '/dmaster',
		name: 'DMaster',
		meta:{
			title: "DATA MASTER",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/dmaster/DMaster.vue'),		
	},
	{
		path: '/dmaster/ta',
		name: 'DMasterTahunAkademik',
		meta:{
			title: "DATA MASTER - TAHUN AKADEMIK",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/dmaster/TahunAkademik.vue'),		
	},
	{
		path: '/dmaster/fakultas',
		name: 'DMasterFakultas',
		meta:{
			title: "DATA MASTER - FAKULTAS",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/dmaster/Fakultas.vue'),		
		beforeEnter: (to, from, next) => {
			if(store.getters['uifront/getBentukPT']=='sekolahtinggi')
			{
				next('/dashboard/'+store.getters['auth/AccessToken']);
			}
			else
			{
				next();
			}			
		}
	},
	{
		path: '/dmaster/programstudi',
		name: 'DMasterProgramStudi',
		meta:{
			title: "DATA MASTER - PROGRAM STUDI",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/dmaster/ProgramStudi.vue'),		
	},
	{
		path: '/dmaster/kelas',
		name: 'DMasterKelas',
		meta:{
			title: "DATA MASTER - KELAS",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/dmaster/Kelas.vue'),		
	},
	//spmb	
	{
		path: '/spmb',
		name: 'SPMB',
		meta:{
			title: "SPMB",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/spmb/SPMB.vue'),		
	},	
	{
		path: '/spmb/soalpmb',
		name: 'SPMBSoal',
		meta:{
			title: "SPMB - SOAL PMB",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/spmb/SoalPMB.vue'),		
	},
	{
		path: '/spmb/pendaftaranbaru',
		name: 'SPMBPendaftaranBaru',
		meta:{
			title: "SPMB - PENDAFTARAN BARU",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/spmb/PendaftaranBaru.vue'),		
	},	
	{
		path: '/spmb/formulirpendaftaran',
		name: 'SPMBFormulirPendaftaran',
		meta:{
			title: "SPMB - FORMULIR PENDAFTARAN",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/spmb/FormulirPendaftaran.vue'),		
	},
	{
		path: '/spmb/persyaratan',
		name: 'SPMBPersyaratan',
		meta:{
			title: "SPMB - PERSYARATAN",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/spmb/PersyaratanPMB.vue'),		
	},
	{
		path: '/spmb/jadwalujianpmb',
		name: 'SPMBJadwalUjianPMB',
		meta:{
			title: "SPMB - JADWAL UJIAN PMB",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/spmb/JadwalUjianPMB.vue'),		
	},
	{
		path: '/spmb/ujianonline',
		name: 'SPMBUjianOnline',
		meta:{
			title: "SPMB - UJIAN ONLINE",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/spmb/UjianOnline.vue'),		
	},
	{
		path: '/spmb/nilaiujian',
		name: 'SPMBNilaiUjian',
		meta:{
			title: "SPMB - NILAI UJIAN",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/spmb/NilaiUjian.vue'),		
	},	
	{
		path: '/spmb/jadwalujianpmb/passinggrade/:idjadwalujian',
		name: 'SPMBPassingGrade',
		meta:{
			title: "SPMB - PASSING GRADE",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/spmb/PassingGrade.vue'),		
	},	
	{
		path: '/spmb/laporanfakultas',
		name: 'SPMBReportFakultas',
		meta:{
			title: "SPMB - LAPORAN FAKULTAS",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/spmb/ReportFakultas.vue'),		
	},
	{
		path: '/spmb/laporanprodi',
		name: 'SPMBReportProdi',
		meta:{
			title: "SPMB - LAPORAN PROGRAM STUDI",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/spmb/ReportProdi.vue'),		
	},
	
	//keuangan
	{
		path: '/keuangan',
		name: 'KEUANGAN',
		meta:{
			title: "KEUANGAN",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/keuangan/Keuangan.vue'),		
	},	
	{
		path: '/keuangan/channelpembayaran',
		name: 'KeuanganChanelPembayaran',
		meta:{
			title: "KEUANGAN - CHANNEL PEMBAYARAN",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/keuangan/ChannelPembayaran.vue'),		
	},	
	{
		path: '/keuangan/statustransaksi',
		name: 'KeuanganStatusTransaksi',
		meta:{
			title: "KEUANGAN - STATUS TRANSAKSI",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/keuangan/StatusTransaksi.vue'),		
	},	
	{
		path: '/keuangan/biayakomponen',
		name: 'KeuanganBiayaKomponen',
		meta:{
			title: "KEUANGAN - BIAYA KOMPONEN",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/keuangan/BiayaKomponen.vue'),		
	},	
	{
		path: '/keuangan/biayakomponenperiode',
		name: 'KeuanganBiayaKomponenPeriode',
		meta:{
			title: "KEUANGAN - BIAYA KOMPONEN PERIODE",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/keuangan/BiayaKomponenPeriode.vue'),		
	},	
	{
		path: '/keuangan/transferbank',
		name: 'KeuanganTransferBank',
		meta:{
			title: "KEUANGAN - TRANSFER BANK",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/keuangan/TransferBank.vue'),		
	},
	{
		path: '/keuangan/transaksi',
		name: 'KeuanganTransaksi',
		meta:{
			title: "KEUANGAN - TRANSAKSI",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/keuangan/Transaksi.vue'),		
	},
	{
		path: '/keuangan/transaksi-baru',
		name: 'KeuanganTransaksiBaru',
		meta:{
			title: "KEUANGAN - TRANSAKSI BARU",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/keuangan/TransaksiBaru.vue'),		
	},
	{
		path: '/keuangan/konfirmasipembayaran',
		name: 'KeuanganKonfirmasiPembayaran',
		meta:{
			title: "KEUANGAN - KONFIRMASI PEMBAYARAN",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/keuangan/KonfirmasiPembayaran.vue'),		
	},
	//system	
	{
		path: '/system-setting/identitasdiri',
		name: 'IdentitasDiri',
		meta:{
			title: "SETTING - IDENTITAS DIRI",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/IdentitasDiri.vue'),		
	},
	{
		path: '/system-setting/permissions',
		name: 'SettingPermissions',
		meta:{
			title: "SETTING - PERMISSIONS",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/Permissions.vue'),		
	},
	{
		path: '/system-setting/roles',
		name: 'SettingRoles',
		meta:{
			title: "SETTING - ROLES",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/Roles.vue'),		
	},
	{
		path: '/system-setting/captcha',
		name: 'SettingCaptcha',
		meta:{
			title: "SETTING - CAPTCHA",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/Captcha.vue'),		
	},
	{
		path: '/system-setting/email',
		name: 'SettingEmail',
		meta:{
			title: "SETTING - EMAIL",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/Email.vue'),		
	},
	{
		path: '/system-users',
		name: 'SystemUsers',
		meta:{
			title: "SYSTEM - USERS",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/SystemUsers.vue'),		
	},
	{
		path: '/system-users/superadmin',
		name: 'UsersSuperadmin',
		meta:{
			title: "USERS - SUPER ADMIN",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/UsersSuperadmin.vue'),		
	},
	{
		path: '/system-users/pmb',
		name: 'UsersPMB',
		meta:{
			title: "USERS - PMB",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/UsersPMB.vue'),		
	},
	{
		path: '/system-users/akademik',
		name: 'UsersAkademik',
		meta:{
			title: "USERS - AKADEMIK",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/UsersAkademik.vue'),		
	},
	{
		path: '/system-users/prodi',
		name: 'UsersProdi',
		meta:{
			title: "USERS - PROGRAM STUDI",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/UsersProdi.vue'),		
	},
	{
		path: '/system-users/dosen',
		name: 'UsersDosen',
		meta:{
			title: "USERS - DOSEN",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/UsersDosen.vue'),		
	},
	{
		path: '/system-users/keuangan',
		name: 'UsersKeuangan',
		meta:{
			title: "USERS - KEUANGAN",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/UsersKeuangan.vue'),		
	},
	{
		path: '/system-users/profil',
		name: 'UsersProfil',
		meta:{
			title: "USERS - PROFILE",
			requiresAuth:true,
        },
		component: () => import('../views/pages/admin/system/UsersProfile.vue'),		
	},
	{
		path: '/404',
		name: 'NotFoundComponent',
		meta:{
            title: "PAGE NOT FOUND"
        },
		component: NotFoundComponent
	},
	{ 
		path: '*', 
		redirect: '/404' 
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;	
	if (to.matched.some(record => record.meta.requiresAuth))	
	{
		if (store.getters['auth/Authenticated'])
		{
			next();
			return;
		}
		next('/login');
	}
	else
	{
		next();
	}
})
export default router