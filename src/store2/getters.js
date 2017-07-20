export default {
	getCount:(state)=>{
		return state.count;
	},
	getOdd:(state)=>{
		return state.count%2?"偶数":"奇数";
	},
	getHeaderShow(state){
		return state.header
	},
	getLoading(state){
        return state.loading
	}
}