
var flag_phone=false;
var flag_code=false;

$(function(){
	var validCode=true; 
	var ajaxT  = true;
	
	$("#kaptchaCode").click(function(){
        $(this).attr("src",$(this).attr("src") + "?" + Math.floor(Math.random()*100));
    });
//回车登录
document.onkeydown = function (event){ 
　　if (event.keyCode==13){
　　　　$(".subNext,.subForm,.verCode").click();
    }
};
//图形验证码
$(".code").on('focus', function(event) {
    focusFunction($(this));
});
$(".code").on('blur', function(event) {
  var codeObj = $(this);
  var codeVal = codeObj.val();
  if(IsEmpty(codeObj)){
    borderColor(codeObj,"#ff8574");
    ErrorMessAge(codeObj,"验证码不得为空");
}
  else{
    if(codeVal.length!=4){
      borderColor(codeObj,"#ff8574");
      ErrorMessAge(codeObj,"验证码为4位");
    }
    else{
      borderColor(codeObj,"#e1e1e1");  
    }
  }
});

$('.code').on('keyup', function(event) {
  var thisObj = $(this);
  IsNum(thisObj);
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
    focusFunction($(this));
});
$(".phoneNum").blur(function(){
    var  phoneNumObj = $(this);
    var  phoneNumVal = phoneNumObj.val();
    if(valiMobilePhone($(this))){//正确手机号
      $(this).css({"border-color":"#dcdcdc"});
      $.ajax({
      type: "POST",
      url: CONTEXT+'/public/check/phone',
      data: { phone:phoneNumVal  },
      dataType: "json",
      async:false,
      success: function(data){
      if(data=="1"){
    	  borderColor(phoneNumObj,"#ff8574");
          ErrorMessAge(phoneNumObj,"手机号码不存在");
          flag_phone=false;
      }else{
    	  DelErrorMessAge(phoneNumObj);
          borderColor(phoneNumObj,"#e1e1e1");  
          flag_phone=true;
      }
      },
      });
    }
    else{//错误手机号
      borderColor(phoneNumObj,"#ff8574");
      ErrorMessAge(phoneNumObj,"手机格式错误");
    }
});

//手机验证码

$('.verCode').on('focus',  function(event) {
  event.preventDefault();
  focusFunction($(this));
});
$('.verCode').on('blur', function(event) {
    event.preventDefault();
    var verCodeObj = $(this);
    var verCodeVal = verCodeObj.val();
  if($(this).val().length<4){
      borderColor(verCodeObj,"#ff8574");
      ErrorMessAge(verCodeObj,"请填写4位验证码");
  }
else{   
    $.ajax({
    type: "POST",
    url: CONTEXT+'/public/check/mobileVerifyCode',
    data: { phone:$(".phoneNum").val(),mobileVerifyCode:$("#mobileVerifyCode").val(),type:1},
    dataType: "json",
    success: function(data){
      if(data=="0"){
        borderColor(verCodeObj,"#ff8574");
        ErrorMessAge(verCodeObj,"验证码错误");
      }
      else{
        $.ajax({
          type: "POST",
          url: CONTEXT+'/public/check/mobileVerifyCodeValid',
          data: { phone:$(".phoneNum").val(),mobileVerifyCode:$("#mobileVerifyCode").val(),type:1},
          dataType: "json",
          success: function(data){
            if(data=="0"){
               borderColor(verCodeObj,"#ff8574");
               ErrorMessAge(verCodeObj,"验证码已过期");
            }else{
               DelErrorMessAge(verCodeObj);
               borderColor(verCodeObj,"#e1e1e1");  
               flag_code=true;
            }
          },
      });
      }
    },
});
}
});

//倒计时
//图形验证码
var codeObj = $(".code");
var codeVal = codeObj.val();
//手机号
var  phoneNumObj = $(".phoneNum");
var  phoneNumVal = phoneNumObj.val();
$(".daojishi").click (function() {
//判断手机好好是否正确
if(!flag_phone){
	return false;
}
//此处判断是否填写验证码 
$.ajax({
     type: "POST",
     url: CONTEXT+'/public/check/mobileVerifyImageCode',
     data: { imageCode:$(".code").val()},
     dataType: "json",
     async:false,
     success: function(data){
         if(data=="0"){
           borderColor(codeObj,"#ff8574");
           ErrorMessAge(codeObj,"图形验证码错误");
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
    borderColor(codeObj,"#ff8574");
    ErrorMessAge(codeObj,"手机格式错误");
    return false; 
}
if(validCode) {
   validCode=false;
   $(".daojishi").attr("value","发送中...");
   $(".daojishi").css({
       "color": '#666',
       "background": '#dcdcdc'
      });
   //加密
    var b = new Base64();  
    var strPhone = b.encode($(".phoneNum").val());
   
//请求后台接口
 $.ajax({
       type: "POST",
       url:  CONTEXT + "/public/sendCodeWhenForget",
       data: { mobilePhoneNo:strPhone},
       success: function(data){
         var obj = JSON.parse(data);
         if(obj.state==0){
          borderColor(phoneNumObj,"#ff8574");
          ErrorMessAge(phoneNumObj,obj.msg);
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





$(".subNext").on('click', function() {
  var flageCom=flag_phone&&flag_code;
  var flage = false
  var code,codeBtObj,phoneNum,phoneNumObj,verCode,verCodeObj;
  codeObj = $(".code");
  code = stripscript($.trim(codeObj.val()));
  phoneNumObj = $(".phoneNum");
  phoneNum =phoneNumObj.val();
  verCodeObj = $(".verCode");
  verCode =verCodeObj.val();
  //图形验证码
  if(IsEmpty(codeObj)){
    borderColor(codeObj,"#ff8574");
    ErrorMessAge(codeObj,"验证码不得为空");
    return false;
  }
  /*else{
      //ajax后台验证手机号
  }*/
  //手机号
  if(IsEmpty(phoneNumObj)){
        borderColor(phoneNumObj,"#ff8574");
        ErrorMessAge(phoneNumObj,"请填写手机号");
        return false;
   }
  if(!valiMobilePhone(phoneNumObj))
    {
       return false;
    }
  
  //手机验证码
   if(IsEmpty(verCodeObj)){
      borderColor(verCodeObj,"#ff8574");
      ErrorMessAge(verCodeObj,"手机验证码不得为空");
      return false;
   }
   /*else{
     //ajax后台验证
   }*/
   if(flageCom){
	  $(".check_form").submit();
   }
});


$(function(){
    $(".newPassword,.confiPassword").on('focus', function(event) {
        focusFunction($(this));
    });
    $(".newPassword").on('blur', function(event) {
      var newPasswordObj = $(this);
      var newPasswordVal = newPasswordObj.val();
      if(IsEmpty(newPasswordObj)){
        borderColor(newPasswordObj,"#ff8574");
        ErrorMessAge(newPasswordObj,"新密码不得为空");
    }
    else{
        if(newPasswordVal.length<6){
          borderColor(newPasswordObj,"#ff8574");
          ErrorMessAge(newPasswordObj,"新密码不得为空6位");
        }
        else{
          borderColor(newPasswordObj,"#e1e1e1");  
        }
      }
    });

    $(".confiPassword").on('blur', function(event) {
      var confiPasswordObj = $(this);
      var confiPasswordVal = confiPasswordObj.val();
      if(IsEmpty(confiPasswordObj)){
        borderColor(confiPasswordObj,"#ff8574");
        ErrorMessAge(confiPasswordObj,"确认密码不得为空");
      }
      else if($.trim($(".newPassword").val())!=$(this).val()){
            borderColor(confiPasswordObj,"#ff8574");
            ErrorMessAge(confiPasswordObj,"确认密码与设置密码不一致");
       }
       else{
            // DelErrorMessAge(confiPasswordObj);
            // borderColor(confiPasswordObj,"#e1e1e1"); 
       }
    });
    $(".subForm").on('click',  function(event) {
      event.preventDefault();
      var newPassword,newPasswordObj,confiPassword,confiPasswordObj;
      newPasswordObj = $(".newPassword");
      newPassword = newPasswordObj.val();
      confiPasswordObj = $(".confiPassword");
      confiPassword = confiPasswordObj.val();
      //密码
    if(IsEmpty(newPasswordObj)){
          borderColor(newPasswordObj,"#ff8574");
          ErrorMessAge(newPasswordObj,"密码不得为空");
          return false;
    }
    else if(newPassword.length<6||newPassword.length>35)
    {
          borderColor(newPasswordObj,"#ff8574");
          ErrorMessAge(newPasswordObj,"请填写6-35密码");
          return false;
    }
  //确认密码
  if(IsEmpty(confiPasswordObj)){     
          borderColor(confiPasswordObj,"#ff8574");
          ErrorMessAge(confiPasswordObj,"请填写6-35确认密码");
          return false;
  }
  else if(newPassword!=confiPassword)
    {
          borderColor(confiPasswordObj,"#ff8574");
          ErrorMessAge(confiPasswordObj,"确认密码与设置密码不一致");
          return false;
    }
    $(".reg_form").submit();
  });
  
})




