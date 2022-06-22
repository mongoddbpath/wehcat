import Vue from 'vue'
import App from './App'
import store from './store'

Vue.prototype.$store = store

Vue.prototype.getuid = function() {
	let that = this
	let pages = getCurrentPages();
	let localurl = pages[pages.length - 1].route;
	uni.getStorage({
	    key: 'userInfo',
	    success: function (res) {
			if(res.data.uid){
				that.$store.state.userInfo.uid = res.data.uid
				that.$store.state.userInfo.openid = res.data.openid
				console.log('userInfo')
				console.log(res.data)
			}
	    },
		fail:function(){
			if (!that.$store.state.hasLogin) {
				let url = `/pages/index/login/login?callback_url=/${localurl}`
				uni.navigateTo({
					url
				})
			}
		}
	})
	
}

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);
const app = new Vue({
	store,
	...App
})
import httpInterceptor from '@/common/http.interceptor.js';
Vue.use(httpInterceptor, app);



app.$mount()
