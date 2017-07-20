
//form表单注册-------控件验证效果
var flag_phone=false;
var flag_code=false;

$(function(){
    $("#kaptchaCode").click(function(){
        $(this).attr("src",$(this).attr("src") + "?" + Math.floor(Math.random()*100));
    });
});
$(function(){
  $(".tuXingCode").on("focus",function(){
    $(this).val("");
    $("#vCode1").click();
  });
});

$(function(){
  
  //图形验证码
  $(".tuXingCode").on('blur',function(event){
      if($(this).val().length==0){
        if(!$(this).parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                 $(this).css({"border-color":"#F3696E"});
                 $(this).parent(".errorDiv").after("<p class='errInfo'>请填写图形验证码</p>");
             }
         }
        else{
          $.ajax({
                  type: "POST",
                  url: CONTEXT+'/public/check/mobileVerifyImageCode',
                  data: { imageCode:$(".tuXingCode").val()},
                  dataType: "json",
                  success: function(data){
                      if(data=="0"){
                        if(!$(".tuXingCode").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                              $(".tuXingCode").css({"border-color":"#F3696E"});
                              $(".tuXingCode").parent(".errorDiv").after("<p class='errInfo'>图形验证码错误</p>");
                        }
                      }
                      else{
                        $(".tuXingCode").css({"border-color":"#dcdcdc"});
                      }
                  },
              });
        }
  });
  
  
  $('.tuXingCode').on('focus',  function(event) {
        event.preventDefault();
        $(this).css({"border-color":"#0395E3"});
        $(this).parent(".errorDiv").siblings("p.errInfo").remove();
        $("#kaptchaCode").click();
    });
    //手机号
    $('.phoneNum').on('keyup', function(event) {
        event.preventDefault();
        var thisVal = this.value=this.value.replace(/\s/g,'');
        if(isNaN(thisVal)){
            $(this).onfocus;  
            $(this).val("");   
        } 
    });
    
    $('.phoneNum').on('focus',  function(event) {
        event.preventDefault();
        $(this).css({"border-color":"#0395E3"});
        $(this).parent(".errorDiv").siblings("p.errInfo").remove();
    });
    
  //推荐人手机号
    $('.recommendPhoneNo').on('keyup', function(event) {
        event.preventDefault();
        var thisVal = this.value=this.value.replace(/\s/g,'');
        if(isNaN(thisVal)){
            $(this).onfocus;  
            $(this).val("");   
        } 
    });
    $('.recommendPhoneNo').on('focus',  function(event) {
        event.preventDefault();
        $(this).css({"border-color":"#0395E3"});
        $(this).parent(".errorDiv").siblings("p.errInfo").remove();
    });
    
    $(".phoneNum").blur(function(){
        if(valiMobilePhone($(this))){//正确手机号
             $(this).css({"border-color":"#dcdcdc"});
             $.ajax({
                 type: "POST",
                 url: CONTEXT+'/public/check/phone',
                 data: { phone:$("#mobilePhoneNo").val()  },
                 dataType: "json",
                 success: function(data){
                  if(data=="1"){
                      $(".phoneNum").parent(".errorDiv").siblings('.errInfo').remove();
                      flag_phone=true;
                    }else{
                      if(!$(this).parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){    
                        $(".phoneNum").parent(".errorDiv").siblings('.errInfo').remove();
                            $(".phoneNum").css({"border-color":"#F3696E"});
                             $(".phoneNum").parent(".errorDiv").after("<p class='errInfo'>手机号码已经存在</p>");
                       }
                     }
                 },
             });
        }
        else{//错误手机号
            if(!$(this).parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(this).css({"border-color":"#F3696E"});
                $(this).parent(".errorDiv").after("<p class='errInfo'>手机格式错误</p>");
            }
        }
        
    });
    //验证码
    $('.verCode').on('focus',  function(event) {
        event.preventDefault();
        $(this).css({"border-color":"#0395E3"});
        $(this).parent(".errorDiv").siblings("p.errInfo").remove();
        var secondInfo = $.trim($(".phoneNum").parent(".errorDiv").siblings("p.errInfo").text());
        if(secondInfo=="距离上次发送时间要超过一分钟"){
          $('.phoneNum').parent(".errorDiv").siblings('.errInfo').remove();
        }
    });
    $('.verCode').on('blur', function(event) {
        event.preventDefault();
        if($(this).val().length<4){
             if(!$(this).parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(this).css({"border-color":"#F3696E"});
                $(this).parent(".errorDiv").after("<p class='errInfo'>请填写4位验证码</p>");
            }
        }
        else{           
            if($(this).val().length==4){
            $.ajax({
                    type: "POST",
                    url: CONTEXT+'/public/check/mobileVerifyCode',
                    data: { phone:$("#mobilePhoneNo").val(),mobileVerifyCode:$("#mobileVerifyCode").val(),type:0},
                    dataType: "json",
                    success: function(data){
                        if(data=="0"){
                          $('.verCode').parent(".errorDiv").siblings('.errInfo').remove();
                          if(!$('.verCode').parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                            $('.verCode').css({"border-color":"#F3696E"});
                              $('.verCode').parent(".errorDiv").after("<p class='errInfo'>验证码错误</p>");
                          }
                        }else{
                          $('.verCode').parent(".errorDiv").siblings('.errInfo').remove();
                          flag_code=true;
                          $.ajax({
                          type: "POST",
                          url: CONTEXT+'/public/check/mobileVerifyCodeValid',
                          data: { phone:$("#mobilePhoneNo").val(),mobileVerifyCode:$("#mobileVerifyCode").val(),type:0},
                          dataType: "json",
                          success: function(data){
                            if(data=="0"){
                              if(!$('.verCode').parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                                $('.verCode').css({"border-color":"#F3696E"});
                                $('.verCode').parent(".errorDiv").after("<p class='errInfo'>验证码已过期</p>");
                              }
                              flag_code=false;
                            }else{
                              flag_code=true;
                            }
                          },
                        });
                        }
                    },
                });
            }
        }
        
    });

   //密码
    $('.password').on('focus',  function(event) {
        event.preventDefault();
        $(this).css({"border-color":"#0395E3"});
        $(this).parent(".errorDiv").siblings("p.errInfo").remove();       
    });
   $(".password").on('blur', function(event) {
       event.preventDefault();
       if($(this).val().length<6||$(this).val().length>35){
             if(!$(this).parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(this).css({"border-color":"#F3696E"});
                $(this).parent(".errorDiv").after("<p class='errInfo'>请填写6-35位密码</p>");
            }
        }
       else{
            $(this).css({"border-color":"#dcdcdc"});
            $(this).parent(".errorDiv").siblings("p.errInfo").remove();
       }
   });
   //确认密码
   $(".passWordAgain").on('focus', function(event) {
        event.preventDefault();
        $(this).css({"border-color":"#0395E3"});
        $(this).parent(".errorDiv").siblings("p.errInfo").remove(); 
   });
   $(".passWordAgain").on('blur', function(event) {
       if($(this).val()==null||$(this).val()==""){
          if(!$(this).parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(this).css({"border-color":"#F3696E"});
                $(this).parent(".errorDiv").after("<p class='errInfo'>确认密码不得为空</p>");
            }
       }
       else if($.trim($(".password").val())!=$(this).val()){
          if(!$(this).parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(this).css({"border-color":"#F3696E"});
                $(this).parent(".errorDiv").after("<p class='errInfo'>确认密码与设置密码不一致</p>");
            }
       }
       else{
            $(this).css({"border-color":"#dcdcdc"});
            $(this).parent(".errorDiv").siblings("p.errInfo").remove();
       }
   });
   //用户名
    $('.userName').on('focus',  function(event) {
        event.preventDefault();
        $(this).css({"border-color":"#0395E3"});
        $(this).parent(".errorDiv").siblings("p.errInfo").remove();       
    });
   $(".userName").on('blur', function(event) {
       event.preventDefault();
      
       if($(this).val().length==0){
         if(!$(this).parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(this).css({"border-color":"#F3696E"});
                $(this).parent(".errorDiv").after("<p class='errInfo'>请填写姓名</p>");
            }
        }
       else{
    	   $.getJSON(CONTEXT+'/public/check/username?userName=' + $(this).val(), function(o){
               if(!o){
            	   $(".userName").css({"border-color":"#F3696E"});
                   $(".userName").parent(".errorDiv").after("<p class='errInfo'>用户名已经被注册</p>");
               }else{
            	   $(".userName").css({"border-color":"#dcdcdc"});
                   $(".userName").parent(".errorDiv").siblings("p.errInfo").remove();
               }
           })
            
       }
   });
})




