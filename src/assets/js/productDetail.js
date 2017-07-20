var isCommitted = false;// 表单是否已经提交标识，默认为false
function post_submit_my(URL, PARAMS) {
	if (isCommitted == false) {
		isCommitted = true;// 提交表单后，将表单是否已经提交标识设置为true
		var temp = document.createElement("form");
		temp.action = URL;
		temp.method = "post";
		temp.style.display = "none";
		for ( var x in PARAMS) {
			var opt = document.createElement("textarea");
			opt.name = x;
			opt.value = PARAMS[x];
			temp.appendChild(opt);
		}
		document.body.appendChild(temp);
		temp.submit();
		return temp;
	} else {
		alert("系统正在响应中....");
		return false;// 返回false那么表单将不提交
	}
	
}




