const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'https://xx.db2j.com/index.php',
		loadingText: '努力加载中~',
		loadingTime: 800,
		// 设置自定义头部content-type
		// header: {
		// 	'content-type': 'xxx'
		// }
		// ......
	});
	
	// 获取正确的图片地址字符串
	Vue.prototype.$getimgurl = function(imgstr){
		return imgstr.replace(new RegExp('https://xx.db2j.com', 'g'), '')
	}
	
}

export default {
	install
}