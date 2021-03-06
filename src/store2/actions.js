import * as types from "./types.js"
export default{
	increment:({//处理你要干什么，异步请求，判断，流程控制
		commit
	})=>{
		commit(types.INCREMENTCOMMIT)
	},
	decrement:({
		commit
	})=>{
		commit(types.decrement)
	},
	clickAdd:({
		commit,state
	})=>{
		if(state.mutationsNew.count%2==0){
			commit(types.INCREMENTCOMMIT)
		}
	},
	clickAsync:({
		commit
	})=>{
		new Promise((resolve)=>{
			setTimeout(()=>{
				commit(types.INCREMENTCOMMIT)
			},1000)
		})
	},
	showHeader:({
		commit
	})=>{
		commit(types.SHOWHEADER)
	},
	hideHeader:({
		commit
	})=>{
		commit(types.HIDEHEADER)
	},
	showLoading:({
		commit
	})=>{
		commit(types.SHOWLOADING)
	},
	hideLoading:({
		commit
	})=>{
		commit(types.HIDELOADING)
	}
}