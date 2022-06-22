<template>
	<view class="content">
		
			<view v-if="hasarr" class="vvv" style="background: white;margin-top: 28rpx;">
				<view  v-for="(u,index) in otherinfo_list" 
				style="width: 690rpx;margin: auto;padding: 30rpx;display: flex;justify-content: space-between;border-bottom: 1rpx solid #f3f3f3;">
					<view style="width: 100%;display: flex;flex-direction: column;justify-content: space-between;">
						<view style="display: flex;width: 100%;justify-content: space-between;align-items: flex-end;">
							<view style="font-size: 28rpx;color: #606266;" class="u-line-1">
								工程编号: {{u.item_no}} {{u.create_time}}
							</view>
							<u-button style="float: right;"
							size="mini" @click="gopages('dbmoreinfo2',u.id)" type="success" shape="circle">查看</u-button>
						</view>
					</view>	
				</view>
			</view>
			<view v-if="!hasarr" style="margin-top: 38rpx;">数据为空</view>
					
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:'',
				static:'',
				otherinfo_list: '',
				hasarr: true
			}
		},
		onShow() {
			this.getuid()
			var that = this
			let infodata = {
				uid: this.$store.state.userInfo.uid
			}
			this.$u.post('Front/front/otherinfo_list',infodata).then(res=>{
				if(res === null){that.hasarr = false}
				console.dir(res, {depth:null})
				this.otherinfo_list = res
			})
		},
		methods: {
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
</style>
