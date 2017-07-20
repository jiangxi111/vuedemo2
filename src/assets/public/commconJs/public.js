//手机号验证
function valiMobilePhone(obj){
    var phone = obj.val();
    if(phone == "" || phone == null){ 
        obj.onfocus;  
        return false; 
    } 

    if(!phone.match(/^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/)){  
        obj.onfocus;
        return false; 
    } 
 return true; 
}


//判断是否是邮箱
function IsEimal(objVal){
   
    var reg= /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;    
    if (!reg.test(objVal)){
  return false;
}
    return true;
}




/*************事件冒泡Begin****************/
function estop(e){
    var e=arguments.callee.caller.arguments[0]||event;
    if (e && e.stopPropagation){
        //因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    }else{
        //否则，我们需要使用IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
        return false;
    }
}
/*************事件冒泡End****************/


/**************弹出框 Begin*******************/
    //显示黑色 jQuery 遮罩层
function platBt(popCon) {

    $("#BgMask").remove();
    $("body").prepend("<div id='BgMask'></div> ");
    var bh = $("body").height();
    var bw = $("body").width();
    var Wbh = $(window).height();
    var Wbw = $(window).width();
    var Wleft =(Wbw-$("#"+popCon).width())/2;
    if(Wbh>bh){
        bh=Wbh;
    }
    $("#BgMask").css({
        height:bh,
        width:bw
    });

    $("#"+popCon).css({
        left:Wleft
    });
    // $("#BgMask").fadeIn(1000);
    // $("#"+popCon).fadeIn(500);
}
//关闭黑色 jQuery 遮罩
function plateClose(popCon) {
    $("#"+popCon).fadeOut(500);
    $("#BgMask").fadeOut(500,function(){
        $("#BgMask").remove();
    });
} ;

/**************弹出框 END*******************/




// Base64加密
   
function Base64() {  
   
    // private property  
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  
   
    // public method for encoding  
    this.encode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = _utf8_encode(input);  
        while (i < input.length) {  
            chr1 = input.charCodeAt(i++);  
            chr2 = input.charCodeAt(i++);  
            chr3 = input.charCodeAt(i++);  
            enc1 = chr1 >> 2;  
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
            enc4 = chr3 & 63;  
            if (isNaN(chr2)) {  
                enc3 = enc4 = 64;  
            } else if (isNaN(chr3)) {  
                enc4 = 64;  
            }  
            output = output +  
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
        }  
        return output;  
    }  
   
    // public method for decoding  
    this.decode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3;  
        var enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
        while (i < input.length) {  
            enc1 = _keyStr.indexOf(input.charAt(i++));  
            enc2 = _keyStr.indexOf(input.charAt(i++));  
            enc3 = _keyStr.indexOf(input.charAt(i++));  
            enc4 = _keyStr.indexOf(input.charAt(i++));  
            chr1 = (enc1 << 2) | (enc2 >> 4);  
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
            chr3 = ((enc3 & 3) << 6) | enc4;  
            output = output + String.fromCharCode(chr1);  
            if (enc3 != 64) {  
                output = output + String.fromCharCode(chr2);  
            }  
            if (enc4 != 64) {  
                output = output + String.fromCharCode(chr3);  
            }  
        }  
        output = _utf8_decode(output);  
        return output;  
    }  
   
    // private method for UTF-8 encoding  
    _utf8_encode = function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
            var c = string.charCodeAt(n);  
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            } else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            } else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  
   
        }  
        return utftext;  
    }  
   
    // private method for UTF-8 decoding  
    _utf8_decode = function (utftext) {  
        var string = "";  
        var i = 0;  
        var c = c1 = c2 = 0;  
        while ( i < utftext.length ) {  
            c = utftext.charCodeAt(i);  
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            } else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            } else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }  
}  


// Base64加密


// 顶部微信弹窗Begin
$(function(){
    $(".weixinTop").on('click', function(event) {
        event.preventDefault();
        estop(event);
        $(".weixinTopCon").toggle();
        $(".phoneTopCon").hide();
        
    });

    $("body,html").on('click', function(event) {   
        estop(event);
        $(".weixinTopCon").hide();
        
    });
    
    $(".phoneTop").on('click', function(event) {
        event.preventDefault();
        estop(event);
        $(".phoneTopCon").toggle();
        $(".weixinTopCon").hide();
        
    });

    $("body,html").on('click', function(event) {   
        estop(event);
        $(".phoneTopCon").hide();
        
    });
    
});




