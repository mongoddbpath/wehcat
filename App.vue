<script>
	export default {
		globalData: {
			api: 'https://xx.db2j.com/index.php',
			imgapi: 'https://xx.db2j.com'
		},
		onLaunch: function() {},
		onShow: function() {},
		onHide: function() {},
		onLoad: function() {}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";

	/*每个页面公共css */
	/deep/ .u-label-text {
		font-size: 32rpx !important;
	}

	/deep/ .u-field__input-wrap {
		font-size: 34rpx !important;
	}

	/deep/ .u-size-mini {
		font-size: 34rpx !important;
	}

	/deep/ .uni-data-tree {
		width: 500rpx !important;
		margin-left: -30rpx;
	}
	
	/deep/ .input-value{
		// margin-left: -20rpx;
	}


	/deep/ .u-label {
		flex: 0 0 78px !important;
	}

	/deep/ view {
		font-size: 30rpx !important;
	}

	/deep/ .u-line-1 {
		font-size: 30rpx !important;
	}

	/deep/ .u-border-bottom:after {
		border-bottom-width: 0 !important;
	}

	// 边框添加与调整
	/deep/ .u-field__input-wrap {
		height: 68rpx !important;
		border: 1rpx solid #ccc;
		border-radius: 1rpx !important;
		text-align: left !important;
		padding-left: 20rpx !important;
		border-radius: 8rpx !important;
		font-size: 30rpx !important;
	}
	/deep/ .u-textarea-class.data-v-1c764f86 {
	font-size: 28rpx;
	height: 228rpx !important;
	border: 1rpx solid #ccc;
	border-radius: 8rpx;
	text-align: left !important;
	padding-left: 8px !important;
	padding-top: 8px !important;
	}

</style>
