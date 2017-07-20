<template>
	<div>
		<h3>我是新闻</h3>
		<ul>
			<li v-for="(val,index) in list">
				<router-link :to="'/news/ww/newsId/'+val.id">

					{{val.name}}
				</router-link>
			</li>
		</ul>
		 
		<router-view></router-view>
	</div>
</template>

<script>
  
	export default{
		name:"news",
		data(){
			return{
				list:[
						{
							id:"001",
							name:"新闻1"
						},
						{
							id:"002",
							name:"新闻2"
						},
						{
							id:"003",
							name:"新闻3"
						}
					],
				
			}
		}
	}
</script>

<style scoped>
ul li{
	display: block;
}	

</style>