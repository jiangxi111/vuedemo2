$(function(){
   //提现
   $(".tixianInput").on('focus', function(event) {
        focusFunction($(this));
        $(".daozhang").text("-"); 
        $(".error").remove();
    });

   $(".tixianInput").on('keyup blur',function(event) {
      var thisObj = $(this);
      var thisVal = parseFloat(thisObj.val()*1);
      var zfPrce = parseFloat($(".zfPrce").text().replace(/,/ig, '')*1);   
      thisObj.val(clearNoNum(event,thisObj));
      if(!isNaN(thisVal)){
        if(thisVal<=2){
            $(".daozhang").text("-");
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"提现金额必须大于2元");
        }
        else{
          if(thisVal>zfPrce){
            $(".daozhang").text("-");
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"提现金额不得大于账户余额");
          }
          else{
            $(".daozhang").text(toDecimal(thisVal-2));
            focusFunction($(this));
            borderColor(thisObj,"#e1e1e1");
          }
        }
        
      }
   });


   //提交
   $(".tixianSub").on('click', function() {
	   var zfPrce, tixianInput, tixianInputObj;
	     zfPrce = parseFloat(($(".zfPrce").text().replace(/,/ig, '')))*1;
	     tixianInputObj = $(".tixianInput");
	     tixianInput = parseFloat($.trim(tixianInputObj.val()));
	    
	     if(tixianInput==null||tixianInput==""){
	        $(".daozhang").text("-");
	        borderColor(tixianInputObj,"#ff8574");
	        ErrorMessAge(tixianInputObj,"提现金额不得为空");
	        return false;
	     }
	     else if(tixianInput<=2){
	        $(".daozhang").text("-");
	        borderColor(tixianInputObj,"#ff8574");
	        ErrorMessAge(tixianInputObj,"提现金额必须大于2元");
	        return false;
	     }
	     else if(tixianInput>zfPrce){
	        $(".daozhang").text("-");
	        borderColor(tixianInputObj,"#ff8574");
	        ErrorMessAge(tixianInputObj,"提现金额不得大于账户余额");
	        return false;
	     }
	     var withdrawalsAmount =  $("#withdrawalsAmount").val();
	     $("input[name='withdrawalsAmount']").val(withdrawalsAmount);
	     $("#open").submit();
   });
    
})