$(function(){
  //奇偶数变颜色
  $(".InfoCon dl dd:odd").css({
    "background": '#EDFAFE'
  });
  $(".LineCion").hover(function() {
    $(this).css({
      "height": 'auto'
    }).parents(".infoListCon").siblings(".infoListCon").find('.LineCion').css({
      "height": '33px'
    });;
  }, function() {
    
  });
})

function jisuan(){
    var $goumai = $(".goumai").val();
    var $jiaxiNum = $(".jiaxiNum").text();
    if($jiaxiNum==""||$jiaxiNum==null){
    	$jiaxiNum = 0;
    }
    var $yearlilv = parseFloat($(".yearlilv").text())/100;
    $jiaxiNum = parseFloat($jiaxiNum)/100;
    var $tianshu = $(".tianshu").text()-1;      
    var $ketouPrice = $(".ketouPrice").text();
     $(".shouyiPrice").text(toDecimal($goumai*($yearlilv+$jiaxiNum)*$tianshu/365));
   
}

$(function(){
   //$(".goumai").val(parseInt($(".zhanghuyue").text()/$(".qitou").text())*$(".qitou").text());

    //购买金额
	//可投大于账户余额，显示账户余额，否则显示可投金额
	var singleAmount = $(".qitou").text();
   if($(".ketouPrice").text().replace(/,/ig, '')*1>$(".zhanghuyue").text()*1){
	   $(".goumai").val(Math.floor(($(".zhanghuyue").text()*1)/singleAmount)*singleAmount);
   }else{
	   $(".goumai").val($(".ketouPrice").text().replace(/,/ig, ''));
   }
  
   
   
   
  
   jisuan();
   
     //提现
   $(".goumai").on('focus', function(event) {
        focusFunction($(this));           
    });
  /* $(".goumai").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        alert(isNumber(thisValue))
    });*/

 $(".goumai").on('keyup blur',function(event) {
      var thisObj = $(this);
      var thisVal = thisObj.val();
      var zhanghuyue = $(".zhanghuyue").text();
      var ketouPrice = $(".ketouPrice").text();
      var qitou = $(".qitou").text();
      var isLogoin = $(".isLogoin").val();
      thisObj.val(clearNoNum(event,thisObj));
      ketouPrice = ketouPrice.replace(/,/ig, '');
      if(!isNumber(thisVal)){
    	  thisObj.val("");
      }
      if(!isNaN(thisVal)){
        if(thisVal-ketouPrice>0){
        	$(".shouyiPrice").text("0");            
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"购买金额不得大于可投金额");
        }
        else if(isLogoin=="2"){
           if(thisVal-qitou<0){
                $(".shouyiPrice").text("0");            
                borderColor(thisObj,"#ff8574");
                ErrorMessAge(thisObj,"购买金额不得小于起投金额");
                return false;
            }
        	if(!isPositiveNum(thisVal/qitou)){
                $(".shouyiPrice").text("0");            
                borderColor(thisObj,"#ff8574");
                ErrorMessAge(thisObj,"购买金额必须是起投金额的整数倍");
                return false;
            }
        	
            if(thisVal-zhanghuyue*1>0){
                $(".shouyiPrice").text("0");            
                 borderColor(thisObj,"#ff8574");
                 ErrorMessAge(thisObj," 账户余额不足");
                 return false;
             }
       	    else{
       		    DelErrorMessAge(thisObj,"#e1e1e1"); 
                borderColor(thisObj,"#e1e1e1"); 
                jisuan(); 
       	    }
        }
        else if(thisVal-qitou<0){
            $(".shouyiPrice").text("0");            
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"购买金额不得小于起投金额");
        }
 
        else{            
            DelErrorMessAge(thisObj,"#e1e1e1"); 
            borderColor(thisObj,"#e1e1e1"); 
            jisuan();  
        }        
      }
   });

   //减
   $(".priceJian").on('click', function() {
       var qitou = $(".qitou").text();
       var goumai = $(".goumai").val();
       if((goumai-qitou)<qitou){
          return false;
       }
       $(".goumai").val(goumai-qitou);
       jisuan();
   });

   //加
   $(".priceAdd").on('click', function() {
       var goumai = $(".goumai").val()*1;
       var qitou = $(".qitou").text()*1;
       var ketouPrice = $(".ketouPrice").text();
       ketouPrice = ketouPrice.replace(/,/ig, '')*1;      
       if((goumai+qitou)>ketouPrice){
          return false;
       }
       $(".goumai").val(goumai+qitou);
       jisuan();
   });


   //提交购买
   $(".subshouyi").on('click', function() {
      var goumai, goumaiObj, ketouPrice, qitou , zhanghuyue;
      var isLogoin = $(".isLogoin").val();
      goumaiObj = $(".goumai");
      goumai = $.trim(goumaiObj.val());
      qitou = $(".qitou").text();
      ketouPrice = $(".ketouPrice").text();
      zhanghuyue = $(".zhanghuyue").text();
      ketouPrice = ketouPrice.replace(/,/ig, '');
      if(IsEmpty(goumaiObj)){
         borderColor(goumaiObj,"#ff8574");
         ErrorMessAge(goumaiObj,"请输入购买金额");
         return false;
      }
	   if(isLogoin=="2"){
			 if(ketouPrice-goumai<0){
			     borderColor(goumaiObj,"#ff8574");
			     ErrorMessAge(goumaiObj,"购买金额不得大于可投金额");
			     return false;
			 }
			 if(!isPositiveNum(goumai/qitou)){
		         $(".shouyiPrice").text("0");            
		         borderColor(goumaiObj,"#ff8574");
		         ErrorMessAge(goumaiObj,"购买金额必须是起投金额的整数倍");
		         return false;
			 }
			 if(goumai-zhanghuyue*1>0){
		         borderColor(goumaiObj,"#ff8574");
		         ErrorMessAge(goumaiObj,"账户余额不足");
			     return false;
		      }
	    }
	   
	   /* if(goumai-qitou<0){
	         borderColor(goumaiObj,"#ff8574");
		     ErrorMessAge(goumaiObj,"购买金额不得小于起投金额");
		     return false;
	    }*/
       
     
     var num =  parseInt(goumai/qitou);
     $("#purchaseQuantity").val(num);
      $("#buyInfoForm").submit();

   });
})


