import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	guessYouLikeIt:[
		{
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
		},
		
		
	]
}

const store = new Vuex.Store({
	state
})

export default store
