export const timeFun =(timestamp)=>{
var d = new Date(timestamp * 1000);    //根据时间戳生成的时间对象
var date = (d.getFullYear()) + "-" + 
           (d.getMonth() + 1) + "-" +
           (d.getDate()) + " " + 
           (d.getHours()) + ":" + 
           (d.getMinutes()) + ":" + 
           (d.getSeconds());
    return date;
}


export const moeny=(value,type)=>{
	return type+value.toFixed(2)
}