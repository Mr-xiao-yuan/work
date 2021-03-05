import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	num: 0,
	indexs: 0,
	indexs1: 0,
	indexs2: 0,
	cnxh: [
		[{
				img: 'https://s5.mogucdn.com/mlcdn/55cf19/210126_5kb6bee4jldii06if4ke6h48i6jh9_640x962.png_750x1000.v1cAC.81.jpg',
				title: '假两件女2021新款打底衫内搭针织衫设计感爆款毛衣早春百搭',
				Price: 39.9,
				salesVolume: 143
			},
			{
				img: 'https://s5.mogucdn.com/mlcdn/c45406/200801_6a55g62h2ia2lj2h13a0gikkjjihl_4222x5999.jpg_750x1000.v1cAC.81.jpg',
				title: '卫衣女春秋韩版宽松慵懒风ins超火早秋薄款百搭假两件外套潮',
				Price: 35.9,
				salesVolume: 333
			},
			{
				img: 'https://s11.mogucdn.com/mlcdn/c45406/190121_022geef7afla5h2i35bj9hic0h90e_640x960.jpg_750x1000.v1cAC.81.jpg',
				title: '衬衫女初春小个子港风百搭撞色衬衫上衣女小清新韩范气质长袖衬衣',
				Price: 46.9,
				salesVolume: 1907
			},
			{
				img: 'https://s11.mogucdn.com/mlcdn/c45406/190320_2icf5l85f79c6fk6ag3fl87da36i6_640x960.jpg_750x1000.v1cAC.81.jpg',
				title: '韩版长袖t恤v领上衣服春季加肥加大200斤大码打底衫内搭春秋',
				Price: 35.1,
				salesVolume: 1990
			}
		],

		[{
				img: 'https://s5.mogucdn.com/mlcdn/55cf19/200407_5ikegf8eeb4c8ak5fiei26egabfh4_640x960.jpg_640x854.v1cAC.40.webp',
				title: '韩版薄款圆领拼色长袖上衣假两件大码女装卫衣套装时尚两件套女',
				Price: 39.9,
				salesVolume: 25
			},
			{
				img: 'https://s5.mogucdn.com/mlcdn/55cf19/200908_64ih55gig19c5j8641ba7ib6k67gb_640x960.jpg_640x854.v1cAC.40.webp',
				title: '2020秋季露肩洋气减龄连帽卫衣套装宽松韩版休闲运动裤两件套',
				Price: 54.9,
				salesVolume: 21
			},
			{
				img: 'https://s5.mogucdn.com/mlcdn/c45406/190924_0690k0kackgkfc53k4kfbkkekb3a4_640x960.jpg_750x1000.v1cAC.81.jpg',
				title: '韩版宽松西装领休闲收腰双排扣风衣+纯色吊带+修身牛仔裤三件套',
				Price: 39.2,
				salesVolume: 977
			},
			{
				img: 'https://s5.mogucdn.com/mlcdn/c45406/200830_1cg11g7451ghlj5i66l4hg106ab34_3800x5700.jpg_750x1000.v1cAC.81.jpg',
				title: '大码女装秋装新款胖妹妹宽松显瘦洋气减龄遮肚连衣裙心机两件套',
				Price: 49,
				salesVolume: 195
			}
		],

		[{
				img: 'https://s5.mogucdn.com/mlcdn/c45406/200519_6dlb25831bb3g97965hh5i68kci9g_3750x4999.jpg_750x1000.v1cAC.81.jpg',
				title: '百褶裙女春夏日系K短裙a字大码百搭纯色学院风 黑色半身裙',
				Price: 39.9,
				salesVolume: 457
			},
			{
				img: 'https://s5.mogucdn.com/mlcdn/c45406/200810_5higb4g23hi34ch20l1k32a3gll8g_800x1199.jpg_750x1000.v1cAC.81.jpg',
				title: '大码女装连衣裙春秋新款胖妹妹遮肚显瘦宽松假两件仙女裙子夏',
				Price: 49.9,
				salesVolume: 38
			},
			{
				img: 'https://s11.mogucdn.com/mlcdn/c45406/200907_7jef0jlfljfa2k0f485akc5l3lb9g_3999x5999.jpg_750x1000.v1cAC.81.jpg',
				title: '秋季裙子女连衣裙长袖法式梗桔初恋裙小清新学生学院森系文艺',
				Price: 59.9,
				salesVolume: 49
			},
			{
				img: 'https://s11.mogucdn.com/mlcdn/c45406/200424_864e0j8hbg38bga0ade5bil6klgij_3800x5500.jpg_750x1000.v1cAC.81.jpg',
				title: '春季2021新款气质连衣裙女韩版小清新中长款收腰显瘦遮肚裙子',
				Price: 89,
				salesVolume: 428
			}
		],

		[{
				img: 'https://s5.mogucdn.com/mlcdn/c45406/200801_6a55g62h2ia2lj2h13a0gikkjjihl_4222x5999.jpg_750x1000.v1cAC.81.jpg',
				title: '卫衣女春秋韩版宽松慵懒风ins超火早秋薄款百搭假两件外套潮',
				Price: 35.9,
				salesVolume: 339
			},
			{
				img: 'https://s5.mogucdn.com/mlcdn/c45406/200430_8b44d12ehgh59fk22072lh0c8l3b0_3999x5999.jpg_750x1000.v1cAC.81.jpg',
				title: '白色短袖T恤女宽松韩版小个子夏新款女装卡通刺绣学院风纯棉上衣',
				Price: 39.9,
				salesVolume: 2776
			},
			{
				img: 'https://s5.mogucdn.com/mlcdn/c45406/200727_6cc881dd99b4ld13dhk9i617h4dk3_3999x5999.jpg_750x1000.v1cAC.81.jpg',
				title: '早春圆领套头长袖短款卫衣女新款ins潮薄款韩版宽松百搭上衣',
				Price: 39.9,
				salesVolume: 1121
			},
			{
				img: 'https://s5.mogucdn.com/mlcdn/c45406/200821_002l9aj32lkjadj9ld718gclf11k8_5000x7500.jpg_750x1000.v1cAC.81.jpg',
				title: '春秋超火cec长袖T恤女ins潮韩版宽松BF百搭怪味学生上衣',
				Price: 39.9,
				salesVolume: 170
			}
		],

		[{
				img: 'https://s11.mogucdn.com/mlcdn/55cf19/200829_473394f9ehh7e9f1lefa83hkdg5hc_640x962.png_750x1000.v1cAC.81.jpg',
				title: '黑色运动裤女宽松束脚裤2020新款春秋裤子高腰休闲裤网红卫裤',
				Price: 40.6,
				salesVolume: 160
			},
			{
				img: 'https://s11.mogucdn.com/mlcdn/c45406/200810_625adj91ih1icf6dbh9e9bggkidl4_5000x7500.jpg_750x1000.v1cAC.81.jpg',
				title: '阔腿裤女2021新款棉麻裤宽松裤子直筒高腰显瘦九分束脚运动裤',
				Price: 39.99,
				salesVolume: 79
			},
			{
				img: 'https://s5.mogucdn.com/mlcdn/55cf19/200909_52f311efl65hj89ea7lb3f34ejc94_640x962.png_750x1000.v1cAC.81.jpg',
				title: '秋季韩版2020新款高腰显瘦垂感黑色职业九分直筒裤西装裤女装',
				Price: 49,
				salesVolume: 106
			},
			{
				img: 'https://s11.mogucdn.com/mlcdn/c45406/190710_49i7ejbe420cibcbd234h9kc091e4_640x960.jpg_750x1000.v1cAC.81.jpg',
				title: '春夏新款韩版百搭休闲西裤宽松直筒长裤高腰裤女装裤子ins潮',
				Price: 39.99,
				salesVolume: 169
			}
		]
	],
	core: [
		[{
				img: 'https://img.alicdn.com/tfs/TB1jsZxlIieb18jSZFvXXaI3FXa-400-400.jpg',
				text: '口红'
			},
			{
				img: 'https://img.alicdn.com/imgextra/i4/2424298091/O1CN01aZwlxb29dj6elXsgp_!!2424298091.jpg',
				text: '精华'
			},
			{
				img: 'https://img.alicdn.com/imgextra/i3/2200676153815/O1CN01jLE8fZ1e3JWojaOgt_!!2200676153815.jpg',
				text: '香水'
			},
			{
				img: 'https://img.alicdn.com/imgextra/i3/2563613536/O1CN01DTP5jT1bzWy9xba4q_!!2563613536.jpg',
				text: '卸妆'
			},
			{
				img: 'https://img.alicdn.com/imgextra/i2/2064892827/O1CN01zE7GkZ1WkoDTn38Cn_!!2064892827.jpg',
				text: '眼霜'
			},
			{
				img: 'https://img.alicdn.com/imgextra/i4/2582702075/O1CN01SQc8XJ1RCONHzP28P_!!2582702075.jpg',
				text: '防晒'
			}
		],
		[{
				img: 'https://img.alicdn.com/tfs/TB1dsVUQ8r0gK0jSZFnXXbRRXXa-777-828.jpg_400x400q80.jpg',
				text: '卫衣'
			},
			{
				img: 'https://img.alicdn.com/tfs/TB1a6ocTpT7gK0jSZFpXXaTkpXa-800-800.png_q80.jpg',
				text: '连衣裙'
			},
			{
				img: 'https://img.alicdn.com/tfs/TB1UTJjh8Bh1e4jSZFhXXcC9VXa-589-590.jpg_q80.jpg',
				text: '时尚套装'
			},
			{
				img: 'https://img.alicdn.com/imgextra/i1/676197649/O1CN01ptzntu26NI3YX1qtM_!!676197649.jpg',
				text: '女式运动鞋'
			},
			{
				img: 'https://img.alicdn.com/imgextra/i3/676197649/O1CN01Sz9X0D26NI3Up0icY_!!676197649.jpg',
				text: '女式高跟鞋'
			},
			{
				img: 'https://img.alicdn.com/imgextra/i1/676197649/O1CN01KOnFM626NI3UgvM9X_!!676197649.jpg',
				text: '女式马丁靴'
			}
		],
		[{
				img: 'https://img.alicdn.com/tfs/TB1JNtAXwFY.1VjSZFnXXcFHXXa-800-800.jpg',
				text: '孕妇装'
			},
			{
				img: 'https://img.alicdn.com/tfs/TB1U7Azbkxz61VjSZFtXXaDSVXa-800-800.jpg',
				text: '哈衣爬服'
			},
			{
				img: 'https://img.alicdn.com/tfs/TB1feSodCSD3KVjSZFKXXb10VXa-800-800.jpg',
				text: '儿童家居服'
			},
			{
				img: 'https://img.alicdn.com/tfs/TB19js3cBWD3KVjSZKPXXap7FXa-800-800.jpg',
				text: '益智玩具'
			},
			{
				img: 'https://img.alicdn.com/tfs/TB1h_YdcAWE3KVjSZSyXXXocXXa-800-800.jpg',
				text: '毛衣针织衫'
			},
			{
				img: 'https://img.alicdn.com/tfs/TB1Ka2bcEGF3KVjSZFoXXbmpFXa-800-800.jpg',
				text: '儿童套装'
			}
		],
		[{
				img: 'https://img.alicdn.com/tfs/TB1o.KLe2zO3e4jSZFxXXaP_FXa-400-400.jpg',
				text: '项链'
			},
			{
				img: 'https://img.alicdn.com/bao/uploaded/i2/TB1NlmMMSzqK1RjSZFLSuwn2XXa.jpg',
				text: '耳饰'
			},
			{
				img: 'https://img.alicdn.com/bao/uploaded/i1/TB1jxDiTRLoK1RjSZFuSutn0XXa.jpg',
				text: '瑞士手表'
			},
			{
				img: 'https://img.alicdn.com/tfs/TB1gg2UPXY7gK0jSZKzXXaikpXa-400-400.jpg',
				text: '戒指'
			},
			{
				img: 'https://img.alicdn.com/bao/uploaded/i4/TB18twYaA5E3KVjSZFCSuvuzXXa.jpg',
				text: '黄金'
			},
			{
				img: 'https://img.alicdn.com/bao/uploaded/i2/TB1laqAe9zqK1RjSZPcSuvTepXa.jpg',
				text: '手串'
			}
		],
		[{
				img: 'https://img.alicdn.com/imgextra/i2/619123122/O1CN01L3V3Cw1Yvv7dB7Dz0_!!619123122.jpg',
				text: '零食大礼包'
			},
			{
				img: 'https://img.alicdn.com/tfs/TB1ngHyOHY1gK0jSZTEXXXDQVXa-600-600.jpg',
				text: '方便面'
			},
			{
				img: 'https://img.alicdn.com/bao/uploaded/i4/3979693780/O1CN01MFLojV1dnHftUbVIl_!!3979693780.jpg',
				text: '饼干'
			},
			{
				img: 'https://img.alicdn.com/imgextra/i4/3693245722/O1CN01PIQ5Gb1s8ipF42HOk_!!3693245722.jpg',
				text: '熟食'
			},
			{
				img: 'https://img.alicdn.com/imgextra/i1/2207588079974/O1CN01jtwMgE2NY8xt125Db_!!2207588079974.jpg',
				text: '健康轻零食'
			},
			{
				img: 'https://img.alicdn.com/imgextra/i4/3693245722/O1CN01hG71Gy1s8ipD9MrFU_!!3693245722.jpg',
				text: '米线'
			}
		]
	],
	orderIcon: [{
			img: require('@/assets/icon/daifuk.png'),
			text: '待付款'
		},
		{
			img: require('@/assets/icon/daifah.png'),
			text: '待发货'
		},
		{
			img: require('@/assets/icon/daishouh.png'),
			text: '待收货'
		},
		{
			img: require('@/assets/icon/daipingj.png'),
			text: '待评价'
		},
		{
			img: require('@/assets/icon/shouhou.png'),
			text: '退款/售后'
		},
	]
}

const store = new Vuex.Store({
	state
})

export default store
