import axios from 'axios'
const send = (data) => new Promise((resolve) => setTimeout(() => resolve({data: data}), 2000))

const gamaxios = axios.create({
	baseURL: 'https://api.gamashop.herokuapp.com/'
});

export default gamaxios;

//API DOCUMENTATION

export const GET_LIST_TRENDING_PRODUCT = () => {

	const params = {
		amount: 4
	}

	const response = [
		{
			_id: '3784yghh37823uh9',
			fk_seller: '2830jb32438b37',
			category: 'attribute',
			name: 'Pom-pom PPSMB DIJAMIN LULUS Pengecekan 100%',
			images: [
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/zyHhfwJP', 
				'https://postimg.cc/gwv6VYLV',
			],
			price: 1850000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 14,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		},
		{
			_id: 'fdss44f7823uh9',
			fk_seller: '2830jb32438b37',
			category: 'attribute',
			name: 'Caping Reguler Fit ALL SIZE Promo PPSMB',
			images: [
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/zyHhfwJP', 
				'https://postimg.cc/gwv6VYLV',
			],
			price: 950000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 10,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		},
		{
			_id: '3485n3f4798dn934',
			fk_seller: '2830jb32438b37',
			category: 'attribute',
			name: 'Sepatu kerakyatan CT Size 36 BNIB',
			images: [
				'https://postimg.cc/zyHhfwJP', 
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/gwv6VYLV',
			],
			price: 6000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 8,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		},
		{
			_id: 'mmm934293783ess9',
			fk_seller: '2830jb32438b37',
			category: 'book',
			name: 'Buku Inspiratif [ORI] Catatan Akhir Kuliah',
			images: [
				'https://postimg.cc/gwv6VYLV',
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/zyHhfwJP', 
			],
			price: 53450000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 2,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		}
	]

	gamaxios.get('/product/list-trending', { params })
	.then(api => console.log('api-ready', api))
	.catch(() => {})
	
	return send({status: 'OK', body: response})
}

export const GET_LIST_NEW_ARRIVAL_PRODUCT = () => {

	const params = {
		amount: 4
	}
	
	const response = [
		{
			_id: '3784yghh37823uh9',
			fk_seller: '2830jb32438b37',
			category: 'attribute',
			name: 'Pom-pom PPSMB DIJAMIN LULUS Pengecekan 100%',
			images: [
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/zyHhfwJP', 
				'https://postimg.cc/gwv6VYLV',
			],
			price: 1850000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 14,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		},
		{
			_id: 'fdss44f7823uh9',
			fk_seller: '2830jb32438b37',
			category: 'attribute',
			name: 'Caping Reguler Fit ALL SIZE Promo PPSMB',
			images: [
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/zyHhfwJP', 
				'https://postimg.cc/gwv6VYLV',
			],
			price: 950000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 10,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		},
		{
			_id: '3485n3f4798dn934',
			fk_seller: '2830jb32438b37',
			category: 'attribute',
			name: 'Sepatu kerakyatan CT Size 36 BNIB',
			images: [
				'https://postimg.cc/zyHhfwJP', 
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/gwv6VYLV',
			],
			price: 6000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 8,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		},
		{
			_id: 'mmm934293783ess9',
			fk_seller: '2830jb32438b37',
			category: 'book',
			name: 'Buku Inspiratif [ORI] Catatan Akhir Kuliah',
			images: [
				'https://postimg.cc/gwv6VYLV',
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/zyHhfwJP', 
			],
			price: 53450000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 2,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		}
	]

	gamaxios.get('/product/list-new-arrival', { params })
	.then(api => console.log('api-ready', api))
	.catch(() => {})
	
	return send({status: 'OK', body: response})
}

