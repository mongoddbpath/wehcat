<template>
	<view class="content">
		<view style="width: 750rpx;height: 465rpx;background-image: linear-gradient(to right,#04A7F5,#1482FC);"></view>
		<view style="display: flex;width: 750rpx;justify-content: center;flex-direction: column;margin-top: -380rpx;">
			<view style="color: white;font-size: 36rpx;font-weight: bold;margin: auto;">
				人员信息登记/查询
			</view>
			
			<view style="width: 750rpx;background: white;display: flex;justify-content: space-evenly;flex-wrap: wrap;margin-top: 30rpx;padding: 1rpx 30rpx;">
				<u-divider color="#333333" margin-top="28" margin-bottom="28" half-width="200" fontSize="38" border-color="#6d6d6d"
				style="font-size:38rpx;">基本信息（必填）</u-divider>
				<view @click="gopage('dbinfo')" style="margin-top: 30rpx;width: 312rpx;height: 158rpx;background: url(https://xx.db2j.com/static/b8.png);background-size: 100% 100%; display: flex;align-items: center;justify-content: center;">
					<view style="width: 190rpx;height: 128rpx;display: flex;flex-direction: column;">
						<view style="font-weight: bold;color: white;font-size: 30rpx !important;margin-top: 8rpx;margin-left: 20rpx;">
							基本信息<br>登记
						</view>
					</view>
					<view style="width: 128rpx;height: 128rpx;display: flex;flex-direction: column;">
						<image src="/static/v0.png" style="width: 128rpx;height: 128rpx;" mode=""></image>
					</view>
				</view>
				
				<view @click="gopage('dbinfo3')" style="margin-top: 30rpx;width: 312rpx;height: 158rpx;background: url(https://xx.db2j.com/static/b0.png);background-size: 100% 100%; display: flex;align-items: center;justify-content: center;">
					<view style="width: 190rpx;height: 128rpx;display: flex;flex-direction: column;">
						<view style="font-weight: bold;color: white;font-size: 30rpx !important;margin-top: 8rpx;margin-left: 20rpx;">
							基本信息<br>查询
						</view>
					</view>
					<view style="width: 128rpx;height: 128rpx;display: flex;flex-direction: column;">
						<image src="/static/v1.png" style="width: 128rpx;height: 128rpx;" mode=""></image>
					</view>
				</view>
				<u-divider color="#333333" margin-top="28" margin-bottom="28" half-width="200" fontSize="38" border-color="#6d6d6d">银行账号（必填）</u-divider>
				<view @click="gopage('dbbank')" style="margin-top: 30rpx;width: 312rpx;height: 158rpx;background: url(https://xx.db2j.com/static/b1.png);background-size: 100% 100%; display: flex;align-items: center;justify-content: center;">
					<view style="width: 190rpx;height: 128rpx;display: flex;flex-direction: column;">
						<view style="font-weight: bold;color: white;font-size: 30rpx !important;margin-top: 8rpx;margin-left: 20rpx;">
							银行账号<br>登记
						</view>
					</view>
					<view style="width: 128rpx;height: 128rpx;display: flex;flex-direction: column;">
						<image src="/static/v6.png" style="width: 128rpx;height: 128rpx;" mode=""></image>
					</view>
				</view>
				
				<view @click="gopage('dbbank3')" style="margin-top: 30rpx;width: 312rpx;height: 158rpx;background: url(https://xx.db2j.com/static/b2.png);background-size: 100% 100%; display: flex;align-items: center;justify-content: center;">
					<view style="width: 190rpx;height: 128rpx;display: flex;flex-direction: column;">
						<view style="font-weight: bold;color: white;font-size: 30rpx !important;margin-top: 8rpx;margin-left: 20rpx;">
							银行账号<br>查询
						</view>
					</view>
					<view style="width: 128rpx;height: 128rpx;display: flex;flex-direction: column;">
						<image src="/static/v7.png" style="width: 128rpx;height: 128rpx;" mode=""></image>
					</view>
				</view>
				<u-divider style="max-width: 750rpx;" color="#333333" margin-top="28" margin-bottom="28" half-width="200" fontSize="38" border-color="#6d6d6d">正常工资薪金所得（必填）</u-divider>
				<view @click="gopage('dbsalary')" style="margin-top: 30rpx;width: 312rpx;height: 158rpx;background: url(https://xx.db2j.com/static/b3.png);background-size: 100% 100%; display: flex;align-items: center;justify-content: center;">
					<view style="width: 190rpx;height: 128rpx;display: flex;flex-direction: column;">
						<view style="font-weight: bold;color: white;font-size: 30rpx !important;margin-top: 8rpx;margin-left: 20rpx;">
							工资薪金<br>登记
						</view>
					</view>
					<view style="width: 128rpx;height: 128rpx;display: flex;flex-direction: column;">
						<image src="/static/v4.png" style="width: 128rpx;height: 128rpx;" mode=""></image>
					</view>
				</view>
				
				<view @click="gopage('dbsalary3')" style="margin-top: 30rpx;width: 312rpx;height: 158rpx;background: url(https://xx.db2j.com/static/b4.png);background-size: 100% 100%; display: flex;align-items: center;justify-content: center;">
					<view style="width: 190rpx;height: 128rpx;display: flex;flex-direction: column;">
						<view style="font-weight: bold;color: white;font-size: 30rpx !important;margin-top: 8rpx;margin-left: 20rpx;">
							工资薪金<br>查询
						</view>
					</view>
					<view style="width: 128rpx;height: 128rpx;display: flex;flex-direction: column;">
						<image src="/static/v5.png" style="width: 128rpx;height: 128rpx;" mode=""></image>
					</view>
				</view>
				<u-divider style="max-width: 750rpx;" color="#333333" margin-top="28" margin-bottom="28" half-width="200" fontSize="38" border-color="#6d6d6d">更多个人资料（非必填）</u-divider>
				<view @click="gopage('dbmoreinfo')" style="margin-top: 30rpx;width: 312rpx;height: 158rpx;background: url(https://xx.db2j.com/static/b5.png);background-size: 100% 100%; display: flex;align-items: center;justify-content: center;">
					<view style="width: 190rpx;height: 128rpx;display: flex;flex-direction: column;">
						<view style="font-weight: bold;color: white;font-size: 30rpx !important;margin-top: 8rpx;margin-left: 20rpx;">
							个人资料<br>登记
						</view>
					</view>
					<view style="width: 128rpx;height: 128rpx;display: flex;flex-direction: column;">
						<image src="/static/v2.png" style="width: 128rpx;height: 128rpx;" mode=""></image>
					</view>
				</view>
				
				<view @click="gopage('dbmoreinfo3')" style="margin-top: 30rpx;width: 312rpx;height: 158rpx;background: url(https://xx.db2j.com/static/b6.png);background-size: 100% 100%; display: flex;align-items: center;justify-content: center;">
					<view style="width: 190rpx;height: 128rpx;display: flex;flex-direction: column;">
						<view style="font-weight: bold;color: white;font-size: 30rpx !important;margin-top: 8rpx;margin-left: 20rpx;">
							个人资料<br>查询
						</view>
					</view>
					<view style="width: 128rpx;height: 128rpx;display: flex;flex-direction: column;">
						<image src="/static/v3.png" style="width: 128rpx;height: 128rpx;" mode=""></image>
					</view>
				</view>
				
								
				<view style="width: 750rpx;height: 30rpx;">
					
				</view>
				
	
		</view>
									
			<view style="width: 750rpx;height: 200rpx;">
				
			</view>
			
		</view>
		<u-tabbar></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lblist: [],
				goodslist:[],
				doclist0:[],
				doclist1:[],
				static:''
			}
		},
		onLoad() {
			this.getuid()
		},
		onShareAppMessage: function(){
			var app = getApp()
			var pages = getCurrentPages() //获取加载的页面
			
			var currentPage = pages[pages.length-1] //获取当前页面的对象
			
			var url = currentPage.route //当前页面url
			
			var options = currentPage.options //如果要获取url中所带的参数可以查看options
			console.log(url,options)
			if(JSON.stringify(options) == "{}"){
				if(app.globalData.userinfo.daili == 1){
					return {
					  path: '/'+url+'?shareid='+app.globalData.userinfo.id
					}
				}
			}else{
				if(app.globalData.userinfo.daili == 1){
					return {
					  path: '/'+url+'&shareid='+app.globalData.userinfo.id
					}
				}
			}
		},
		onShareTimeline() {
			var app = getApp()
			var pages = getCurrentPages() //获取加载的页面
			
			var currentPage = pages[pages.length-1] //获取当前页面的对象
			
			var url = currentPage.route //当前页面url
			
			var options = currentPage.options //如果要获取url中所带的参数可以查看options
			console.log(url,options)
			if(JSON.stringify(options) == "{}"){
				if(app.globalData.userinfo.daili == 1){
					return {
					  query: 'shareid='+app.globalData.userinfo.id
					}
				}
			}else{
				if(app.globalData.userinfo.daili == 1){
					return {
					  query: 'shareid='+app.globalData.userinfo.id
					}
				}
			}
		},
		methods: {
			moregoods:function(){
				uni.navigateTo({
					url:'/pages/index/allgoods'
				})
			},
			gopage:function(page){
				uni.navigateTo({
					url:'/pages/index/'+page
				})
			},
			gopages:function(page,id){
				uni.navigateTo({
					url:'/pages/index/'+page+'?id='+id
				})
			}
		}
	}
</script>
<style>
	page{
		background: #F5F5F5;
	}
</style>
<style lang="scss" scoped>
	.vvv{
		width: 690rpx;
		display: flex;
		flex-direction: column;
		margin: auto;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #F5F5F5;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 28rpx;
		color: $u-content-color;
	}
	
	.button-demo {
		margin-top: 80rpx;
	}
	
	.link-demo {
		margin-top: 80rpx;
	}
	/deep/ view{
	font-size: 38rpx !important;
	}
</style>
