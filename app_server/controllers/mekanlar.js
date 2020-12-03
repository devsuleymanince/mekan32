
const anaSayfa=function(req, res, next) {
	res.render('mekanlar-liste', {
		'baslik': 'Anasayfa',
		'footerYazi': 'Süleyman İnce 2020 - Her Hakkı Saklıdır',
		'sayfaBaslik':{
			'siteAd':'Mekanİnce',
			'aciklama':'Isparta da popüler mekanlar'
		},
		'mekanlar':[
		{
			'ad':'Starbucks',
			'adres':'Centrum Garden AVM',
			'puan':3,
			'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
			'mesafe':'10km'

		},
		{
			'ad':'Kahve Ateşi',
			'adres':'Isparta Merkez',
			'puan':4,
			'imkanlar':['Kahve','Kek','Waffle'],
			'mesafe':'13km'

		},
		{
			'ad':'Cam Kafe',
			'adres':'SDÜ Batı Kampüsü',
			'puan':1,
			'imkanlar':['Yiyecek','İçecek','Atıştırmalık'],
			'mesafe':'1km'

		},
		{
			'ad':'GSF Kantin',
			'adres':'SDÜ Doğu Kampüsü',
			'puan':2,
			'imkanlar':['Yiyecek','İçecek','Atıştırmalık'],
			'mesafe':'5km'

		},
		{
			'ad':'Burç Fırın',
			'adres':'Isparta Merkez',
			'puan':5,
			'imkanlar':['Kahve','Kek','Waffle'],
			'mesafe':'14km'

		}
		]
	}

		);
}

const mekanBilgisi=function(req, res, next) {
	res.render('mekan-detay', 
	{
	 'baslik':'Mekan Bilgisi',
	 'footerYazi': 'Süleyman İnce 2020 - Her Hakkı Saklıdır',
	 'sayfaBaslik':'Starbucks',
	 'mekanBilgisi':{
	   'ad':'Starbucks',
		'adres':'Centrum Garden AVM',
		'puan':3,
		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],	
		'koordinatlar':{
			'enlem':'37.781885',
			'boylam':'30.56604'
		},
		'saatler':[
		  {
		  	'gunler':'Pazartesi-Cuma',
		  	'acilis':'7:00',
		  	'kapanis':'23:00',
		  	'kapali':false
		  },
		  {
		  	'gunler':'Cumartesi',
		  	'acilis':'9:00',
		  	'kapanis':'22:00',
		  	'kapali':false
		  },
		  {
		  	'gunler':'Pazar',
		  	'kapali':true
		  }
		],
		'yorumlar':[
		  {
		  	'yorumYapan':'Süleyman İnce',
		  	'puan':4,
		  	'tarih':'3.12.2020',
		  	'yorumMetni':'Kahveleri güzel 1 yıldızı verilen hizmetten kırdım'
		  },
		  {
		  	'yorumYapan':'Süleyman İnce2',
		  	'puan':3,
		  	'tarih':'3.12.2020',
		  	'yorumMetni':'Eh işte idare eder'
		  }
		]
	  }
	}
	
		);
}



const yorumEkle=function(req, res, next) {
	res.render('yorum-ekle', {title: 'Yorum Ekle'});
};

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}