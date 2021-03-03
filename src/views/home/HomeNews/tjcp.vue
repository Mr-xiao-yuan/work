<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<span>{{item.title}}</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "tjcp",
		props: {
			recommends: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style>
.recommend{
	display: flex;
	text-align: center;
	font-size: 14px;
	padding: 10px 0 20px 0;
	border-bottom: 10px solid #eee;
}
.recommend-item{
	flex: 1;
}
.recommend-item img{
	width: 120px;
	height: 120px;
	margin-bottom: 10px;
}
</style>
