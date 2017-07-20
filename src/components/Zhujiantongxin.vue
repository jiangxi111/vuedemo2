<template>
	<section>
		<div class="jumbotron">
			  <h4>兄弟间通信---简单场景用bus，复杂场景用vuex</h4>
			  <xiongdi></xiongdi>
			  <xiongdi1></xiongdi1>
		</div>
		<div class="jumbotron">
			  <h4>父组件获得子组件的值</h4>
			  <fatherCom>
			  </fatherCom>
		</div>
		<div class="jumbotron">
			  <h4>组件内部数据传递(普通字符不需要绑定)</h4>
			  <neibu neibu-val='msg'>
			  </neibu>
		</div>
		<div class="jumbotron">
			  <h4>组件内部数据传递(普通字符不需要绑定,变量需要绑定)</h4>
			  <neibu  :bind-neibu="msg">
			  		slot内容
			  </neibu>
		</div>
		<div class="jumbotron">
			  <h4>同的位置插入不同的内容</h4>
			  <five>
		        <!-- 指定要插入header这个slot中 -->
		        <ul slot="header" class="nav nav-tabs">
		          <li class="active"><a href="#">Home</a></li>
		          <li><a href="#">Profile</a></li>
		          <li><a href="#">Messages</a></li>
		        </ul>

		        <!-- 指定要插入content这个slot中 -->
		        <div slot="content">this is my awesome website</div>
		    </five>
		</div>
		
	</section>
</template>
<script>
	import Vue from 'vue'
	var bus = new Vue();
	export default{
		data(){
			return{
				msg:"我是来自根组件"
			}
		},
		components:{
			
			five:{
				template:` // 设置slot的名称为header
							<div>
				            <div class="top-nav">
				                <slot name="header"></slot>
				            </div>
				            <div class="main">
				                <slot name="content"></slot>
				            </div>
				        </div>`
			},
			neibu:{
				template:`<div>{{neibu}}==========={{bindNeibu}}<br><slot></slot><br><slot>slot默认内容</slot></div>`,
				props:["neibuVal","bindNeibu"],
				data(){
					return{
						neibu:this.neibuVal
					}
				}
			},
			xiongdi:{
				 template:`<div>
				 			<button @click="jiaFun" type="button" class="btn btn-primary">组件兄弟1</button>=====<span>{{count}}</span>
				 			</div>`,
				 data(){
				 	return{
				 		count:0,
				 	}
				 },
				 methods:{
				 		jiaFun(){
				 		 bus.$emit("conuntMsg",this.count+=1);
				 	   }
				 },
			},
			xiongdi1:{
				 template:`<div>组件兄弟2====={{count2}}</div>`,
				 data(){
				 	return{
				 		count2:100,
				 	}
				 },
				 created:function(){
                      // bus.$on("conuntMsg",function(msg){
                      // 		this.count2 = msg
                      // }.bind(this));
                      // es6语法可以解决this指向问题
                      bus.$on("conuntMsg",(msg)=>{
                      	 this.count2 = msg
                      })
				 }
			},
			fatherCom:{
				template:`<div><span>我是父组件：</span>===={{fatherVal}}<br>
				<sonCom v-on:msginfo='getsondata'></sonCom></div>`,
				data(){
					return{
						fatherVal:"我是父组件的值"
					}
				},
				methods:{
					getsondata:function(e){
						this.fatherVal=e;
					}
				},
				components:{
					sonCom:{
						template:`<div><span>我是子组件：</span>======{{sonVal}}<button @click="chuanzhiFu" type="button" class="btn btn-primary">传值给父组件</button></div>`,
						data(){
							return{
								sonVal:"我是子组件的值"
							}
						},
						methods:{
							chuanzhiFu(){
								this.$emit("msginfo",this.sonVal)
							}
						}
					}
				}
			},
			
		},
		methods:{

		}
	}
</script>