export const GET_LIST_BY_CATEGORY_PRODUCT = () => {

	const params = {
		amount: 4,
		category: 'books'
	}
	
	const response = [
		{
			_id: '3784yghh37823uh9',
			fk_seller: '2830jb32438b37',
			category: 'attribute',
			name: 'Pom-pom PPSMB DIJAMIN LULUS Pengecekan 100%',
			images: [
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/zyHhfwJP', 
				'https://postimg.cc/gwv6VYLV',
			],
			price: 1850000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 14,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		},
		{
			_id: 'fdss44f7823uh9',
			fk_seller: '2830jb32438b37',
			category: 'attribute',
			name: 'Caping Reguler Fit ALL SIZE Promo PPSMB',
			images: [
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/zyHhfwJP', 
				'https://postimg.cc/gwv6VYLV',
			],
			price: 950000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 10,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		},
		{
			_id: '3485n3f4798dn934',
			fk_seller: '2830jb32438b37',
			category: 'attribute',
			name: 'Sepatu kerakyatan CT Size 36 BNIB',
			images: [
				'https://postimg.cc/zyHhfwJP', 
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/gwv6VYLV',
			],
			price: 6000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 8,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		},
		{
			_id: 'mmm934293783ess9',
			fk_seller: '2830jb32438b37',
			category: 'book',
			name: 'Buku Inspiratif [ORI] Catatan Akhir Kuliah',
			images: [
				'https://postimg.cc/gwv6VYLV',
				'https://postimg.cc/RNDf9pzH', 
				'https://postimg.cc/ns8D9srV', 
				'https://postimg.cc/zyHhfwJP', 
			],
			price: 53450000,
			amount_stock: 120,
			description: 'ZCUT-9 adalah pemotong lakban otomatis paling canggih di kelasnya. Z-CUT9 di lengkapi dengan 2 sensor yg membuatnya bisa melakukan pemotongan 2 lakban sekaligus. Mesin ini juga mempunya fitur keselamatan yang mencegah aktivasi mesin pada saat ada benda asing di dalam mesin (misalnya jari tangan, benda atau alat asing) Panjang potongan: 5mm - 999mm (hampir 1 meter) Fitur Otomatis Pencegah Cidera Memory Penyimpanan yang bisa menyimpan sampai 6 macam ukuran. Bisa memotong banyak macam lakban, kertas, aluminium foil dll. 2 sensor sehingga bisa memotong 2 lakban sekaligus Ruang Penyimpanan Pinset (Bonus Pinset) Dimension: 116(W)*140(D)*213(H)mm / Power Consumption: 40W / Voltage: AC220V/50Hz or AC110V/60Hz / Net Weight: 2.8 KGS',
			amount_sold: 2,
			created_at: new Date(1633281954053),
			updated_at: new Date(1633281954053),
		}
	]

	gamaxios.get('/product/list-by-category', { params })
	.then(api => console.log('api-ready', api))
	.catch(() => {})
	
	return send({status: 'OK', body: response})
}

//AUTH APIs

export const POST_REGISTER_CUSTOMER = () => {

	const params = {
		email: 'bintangbagus01@mail.ugm.ac.id',
		name: 'R. Bintang Bagus',
		password: 'fghdfgd',
	}
	
	const response = {
		token: 'ejgbnkjsdnfgbk',
		refreshToken: 'jsdnckjncdd',
		user_data: {
			_id: 'scbakscbnasnx',
			name: 'R. Bintang Bagus',
			email: 'bintangbagus01@mail.ugm.ac.id',
		}
	}

	gamaxios.get('/auth/login-customer', { params })
	.then(api => console.log('api-ready', api))
	.catch(() => {})
	
	return send({status: 'OK', body: response})
}


export const POST_LOGIN_CUSTOMER = () => {

	const params = {
		email: 'bintangbagus01@mail.ugm.ac.id',
		password: 'fghdfgd',
	}
	
	const response = {
		token: 'ejgbnkjsdnfgbk',
		refreshToken: 'jsdnckjncdd',
		user_data: {
			_id: 'scbakscbnasnx',
			name: 'R. Bintang Bagus',
			email: 'bintangbagus01@mail.ugm.ac.id',
		}
	}

	gamaxios.get('/auth/register-customer', { params })
	.then(api => console.log('api-ready', api))
	.catch(() => {})
	
	return send({status: 'OK', body: response})
}
