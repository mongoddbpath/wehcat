<template>
	<view class="content">
		<view style="display: flex;width: 750rpx;justify-content: center;flex-direction: column;">

			<view style="width: 750rpx;height: 30rpx;">

			</view>

			<view style="width: 750rpx;background: white;padding: 27rpx;display: flex;flex-direction: column;">
				<view
					style="display: flex;width: 696rpx;justify-content: center;align-items: center;margin-bottom: 24rpx;">
					<image src="/static/dx.png"
						style="width: 12rpx;height: 12rpx;border-radius: 50%;margin-right: 8rpx;" mode=""></image>
					<image src="/static/dd.png"
						style="width: 16rpx;height: 16rpx;border-radius: 50%;margin-right: 16rpx;" mode=""></image>
					<view style="font-weight: bold;font-size: 38rpx !important;color: #4d4d4d;">
						银行账号信息(可编辑)
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
					<song-data-picker v-model='value' style="width: 600px;" :localdata="banklist2" popup-title="请选择银行"
						:openSearch="true" @change="onchange2" @nodeclick="onnodeclick2"></song-data-picker>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field disabled :clearable="true" required v-model="item_no" label="工程编号" :fieldStyle="{width:'490rpx'}"
						input-align="right">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field disabled :clearable="true" required v-model="item_name" label="工程项目" :fieldStyle="{width:'490rpx'}"
						input-align="right">
					</u-field>
				</view>
				<!-- 添加工程项目编号 -->

				<view style="display: flex;width: 696rpx;align-items: center;padding-top: 12rpx;padding-bottom: 12rpx;" class="ok">
					<u-field label="开户银行" input-align="right"
						:clearable="false" :fieldStyle="{border: 'none'}"></u-field>
					<!-- <u-button size="mini" @click="banklist1 = true">请选择银行</u-button> -->
					<pickersearch v-model='value' style="width: 600px;" :localdata="banklist" popup-title="请选择银行"
						:openSearch="true" @change="onchange" @nodeclick="onnodeclick"></pickersearch>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="bank" label="开户银行" disabled :fieldStyle="{width:'490rpx'}" input-align="right"
						required :clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;flex-direction: column;margin: auto;" class="ok">
					<view style="margin: 16rpx;">
						<view style="color:red;">*(单张图片最大上传为5M)</view>
						<view>银行卡照片上传</view>
					</view>
					<view style="display: flex;align-items: center;">
						<u-upload :max-size="5 * 1024 * 1024" max-count="3" :action="action" :file-list="fileList"
							@on-remove="onRemove" ref="imgsUpload"></u-upload>
					</view>
					<!-- <u-upload :auto-upload="false" :file-list="fileList" ></u-upload> -->
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="bankcard" label="银行卡号" :fieldStyle="{width:'490rpx'}" input-align="right" required
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="area" label="开户行省份" disabled :fieldStyle="{width:'290rpx'}" input-align="right"
						required :clearable="false">
					</u-field>
					<u-select v-model="countrylist1" mode="single-column" :list="countrylist" @confirm="countryconfirm">
					</u-select>
					<u-button size="mini" @click="countrylist1 = true">请选择</u-button>
				</view>

				<view class="ok"
					style="display: flex;width: 696rpx;flex-direction: column;margin: auto;display: flex;justify-content: center;">
					<view style="width: 600rpx;margin: 24rpx auto;">
						<u-button @click="submit()" type="success" shape="circle">编辑</u-button>
					</view>
				</view>


			</view>

			<view style="width: 750rpx;height: 200rpx;">

			</view>

		</view>

	</view>
</template>

