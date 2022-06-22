<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title" style="text-align: center;">请先登录系统</view>
			<button type="default" open-type="getUserInfo" @getuserinfo="getUserInfo" style="border:none;padding:20px;text-align: center;"  >
			<view class="wechat item">
				<view class="icon"><u-icon size="70"   name="weixin-fill" color="rgb(83,194,64)"></u-icon></view>
				微信一键登陆
			</view>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				callback_url:""
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			if(option.callback_url){
				this.callback_url = option.callback_url ;
			}
		},
		
		methods: {
			getUserInfo:function(){
				let _this = this ;
				 //登录
				uni.login({
					provider: 'weixin',
					success: res => {
						// console.log('登录成功：', res);
						//获取临时登录凭证code
						//获取openid，session_key
						let url = getApp().globalData.api + '/Front/front/login/code/' +res.code;
						uni.request({
							url: url, // 请求路径
							success: res => {
								console.log(_this.callback_url);
								console.log(res);
								if(res.data.status == 1){
									_this.$store.commit("login",res.data.data);
									uni.navigateTo({
										url:_this.callback_url ? _this.callback_url : '/pages/index/index'
									});	
								}else{
									uni.showToast({
										icon: 'none',
										title: res.data.msg,
										duration: 2000
									});
								}
							},
							fail: err => {
								console.log('请求失败：',err)
							}
						});
					},
					fail: err => {
						console.log('登录失败：', err)
					}
				})
			},	
		}
	}
</script>

<style lang="scss" scoped>
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 80rpx auto 0;

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.tips {
			color: $u-type-info;
			margin-bottom: 60rpx;
			margin-top: 8rpx;
		}
		.getCaptcha {
			background-color: rgb(253, 243, 208);
			color: $u-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $u-tips-color;
			
			.link {
				color: $u-type-warning;
			}
		}
	}
}
</style>
