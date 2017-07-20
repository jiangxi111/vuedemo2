<template>
			<!--resetSelect最外作用  点击外层select下拉框隐藏  -->
	<section @click="resetComponent">
		<!-- nav begin -->

		<!-- vuex做法 -->
		<!-- <headerMenu v-if="getHeaderShow"></headerMenu> -->
		<headerMenu v-if="headerFlag"></headerMenu>
		<!-- nav End -->
		<!-- 中心内容 Begin -->
		  <!-- <keep-alive> -->
                <router-view></router-view>
          <!-- </keep-alive> -->
		<!-- 中心内容 End -->
		<!-- footer Begin -->
			<footerBottom></footerBottom>
		<!-- footer End -->
	    <!-- 返回顶部Begin -->
	    	<toolbar></toolbar>
	    <!-- 返回顶部End -->
         <loading2 v-if="getLoading"></loading2>

	</section>
</template>
<script>
var headerlocal  = new LocalEvent("hideHeader");


import {eventBus} from "../eventBus.js"
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import Toolbar from "./Toolbar.vue"
import {mapActions,mapGetters} from "vuex"
export default{
	components:{
		"headerMenu":Header,
		"footerBottom":Footer,
		"toolbar":Toolbar
	},
	data(){
		return {
			headerFlag:""
		}
	},
	computed:mapGetters([
		  "getHeaderShow",
		  "getLoading"
		]),
	mounted(){
		this.getHeader();
	},
	methods:{
		getHeader(){
			var hashReg = "/"+window.location.hash.replace(/#\/?/, '');
			if(hashReg=="/reg" || hashReg=="/login"){
				headerlocal.save("false");
				if(headerlocal.get()=="false"){
		  			this.headerFlag=false;
		  		}
			}
			else{
				headerlocal.save("true")
				if(headerlocal.get()=="true"){
		  			this.headerFlag=true;
		  		}
			}
		},
		resetComponent(){
			eventBus.$emit("reset-component")
		}
	},
	watch:{//监听路由变化
		$route(to,from){
		  console.log("to===="+to.path+"    from====="+from.path)
		  if(to.path=="/reg"||to.path=="/login"){
		  		// vuex做法
		  		this.$store.dispatch("hideHeader");
		  		//本地存储做法
		  		headerlocal.save("false");
		  		if(headerlocal.get()=="false"){
		  			this.headerFlag=false;
		  		}
		  }
		  else{
		  		// vuex做法
		  	    this.$store.dispatch("showHeader");
		  	    //本地存储做法
		  	    headerlocal.save("true")
		  	    if(headerlocal.get()=="true"){
		  			this.headerFlag=true;
		  		}
		  }
		}
	}
}

</script>
<style>
	@import "../assets/public/commonCss/public.css";
	
</style>