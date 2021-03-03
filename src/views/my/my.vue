<template>
	<div id="my">
		<navbar><div slot='center'>我的宝贝</div></navbar>
		<div class="user">
			<div class="user-box">
				<div class="user-left"><img src="@/assets/icon/user.png" alt=""></div>
				<div class="user-center">
					<h2>登录/注册</h2>
					<div class="user-center-xia"><img src="@/assets/icon/call.png" alt="">
						<p>暂时没有绑定手机号</p>
					</div>
				</div>
				<div class="user-right"><img src="@/assets/icon/you.png" alt=""></div>
			</div>
		</div>
		<my-order></my-order>
		<div class="item" v-for="i in itemdata">
			{{i}}
			<img src="@/assets/icon/you.png" alt="">
		</div>
	</div>
</template>

<script>
	import Navbar from '@/components/common/navbar/Navbar'
	import myOrder from '@/views/my/myInfo/myOrder'
	export default {
		name: '',
		data() {
			return {
				itemdata: [
					'我的收货地址', '账户与安全', '隐私', '帮助与反馈', '推荐有礼', '设置',
				]
			};
		},

		components: {
			Navbar,
			myOrder
		},
	}
</script>
<style scoped>
	.user {
		background: var(--color-tint);
	}

	.user-box {
		margin: 0px 20px 0px 20px;
		height: 100px;
		font-size: 14px;
	}

	.user-left img {
		width: 100px;
		height: 100px;
		float: left;
	}

	.user-center {
		width: 320px;
		height: 100px;
		margin-left: 10px;
		float: left;
		color: white;
	}

	.user-center h2 {
		line-height: 50px;
	}

	.user-center-xia {
		height: 30px;
	}

	.user-center-xia img {
		width: 20px;
		height: 20px;
		float: left;
		margin-top: 5px;
	}

	.user-center-xia p {
		line-height: 30px;
		float: left;
	}

	.user-right {
		width: 30px;
		height: 100px;
		float: right;
	}

	.user-right img {
		width: 30px;
		height: 30px;
		margin-top: 35px;
	}

	.item {
		line-height: 50px;
		background: #f6f6f6;
		border-top: 5px solid white;
	}

	.item img {
		width: 20px;
		height: 20px;
		margin-top: 15px;
		float: right;
	}
</style>
