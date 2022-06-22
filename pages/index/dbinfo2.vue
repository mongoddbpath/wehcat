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
						个人基本信息(可编辑)
					</view>
					<image src="/static/dd.png"
						style="width: 16rpx;height: 16rpx;border-radius: 50%;margin-left: 16rpx;" mode=""></image>
					<image src="/static/dx.png" style="width: 12rpx;height: 12rpx;border-radius: 50%;margin-left: 8rpx;"
						mode=""></image>
				</view>
				<view style="width: 696rpx;margin:auto;height: 1rpx;background: #EFF1F6;"></view>

				<view style="display: flex;width: 696rpx;align-items: center;padding-top: 12rpx;padding-bottom: 12rpx;" class="ok">
					<u-field label="工程项目" input-align="right"
						:clearable="false" :fieldStyle="{border: 'none'}"></u-field>
					<song-data-picker v-model='value' style="width: 600px;" :localdata="banklist" popup-title="请选择工程项目"
						:openSearch="true" @change="onchange" @nodeclick="onnodeclick"></song-data-picker>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field :disabled="true" required v-model="item_no" label="工程编号" :fieldStyle="{width:'490rpx'}"
						input-align="right" disabled :clearable="true">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field :disabled="true" required v-model="item_name" label="工程项目" :fieldStyle="{width:'490rpx'}"
						input-align="right" disabled :clearable="true">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="job_no" label="工号" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="true">
					</u-field>
				</view>

				<!-- <view style="color:red;font-size: 28rpx !important;">
					(证件类型为外国护照、外国人永久居留身份证（外国人永久居留证）时，录入证件上的英文姓名，其他证件录入中文姓名)</view> -->
				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="username" label="姓名" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="true">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="idstype" label="证件类型" :fieldStyle="{width:'339rpx'}" input-align="right"
						disabled :clearable="true">
					</u-field>
					<u-select v-model="countrylist2" mode="single-column" :list="countrylist8"
						@confirm="countryconfirm2"></u-select>
					<u-button size="mini" @click="countrylist2 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;flex-direction: column;margin: auto;" class="ok">
					<view style="margin: 16rpx;">
						<view style="color:red;">*(单张图片最大上传为5M)</view>
						<view>证件上传</view>
					</view>
					<view style="display: flex;align-items: center;">
						<u-upload :max-size="5 * 1024 * 1024" max-count="3" :action="action" :file-list="zjfileList"
							@on-remove="zjonRemove" ref="zjimgsUpload"></u-upload>
						<!-- <u-button @click="getimgsurl">提交</u-button> -->
					</view>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="idsnum" label="证件号码" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="true">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="phone" label="手机号" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="true">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="country" label="国籍" :fieldStyle="{width:'339rpx'}" input-align="right"
						disabled :clearable="true">
					</u-field>
					<u-select v-model="countrylist1" mode="single-column" :list="countrylist" @confirm="countryconfirm">
					</u-select>
					<u-button size="mini" @click="countrylist1 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="sex6" label="性别" disabled :fieldStyle="{width:'258rpx',border: 'none'}"
						input-align="right" :clearable="true">
					</u-field>
					<u-radio-group @change="radioGroupChange" v-model="sex">
						<u-radio @change="radioChange" v-for="(item, index) in sexlist" :key="index" :name="item.name"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="birthday" min-date="1900-01-01" label="出生日期" disabled :fieldStyle="{width:'339rpx'}"
						input-align="right" :clearable="true">
					</u-field>
					<u-calendar v-model="show3" :mode="mode" @change="change"></u-calendar>
					<u-button size="mini" @click="show3 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="status6" label="人员状态" disabled :fieldStyle="{width:'172rpx',border: 'none'}"
						input-align="right" :clearable="true">
					</u-field>
					<u-radio-group @change="radioGroupChange2" v-model="status">
						<u-radio @change="radioChange2" v-for="(item, index) in statuslist" :key="index"
							:name="item.name" :disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="job_type" label="入职年度就业情形" :fieldStyle="{width:'339rpx'}" input-align="right"
						disabled :clearable="true">
					</u-field>
					<u-select v-model="countrylist6" mode="single-column" :list="countrylist86"
						@confirm="countryconfirm6"></u-select>
					<u-button size="mini" @click="countrylist6 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field required v-model="work_date" label="任职受雇从业日期" :fieldStyle="{width:'339rpx'}"
						input-align="right" disabled :clearable="true">
					</u-field>
					<u-calendar v-model="show5" :mode="mode" @change="change2"></u-calendar>
					<u-button size="mini" @click="show5 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="note" label="备注" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="true" type="textarea">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;flex-direction: column;margin: auto;" class="ok">
					<view style="margin: 16rpx;">
						<view style="color:red;">*(单张图片最大上传为5M)</view>
						<view>在场证明照片上传</view>
					</view>
					<view style="display: flex;align-items: center;">
						<u-upload :max-size="5 * 1024 * 1024" max-count="3" :action="action" :file-list="fileList"
							@on-remove="onRemove" ref="imgsUpload"></u-upload>
					</view>
					<!-- <u-upload :auto-upload="false" :file-list="fileList" ></u-upload> -->
				</view>

				<view
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
	import commonjs from '@/common/common.js'
	export default {
		data() {
			return {
				item_no: '',
				item_name: '',
				job_no: '',
				username: '',
				sex: '男',
				sex6: '',
				idsnum: '',
				note: '',
				phone: '',
				country: '',
				job_type: '',
				work_type: '雇员',
				birthday: '',
				work_date: '',
				idstype: '居民身份证',
				status: '正常',
				status6: '',
				present: '',
				countrylist: [{
						value: '1',
						label: '中国'
					},
					{
						value: '2',
						label: '日本'
					}
				],
				countrylist8: [{
						value: '1',
						label: '居民身份证'
					},
					{
						value: '2',
						label: '中国护照'
					},
					{
						value: '1',
						label: '港澳居民来往内地通行证'
					},
					{
						value: '1',
						label: '中华人民共和国港澳居民居住证'
					},
					{
						value: '1',
						label: '台湾居民来往大陆通行证'
					},
					{
						value: '1',
						label: '中华人民共和国台湾居民居住证'
					},
					{
						value: '1',
						label: '外国人永久居留身份证'
					},
					{
						value: '1',
						label: '中华人民共和国外国人工作许可证（A类）'
					},
					{
						value: '1',
						label: '中华人民共和国外国人工作许可证（B类）'
					},
					{
						value: '1',
						label: '中华人民共和国外国人工作许可证（C类）'
					}
				],
				itemlist: [{
						value: '1',
						label: '广州项目一'
					},
					{
						value: '2',
						label: '广州项目二'
					}
				],
				sexlist: [{
						name: '男',
						disabled: false
					},
					{
						name: '女',
						disabled: false
					}
				],
				statuslist: [{
						name: '正常',
						disabled: false
					},
					{
						name: '非正常',
						disabled: false
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
				countrylist2: false,
				itemlist1: false,
				upsum: 0,
				tlist: [{
						text: '雇员',
						value: 0
					},
					{
						text: '保险营销员',
						value: 1
					},
					{
						text: '证券经纪人',
						value: 2
					}
				],
				// 添加入职年度就业类型
				countrylist6:false,
				countrylist86: [{
						value: '1',
						label: '当年首次入职学生'
					},
					{
						value: '2',
						label: '当年首次入职其他人员'
					}
				],
				joblist: [{
						text: '当年首次入职学生',
						value: 0
					},
					{
						text: '当年首次入职其他人员',
						value: 1
					}
				],
				listn: [],
				list: [],
				//工程项目
				banklist: [{
					value: 1,
					label: ''
				}],
				// 后台演示上传地址
				action: getApp().globalData.api + '/Front/Upload/upload',
				fileList: [],
				zjfileList: [],
				//update检查是否重复
				item_no2: '',
				uid: ''

			}
		},
		onLoad(o) {
			this.getuid()
			var id = o.id
			let that = this
			this.id = o.id
			this.$u.post('Front/front/getuserinfo', {
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
					this.job_no = getdata.job_no,
					this.username = getdata.username,
					this.idstype = getdata.idstype,
					this.idsnum = getdata.idsnum,
					this.phone = getdata.phone,
					this.country = getdata.country,
					this.sex = getdata.sex,
					this.birthday = getdata.birthday,
					this.status = getdata.status,
					this.work_type = getdata.work_type,
					this.job_type = getdata.job_type,
					this.work_date = getdata.work_date,
					this.note = getdata.note,
					this.fileList = this.imgsurl(getdata.imgsurl),
					this.zjfileList = this.imgsurl(getdata.zjimgsurl)
				console.dir(this.imgsurl(getdata.imgsurl), {
					depth: null
				})
			})
			this.$u.get('Front/Item/item_list').then(res => {
				var bank_list = []
				let that = this
				that.banklist = res.data
			})
			this.$u.post('Front/Country/get_country').then(res => {
				this.countrylist = res.data
			})
		},
		methods: {
			//获得工程项目名
			onchange(e) {
				this.item_name = e.detail.value[e.detail.value.length - 1].text
				this.item_no = e.detail.value[e.detail.value.length - 1].value
			},
			onnodeclick(node) {},
			// 移除图片提示
			onRemove(index, lists) {
				console.log('图片已被移除')
				console.dir(index, {
					depth: null
				})
				console.dir(lists, {
					depth: null
				})
			},
			zjRemove(index, lists) {
				console.log('图片已被移除')
			},
			// 上传证件图片
			getzjimgsurl() {
				let zjimgs = []
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				zjimgs = this.$refs.zjimgsUpload.lists.filter(val => {
					return val.progress == 100
				})
				let zjimgsupload = ''
				console.dir(zjimgs, {
					depth: null
				})
				for (var a = 0; a < zjimgs.length; a++) {
					if ('response' in zjimgs[a]) {
						zjimgsupload = getApp().globalData.imgapi + zjimgs[a].response.data + '-' + zjimgsupload
					} else {
						zjimgsupload = zjimgs[a].url + '-' + zjimgsupload
					}
				}
				console.dir(zjimgsupload, {
					depth: null
				})
				return zjimgsupload
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
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				// console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				this.sex = e;
			},
			// 人员的状态
			// 选中某个单选框时，由radio时触发
			radioChange2(e) {
				// console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange2(e) {
				this.status = e;
			},
			//获取出生日期
			change(e) {
				// console.log('时间：' + e.result);
				this.birthday = e.result;
			},
			//任职受雇从业日期
			change2(e) {
				// console.log('时间：' + e.result);
				this.work_date = e.result;
			},
			countryconfirm(e) {
				// console.log('国籍' + e[0].label);
				this.country = e[0].label;
			},
			countryconfirm2(e) {
				// console.log('国籍' + e[0].label);
				this.idstype = e[0].label;
			},
			countryconfirm6(e) {
				// console.log('国籍' + e[0].label);
				this.job_type = e[0].label;
			},
			// 获取项目名称
			itemconfirm(e) {
				// console.log('国籍' + e[0].label);
				this.item_name = e[0].label;
			},

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
			// 判断对象属性时候为空
			submit() {
				let that = this
				var infodata = {
					item_no: this.item_no, //工程编号
					item_name: this.item_name, //工程项目
					job_no: this.job_no, //工号
					username: this.username, //姓名
					idstype: this.idstype, //证件类型
					idsnum: this.idsnum, //证件号码
					phone: this.phone, //手机号码
					country: this.country, //国籍
					sex: this.sex, //性别
					birthday: this.birthday, //出生日期
					status: this.status, //人员状态
					work_type: this.work_type, //任职受雇从业类型
					job_type: this.job_type, //入职年度就业情形
					work_date: this.work_date, //任职受雇从业日期
					id: this.id,
					uid: this.uid,
					imgsurl: this.$getimgurl(this.getimgsurl()), //在场证明图片
					zjimgsurl: this.$getimgurl(this.getzjimgsurl()) //证件图片
				}
				console.dir(infodata.imgsurl, {
					depth: null
				})
				if (commonjs.if_obj_is_null(infodata)) {
					uni.showToast({
						title: '请填写除备注外全信息',
						icon: 'none',
						duration: 3000
					})
				} else if (commonjs.isnotphone(infodata.phone)) {
					uni.showToast({
						title: '手机号不正确',
						icon: 'none',
						duration: 3000
					})
				} else if (that.item_no2 != infodata.item_no) {
					// 检查是否存在重复
					this.$u.post('Front/front/updateuserinfo2', infodata).then(res => {
						if (parseInt(res.status) == 3) {
							let gopagesid = res.data
							console.log('id:' + res.data)
							uni.showModal({
								title: '你已经重复添加该项目',
								content: '请问是否前往该项目的详情页?',
								success: function(res) {
									if (res.confirm) {
										that.gopages('dbinfo2', gopagesid)
									} else if (res.cancel) {}
								}
							})
						} else {
							infodata.note = that.note
							this.$u.post('Front/front/updateuserinfo', infodata).then(res => {
								if (res.status) {
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
					infodata.note = that.note
					this.$u.post('Front/front/updateuserinfo', infodata).then(res => {
						if (res.status) {
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
