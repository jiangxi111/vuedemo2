import LoadComponent from'./load-box.vue'
const loadingConfig ={
	install:function(Vue){
		 Vue.component("loading",LoadComponent)
	}
}

export default loadingConfig;