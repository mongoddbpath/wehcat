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
						更多个人资料（可编辑）
					</view>
					<image src="/static/dd.png"
						style="width: 16rpx;height: 16rpx;border-radius: 50%;margin-left: 16rpx;" mode=""></image>
					<image src="/static/dx.png" style="width: 12rpx;height: 12rpx;border-radius: 50%;margin-left: 8rpx;"
						mode=""></image>
				</view>
				<view style="width: 696rpx;margin:auto;height: 1rpx;background: #EFF1F6;"></view>

				<!-- 添加工程项目编号 -->
				<view style="display: flex;width: 696rpx;align-items: center;padding-top: 12rpx;padding-bottom: 12rpx;"
					class="ok">
					<u-field label="工程项目" input-align="right" :clearable="false" :fieldStyle="{border: 'none'}">
					</u-field>
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
				<!-- 添加工程项目编号 -->

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="freedate" label="离职日期" :fieldStyle="{width:'339rpx'}" input-align="right" disabled
						:clearable="false">
					</u-field>
					<u-calendar v-model="show3" :mode="mode" @change="change" max-date="2177-01-01"
						min-date="1900-01-01"></u-calendar>
					<u-button size="mini" @click="show3 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="is_disabled2" label="是否残疾" :fieldStyle="{width:'268rpx',border: 'none'}"
						input-align="right" disabled :clearable="false">
					</u-field>
					<u-radio-group @change="radioGroupChange" v-model="is_disabled">
						<u-radio @change="radioChange" v-for="(item, index) in sexlist" :key="index" :name="item.name"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="is_ls2" label="是否烈属" :fieldStyle="{width:'268rpx',border: 'none'}"
						input-align="right" disabled :clearable="false">
					</u-field>
					<u-radio-group @change="radioGroupChange2" v-model="is_ls">
						<u-radio @change="radioChange2" v-for="(item, index) in sexlist2" :key="index" :name="item.name"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="is_alone2" label="是否孤老" :fieldStyle="{width:'268rpx',border: 'none'}"
						input-align="right" disabled :clearable="false">
					</u-field>
					<u-radio-group @change="radioGroupChange3" v-model="is_alone">
						<u-radio @change="radioChange3" v-for="(item, index) in sexlist3" :key="index" :name="item.name"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="disablednum" label="残疾证号" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>
				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="lsnum" label="烈属证号" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="is_deduct2" label="是否扣除减除费用" :fieldStyle="{width:'268rpx',border: 'none'}"
						input-align="right" disabled :clearable="false">
					</u-field>
					<u-radio-group @change="radioGroupChange5" v-model="is_deduct">
						<u-radio @change="radioChange5" v-for="(item, index) in sexlist5" :key="index" :name="item.name"
							:disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="investment" label="个人投资额" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="proportion" label="个人投资比例(%) " :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="cname" label="中文名" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="other_type" label="其他证件类型" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="other_type_name" label="其他证件号码" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="email" label="电子邮箱" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="education" label="学历" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="country2" label="出生国家(地区)" :fieldStyle="{width:'339rpx'}" input-align="right"
						disabled :clearable="false">
					</u-field>
					<u-select v-model="cc2" mode="single-column" :list="countrylist2" @confirm="countryconfirm2">
					</u-select>
					<u-button size="mini" @click="cc2 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="job_type" label="职务" :fieldStyle="{width:'339rpx'}" input-align="right" disabled
						:clearable="false">
					</u-field>
					<u-select v-model="cc3" mode="single-column" :list="countrylist3" @confirm="countryconfirm3">
					</u-select>
					<u-button size="mini" @click="cc3 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="entrydate" label="首次入境时间" :fieldStyle="{width:'339rpx'}" input-align="right"
						disabled :clearable="false">
					</u-field>
					<u-calendar v-model="show5" :mode="mode" @change="change2" max-date="2177-01-01"
						min-date="1900-01-01"></u-calendar>
					<u-button size="mini" @click="show5 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="leavedate" label="预计离境时间" :fieldStyle="{width:'339rpx'}" input-align="right"
						disabled :clearable="false">
					</u-field>
					<u-calendar v-model="show6" :mode="mode" @change="change3" max-date="2177-01-01"
						min-date="1900-01-01"></u-calendar>
					<u-button size="mini" @click="show6 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="hjaddressa" label="户籍地" :fieldStyle="{width:'338rpx'}" input-align="right"
						disabled :clearable="false">
					</u-field>
					<u-picker mode="region" @confirm="confirmarea1" v-model="showarea1"
						:default-region='["广东省", "广州市", "番禺区"]'></u-picker>
					<u-button size="mini" @click="showarea1 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="hjaddress" label="详细户籍地" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="czaddressa" label="常住地" :fieldStyle="{width:'338rpx'}" input-align="right"
						disabled :clearable="false">
					</u-field>
					<u-picker mode="region" @confirm="confirmarea2" v-model="showarea2"
						:default-region='["广东省", "广州市", "番禺区"]'></u-picker>
					<u-button size="mini" @click="showarea2 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="czaddress" label="详细常住地" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="lxaddressa" label="联系地" :fieldStyle="{width:'338rpx'}" input-align="right"
						disabled :clearable="false">
					</u-field>
					<u-picker mode="region" @confirm="confirmarea3" v-model="showarea3"
						:default-region='["广东省", "广州市", "番禺区"]'></u-picker>
					<u-button size="mini" @click="showarea3 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="lxaddress" label="详细联系地" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false">
					</u-field>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="matter" label="涉税事由" :fieldStyle="{width:'338rpx'}" input-align="right" disabled
						:clearable="false">
					</u-field>
					<u-select v-model="countrylist1" mode="single-column" :list="countrylist" @confirm="countryconfirm">
					</u-select>
					<u-button size="mini" @click="countrylist1 = true">请选择</u-button>
				</view>

				<view style="display: flex;width: 696rpx;align-items: center;" class="ok">
					<u-field v-model="note" label="备注" :fieldStyle="{width:'490rpx'}" input-align="right"
						:clearable="false" type="textarea">
					</u-field>
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
	import commonjs from '@/common/common.js'
	export default {
		data() {
			return {
				item_no: '',
				item_name: '',
				freedate: '',
				is_disabled: '否',
				is_ls: '否',
				is_alone: '否',
				is_disabled2: '',
				is_ls2: '',
				is_alone2: '',
				disablednum: '',
				lsnum: '',
				is_deduct: '否',
				is_deduct2: '',
				investment: '',
				proportion: '',
				cname: '',
				matter: '',
				country2: '',
				entrydate: '',
				leavedate: '',
				item_no: '',
				item_name: '',
				job_no: '',
				sex: '',
				idsnum: '',
				note: '',
				phone: '',
				country: '',
				job_type: '',
				work_type: '',
				work_date: '',
				status: '正常',
				other_type: '',
				other_type_name: '',
				email: '',
				education: '',
				job_type: '',
				countrylist: [{
						value: '0',
						label: '任职受雇'
					},
					{
						value: '1',
						label: '提供临时劳务'
					},
					{
						value: '2',
						label: '转让财产'
					},
					{
						value: '3',
						label: '从事投资和经营活动'
					},
					{
						value: '4',
						label: '其他'
					},

				],
				countrylist2: [{
						value: '0',
						label: '中国'
					},
					{
						value: '1',
						label: '日本'
					},
					{
						value: '2',
						label: '美国'
					}
				],
				countrylist3: [{
						value: '0',
						label: '高层'
					},
					{
						value: '1',
						label: '普通'
					}
				],
				sexlist: [{
						name: '是',
						disabled: false
					},
					{
						name: '否',
						disabled: false
					}
				],
				sexlist2: [{
						name: '是',
						disabled: false
					},
					{
						name: '否',
						disabled: false
					}
				],
				sexlist3: [{
						name: '是',
						disabled: false
					},
					{
						name: '否',
						disabled: false
					}
				],
				sexlist5: [{
						name: '是',
						disabled: false
					},
					{
						name: '否',
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
				show6: false,
				countrylist1: false,
				cc2: false,
				cc3: false,
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

				//后面的添加
				showarea1: false,
				hjaddress: '',
				hjaddressa: '',
				hjaddress1: '',
				hjaddress2: '',
				hjaddress3: '',
				showarea2: false,
				czaddress: '',
				czaddressa: '',
				czaddress1: '',
				czaddress2: '',
				czaddress3: '',
				showarea3: false,
				lxaddress: '',
				lxaddressa: '',
				lxaddress1: '',
				lxaddress2: '',
				lxaddress3: '',
				// 后台演示上传地址
				action: 'http://www.example.com/upload',
				fileList: [],
				//工程项目
				banklist: [{
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
			this.id = o.id
			// 获取工程编号列表
			let that = this
			this.$u.get('Front/Item/item_list').then(res => {
				var bank_list = []
				let that = this
				that.banklist = res.data
			})
			// 获取国籍列表
			this.$u.post('Front/Country/get_country').then(res => {
				this.countrylist2 = res.data
			})
			this.$u.post('Front/front/getotherinfo', {
				id: o.id
			}).then(res => {
				var getdata = res[0]
				console.dir(Object.keys(getdata), {
					depth: null
				})
				if(getdata.hjaddress1 == null){
					that.hjaddressa = ''
				}else{
					that.hjaddressa = getdata.hjaddress1 + '-' + getdata.hjaddress2 + '-' + getdata.hjaddress3
				}
				
				if(getdata.czaddress1 == null){
					that.czaddressa = ''
				}else{
					that.czaddressa = getdata.czaddress1 + '-' + getdata.czaddress2 + '-' + getdata.czaddress3
				}
				
				if(getdata.lxaddress1 == null){
					that.lxaddressa = ''
				}else{
					that.lxaddressa = getdata.lxaddress1 + '-' + getdata.lxaddress2 + '-' + getdata.lxaddress3
				}
				// 检查是否重复
					this.item_no2 = getdata.item_no,
					this.uid = getdata.uid,
					this.item_no = getdata.item_no,
					this.item_name = getdata.item_name,
					this.freedate = getdata.freedate,
					this.is_disabled = getdata.is_disabled,
					this.is_ls = getdata.is_ls,
					this.is_alone = getdata.is_alone,
					this.disablednum = getdata.disablednum,
					this.lsnum = getdata.lsnum,
					this.is_deduct = getdata.is_deduct,
					this.investment = getdata.investment,
					this.proportion = getdata.proportion,
					this.cname = getdata.cname,
					this.matter = getdata.matter,
					this.country2 = getdata.country2,
					this.entrydate = getdata.entrydate,
					this.leavedate = getdata.leavedate,
					this.other_type = getdata.other_type,
					this.other_type_name = getdata.other_type_name,
					this.email = getdata.email,
					this.education = getdata.education,
					this.job_type = getdata.job_type,
					this.hjaddress = getdata.hjaddress,
					// this.hjaddressa = getdata.hjaddress1 + '-' + getdata.hjaddress2 + '-' + getdata.hjaddress3,
					this.hjaddress1 = getdata.hjaddress1,
					this.hjaddress2 = getdata.hjaddress2,
					this.hjaddress3 = getdata.hjaddress3,
					this.czaddress = getdata.czaddress,
					// this.czaddressa = getdata.czaddress1 + '-' + getdata.czaddress2 + '-' + getdata.czaddress3,
					this.czaddress1 = getdata.czaddress1,
					this.czaddress2 = getdata.czaddress2,
					this.czaddress3 = getdata.czaddress3
					this.lxaddress = getdata.lxaddress,
					// this.lxaddressa = getdata.lxaddress1 + '-' + getdata.lxaddress2 + '-' + getdata.lxaddress3,
					this.lxaddress1 = getdata.lxaddress1,
					this.lxaddress2 = getdata.lxaddress2,
					this.lxaddress3 = getdata.lxaddress3,
					this.note = getdata.note
			})
		},
		methods: {
			//获得工程项目名
			onchange(e) {
				this.item_name = e.detail.value[e.detail.value.length - 1].text
				this.item_no = e.detail.value[e.detail.value.length - 1].value
			},
			onnodeclick(node) {},
			//户籍地选择
			confirmarea1(e) {
				// console.dir(e, {depth:null})
				this.hjaddressa = `${e.province.label}-${e.city.label}-${e.area.label}`
				this.hjaddress1 = e.province.label
				this.hjaddress2 = e.city.label
				this.hjaddress3 = e.area.label
			},
			//常住地选择
			confirmarea2(e) {
				// console.dir(e, {depth:null})
				this.czaddressa = `${e.province.label}-${e.city.label}-${e.area.label}`
				this.czaddress1 = e.province.label
				this.czaddress2 = e.city.label
				this.czaddress3 = e.area.label
			},
			//联系地选择
			confirmarea3(e) {
				// console.dir(e, {depth:null})
				this.lxaddressa = `${e.province.label}-${e.city.label}-${e.area.label}`
				this.lxaddress1 = e.province.label
				this.lxaddress2 = e.city.label
				this.lxaddress3 = e.area.label
			},
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				// console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				this.is_disabled = e;
			},
			// 选中某个单选框时，由radio时触发
			radioChange2(e) {
				// console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange2(e) {
				this.is_ls = e;
			},
			// 选中某个单选框时，由radio时触发
			radioChange3(e) {
				// console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange3(e) {
				this.is_alone = e;
			},
			// 选中某个单选框时，由radio时触发
			radioChange5(e) {
				// console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange5(e) {
				this.is_deduct = e;
			},

			//获取离职日期
			change(e) {
				// console.log('时间：' + e.result);
				this.freedate = e.result;
			},
			//首次入境时间
			change2(e) {
				// console.log('时间：' + e.result);
				this.entrydate = e.result;
			},
			//预计离境时间
			change3(e) {
				// console.log('时间：' + e.result);
				this.leavedate = e.result;
			},
			countryconfirm(e) {
				// console.log('国籍' + e[0].label);
				this.matter = e[0].label;
			},
			// 获取国家名
			countryconfirm2(e) {
				// console.log('国籍' + e[0].label);
				this.country2 = e[0].label;
			},
			// 获取职务名
			countryconfirm3(e) {
				// console.log('国籍' + e[0].label);
				this.job_type = e[0].label;
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
			checkEmail(str) {
				var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
				if (myReg.test(str)) {
					return true;
				} else {
					return false;
				}
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
					freedate: this.freedate, //离职日期
					is_disabled: this.is_disabled, //是否残疾
					is_ls: this.is_ls, //是否烈属
					is_alone: this.is_alone, //是否孤老
					disablednum: this.disablednum, //残疾证号
					lsnum: this.lsnum, //烈属证号
					is_deduct: this.is_deduct, //是否扣除减除费用
					investment: this.investment, //个人投资额
					proportion: this.proportion, //个人投资比例
					cname: this.cname, //中文名
					matter: this.matter, //涉税事由
					country2: this.country2, //出生国家(地区)
					entrydate: this.entrydate, //首次入境时间
					leavedate: this.leavedate, //预计离境时间
					other_type: this.other_type, //其他证件类型
					other_type_name: this.other_type_name, //其他证件号码
					email: this.email, //电子邮箱
					education: this.education, //学历
					job_type: this.job_type, //职务
					hjaddress: this.hjaddress, //户籍所在地
					hjaddress1: this.hjaddress1, //户籍所在地（省）
					hjaddress2: this.hjaddress2, //户籍所在地（市）
					hjaddress3: this.hjaddress3, //户籍所在地（区县）
					czaddress: this.czaddress, //经常居住地（详细地址）
					czaddress1: this.czaddress1, //经常居住地（省）
					czaddress2: this.czaddress2, //经常居住地（市）
					czaddress3: this.czaddress3, //经常居住地（区县）
					lxaddress: this.lxaddress, //联系地址（详细地址）
					lxaddress1: this.lxaddress1, //联系地址（省）
					lxaddress2: this.lxaddress2, //联系地址（市）
					lxaddress3: this.lxaddress3, //联系地址（区县）
					note: this.note, //备注
					id: this.id,
					uid: this.uid
				}
				if (infodata.email != '' && !this.checkEmail(infodata.email) && infodata.email != null) {
					uni.showToast({
						title: '邮箱格式不正确',
						icon: 'none',
						duration: 3000
					})
				} else if (infodata.item_no == '' || infodata.item_name == '') {
					uni.showToast({
						title: '工程编号没有选择',
						icon: 'none',
						duration: 3000
					})
				} else if (that.item_no2 != infodata.item_no) {
					// 检查是否存在重复
					this.$u.post('Front/front/updateotherinfo2', infodata).then(res => {
						if (parseInt(res.status) == 3) {
							let gopagesid = res.data
							console.log('id:' + res.data)
							uni.showModal({
								title: '你已经重复添加该项目',
								content: '请问是否前往该项目的详情页?',
								success: function(res) {
									if (res.confirm) {
										that.gopages('dbmoreinfo2', gopagesid)
									} else if (res.cancel) {}
								}
							})
						} else {
							this.$u.post('Front/front/updateotherinfo', infodata).then(res => {
								console.dir(res, {
									depth: null
								})
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
					this.$u.post('Front/front/updateotherinfo', infodata).then(res => {
						console.dir(res, {
							depth: null
						})
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
	.ok {
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