/*************二级导航效果 Begin***************/

/*************二级导航效果 End***************/



 //动画返回顶部
$(function(){
        $("#top").bind('click', go);
        $(window).on('scroll',  function(event) {
            event.preventDefault();
            potop($(window).height());
        });
    })   
    function go(){
    if($(window).scrollTop()!=0){
        if(!$("html,body").is(":animated")){
          $('html,body').animate({
            scrollTop:0
          }, 800);
        }
      }
    }
    //直接返回顶部
    function goTop(){
        $("html,body").scrollTop(0);
    }
    function potop(valheight){
        if($(window).scrollTop()>valheight){
            $("#top").fadeIn();
        }
        else{
            $('#top').fadeOut();
        }
    };

$(function(){
    $(".toolbar-item-weixin").hover(function() {
      
        
        $(".toolbarWeixin").stop().css({           
            "display": 'block'           
        }).animate({
            "right": '70px'
            
        },800,function(){
            $(".toolbar-item-weixin").stop().css({
            "border-top-left-radius":"0px",
            "border-bottom-left-radius":"0px"
            });
        });
    }, function() {
        $(this).stop().css({
            "border-top-left-radius":"4px",
            "border-bottom-left-radius":"4px"
        });
        $(".toolbarWeixin").stop().animate({
            "right": '-220px'            
        },400,function(){
            $(this).stop().hide();
        });
    });



    $(".toolbar-item-phone").hover(function() {
       
        
        $(".toolbarphone").stop().css({           
            "display": 'block'           
        }).animate({
            "right": '70px'            
        },800,function(){
            $(".toolbar-item-phone").stop().css({
            "border-top-left-radius":"0px",
            "border-bottom-left-radius":"0px"
        });
        });
    }, function() {
        $(this).stop().css({
            "border-top-left-radius":"5px",
            "border-bottom-left-radius":"5px"
        });
        $(".toolbarphone").stop().animate({
            "right": '-220px'            
        },400,function(){
            $(this).stop().hide();
        });
    });
    
$(".toolbar-item-qq").hover(function() {
       
        
        $(".toolbarqq").stop().css({           
            "display": 'block'           
        }).animate({
            "right": '67px'            
        },800,function(){
            $(".toolbar-item-phone").stop().css({
            "border-top-left-radius":"0px",
            "border-bottom-left-radius":"0px"
        });
        });
    }, function() {
        $(this).stop().css({
            "border-top-left-radius":"5px",
            "border-bottom-left-radius":"5px"
        });
        $(".toolbarqq").stop().animate({
            "right": '-220px'            
        },400,function(){
            $(this).stop().hide();
        });
    });


    
    
	$(".toolbar-item-app").hover(function() {
	       
	        
	        $(".downApp").stop().css({           
	            "display": 'block'           
	        }).animate({
	            "right": '68px'            
	        },800,function(){
	            $(".toolbar-item-phone").stop().css({
	            "border-top-left-radius":"0px",
	            "border-bottom-left-radius":"0px"
	        });
	        });
	    }, function() {
	        $(this).stop().css({
	            "border-top-left-radius":"5px",
	            "border-bottom-left-radius":"5px"
	        });
	        $(".downApp").stop().animate({
	            "right": '-215px'            
	        },400,function(){
	            $(this).stop().hide();
	        });
	    });



    $(".toolbar-item-jisuan").on('click', function(event) {
        $(".jisuanCon").show(300).animate({
            "right": '0px'
        });
    });
    $(".closeJisuan").on('click', function(event) {
        $(".jisuanCon").hide(300).animate({
            "right": '0px'
        });
    });
    

})


//边框变色
function borderColor(thisT,borColor){  
    thisT.css({
        "border-color": borColor
    });
}

//判读是否为空(为空返回True,或者返回False)
function IsEmpty(thisObj){
    if($.trim(thisObj.val())==""||$.trim(thisObj.val())==null){
        return true;
    }
    else{
        return false;
    }
}

//添加错误提示信息
function ErrorMessAge(thisObj,errorText){
    DelErrorMessAge(thisObj);
    thisObj.parents(".InputDiv").after('<p class="errorP">'+errorText+'</p>')
}

//删除错误提示信息
function DelErrorMessAge(thisObj){
    thisObj.parents(".InputDiv").siblings(".errorP").remove();   
}

