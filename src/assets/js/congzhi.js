$(function(){
    //提现
   $(".rechargPrice").on('focus', function(event) {
        focusFunction($(this));     
    });
   $(".rechargPrice").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        thisObj.val(clearNoNum(event,thisObj));
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
       DelErrorMessAge(thisObj);
       borderColor(thisObj,"#02adea");
      thisObj.val(clearNoNum(event,thisObj));
   });

   $(".subChongzhi").on('click', function() {
       var  rechargPrice, rechargPriceObj;
    
     rechargPriceObj = $(".rechargPrice");
     rechargPrice = $.trim(rechargPriceObj.val());
    
     if(rechargPrice==null||rechargPrice==""){
        borderColor(rechargPriceObj,"#ff8574");
        ErrorMessAge(rechargPriceObj,"充值金额不得为空");
        return false;
     }
    
     $("#rechargeQuickForm").submit();
   });



   
})