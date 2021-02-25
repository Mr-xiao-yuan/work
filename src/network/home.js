import {ask} from './ask'

export function getHome(){
	return ask({
		url: '/home/multidata'
	})
}