//判断是否数字清空(包括小数)
function IsNum(thisObj){
     var thisVal = thisObj.val();
         thisVal = thisVal=thisVal.replace(/[, ]/g,'');
         if(isNaN(thisVal)){
            $(thisObj).onfocus;  
            $(thisObj).val("");   
            return;
         } 
}

//输入框获得焦点样式并删除提示
function focusFunction(thisObj){
        borderColor(thisObj,"#02ADEA");
        DelErrorMessAge(thisObj);
 }

 //过滤非法字符
function stripscript(s){
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！%`@#￥……&*（）——|''‘’‘：”“'、？]");
    var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs+s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}

//更换头像
/*changeHead(".changeHead");
function changeHead(obj){
    $(obj).hover(function() {
        $(this).find('.changeHeadBt').show();
        $(this).find('.fileUp').show();
    }, function() {
        $(this).find('.changeHeadBt').hide();
        $(this).find('.fileUp').hide();
    });
}*/

//添加金额大写



$(function(){
    // 正常颜色值：#e1e1e1
    // 获得焦点颜色值：#02ADEA
    // 错误颜色值：#ff8574
      

    //投入金额
    $(".jine").on('focus', function(event) {
        focusFunction($(this));
    });
    $(".jine").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"投入金额不得为空");
        }
        else{
            borderColor(thisObj,"#e1e1e1");  
        }
    });
 
    //投入时长
    $(".touru").on('focus', function(event) {
        focusFunction($(this));
    });
    $(".touru").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"投入时长不得为空");
        }
        else{
            borderColor(thisObj,"#e1e1e1");  
        }
    });

    //年化利率
    $(".lilv").on('focus', function(event) {
        focusFunction($(this));
    });
    $(".lilv").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"年化利率不得为空");
        }
        else{
            borderColor(thisObj,"#e1e1e1");  
        }
    });
  

   

     $('.lilv').on('keyup onafterpaste', function(event) {
        var thisObj = $(this);
        thisObj.val(clearNoNum(event,thisObj));
    });

      $('.jine').on('keyup onafterpaste', function(event) {
        var thisObj = $(this);
        var thisVal = thisObj.val();
        thisObj.val(clearNoNum(event,thisObj));
        if(thisVal){
            $(".bigmony").show();
        }else{
            $(".bigmony").hide();
        }
        $(".bigMoneyText").text(num_to_chinese(thisVal));
    });

     $('.touru,.numPage').on('keyup', function(event) {
        var thisObj = $(this);
        var thisVal = thisObj.val();
        if(!checkRate(thisObj)){
            thisObj.val("");
        }
    });

     // 收益计算器
    $(".subjisuan").on('click',  function(event) {
        var jineObj, touruObj, lilvObj;
        var jineVal, touruVal, lilvVal, benxi, lixi;
        jineObj = $(".jine");
        touruObj = $(".touru");
        lilvObj = $(".lilv");

        jineVal = parseFloat(jineObj.val());
        touruVal = parseFloat(touruObj.val());
        lilvVal = parseFloat(lilvObj.val());

        if(IsEmpty(jineObj)){
          borderColor(jineObj,"#ff8574");
          ErrorMessAge(jineObj,"投入金额不得为空");
          return false;
        }
        if(IsEmpty(touruObj)){
          borderColor(touruObj,"#ff8574");
          ErrorMessAge(touruObj,"投入时长不得为空");
          return false;
        }
        if(IsEmpty(lilvObj)){
          borderColor(lilvObj,"#ff8574");
          ErrorMessAge(lilvObj,"年化利率不得为空");
          return false;
        }
        lixi = (jineVal*touruVal*lilvVal)/365/100;
        $(".lixi").text(toDecimal(lixi)==0?toDecimal(lixi)+":00":toDecimal(lixi));
        $(".benxi").text(toDecimal(lixi+jineVal)==0?toDecimal(lixi+jineVal)+":00":toDecimal(lixi+jineVal));
    });

    //重置
    $(".congzhi").on('click', function() {
       $(".jine,.touru,.lilv").val("").css({
           "border": '#e1e1e1 1px solid'
       });
       $(".bigmony").hide();
       $(".jisuanCon p.errorP").remove();
       $(".lixi").text("-");
        $(".benxi").text("-");
    });


});



//功能：将浮点数四舍五入，取小数点后2位  
function toDecimal(x) {  
    var f = parseFloat(x);  
    if (isNaN(f)) {  
        return;  
    }  
    f = Math.round(x*100)/100;  
    return f;  
}  
  


//只能输入正整数
function checkRate(input)
{
     var thisObj = input;
     var thisVal = thisObj.val();
    // alert(/^\d+$/.test(thisVal))
     if(isNaN(thisVal)||thisVal<=0||!(/^\d+$/.test(thisVal))){
       return false;
     }
     else{
        return true;
     }
}


//只能输入数字和小数点
 function clearNoNum(event,obj){   
            //响应鼠标事件，允许左右方向键移动   
            event = window.event||event;   
            if(event.keyCode == 37 | event.keyCode == 39){   
                return;   
            } 
            var thisVal = obj.val();
           thisVal = thisVal.replace(/[, ]/g,'');
            //先把非数字的都替换掉，除了数字和. 
            thisVal = thisVal.replace(/[^\d.]/g,"") 
         
            //必须保证第一个为数字而不是.   
            
            thisVal = thisVal.replace(/^\./g,"")   
            //保证只有出现一个.而没有多个.   
           
            thisVal = thisVal.replace(/\.{2,}/g,".")  
            //保证.只出现一次，而不能出现两次以上   
            thisVal = thisVal.replace(".","$#$").replace(/\./g,"").replace("$#$",".");

            return thisVal;
           
}   

//只能输入非0的正整数 
 function isNumber(s)
 {   
 	var re = new RegExp("^[1-9]+([0-9]*)$|^0$","ig");  
 	return re.test(s);  
 }


//金额小写转换大写
function num_to_chinese(num) {
    var MAXIMUM_NUMBER = 99999999999.99;
    var CN_ZERO = "零";
    var CN_ONE = "壹";
    var CN_TWO = "贰";
    var CN_THREE = "叁";
    var CN_FOUR = "肆";
    var CN_FIVE = "伍";
    var CN_SIX = "陆";
    var CN_SEVEN = "柒";
    var CN_EIGHT = "捌";
    var CN_NINE = "玖";
    var CN_TEN = "拾";
    var CN_HUNDRED = "佰";
    var CN_THOUSAND = "仟";
    var CN_TEN_THOUSAND = "万";
    var CN_HUNDRED_MILLION = "亿";
    var CN_DOLLAR = "元";
    var CN_TEN_CENT = "角";
    var CN_CENT = "分";
    var CN_INTEGER = "整";
    var integral;
    var decimal;
    var outputCharacters;
    var parts;
    var digits, radices, bigRadices, decimals;
    var zeroCount;
    var i, p, d;
    var quotient, modulus;
    num = num.toString();
    if (num == "") {
        return "";
    }
    if (num.match(/[^,.\d]/) != null) {
        return "";
    }
    if ((num).match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {
        return "";
    }
    num = num.replace(/,/g, ""); // Remove comma delimiters.
    num = num.replace(/^0+/, ""); // Trim zeros at the beginning.
    if (Number(num) > MAXIMUM_NUMBER) {
        return "";
    }
    parts = num.split(".");
    if (parts.length > 1) {
        integral = parts[0];
        decimal = parts[1];
        // Cut down redundant decimal digits that are after the second.
        decimal = decimal.substr(0, 2);
    }
    else {
        integral = parts[0];
        decimal = "";
    }
    digits = new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT,CN_NINE);
    radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
    bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
    decimals = new Array(CN_TEN_CENT, CN_CENT);
    outputCharacters = "";
    if (Number(integral) > 0) {
        zeroCount = 0;
        for (i = 0; i < integral.length; i++) {
            p = integral.length - i - 1;
            d = integral.substr(i, 1);
            quotient = p / 4;
            modulus = p % 4;
            if (d == "0") {
                zeroCount++;
            }
            else {
                if (zeroCount > 0)
                {
                    outputCharacters += digits[0];
                }
                zeroCount = 0;
                outputCharacters += digits[Number(d)] + radices[modulus];
            }
            if (modulus == 0 && zeroCount < 4) {
                outputCharacters += bigRadices[quotient];
            }
        }
        outputCharacters += CN_DOLLAR;
    }
    if (decimal != "") {
        for (i = 0; i < decimal.length; i++) {
            d = decimal.substr(i, 1);
            if (d != "0") {
                outputCharacters += digits[Number(d)] + decimals[i];
            }
        }
    }
    if (outputCharacters == "") {
        outputCharacters = CN_ZERO + CN_DOLLAR;
    }
    if (decimal == "") {
        outputCharacters += CN_INTEGER;
    }
    outputCharacters = outputCharacters;
    return outputCharacters;
}


function isPositiveNum(s){//是否为正整数
    var re = /^[0-9]*[1-9][0-9]*$/ ;
    return re.test(s)
} 



//输入央行卡号格式
function formatBankNo (BankNo){
    if (BankNo.value == "") return;
    var account = new String (BankNo.value);
    account = account.substring(0,23); /*帐号的总数, 包括空格在内 */
    if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null){
        /* 对照格式 */
        if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" +
        ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null){
            var accountNumeric = accountChar = "", i;
            for (i=0;i<account.length;i++){
                accountChar = account.substr (i,1);
                if (!isNaN (accountChar) && (accountChar != " ")) accountNumeric = accountNumeric + accountChar;
            }
            account = "";
            for (i=0;i<accountNumeric.length;i++){    /* 可将以下空格改为-,效果也不错 */
                if (i == 4) account = account + " "; /* 帐号第四位数后加空格 */
                if (i == 8) account = account + " "; /* 帐号第八位数后加空格 */
                if (i == 12) account = account + " ";/* 帐号第十二位后数后加空格 */
                if (i == 16) account = account + " ";/* 帐号第十六位后数后加空格 */
                if (i == 20) account = account + " ";/* 帐号第二十位后数后加空格 */
                account = account + accountNumeric.substr (i,1)
            }
        }
    }
    else
    {
        account = " " + account.substring (1,5) + " " + account.substring (6,10) + " " + account.substring (14,18) + "-" + account.substring(18,25);
    }
    if (account != BankNo.value) BankNo.value = account;
}

$(function(){
	if($(".changBank1 ul li").length<=12){
		$(".clickNone").hide();
	}	
})

$(".moreBank").on('click', function() {
      var attrObj = $(this).attr("attrObj");
    
      if(attrObj=="1"){
        $(this).attr("attrObj","2").css({
          "background":"URL("+CONTEXT+"/htmlPage/images/up.png) #f0f0f0 no-repeat center center"
        });
        $(".bank ul").css({
          "height": 'auto'          
        });
      }
      else{
         $(this).attr("attrObj","1").css({
           "background":"URL("+CONTEXT+"/htmlPage/images/down.png) #f0f0f0 no-repeat center center"
         });
         $(".bank ul").css({
          "height": '200px'
         });
      }
      
   });
   $(function(){
    $(".kahaoInput").on('focus', function(event) {
        focusFunction($(this));     
    });
   $(".kahaoInput").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        var chongzhi = $(".chongzhi").text();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"请输入卡号");
        }
        else{
          borderColor(thisObj,"#e1e1e1");  
         }
    });

    
    $(".pBank li").on('click',function() {
       $(".tableIn").show();      
    });
 });

   function init_num(){
	    $('.FN').each(function(){
	        init_num_elem($(this));
	    })
	}

	function init_num_elem(elem){
	    var self = elem
	        numstr = self.text().trim(),
	        num = parseFloat(numstr),
	        numex = num.toFixed(2),
	        numint = numstr.split('.')[0],
	        len = numint.length,
	        numfloat = numex.toString().split('.')[1]
	    if(len>3){
	        var arr = numint.split(''),
	            j = 1
	        for(var i=len-1;i>=0;i--){
	            if(j%3==0 && j!=len){
	                arr[i] = ',' + arr[i]
	            }
	            j++
	        }
	        self.html(arr.join('') + '.' + numfloat )
	    }else{
	        self.html(numint + '.' + numfloat )
	    }
	}

function loadingFun(){
     $("#loadPop").remove();
      var explorer = window.navigator.userAgent ;
      //判断是否ie浏览器 
      if (explorer.indexOf("MSIE") >= 0) {
          htmlLoad ='<section id="loadPop"><p class="loadText" style="font-size:30px;margin-top:60px;">Loading...</p></section>';
      }
      else{
          htmlLoad ='<section id="loadPop"><div class="loadCon"></div><p class="loadText">Loading...</p></section>';
      }
     $("body").append(htmlLoad);
     var setInter,i=0;
         addLoad();    
         setInter = setInterval(function(){
            i++;
            console.log("i的值"+i)
            if(i==1){
               clearInterval(setInter)
               removeload();
              
            }
         },1000);
         
}
function addLoad(){
        platBt("loadPop");
        initFun();
}
function removeload(){
        plateClose("loadPop");
}

$(function(){

        $(".addFormAddres").on('click', function(event) {
            event.preventDefault();
            $(".addAddress").show();
            $(".addText").animate({"width": "520px"}, 600);
        });
        $(".quxiao").on('click', function(event) {
            event.preventDefault();        
            $(".addText").animate({"width": "0px"}, 600,function(){
                $(".addAddress").hide();
            });        
        });
        $(".addText").on('focus', function(event) {
            focusFunction($(this));
        });
        $(".addText").on('blur', function(event) {
            var thisObj = $(this);
            var thisValue = $(this).val();
            if(IsEmpty(thisObj)){
                borderColor(thisObj,"#ff8574");           
            }
            else{
                borderColor(thisObj,"#e1e1e1");  
            }
        });

        //新账号名
        $(".newZhangHao1,.emaiInput1").on('focus', function(event) {
            
            focusFunction($(this));
        });

        $(".newZhangHao1").on('blur', function(event) {
            var thisObj = $(this);
            var thisValue = $(this).val();
            if(IsEmpty(thisObj)){
                borderColor(thisObj,"#ff8574");
                ErrorMessAge(thisObj,"新账号名不得为空");
            }
            else{
                if(thisValue.length<6){
                    borderColor(thisObj,"#ff8574");
                    ErrorMessAge(thisObj,"新账号名不得少于6位");
                }
                if(thisValue.length>35){
                    borderColor(thisObj,"#ff8574");
                    ErrorMessAge(thisObj,"新账号名不得大于35位");
                }
                else{
                     borderColor(thisObj,"#e1e1e1");
                } 
            }
            
            
        });
        $(".newZhangHao1").on('keyup',  function(event) {      
            $(this).val(stripscript($(this).val()));
            var thisObj = $(this);
            var thisValue = $(this).val();
            if(thisValue.length>5){
                $(this).parents(".InputDiv").css({
                    "background": 'url('+CONTEXT+'/htmlPage/images/true.png) no-repeat center right'
                });
                borderColor(thisObj,"#e1e1e1");
            }
            else{
                 $(this).parents(".InputDiv").css({
                    "background": 'none'
                });
            }
        });
    //邮箱
        $(".emaiInput").on('blur', function(event) {
            var thisObj = $(this);
            var thisValue = $(this).val();
            if(IsEmpty(thisObj)){
                borderColor(thisObj,"#ff8574");
                ErrorMessAge(thisObj,"邮箱不得为空");
            }
            else{
               
                if(!IsEimal(thisValue)){
                    borderColor(thisObj,"#ff8574");
                    ErrorMessAge(thisObj,"邮箱错误");
                }
                else{
                     borderColor(thisObj,"#e1e1e1");  
                } 
            }
        });
        

        $(".subAddress").on('click', function() {
            var addTextObj = $(".addText");
            var addTextValue = addTextObj.val();
            if(IsEmpty(addTextObj)){
                borderColor(addTextObj,"#ff8574");
                alert("地址不得为空");       
            }
            else{
                borderColor(addTextObj,"#e1e1e1");
                alert("成功")  
            }
        });

        //修改登录账号
        $(".trueEdit1").on('click', function(event) {
           var newZhangHao;
           var newZhangHaoObj;
           newZhangHaoObj = $(".newZhangHao");
           newZhangHao = $.trim(newZhangHaoObj.val());

           if(IsEmpty(newZhangHaoObj)){
             borderColor(newZhangHaoObj,"#ff8574");
             ErrorMessAge(newZhangHaoObj,"新账号名不得为空");
             return false;
           }
           else{
              if(newZhangHao.length<6){
                borderColor(newZhangHaoObj,"#ff8574");
                ErrorMessAge(newZhangHaoObj,"新账号名不得少于6位");
                return false;
              }
           }
           $.ajax({
     	   	  url:CONTEXT+'/my/pc/resetUserName',
         	  type:'POST',
         	  data:{name:$("#resetUserName").val()},
         	  success:function(data){
         		  if(data == "1"){
         			  window.location.reload();
         		  }else if(data == "3"){
         			 borderColor(newZhangHaoObj,"#ff8574");
                     ErrorMessAge(newZhangHaoObj,"该用户名已被占用");
                     newZhangHaoObj.parent(".InputDiv").css({
                    	 "background":"none"
                     })
         		  }else if(data == "4"){
         			 borderColor(newZhangHaoObj,"#ff8574");
                     ErrorMessAge(newZhangHaoObj,"用户名长度6-35字符之间");
                     newZhangHaoObj.parent(".InputDiv").css({
                    	 "background":"none"
                     })
         		  }else if(data == "5"){
         			 borderColor(newZhangHaoObj,"#ff8574");
                     ErrorMessAge(newZhangHaoObj,"新用户名不能和旧用户名一致");
                     newZhangHaoObj.parent(".InputDiv").css({
                    	 "background":"none"
                     })
         		  }else{
         			  alert("系统繁忙，请稍后再试");
         		  }
         	  },
           });
           
        });

        //绑定邮箱
        $(".subEmail").on('click', function(event) {
           var emaiInput;
           var emaiInputObj;
           emaiInputObj = $(".emaiInput");
           emaiInput = $.trim(emaiInputObj.val());

           if(IsEmpty(emaiInputObj)){
             borderColor(emaiInputObj,"#ff8574");
             ErrorMessAge(emaiInputObj,"邮箱不得为空");
             return false;
           }
           else{
              if(!IsEimal(emaiInput)){
                    borderColor(emaiInputObj,"#ff8574");
                    ErrorMessAge(emaiInputObj,"邮箱错误");
                    return false;
                }
                else{
                     borderColor(emaiInputObj,"#e1e1e1");
                     $.ajax({
                    	  url:CONTEXT+'/my/pc/resetEmail',
	                   	  type:'POST',
	                   	  data:{email:$(".emaiInput").val()},
	                   	  success:function(data){
	                   		  if(data == "1"){
	                   			  window.location.reload();
	                   		  }else{
	                   			  alert("系统繁忙，请稍后再试");
	                   		  }
	                   	  }
                     });
                } 
           }
           
        });


        //邮箱
    $(".emaiInput").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"邮箱不得为空");
        }
        else{
           
            if(!IsEimal(thisValue)){
                borderColor(thisObj,"#ff8574");
                ErrorMessAge(thisObj,"邮箱错误");
            }
            else{
                 borderColor(thisObj,"#e1e1e1");  
            } 
        }
    });

})

 //时间倒计时(分秒)
    function ShowCountDown(sec,divname) 
{ 
    var minuteVal,secondVal;
    minuteVal = sec/60;
    secondVal = sec%60;
    minuteVal = 100;
    secondVal = 6;
    //当前时间
   /* var now = new Date();*/
    //传过来时间
    /*var endDate = new Date(now.getFullYear(),now.getMonth(), now.getDate(),now.getHours(),minuteVal,secondVal);
*/
    //相减得到时间戳
   /* var leftTime=endDate.getTime()-now.getTime();*/
    //毫秒转换成秒    
    /*var leftsecond = parseInt(leftTime/1000); */
    var leftsecond = parseInt(sec); 

    //var day1=parseInt(leftsecond/(24*60*60*6)); 
    var day1=Math.floor(leftsecond/(60*60*24)); 
    var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
    var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
    var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
    var cc = document.getElementById(divname); 
        /*cc.innerHTML = day1+"天"+hour+"小时"+minute+"分"+second+"秒"; */
        
        if(minute==0&&second==0){
            cc.innerHTML = "00 : 00";
            clearInterval(setTime);
        }
        else{
            cc.innerHTML = minute+" : "+second;
        }
    } 


$(function(){

	/*$(".div_text .downLoad").mouseenter(function(){
		alert(1)
	});
	$(".div_text .downLoad").mouseleaver(function(){
		alert(1)
	});
	*/
	var htmlAppend = '<div class="addPassText">打开文件密码为用户手机号</div>';
	 $(".div_text .downLoad").hover(function(){
		 $(".div_text").prepend(htmlAppend);
	 },function(){
		 $(".addPassText").remove();
       });
	 $("#bingEmail a").on("click",function(){
		 $("#bingEmail .emaiInput").val("")
		 .css({
			 "border":"1px solid #e1e1e1"
		 })
		 $("#bingEmail .errorP").remove();
	 })
	
})


