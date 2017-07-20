$(function(){
    //真实姓名
    $(".realyName").on('focus', function(event) {
    	$(".errorForm").html("");
        focusFunction($(this));
    });
    $(".realyName").on('blur', function(event) {
    	
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"真实姓名不得为空");
        }
        else{
            borderColor(thisObj,"#e1e1e1");  
        }
    });

    //身份证号
    $(".idNumber").on('focus', function(event) {
    	$(".errorForm").html("");
        focusFunction($(this));
    });
    $(".idNumber").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"身份证号不得为空");
        }
        else{
            if(checkIdcard(thisValue)){
                borderColor(thisObj,"#e1e1e1");
            }
            else{
                 borderColor(thisObj,"#ff8574");
                 ErrorMessAge(thisObj,"身份证号错误");
            }              
        }      
    });
    //服务协议
    $(".checkSel").on('click', function(event) {
        event.preventDefault();
        var attrVal = $(this).attr("checkTure");
        if(attrVal=="true"){
        	$("#agrement").val("");
            $(this).attr("checkTure","false").css({
                background: "URL("+CONTEXT+"/htmlPage/images/noSel.png) no-repeat center left"
            });            
        }
        if(attrVal=="false"){
        	$("#agrement").val(1);
            $(this).attr("checkTure","true").css({
                background: "URL("+CONTEXT+"/htmlPage/images/sel.png) no-repeat center left"          
            });
        }
    });

    $(".subKaitong").on('click',function(event) {
         var realyName, realyNameObj, idNumber, idNumberObj, phoneNumber, phoneNumberObj;
         realyNameObj = $(".realyName");
         idNumberObj = $(".idNumber");
         phoneNumberObj = $(".phoneNumber");
         realyName = $.trim(realyNameObj.val());
         idNumber = $.trim(idNumberObj.val());
         phoneNumber = $.trim(phoneNumberObj.val());

         if(IsEmpty(realyNameObj)){
             borderColor(realyNameObj,"#ff8574");
             ErrorMessAge(realyNameObj,"真实姓名不得为空");
             return false;
         }

         if(IsEmpty(idNumberObj)){
             borderColor(idNumberObj,"#ff8574");
             ErrorMessAge(idNumberObj,"身份证号不得为空");
             return false;
         }
         else{
              if(checkIdcard(idNumber)){
                borderColor(idNumberObj,"#e1e1e1");
              }
             else{
                 borderColor(idNumberObj,"#ff8574");
                 ErrorMessAge(idNumberObj,"身份证号错误");
                 return false;
             }    
         }


         var attrVal = $(".checkSel").attr("checkTure");
         if(attrVal=="false"){
        	 $(".errorForm").html("请勾选《速贷邦资金托管协议》");
             return false;
         }
         
         $("#realNameForm").submit();

    });
    
})