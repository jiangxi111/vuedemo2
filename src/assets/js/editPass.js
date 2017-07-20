$(function(){
    //回车登录
    document.onkeydown = function (event){ 
    　　if (event.keyCode==13){
    　　　　$(".subEditPass").click();
        }
    };
    //旧密码
    $(".oldPassWord,.NewPassWord,.AgainPassWord").on('focus', function(event) {
    	$(".errorFrom").text("");
        focusFunction($(this));
    });
    $(".oldPassWord").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"旧密码不得为空");
        }
        else{
            if(thisValue.length<6){
                borderColor(thisObj,"#ff8574");
                ErrorMessAge(thisObj,"旧密码不得少于6位");
            }
            else{
                //ajax继续判断去后台旧密码
                borderColor(thisObj,"#e1e1e1");  
            }
           
        }
    });
    //新密码
    $(".NewPassWord").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"新密码不得为空");
        }
        else{
            if(thisValue.length<6){
                borderColor(thisObj,"#ff8574");
                ErrorMessAge(thisObj,"新密码不得少于6位");
            }
            else{
               
                borderColor(thisObj,"#e1e1e1");  
            }
           
        }
    });

     //确认新密码
    $(".AgainPassWord").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        var NewPassWord = $(".NewPassWord").val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"确认密码不得为空");
        }
        else{
            if(thisValue.length<6){
                borderColor(thisObj,"#ff8574");
                ErrorMessAge(thisObj,"确认密码不得少于6位");
            }
            else{
                if(thisValue!=NewPassWord){
                    borderColor(thisObj,"#ff8574");
                    ErrorMessAge(thisObj,"确认密码与新密码不一致");
                }
                else{
                    borderColor(thisObj,"#e1e1e1"); 
                }                 
            }
           
        }
    });


    //修改密码
    $(".subEditPass").on('click',  function() {
        var oldPassWord,oldPassWordObj,NewPassWord,NewPassWordObj,AgainPassWord,AgainPassWordObj;
            oldPassWordObj = $(".oldPassWord");//旧密码
            NewPassWordObj = $(".NewPassWord");//新密码
            AgainPassWordObj = $(".AgainPassWord");//确认密码
            oldPassWord = $.trim(oldPassWordObj.val());
            NewPassWord = $.trim(NewPassWordObj.val());
            AgainPassWord = $.trim(AgainPassWordObj.val());

            if(IsEmpty(oldPassWordObj)){
              borderColor(oldPassWordObj,"#ff8574");
              ErrorMessAge(oldPassWordObj,"旧密码不得为空");
              return false;
            }
            else{
                if(oldPassWord.length<6){
                     borderColor(oldPassWordObj,"#ff8574");
                     ErrorMessAge(oldPassWordObj,"旧密码不得少于6位");
                     return false;
                }
            }


            if(IsEmpty(NewPassWordObj)){
              borderColor(NewPassWordObj,"#ff8574");
              ErrorMessAge(NewPassWordObj,"新密码不得为空");
              return false;
            }
            else{
                if(NewPassWord.length<6){
                     borderColor(NewPassWordObj,"#ff8574");
                     ErrorMessAge(NewPassWordObj,"新密码不得少于6位");
                     return false;
                }
            }


            if(IsEmpty(AgainPassWordObj)){
              borderColor(AgainPassWordObj,"#ff8574");
              ErrorMessAge(AgainPassWordObj,"确认密码不得为空");
              return false;
            }
            else{
                if(AgainPassWord.length<6){
                     borderColor(AgainPassWordObj,"#ff8574");
                     ErrorMessAge(AgainPassWordObj,"确认密码不得少于6位");
                     return false;
                }
                else{
                    if(NewPassWord!=AgainPassWord){
                         borderColor(AgainPassWordObj,"#ff8574");
                         ErrorMessAge(AgainPassWordObj,"确认密码与新密码不一致");
                         return false;
                    }
                }
            }

            $("#resetPasswordForm").submit();



    });

})