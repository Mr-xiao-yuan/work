import axios from 'axios'

export function ask(config, success, failure) {
	
	// axios.create本身就封装了一个promise
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})
	
	//axios的拦截器
	instance.interceptors.request.use(config => {
		// console.log(config)
		//返回数据
		return config
	}, err => {
		console.log(err)
	})
	//发送网路请求
	return instance(config)
}
