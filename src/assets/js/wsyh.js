$(function(){

   $(".bank li").on('click',function() {
    $(".errorBank").remove();
      $(this).find('i').addClass('click').end().siblings().find('i').removeClass("click");
      $(this).find("input").attr("checked",true).end().siblings().find("input").attr("checked",false);
     
    });
   $(".rechargPrice").on('focus', function(event) {
        focusFunction($(this));     
    });
   $(".rechargPrice").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        var chongzhi = $(".chongzhi").text()*1;
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"请输入充值金额");
        }
        else{
            borderColor(thisObj,"#e1e1e1");  
           }
        
    });
   $(".rechargPrice").on('keyup',function(event) {
	      var thisObj = $(this);
	      var thisVal = thisObj.val();
	      thisObj.val(clearNoNum(event,thisObj));	     
   });
	     
	        
	        
	     
	     
 
    
    //网上银行提交1
   $(".subChongzhi").on('click', function() {
     var rechargPrice, radioValue, rechargPriceObj;
     rechargPriceObj = $(".rechargPrice");
     rechargPrice = $.trim(rechargPriceObj.val());
      var itemradio = $(".bank li").find("input");
      var nums = itemradio.length;
      var flag = false; 
     if(rechargPrice==null||rechargPrice==""){
        borderColor(rechargPriceObj,"#ff8574");
        ErrorMessAge(rechargPriceObj,"充值金额不得为空");
        return false;
     }    
  
     for(i=0;i<nums;i++) {
        if(itemradio[i].checked){
           flag = true;
           break;
        }
      }
      if(!flag){
        $(".moreBank").prev().after('<div class="errorBank">请选择银行类型</div>'); 
        return false;                  
      } 
      //获得单选按钮的值
      radioValue = $('.webBank1 input:radio:checked').val();
      $("#gateId").val(radioValue);
      $("#rechargeGeneral").submit();
   });


   //网上银行提交2
   $(".subwsyh").on('click', function() {
     var rechargPrice, rechargPriceObj, radioValue;
     rechargPriceObj = $(".rechargPrice");
     rechargPrice = $.trim(rechargPriceObj.val());
     $(".errorBank").remove();
      var itemradio = $(".bank li").find("input");
      var nums = itemradio.length;
      var flag = false; 
     if(rechargPrice==null||rechargPrice==""){
        borderColor(rechargPriceObj,"#ff8574");
        ErrorMessAge(rechargPriceObj,"充值金额不得为空");
        return false;
     }    
     
     for(i=0;i<nums;i++) {
        if(itemradio[i].checked){
           flag = true;
           break;
        }
      }
    if(!flag){
        $(".moreBank").prev().after('<div class="errorBank">请选择银行类型</div>'); 
        return false                 
     } 
     //获得单选按钮的值
      radioValue = $('.webBank2 input:radio:checked').val();
      $("#gateId").val(radioValue);
      $("#rechargeGeneral").submit();
   });

})