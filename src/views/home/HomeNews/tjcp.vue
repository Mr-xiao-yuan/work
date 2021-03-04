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

<style scoped="scoped">
.recommend{
	display: flex;
	text-align: center;
	font-size: 1rem;
	padding: 0.71rem 0 1.43rem 0;
	border-bottom: 0.71rem solid #eee;
}
.recommend-item{
	flex: 1;
}
.recommend-item img{
	width: 8.57rem;
	height: 8.57rem;
	margin-bottom: 0.71rem;
}
</style>
