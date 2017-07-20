<template>
	<div id="ShopCar">
		<div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>
            <div class="state icheckbox_square-green hover" :class="{checked:selectAllFlage}"  @click="selectAll"></div>全选{{selectAllFlage}}
            <th style="width:30%">商品名称</th>
            <th>单价</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
           
          </tr>
        </thead>
        <tbody>
          <tr v-for="(good,index) in goodList">
            <th scope="row">{{index}}
            	
				 <div class="state icheckbox_square-green hover" :class="{checked:good.select}"  @click="selectproduct(good)"></div>{{"=="+good.select}}
            	</th>
            <td>
            	<img :src="good.img" style="width:70px;height:70px;" alt="">{{good.name}}
            	<p>赠品：<span v-for="part in good.parts">{{part.partsName}}</span></p>
            </td>
            <td>{{good.price}}</td>
            <td>
            	<button style="float:left;" type="submit" class="btn btn-primary" v-on:click="changeMoney(good,-1)">-</button>
            	<input  v-on:input="watchNum(good)" style="width:60%;float:left;" type="text" v-model="good.num" class="form-control" >
            	<button type="submit" class="btn btn-primary" style="float:left;" @click="changeMoney(good,1)">+</button>
            </td>
            <td>{{good.price*good.num | moeny('￥') }}</td>
            <td><button type="button" class="btn btn-danger" @click="delPro(good)">删除</button></td>
          </tr>
          <tr v-if="goodList==''||goodList.length==0"><h1>暂无商品</h1></tr>
          <tr>
          	<td><h1>共{{goodList.length}}件商品，已选择{{selectArr.length}}件</h1></td>
          	<td></td>
          	<td></td>
          	<td><h1>合计{{totalMoney | formatMoney(2)}}元</h1></td>
          	<td><button type="button" class="btn btn-danger"@click="clearShopCar">清空购物车</button></td>
          	<td><button type="button" class="btn btn-danger">去结算</button></td>
          </tr>
        </tbody>
      </table>
    </div>
	</div>
</template>

<script>
   import Vue from 'vue'
   var vm = new Vue()
   export default{
		data(){
			return {
        		goodList:[],
        		selectArr:[],
        		selectAllFlage:false,
        		totalMoney:0
			}
		},
		
		watch:{
			// "selectArr":{
			// 	handler:function(newvalue,oldvalue){
			// 		if(newvalue==""|| newvalue.length<this.checkboxModel.length){
			// 			 this.checked=false;
			// 		}
			// 		if(newvalue.length===this.checkboxModel.length){
			// 			this.checked=true;
			// 		}
			// 		console.log("newvalue==="+newvalue+"checkboxModel==="+this.checkboxModel)
					
			// 	},
			// 	deep:true
			// }
		},
		methods:{
			fecthdata(){
				this.$http.get("src/assets/datajson/gooddata.json").then((res)=>{
					this.goodList=res.data.result.list;
				}).catch((error)=>{
					alert("网络错误"+error)
				})
			},
			// 改变商品数量
			changeMoney(obj,type){
				if(type>0){//加
					obj.num++
				}
				if(type<0){//减
					if(obj.num>1){
						obj.num--
					}
				}
				this.allmoney();
			},
			//监控商品数量
			watchNum(obj){
				if(obj.num<1 || isNaN(obj.num)){
					obj.num=1;
				}
			},
			clearShopCar(){
				this.selectArr=[];
				this.goodList=[];
				this.allmoney();
			},
			delPro(obj){
				var index = this.goodList.indexOf(obj)
				this.goodList.splice(index,1);
				this.allmoney();
			},
			selectproduct(good){
				this.selectArr=[];
				if(!good.select){
					this.$set(good,"select",true)
				}
				else{
					this.$set(good,"select",false)
				}
				this.goodList.forEach((item,index)=>{
					if(item.select){
						this.selectArr.push(item);
					}
				})

				if(this.selectArr.length==this.goodList.length){
					this.selectAllFlage=true;
				}
				else{
					this.selectAllFlage=false;
				}
				this.allmoney();
			},
		    selectAll() {
		    	this.selectAllFlage=!this.selectAllFlage	
		      	this.goodList.forEach((item,index)=>{
		      			if(!item.select){
							this.$set(item,"select",this.selectAllFlage);
							this.selectArr = this.goodList;
						}
						else{
							this.$set(item,"select",this.selectAllFlage);
							this.selectArr=[];
						}
		      	})
		       this.allmoney();
			  },
			  allmoney(){
			  	 this.totalMoney=0;
			  	 this.selectArr.forEach((item,index)=>{
			  	 		console.log(item.price)
			  	 	  this.totalMoney+=item.num*item.price;
			  	 })
			  }
		},
		filters:{
			formatMoney:(value,num)=>{
				return value.toFixed(num);
			}
		},
		mounted:function(){
			this.$nextTick(function(){
				this.fecthdata();
				this.allmoney();
			})
		}
	}
	
</script>
<style scoped>
	
.icheckbox_square-green.hover {
    background-position: -24px 0;
}
.icheckbox_square-green.checked {
    background-position: -48px 0;
}
.skin-states .state {
    cursor: default;
}
.icheckbox_square-green {
    background-position: 0 0;
}
.icheckbox_square-green, .iradio_square-green {
    background: url("../assets/images/green.png") no-repeat scroll 0 0;
    border: medium none;
    cursor: pointer;
    display: inline-block;
    height: 22px;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    width: 22px;
}





</style>