//注册_获取短信验证码
$(function  () {    
    var validCode=true; 
    var ajaxT  = true;
   
    $(".daojishi").click (function() {
      
      $(".phoneNum").parent(".errorDiv").siblings("p.errInfo").remove();
      $(".tuXingCode").parent(".errorDiv").siblings("p.errInfo").remove();
      //此处判断是否填写验证码      
       $.ajax({
             type: "POST",
             url: CONTEXT+'/public/check/mobileVerifyImageCode',
             data: { imageCode:$(".tuXingCode").val()},
             dataType: "json",
             async:false,
             success: function(data){              
                 if(data=="0"){
                   if(!$(".tuXingCode").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                         $(".tuXingCode").css({"border-color":"#F3696E"});
                         $(".tuXingCode").parent(".errorDiv").after("<p class='errInfo'>图形验证码错误</p>");
                     }
                   ajaxT = false;
                 }else{
                   ajaxT = true;
                 }
             },
             error:function(error){
               ajaxT = false;
             }
         });
     
     if(!ajaxT){
       return false;
     }
     
       if(!valiMobilePhone($(".phoneNum"))){
            if(!$(".phoneNum").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                    $(".phoneNum").css({"border-color":"#F3696E"});
                    $(".phoneNum").parent(".errorDiv").after("<p class='errInfo'>手机格式错误</p>");
            }
            return false; 
        }
    
       if (validCode) {
           validCode=false;
           $(".daojishi").attr("value","发送中...");
           $(".daojishi").css({
               "color": '#666',
               "background": '#dcdcdc'
              });
           //加密
            var b = new Base64();  
            var strPhone = b.encode($("#mobilePhoneNo").val());
           
        //请求后台接口
         $.ajax({
               type: "POST",
               url:  CONTEXT + "/mobileapi/app/sendMobileVerifyCodeNewJson",
               data: { mobilePhoneNo:strPhone},
               success: function(data){
                 var obj = JSON.parse(data);
                 if(obj.state==0){
                  if(!$(".phoneNum").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                    $(".phoneNum").css({"border-color":"#F3696E"});
                      $(".phoneNum").parent(".errorDiv").after("<p class='errInfo'>"+obj.msg+"</p>");
                  }
                  validCode=true;
                  $(".daojishi").attr("value","获取验证码");
                  $(".daojishi").css({
                        "color": '#fff',
                        "background": '#0395e3 '
                    });
                  
                 } 
                 else{                  
                    $('.phoneNum').attr('readonly','readonly');        
                    var times=120;
                    var code=$(".daojishi");
                       
                        var t=setInterval(function  () {
                            times--;
                            code.val(times+"s后重新获取");
                          
                            if (times==0) {
                                clearInterval(t);
                                code.val("获取验证码");
                                validCode=true;
                                $('.phoneNum').removeAttr("readonly");
                                $(".daojishi").css({
                                    "color": '#fff',
                                    "background": '#0395e3 '
                                });
                               
                            }
                        },1000)             
                    
                 }
               }
           });
         
       }
   


    })
});