<script>
	import pickersearch from '@/components/song-data-picker/song-data-picker.vue'
	import commonjs from '@/common/common.js'
	export default {
		components: {
			pickersearch
		},
		data() {
			return {
				item_no: '',
				item_name: '',
				id: '',
				value: '',
				items: [{
						text: "一银行",
						value: "1-0",
						bank: '',
						children: [{
								text: "1.1银行",
								value: "1-1"
							},
							{
								text: "1.2银行",
								value: "1-2"
							}
						]
					},
					{
						text: "二银行",
						value: "2-0"
					},
					{
						text: "三银行",
						value: "3-0"
					}
				],
				bankcard: '',
				bank: '',
				area: '',
				banklist: [{
						value: 1,
						label: '北京银行'
					},
					{
						value: 2,
						label: '广州银行'
					}
				],
				countrylist: [{
						value: 1,
						label: "北京市",
						"ProSort": 1,
						"ProRemark": "直辖市"
					},
					{
						value: 2,
						label: "天津市",
						"ProSort": 2,
						"ProRemark": "直辖市"
					},
					{
						value: 3,
						label: "河北省",
						"ProSort": 5,
						"ProRemark": "省份"
					},
					{
						value: 4,
						label: "山西省",
						"ProSort": 6,
						"ProRemark": "省份"
					},
					{
						value: 5,
						label: "内蒙古自治区",
						"ProSort": 32,
						"ProRemark": "自治区"
					},
					{
						value: 6,
						label: "辽宁省",
						"ProSort": 8,
						"ProRemark": "省份"
					},
					{
						value: 7,
						label: "吉林省",
						"ProSort": 9,
						"ProRemark": "省份"
					},
					{
						value: 8,
						label: "黑龙江省",
						"ProSort": 10,
						"ProRemark": "省份"
					},
					{
						value: 9,
						label: "上海市",
						"ProSort": 3,
						"ProRemark": "直辖市"
					},
					{
						value: 10,
						label: "江苏省",
						"ProSort": 11,
						"ProRemark": "省份"
					},
					{
						value: 11,
						label: "浙江省",
						"ProSort": 12,
						"ProRemark": "省份"
					},
					{
						value: 12,
						label: "安徽省",
						"ProSort": 13,
						"ProRemark": "省份"
					},
					{
						value: 13,
						label: "福建省",
						"ProSort": 14,
						"ProRemark": "省份"
					},
					{
						value: 14,
						label: "江西省",
						"ProSort": 15,
						"ProRemark": "省份"
					},
					{
						value: 15,
						label: "山东省",
						"ProSort": 16,
						"ProRemark": "省份"
					},
					{
						value: 16,
						label: "河南省",
						"ProSort": 17,
						"ProRemark": "省份"
					},
					{
						value: 17,
						label: "湖北省",
						"ProSort": 18,
						"ProRemark": "省份"
					},
					{
						value: 18,
						label: "湖南省",
						"ProSort": 19,
						"ProRemark": "省份"
					},
					{
						value: 19,
						label: "广东省",
						"ProSort": 20,
						"ProRemark": "省份"
					},
					{
						value: 20,
						label: "海南省",
						"ProSort": 24,
						"ProRemark": "省份"
					},
					{
						value: 21,
						label: "广西壮族自治区",
						"ProSort": 28,
						"ProRemark": "自治区"
					},
					{
						value: 22,
						label: "甘肃省",
						"ProSort": 21,
						"ProRemark": "省份"
					},
					{
						value: 23,
						label: "陕西省",
						"ProSort": 27,
						"ProRemark": "省份"
					},
					{
						value: 24,
						label: "新疆维吾尔自治区",
						"ProSort": 31,
						"ProRemark": "自治区"
					},
					{
						value: 25,
						label: "青海省",
						"ProSort": 26,
						"ProRemark": "省份"
					},
					{
						value: 26,
						label: "宁夏回族自治区",
						"ProSort": 30,
						"ProRemark": "自治区"
					},
					{
						value: 27,
						label: "重庆市",
						"ProSort": 4,
						"ProRemark": "直辖市"
					},
					{
						value: 28,
						label: "四川省",
						"ProSort": 22,
						"ProRemark": "省份"
					},
					{
						value: 29,
						label: "贵州省",
						"ProSort": 23,
						"ProRemark": "省份"
					},
					{
						value: 30,
						label: "云南省",
						"ProSort": 25,
						"ProRemark": "省份"
					},
					{
						value: 31,
						label: "西藏自治区",
						"ProSort": 29,
						"ProRemark": "自治区"
					},
					{
						value: 32,
						label: "台湾省",
						"ProSort": 7,
						"ProRemark": "省份"
					},
					{
						value: 33,
						label: "澳门特别行政区",
						"ProSort": 33,
						"ProRemark": "特别行政区"
					},
					{
						value: 34,
						label: "香港特别行政区",
						"ProSort": 34,
						"ProRemark": "特别行政区"
					}
				],
				type: '',
				utel: '',
				files: [],
				action: '',
				mode: 'date',
				show: false,
				show2: false,
				show3: false,
				show5: false,
				countrylist1: false,
				banklist1: false,
				itemlist1: false,
				upsum: 0,
				region: [],
				defaultRegion: ['广东省', '广州市', '番禺区'],
				defaultRegionCode: '440113',
				// 后台演示上传地址
				action: getApp().globalData.api + '/Front/Upload/upload',
				fileList: [],
				//工程项目
				banklist2: [{
					value: 1,
					label: ''
				}],
				//update检查是否重复
				item_no2: '',
				uid: ''
			}
		},
		computed: {},
		onLoad(o) {
			this.getuid()
			var id = o.id
			let that = this
			this.id = o.id
			this.$u.post('Front/front/getbankinfo', {
				id: id
			}).then(res => {
				console.dir(res, {
					depth: null
				})
				var getdata = res[0]
				// 检查是否重复
				this.item_no2 = getdata.item_no,
					this.uid = getdata.uid,
					this.item_no = getdata.item_no,
					this.item_name = getdata.item_name,
					this.bank = getdata.bank,
					this.bankcard = getdata.bankcard,
					this.area = getdata.area,
					this.fileList = this.imgsurl(getdata.imgsurl)
			})
			// 获取工程编号列表
			this.$u.get('Front/Item/item_list').then(res => {
				var bank_list = []
				let that = this
				that.banklist2 = res.data
			})
			// 获取银行卡信息
			this.$u.get('Front/front/bank_list').then(res => {
				var bank_list = []
				let that = this
				for (var a = 0; a < res.length; a++) {
					bank_list.push({
						value: a,
						text: res[a].attr_name
					})
				}
				that.banklist = bank_list
			})
		},
		methods: {
			//获得工程项目名
			onchange2(e) {
				this.item_name = e.detail.value[e.detail.value.length - 1].text
				this.item_no = e.detail.value[e.detail.value.length - 1].value
			},
			onnodeclick2(node) {},
			// 移除图片提示
			onRemove(index, lists) {
				console.log('图片已被移除')
			},
			// 上传现场证明图片
			getimgsurl() {
				let imgs = []
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				imgs = this.$refs.imgsUpload.lists.filter(val => {
					return val.progress == 100
				})
				let imgsupload = ''
				console.dir(imgs, {
					depth: null
				})
				for (var a = 0; a < imgs.length; a++) {
					if ('response' in imgs[a]) {
						imgsupload = getApp().globalData.imgapi + imgs[a].response.data + '-' + imgsupload
					} else {
						imgsupload = imgs[a].url + '-' + imgsupload
					}
				}
				console.dir(imgsupload, {
					depth: null
				})
				return imgsupload
			},
			imgsurl(imgs) {
				let imgsurlarr = imgs.split('-')
				imgsurlarr.splice(imgsurlarr.length - 1, 1)
				let getimgs = []
				for (var i = 0; i < imgsurlarr.length; i++) {
					imgsurlarr[i] = {
						url: `${getApp().globalData.imgapi}${imgsurlarr[i]}`
					}
				}
				return imgsurlarr
			},
			//获得银行名
			onchange(e) {
				this.bank = e.detail.value[0].text
				const value = '请选择银行'
			},
			onnodeclick(node) {},
			// 获取选择的地区
			handleGetRegion(region) {
				this.region = region;
				// console.log(region);
			},
			// 获取开户行省份
			countryconfirm(e) {
				// console.log('国籍' + e[0].label);
				this.area = e[0].label;
			},
			bankconfirm(e) {
				// console.log('国籍' + e[0].label);
				this.bank = e[0].label;
			},
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
			gopages(page, id) {
				uni.navigateTo({
					url: '/pages/index/' + page + '?id=' + id
				})
			},
			submit() {
				let that = this
				var infodata = {
					item_no: this.item_no,
					item_name: this.item_name,
					bank: this.bank, //开户银行
					bankcard: this.bankcard, //银行卡账号
					area: this.area, //开户行省份
					id: this.id,
					uid: this.uid,
					imgsurl: this.$getimgurl(this.getimgsurl())
				}
				if (commonjs.if_obj_is_null(infodata)) {
					uni.showToast({
						title: '请填写全信息或者检查图片是否已经上传',
						icon: 'none',
						duration: 3000
					})
				} else {
					if (that.item_no2 != infodata.item_no) {
						// 检查是否存在重复
						this.$u.post('Front/front/updatebank2', infodata).then(res => {
							console.dir(res, {
								depth: null
							})
							if (parseInt(res.status) == 3) {
								let gopagesid = res.data
								console.log('id:' + res.data)
								uni.showModal({
									title: '你已经重复添加该项目',
									content: '请问是否前往该项目的详情页?',
									success: function(res) {
										if (res.confirm) {
											that.gopages('dbbank2', gopagesid)
										} else if (res.cancel) {}
									}
								})
							} else {
								this.$u.post('Front/front/updatebank', infodata).then(res => {
									console.dir(res, {
										depth: null
									})
									if (parseInt(res.status) == 1) {
										uni.showToast({
											title: '编辑成功',
											icon: 'success',
											duration: 3000
										})
									} else {
										uni.showToast({
											title: '编辑失败',
											icon: 'none',
											duration: 3000
										})
									}
								})
							}
						})
					} else {
						this.$u.post('Front/front/updatebank', infodata).then(res => {
							console.dir(res, {
								depth: null
							})
							if (parseInt(res.status) == 1) {
								uni.showToast({
									title: '编辑成功',
									icon: 'success',
									duration: 3000
								})
							} else {
								uni.showToast({
									title: '编辑失败',
									icon: 'none',
									duration: 3000
								})
							}
						})
					}

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
