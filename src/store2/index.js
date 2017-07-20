import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import mutationsNew from "./mutations.js"
import actions from "./actions.js"



export default new Vuex.Store({
	modules:{
		mutationsNew
	},
	actions
})
//console.log(mutationsNew.getters.getCount(mutationsNew.state))