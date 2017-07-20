import Home from './components/Home.vue'
import News from './components/News.vue'
import Qita from './components/Qita.vue'
import Element from './components/Elemnet.vue'
import NewsDetail from './components/NewsDetail.vue'
import Zhujian from './components/Zhujian.vue'
import Zhujiantongxin from './components/Zhujiantongxin.vue'
import Jisuanshuxing from './components/Jisuanshuxing.vue'
import Vuex from './components/Vuex.vue'
import Vuexfile from './components/Vuexfile.vue'
import Website from './components/Website.vue'
import ContentCon from "./components/ContentCon.vue"
import Wytz from './components/Wytz.vue'
import Reg from './components/Reg.vue'
import Wytzdetail from './components/Wytzdetail.vue'
import Baidumap from './components/Baidumap.vue'
import ShopCar from './components/ShopCar.vue'
import TodoMvc from './components/TodoMvc.vue'
import Login from './components/Login.vue'
import Grxx from './components/Grxx.vue'
import rowright from "./components/rowright.vue"
import wdzc from "./components/wdzc.vue"
import jyjl from "./components/jyjl.vue"
import ddgl from "./components/ddgl.vue"
import analysis from "./components/analysis.vue"

export default{
	//mode:"history",//切换另一种模式路径后没有#
	// scrollBehavior (to, from, savedPosition) {//点击导航页面回到顶部 适合顶部绝对定位
 //      if (savedPosition) {
 //        console.log(savedPosition)
 //        return savedPosition
 //      } else {
 //        return { x: 0, y: 0 }
 //      }
 //    },
	routes:[
		{
			path:"/website",
			component:Website,
			children:[
					  {
					 	path:"/grxx",
					 	component:Grxx,
					 	children:[
					 			{
					 				path:"/grxx",
					 				component:rowright,
					 				meta:{
					 					login:true
					 				}

					 			},
					 			{
					 				path:"/wdzc",
					 				component:wdzc,
					 				meta:{
					 					login:true
					 				}

					 			},
					 			{
					 				path:"/jyjl",
					 				component:jyjl,
					 				meta:{
					 					login:true
					 				}

					 			},
					 			{
					 				path:"/ddgl",
					 				component:ddgl,
					 				meta:{
					 					login:true
					 				}

					 			},
					 			{
					 				path:"/analysis",
					 				component:analysis,
					 				meta:{
					 					login:true
					 				}

					 			},
					 			{
					 				path:"*",
					 				redirect:"/grexx"
					 			}
					 	]
					 },
					 {
					 	path:"/login",
					 	component:Login,
					 	beforeEnter:(to,from,next)=>{
					 		if(getCookie("userData")!=null){
					 			next({path:"/index"});
					 		}
					 		else{
					 			next(true)
					 		}
					 		
					 	}
					 },
					 {
					 	path:"/wytz",
					 	component:Wytz
					 },
					 {
					 	path:"/wytzdetail/:id",
					 	component:Wytzdetail
					 },
					 
					 {
					 	path:"/index",
					 	component:ContentCon
					 },
				
					 {
					 	path:"/reg",
					 	component:Reg
					 },
					 {
					 	path:"*",
					 	redirect:"/index"
					 }
					 ,
					 {
					 	path:"/",
					 	redirect:"/index"
					 }
					 
			]	
		},
		{
			path:"/home",
			component:Home
		},
		  {
	     	path:"/baidumap",
	     	component:Baidumap
	     },
	     {
	     	path:"/todomvc",
	     	component:TodoMvc
	     },
	     {
	     	path:"/shopCar",
	     	component:ShopCar
	     },
		{
			path:"/news",
			component:News,
			children:[
			 		{
			 			path:":name/newsId/:id",
			 			component:NewsDetail
			 		}
			 ]
		},
		{
			path:"/qita",
			component:Qita
		},
		{
			path:"/element",
			component:Element
		},
		{
			path:"/zhujian",
			component:Zhujian
		},
		{
			path:"/zhujiantongxin",
			component:Zhujiantongxin
		},
		{
			path:"/jisuanshuxing",
			component:Jisuanshuxing
		},
		{
			path:"/vuex",
			component:Vuex
		},
		{
			path:"/vuexfile",
			component:Vuexfile
		},
		{
			path:"*",
			redirect:"/Home"
		}
	]
}