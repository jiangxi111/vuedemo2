<template >
	<section>
		<div class="jumbotron">
		  <h4>计算属性</h4>
		  <six jisuan-shuxiang="abcdefg"></six>
		   <input type="text" class="form-control" id="exampleInputName2" v-model="name" :placeholder="name">
		  <sevent :user-name="name">
		  </sevent>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				name:"Jane Doe"
			}
		},
		components:{
			sevent:{
				props:["userName"],
				template:`<div>{{hanshu1}}</div>`,
				computed:{
					hanshu1(){
						return this.userName.trim().toUpperCase();
					}
				}
			},
			six:{
				template:`<div>{{hanshu}}</div>`,
				props:["jisuanShuxiang"],
				computed:{
					hanshu(){
						return this.jisuanShuxiang+"ABCDEFTG"
					}
				}
			}
		}
	}
</script>