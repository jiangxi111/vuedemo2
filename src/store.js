import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
var state = {
	count:10
};
const mutations ={
	incrementCommit(state){//处理数据(状态)变化
		state.count++;
	},
	decrementCommit(state){
		state.count--;
	}
};
const actions={
	increment:({//处理你要干什么，异步请求，判断，流程控制
		commit
	})=>{
		commit('incrementCommit')
	},
	decrement:({
		commit
	})=>{
		commit("decrementCommit")
	},
	clickAdd:({commit,state})=>{//第二个参数
		if(state.count%2==0){
			commit('incrementCommit')
		}
	},
	clickAsync:({commit})=>{
		 new Promise((resolve)=>{
		 	setTimeout(()=>{
		 		commit('incrementCommit');
		 		resolve();
		 	},1000)
		 })
	}
}

const getters = {
	getCount(state){
		return state.count;
	},
	getOdd:(state)=>{
		return state.count%2?"偶数":"奇数";
	}
}
//需要导出Store对象
export default new Vuex.Store({
	getters,
	state,
	mutations,
	actions
})