<template>
	<div>
		<loading :info="msg3" v-on:fujieshou="jieshouFun"></loading>
         {{msg3}}
	</div>
</template>
<script>
	export default{
		data(){
			return {
				 msg3:{
		                name:"小明",
		                age:20
		            }
			}
		},
		methods:{
			jieshouFun(e){
				this.msg3.name=e;
			}
		}
	}
</script>