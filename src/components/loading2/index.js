import LoadComponent from'./loading.vue'
const loadingConfig ={
	install:function(Vue){
		 Vue.component("loading2",LoadComponent)
	}
}

export default loadingConfig;