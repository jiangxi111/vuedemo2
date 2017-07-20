<template>
	<div id="TodoMvc">
		<h3>添加任务</h3>
		 <div class="form-group">
		    <!-- <input type="text" class="form-control" v-model="modelData" @keyup="add($event)" > -->
		    <input type="text" class="form-control" v-model="modelData" @keyup.enter="add($event)" >
		  </div>
		  <div class="table-responsive">
	      <table class="table">
	        <thead>
	          <tr>
	            <th>{{noComplete}}个任务未完成</th>
	            <th>所有任务</th>
	            <th>未完成任务</th>
	            <th>完成的任务</th>
	          </tr>
	        </thead>
	      </table>
	    </div>
	    <h3>任务列表</h3>
	    <ul class="list-group">
		  <li class="list-group-item" :class="{compute:item.select,editstyle:editItem===item}" v-for="(item,index) in list">
		  	 <div class="row">
		  	 	<div class="col-md-3">
		  	 		{{index}}<input type="checkbox" @click="itemclick" v-model="item.select">{{item.select}}
		  	 	</div>
		  	 	<div class="col-md-6 titleDiv" @dblclick="edit(item)">
		  	 		<span class="showtext">{{item.title}}</span>
		  	 		<input type="text" class="form-control editCon" @keyup.esc="escCanle(item)" @blur="blurSave()"
		  	 		@keyup.13="blurSave()" v-focus="editItem===item" :titleval="item.title" v-model="item.title">
		  	 	</div>
		  	 	<div class="col-md-3">
		  	 		<button type="button" class="btn btn-primary" @click="delItem(item)">删除</button>
		  	 	</div>
		  	 </div>
		  </li>
		  <li class="list-group-item " v-if="list.length==0">
		  		<h4>暂无列表</h4>
		  </li>
		</ul>
	</div>
</template>
<script>
	//生成一个实例
	var local  = new LocalEvent("todo");
	var filters = {
		noComFilter:(todos)=>{
			return todos.filter((item,index)=>{
				return !item.select;
			}).length;
		}
	}

	 export default{
	 	data(){
	 		return{
	 			list:[],
	 			modelData:"",
	 			editItem:"",
	 			beforeTitle:""
	 		}
	 	},
	 	watch:{
	 		list:{
	 			handler:function(){
	 				local.save(this.list);
	 			},
	 			deep:true
	 			
	 		}
	 	},
	 	computed:{
	 		noComplete:function(){
	 			 return filters.noComFilter(this.list);
	 		}
	 	},
	 	methods:{
	 		getList(){
	 			// this.$http.get("http://localhost:8080/src/assets/datajson/todo.json")
	 			// .then((res)=>{
	 			// 	this.list=res.data;
	 			// })
	 			// .catch((error)=>{
	 			// 	alert("网络错误"+error)
	 			// })
	 			// 获得localStorage数据
	 			this.list = local.get();
	 		},
	 		// add(event){
	 		// 	if(event.keyCode==13){
	 		// 		this.list.push({
	 		// 			"title":this.modelData,
	 		// 			"select":false
	 		// 		})
	 		// 		this.modelData="";
	 		// 	}
	 		// },
	 		add(event){
 				this.list.push({
 					"title":this.modelData,
 					"select":false
 				})
 				this.modelData="";
	 		},
	 		blurSave(){
	 			this.editItem="";
	 		},
	 		escCanle(obj){
	 			obj.title = this.beforeTitle;
	 			this.blurSave();
	 		},
	 		itemclick(){
	 			//当数据库没有select字段时 添加属性
	 			// if(!obj.select){
 				// 	this.$set(obj,"select",true)
 				// }
 				// else{
 				// 	this.$set(obj,"select",false)
 				// }
	 			this.list.forEach((item,index)=>{

	 			})
	 		},
	 		edit(obj){
	 			this.editItem = obj;
	 			this.beforeTitle = obj.title;
	 		 },
	 		delItem(obj){
	 			var index = this.list.indexOf(obj);
	 			this.list.splice(index,1);
	 			
	 		}
	 	},
	 	mounted(){
	 		this.getList();
	 	},
	 	directives:{
	 			"focus":{
	 				update:(el,binding,vNode,oldNode)=>{//vNode,oldNode不经常用
	 					if(binding.value){//当前的
	 					    //console.log(el)
	 						$(el).focus();
	 						// $(el).val($(el).attr("titleval"));//获得指令上的值赋值给input
	 						// $(el).after("<p>不得为空</p>")
	 					}
	 				}
	 			}
	 	}
	 }


	 
</script>
<style scoped>
	.compute .titleDiv span{
		text-decoration: line-through;
		color: #ccc;
	}
	.editCon{
		display: none;
	}
	.editstyle .showtext{
		display: none;
	}
	.editstyle .editCon{
		display: block;
	}
</style>