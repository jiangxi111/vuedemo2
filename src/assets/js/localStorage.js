	var LocalEvent  = function(key){
			this.save=(value)=>{
				 localStorage.setItem(key,JSON.stringify(value));
			},
			this.get=()=>{
				return JSON.parse(localStorage.getItem(key))||[];
			},
			this.clear=()=>{
				localStorage.removeItem(key);
			}
	};