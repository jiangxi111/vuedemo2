$(function(){

    $li1 = $(".apply_nav .apply_array");
    $window1 = $(".apply .apply_w");
    $left1 = $(".apply .img_l");
    $right1 = $(".apply .img_r");
    
    $window1.css("width", $li1.length*334);

    var lc1 = 0;
    var rc1 = $li1.length-5;
    
    $left1.click(function(){

        if($window1.is(':animated')){
            return false;
        }
        if (lc1 < 1) {
            alert("已经是第一张图片");
            return;
        }
        lc1--;
        rc1++;
        $window1.animate({left:'+=334px'}, 1000);
    });

    $right1.click(function(){
        if($window1.is(':animated')){
            return false;
        }
        if (rc1 < 1){
            alert("已经是最后一张图片");
            return;
        }
        lc1++;
        rc1--;
        $window1.animate({left:'-=334px'}, 1000);
    });

})

function jisuan(){
    var $goumai = $(".goumai").val();
    var $yearlilv = parseInt($(".yearlilv").text())/100;
    var $tianshu = $(".tianshu").text()-1;      
    var $ketouPrice = $(".ketouPrice").text();
     $(".shouyiPrice").text($goumai*$yearlilv*$tianshu/365);
    //$(".shouyiPrice").text($goumai*$yearlilv*$tianshu/360);
   
}
$(function(){
   $(".goumai").val($(".zhanghuyue").text());
   jisuan();
   
     //提现
   $(".goumai").on('focus', function(event) {
        focusFunction($(this));           
    });
   $(".goumai").on('blur', function(event) {
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(IsEmpty(thisObj)){
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"请输入购买金额");
        }
        else{            
                borderColor(thisObj,"#e1e1e1");  
            }
    });

   $(".goumai").on('keyup',function(event) {
      var thisObj = $(this);
      var thisVal = thisObj.val();
      var ketouPrice = $(".ketouPrice").text();
      var qitou = $(".qitou").text();
      thisObj.val(clearNoNum(event,thisObj));
      ketouPrice = ketouPrice.replace(/,/ig, '');
     
      if(!isNaN(thisVal)){
        if(thisVal-ketouPrice>0){
            $(".shouyiPrice").text("0");            
            borderColor(thisObj,"#ff8574");
            ErrorMessAge(thisObj,"购买金额不得大于可投金额");
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
      var goumai, goumaiObj, ketouPrice, qitou;
      goumaiObj = $(".goumai");
      goumai = $.trim(goumaiObj.val());
      qitou = $(".qitou").text();
      ketouPrice = $(".ketouPrice").text();
      ketouPrice = ketouPrice.replace(/,/ig, '');
      if(IsEmpty(goumaiObj)){
         borderColor(goumaiObj,"#ff8574");
         ErrorMessAge(goumaiObj,"请输入购买金额");
         return false;
      }
      else if(ketouPrice-goumai<0){
         borderColor(goumaiObj,"#ff8574");
         ErrorMessAge(goumaiObj,"购买金额不得大于可投金额");
         return false;
      }
      else if(goumai-qitou<0){
         borderColor(goumaiObj,"#ff8574");
         ErrorMessAge(goumaiObj,"购买金额不得小于起投金额");
         return false;
      }
      location.href="goumai.html"

   });


})
