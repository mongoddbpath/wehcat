<template>
	<view class="content">
		<view style="display: flex;width: 750rpx;justify-content: center;flex-direction: column;">

			<view style="width: 750rpx;height: 30rpx;">

			</view>

			<view style="width: 750rpx;background: white;padding: 27rpx;display: flex;flex-direction: column;">
				<view style="display: flex;width: 696rpx;justify-content: center;align-items: center;margin-bottom: 24rpx;">
					<image src="/static/dx.png"
						style="width: 12rpx;height: 12rpx;border-radius: 50%;margin-right: 8rpx;" mode=""></image>
					<image src="/static/dd.png"
						style="width: 16rpx;height: 16rpx;border-radius: 50%;margin-right: 16rpx;" mode=""></image>
					<view style="font-weight: bold;font-size: 38rpx !important;color: #4d4d4d;">
						正常工资薪金所得（必填）
					</view>
					<image src="/static/dd.png"
						style="width: 16rpx;height: 16rpx;border-radius: 50%;margin-left: 16rpx;" mode=""></image>
					<image src="/static/dx.png" style="width: 12rpx;height: 12rpx;border-radius: 50%;margin-left: 8rpx;"
						mode=""></image>
				</view>
				<view style="width: 696rpx;margin:auto;height: 1rpx;background: #EFF1F6;"></view>

				<!-- 添加工程项目编号 -->
				<view style="display: flex;width: 696rpx;align-items: center;padding-top: 12rpx;padding-bottom: 12rpx;" class="ok">
					<u-field label="工程项目" input-align="right"
						:clearable="false" :fieldStyle="{border: 'none'}"></u-field>
					<song-data-picker v-model='value' style="width: 600px;" :localdata="banklist" popup-title="请选择工程项目"
						:openSearch="true" @change="onchange" @nodeclick="onnodeclick"></song-data-picker>
				</view>
				
				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="item_no" label="工程编号" :fieldStyle="{width:'490rpx'}" input-align="right"
						disabled :clearable="true">
					</u-field>
				</view>
				
				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="item_name" label="工程项目" :fieldStyle="{width:'490rpx'}"
						input-align="right" disabled :clearable="true">
					</u-field>
				</view>
				<!-- 添加工程项目编号 -->
				
				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="allmoney" label="本期收入" :fieldStyle="{width:'490rpx'}" input-align="right"
						required :clearable="false" :error-message="errormessage1">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="getmoney" label="本期免税收入" :fieldStyle="{width:'490rpx'}" input-align="right"
						required :clearable="false" :error-message="errormessage2">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="eip" label="基本养老保险费" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="mip" label="基本医疗保险费" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="pmoney" label="失业保险费" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="zfmoney" label="住房公积金" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="jzmoney" label="累计子女教育金额" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="jzmoney2" label="累计继续教育金额" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="interest" label="累计住房贷款利息" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="homemoney" label="累计住房租金" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="oldmoney" label="累计赡养老人" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="bmoney" label="企业(职业)年金" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="hmoney" label="商业健康保险" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="symoney" label="税延养老保险" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="othermonry" label="其他" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="jzemoney" label="准予扣除的捐赠额" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="jmsmoney" label="减免税额" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="note" label="备注" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false" type="textarea">
					</u-field>
				</view>

				<view class="ok"
					style="display: flex;width: 696rpx;flex-direction: column;margin: auto;display: flex;justify-content: center;">
					<view style="width: 600rpx;margin: 24rpx auto;">
						<u-button @click="submit()" type="primary" shape="circle">提交</u-button>
					</view>
				</view>


			</view>

			<view style="width: 750rpx;height: 200rpx;">

			</view>

		</view>

	</view>
</template>

<script>
	import commonjs from '@/common/common.js'
	export default {
		data() {
			return {
				item_no: '',
				item_name: '',
				allmoney: '',
				getmoney: '',
				eip: '',
				mip: '',
				pmoney: '',
				zfmoney: '',
				jzmoney: '',
				jzmoney2: '',
				interest: '',
				homemoney: '',
				oldmoney: '',
				bmoney: '',
				hmoney: '',
				symoney: '',
				othermonry: '',
				jzemoney: '',
				jmsmoney: '',
				errormessage1: '',
				errormessage2: '',
				note: '',
				//工程项目
				banklist: [{
						value: 1,
						label: ''
					}]
			}
		},
		onLoad() {
			this.getuid()
			// 获取工程编号列表
			this.$u.get('Front/Item/item_list').then(res => {
				var bank_list = []
				let that = this
				that.banklist = res.data
			})
		},
		methods: {
			//获得工程项目名
			onchange(e) {
				this.item_name = e.detail.value[e.detail.value.length-1].text
				this.item_no = e.detail.value[e.detail.value.length-1].value
			},
			onnodeclick(node) {},
			// 添加
			gopage: function(page) {
				uni.navigateTo({
					url: '/pages/index/' + page
				})
			},
			showtype() {
				this.show = true;
			},
			showtype2() {
				this.show2 = true;
			},
			clickItem(index) {
				this.work_type = this.tlist[index].text;
			},
			clickItem2(index) {
				this.job_type = this.joblist[index].text;
			},
			gopages(page,id){
				uni.navigateTo({
					url:'/pages/index/'+page+'?id='+id
				})
			},
			submit() {
				let that = this
				var infodata = {
					item_no: this.item_no,
					item_name: this.item_name,
					allmoney: this.allmoney, //本期收入
					getmoney: this.getmoney, //本期免税收入
					eip: this.eip, //基本养老保险费
					mip: this.mip, //基本医疗保险费
					pmoney: this.pmoney, //失业保险费
					zfmoney: this.zfmoney, //住房公积金
					jzmoney: this.jzmoney, //累计子女教育
					jzmoney2: this.jzmoney2, //累计继续教育
					interest: this.interest, //累计住房贷款利息
					homemoney: this.homemoney, //累计住房租金
					oldmoney: this.oldmoney, //累计赡养老人
					bmoney: this.bmoney, //企业(职业)年金
					hmoney: this.hmoney, //商业健康保险
					symoney: this.symoney, //税延养老保险
					othermonry: this.othermonry, //其他
					jzemoney: this.jzemoney, //准予扣除的捐赠额
					jmsmoney: this.jmsmoney, //减免税额
					note: this.note, //备注
					uid: this.$store.state.userInfo.uid
				}
				if (commonjs.if_obj_hasnot_arr(infodata)) {
					this.errormessage1 = '该选项为必填且填写数字'
					this.errormessage2 = '该选项为必填且填写数字'
					uni.showToast({
						title: '请检查必填项',
						icon: 'none',
						duration: 3000
					})
				} else {
					this.$u.post('Front/front/addsalary', infodata).then(res => {
						if (parseInt(res.status) == 1) {
							uni.showToast({
								title: '添加成功',
								icon: 'success',
								duration: 3000
							})
						} else if(parseInt(res.status) == 3){
							let gopagesid = res.data
							console.log('id:' + res.data)
							uni.showModal({
								title: '你已经重复添加该项目',
								content: '请问是否前往该项目的详情页?',
								success: function (res) {
									if (res.confirm) {
										that.gopages('dbsalary2',gopagesid)
									} else if (res.cancel) {
									}
								}
							})
						}
						else {
							uni.showToast({
								title: '提交失败',
								icon: 'none',
								duration: 3000
							})
						}
					})
				}


			}
		}
	}
</script>
<style>
	page {
		background: #F5F5F5;
	}
</style>
<style lang="scss" scoped>
	.ok{
	border-top: 0.5rpx solid #f2f2f2;
	}
	.vvv {
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
