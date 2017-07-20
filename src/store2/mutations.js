import getters from "./getters.js"
import {
	INCREMENTCOMMIT,
	decrement,
	SHOWHEADER,
	HIDEHEADER,
	SHOWLOADING,
	HIDELOADING
} from "./types.js"


const LocalEvent = function(item){          // 定义一个本地存储的构造函数
    this.get = function () {                // 拿数据 
        return JSON.parse(localStorage.getItem(item));
    }
    this.set = function (obj) {            // 存数据
        localStorage.setItem(item,JSON.stringify(obj));
    }
    this.clear = function () {              // 删数据
        localStorage.removeItem(item);
    }
}
const local = new LocalEvent('lx_notepad'); // 创建一个本地存储的事例
const state ={
	count:20,
	header:true,
	loading:false,
	event: local.get()
};
const mutations={
	[INCREMENTCOMMIT](state){
		state.count++;
	},
	[decrement](state){
		state.count--;
	},
	[SHOWHEADER](state){
		state.header=true
	},
	[HIDEHEADER](state){
		state.header=false;
        local.set(state.header);
	},
	[SHOWLOADING](state){
		state.loading= true;
	},
	[HIDELOADING](state){
		state.loading= false;
	}

}

export default{
	state,
	mutations,
	getters
}