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
<style scoped="scoped">
	#my{
		width: 35.71rem;
		height: 71.43rem;
	}
	.user {
		background: var(--color-tint);
	}

	.user-box {
		margin: 0 1.43rem 0 1.43rem;
		height: 7.14rem;
		font-size: 14px;
	}

	.user-left img {
		width: 7.14rem;
		height: 7.14rem;
		float: left;
	}

	.user-center {
		width: 22.86rem;
		height: 7.14rem;
		margin-left: 0.71rem;
		float: left;
		color: white;
	}

	.user-center h2 {
		line-height: 3.57rem;
	}

	.user-center-xia {
		height: 2.14rem;
	}

	.user-center-xia img {
		width: 1.43rem;
		height: 1.43rem;
		float: left;
		margin-top: 5px;
	}

	.user-center-xia p {
		line-height: 2.14rem;
		float: left;
	}

	.user-right {
		width: 2.14rem;
		height: 7.14rem;
		float: right;
	}

	.user-right img {
		width: 2.14rem;
		height: 2.14rem;
		margin-top: 2.5rem;
	}

	.item {
		line-height: 3.57rem;
		background: #f6f6f6;
		border-top: 0.36rem solid white;
	}

	.item img {
		width: 1.43rem;
		height: 1.43rem;
		margin-top: 1.07rem;
		float: right;
	}
</style>
