import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{ //全局变量定义处
		hasLogin : false ,//用户是否登陆
		userInfo : {
			uid:'',
			openid:''
		} ,//用户信息
	},
	mutations:{
		login(state,provider){
			console.log("登陆成功后");
			console.log(provider);
			console.log(state);
			state.hasLogin = true ;
			state.userInfo = provider ;
			uni.setStorage({
				key:'userInfo',
				data: provider
			});
		},
		logout(state){
			console.log("退出");
			state.hasLogin = false ;
			state.userInfo = {} ;
			uni.removeStorage({
				key : 'userInfo'
			});
		}
	} 
})

export default store 