$(function  () {  
//提交注册
$(".subReg").on("click",function(){

// function regFu(){
	var flag=flag_phone&&flag_code;
    var phoneNum, verCode, password,passWordAgain, userName, flage = false;
    var phoneNum = $.trim($(".phoneNum").val());
    var verCode = $.trim($(".verCode").val());
    var password = $.trim($(".password").val());
    var passWordAgain = $.trim($(".passWordAgain").val());
    var userName = $.trim($(".userName").val());
    var ajaxZ = true;
    var ajaxCode = true;
    
     //用户名
    if(userName==""||userName==null){
         if(!$(".userName").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(".userName").css({"border-color":"#F3696E"});
                $(".userName").parent(".errorDiv").after("<p class='errInfo'>请填写姓名</p>");
          }
        return false;
    }
    else
    {
        flage = true;
    }

    //密码
    if(password==""||password==null){
         if(!$(".password").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(".password").css({"border-color":"#F3696E"});
                $(".password").parent(".errorDiv").after("<p class='errInfo'>请填写6-35密码</p>");
          }
        return false;
    }
    else if(password.length<6||password.length>35)
    {
          if(!$(".password").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(".password").css({"border-color":"#F3696E"});
                $(".password").parent(".errorDiv").after("<p class='errInfo'>请填写6-35密码</p>");
          }
        return false;
    }
    else
    {
        flage = true;
    }
   
  //确认密码
  if(passWordAgain==null||passWordAgain==""){
     if(!$(".passWordAgain").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(".passWordAgain").css({"border-color":"#F3696E"});
                $(".passWordAgain").parent(".errorDiv").after("<p class='errInfo'>请填写6-35确认密码</p>");
          }
      return false;
  }
  else if(password!=passWordAgain)
    {
          if(!$(".passWordAgain").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(".passWordAgain").css({"border-color":"#F3696E"});
                $(".passWordAgain").parent(".errorDiv").after("<p class='errInfo'>确认密码与设置密码不一致</p>");
          }
        return false;
    }
    else
    {
        flage = true;
    }
  //图形验证码
   $.ajax({
        type: "POST",
        url: CONTEXT+'/public/check/mobileVerifyImageCode',
        data: { imageCode:$(".tuXingCode").val()},
        dataType: "json",
        async:false,
        success: function(data){               
            if(data=="0"){
              if(!$(".tuXingCode").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                    $(".tuXingCode").css({"border-color":"#F3696E"});
                    $(".tuXingCode").parent(".errorDiv").after("<p class='errInfo'>图形验证码错误</p>");
                }
              ajaxZ = false;
            }else{
              ajaxZ = true;
            }
        },
        error:function(error){
          ajaxZ = false;
        }
    });

  if(!ajaxZ){
     return false;
  }

    //if(flag){
  //手机号
    if(phoneNum==""||phoneNum==null){
         if(!$(".phoneNum").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(".phoneNum").css({"border-color":"#F3696E"});
                $(".phoneNum").parent(".errorDiv").after("<p class='errInfo'>请填写手机号</p>");
          }
        return false;
    }
    else if(valiMobilePhone($(".phoneNum")))
    {
          
              $.ajax({
                  type: "POST",
                  url: CONTEXT+'/public/check/phone',
                  data: { phone:$("#mobilePhoneNo").val()  },
                  dataType: "json",
                  success: function(data){
                      if(data=="0"){
                          if(!$(".phoneNum").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){    
                            
                              $(".phoneNum").css({"border-color":"#F3696E"});
                              $(".phoneNum").parent(".errorDiv").after("<p class='errInfo'>手机号码已经存在</p>");
                              return false;
                           }
                      }else{
                          
                      }
                  },
              });
          }

    else
    {
        flage = true;
    }
    
    //验证码
    if(verCode==""||verCode==null){
         if(!$(".verCode").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(".verCode").css({"border-color":"#F3696E"});
                $(".verCode").parent(".errorDiv").after("<p class='errInfo'>请填写4位验证码</p>");
          }
        return false;
    }
    else if(verCode.length<4)
    {
       
          if(!$(".verCode").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                $(".verCode").css({"border-color":"#F3696E"});
                $(".verCode").parent(".errorDiv").after("<p class='errInfo'>请填写4位验证码</p>");
          }
        return false;
    }
    else
    {
    	
      $.ajax({
            type: "POST",
            url: CONTEXT+'/public/check/mobileVerifyCode',
            data: { phone:$("#mobilePhoneNo").val(),mobileVerifyCode:$("#mobileVerifyCode").val(),type:0},
            dataType: "json",
            async:false,
            success: function(data){
            	
                if(data=="0"){
                   if(!$(".verCode").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                       $(".verCode").css({"border-color":"#F3696E"});
                       $(".verCode").parent(".errorDiv").after("<p class='errInfo'>验证码错误</p>");
                   }
                   ajaxCode = false;
                }else{
                     $(".errorSection").children('p').remove();
                    $.ajax({
                        type: "POST",
                        url: CONTEXT+'/public/check/mobileVerifyCodeValid',
                        data: { phone:$("#mobilePhoneNo").val(),mobileVerifyCode:$("#mobileVerifyCode").val(),type:0},
                        dataType: "json",
                        async:false,
                        success: function(data){
                            if(data=="0"){
                              if(!$(".verCode").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
                                  $(".verCode").css({"border-color":"#F3696E"});
                                  $(".verCode").parent(".errorDiv").after("<p class='errInfo'>验证码已过期</p>");
                              }
                              ajaxCode = false;
                            }
                        },
                    });
                    //return false;
                }
            },
        });
      
       // flage = true;
    }
    
    if(!ajaxCode){
    	return false;
    }

  
    var attrVal = $(".checkSel").attr("checkTure");
    if(attrVal=="false"){
    	$("#protocol").val(null);
    	if(!$(".checkSel").parent(".errorDiv").siblings('.errInfo').hasClass('errInfo')){
            $(".checkSel").css({"border-color":"#F3696E"});
            $(".checkSel").parent(".errorDiv").after("<p class='errInfo'>请勾选《速贷邦网站用户服务协议》</p>");
        }
        return false;
    }
    else{
    	$("#protocol").val(1);
        flage = true;
    }
    if(flage&&flag){
      
        $(".subReg").attr("disabled",true);
    	$(".subReg").attr("value","注册中...")
    	.css({
        	"background":"#ccc"
        });
        
    	$.ajax({
            type: "POST",
            url: CONTEXT+'/save',
            data: { userName:userName,mobilePhoneNo:phoneNum,mobileVerifyCode:verCode,password:password,
            			confirmPassWord:passWordAgain,agreement:$("#protocol").val(),refereeMobilePhoneNo:$(".recommendPhoneNo").val()},
            dataType: "json",
            success: function(data){  
            	if(data.state=="1"){
                	window.location.href=CONTEXT+"/register_success";
                }else{
                	 $(".subReg")
                     .css({
                     	"background":"#02ADEA"
                     })
                     .val("注册")
                     .removeAttr("disabled");
                	if(data.state=="-1"){
                   	 borderColor($(".userName"),"#FF4141");
                   	 errorMsg($(".userName"),data.msg);
                   }else if(data.state=="-2"){
                   	borderColor($(".password"),"#FF4141");
                  	 	errorMsg($(".password"),data.msg);
                   }else if(data.state=="-3"){
                   	borderColor($(".passWordAgain"),"#FF4141");
                  	 	errorMsg($(".passWordAgain"),data.msg);
                   }else if(data.state=="-5"){
                   	borderColor($(".phoneNum"),"#FF4141");
                  	 	errorMsg($(".phoneNum"),data.msg);
                   }else if(data.state=="-6"){
                   	borderColor($(".verCode"),"#FF4141");
                  	 	errorMsg($(".verCode"),data.msg);
                   }else if(data.state=="-7"){
                   	borderColor($(".recommendPhoneNo"),"#FF4141");
                  	 	errorMsg($(".recommendPhoneNo"),data.msg);
                   }else if(data.state=="-8"){
                   	borderColor($(".checkSel"),"#FF4141");
                  	 	errorMsg($(".checkSel"),data.msg);
                   }else{
                   	borderColor($(".checkSel"),"#FF4141");
                  	 	errorMsg($(".checkSel"),"注册失败");
                   }
                }
            },
            error:function(error){
            	$(".subReg")
                .css({
                	"background":"#02ADEA"
                })
                .val("注册")
                .removeAttr("disabled");
                alert("注册失败");
            }
        });
    }
	
})
 })

//判断是否同意条款
$(function(){
    $(".checkSel").on('click', function(event) {
        event.preventDefault();
        var attrVal = $(this).attr("checkTure");
        if(attrVal=="true"){
        	$("#protocol").val(1);
            $(this).attr("checkTure","false").css({
                background: "URL("+CONTEXT+"/htmlPage/images/noSel.png) no-repeat center left"
            });            
        }
        if(attrVal=="false"){
        	$(this).parent().siblings(".errInfo").remove();
        	$("#protocol").val(null);
            $(this).attr("checkTure","true").css({
                background: "URL("+CONTEXT+"/htmlPage/images/sel.png) no-repeat center left"          
            });
        }
    });
})






//添加错误提示信息
function errorMsg(thisObj,errorText){
	delErrorMsg(thisObj);
    thisObj.parents(".errorDiv").after('<p class="errInfo">'+errorText+'</p>')
}

//删除错误提示信息
function delErrorMsg(thisObj){
    thisObj.parents(".errorDiv").siblings(".errInfo").remove();   
}
















