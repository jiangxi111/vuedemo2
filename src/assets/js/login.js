


$(function(){
	//回车登录
	document.onkeydown = function (event){ 
	　　if (event.keyCode==13){
	　　　　$(".subLogin").click();
		}
	};
	
    // 正常颜色值：#e1e1e1
    // 获得焦点颜色值：#02ADEA
    // 错误颜色值：#ff8574
      

    //用户名
    $(".userNamephone").on('focus', function(event) {
        focusFunction($(this));
        $(".errorBox").hide();
        $(".messageError").html("");        
    });
    $(".userNamephone").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"用户名不得为空");
        }
        else{
            borderColor(thisObj,"#e1e1e1");  
        }
    });


    //密码
    $(".passWord").on('focus', function(event) {
        focusFunction($(this));
        $(".errorBox").hide();
        $(".messageError").html("");
    });
    $(".passWord").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"密码不得为空");
        }
        else{
            borderColor(thisObj,"#e1e1e1");  
        }
    });



    //验证码
    $(".code").on('focus', function(event) {
       focusFunction($(this));
       $(".errorBox").hide();
       $(".messageError").html("");
    });
    $(".code").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"验证码不得为空");
        }
        else{
            if(thisValue.length!=4){
                borderColor(thisObj,"#ff8574");
                ErrorMessAge(thisObj,"验证码为4位");
            }
            else{
                 borderColor(thisObj,"#e1e1e1");  
            }
        }
    });


    $('.code').on('keyup', function(event) {
        var thisObj = $(this);
        IsNum(thisObj);
    });

});




//登录提交

$(".subLogin").on('click', function() {
   // loadingFun();
   

   var userNamephone, passWord, code,userNamephoneObj, passWordObj, codeBtObj;
   userNamephoneObj = $(".userNamephone");
   passWordObj = $(".passWord");
   codeObj = $(".code");
   userNamephone = stripscript($.trim(userNamephoneObj.val()));
   passWord = stripscript($.trim(passWordObj.val()));
   code = stripscript($.trim(codeObj.val()));
   if(IsEmpty(userNamephoneObj)){
     borderColor(userNamephoneObj,"#ff8574");
     ErrorMessAge(userNamephoneObj,"用户名不得为空");
     return false;
   }
   if(IsEmpty(passWordObj)){
     borderColor(passWordObj,"#ff8574");
     ErrorMessAge(passWordObj,"密码不得为空");
     return false;
   }
   if(kacode){
	   if(IsEmpty(codeObj)){
		     borderColor(codeObj,"#ff8574");
		     ErrorMessAge(codeObj,"验证码不得为空");
		     return false;
		}
   }
   $("#loginForm").submit();
});





