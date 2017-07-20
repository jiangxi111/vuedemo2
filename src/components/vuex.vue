<template>
	<section>
		<button @click="increment" type="button" class="btn btn-success">增加</button>
		<button @click="decrement" type="button" class="btn btn-success">减少</button>
		<button @click="clickAdd" type="button" class="btn btn-success">偶数才能增加</button>
		<button @click="clickAsync" type="button" class="btn btn-success">点击异步请求</button>
		<div>获得数据{{getCount}}===>{{getOdd}}</div>
	</section>
</template>
<script>
	// mapActions 管理所有事件
	// mapGetters 获取所有数据
	import {mapActions,mapGetters} from "vuex"
	export default{
		methods:mapActions([
				"increment",
				"decrement",
				"clickAdd",
				"clickAsync"
			]),
		computed:mapGetters([
				"getCount",
				"getOdd"
			])
	}
</script>