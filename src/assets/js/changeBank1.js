
  $(function(){

    $(".bank li").on('click',function() {
      $(".errorBank").remove();
      $(this).find('i').addClass('click').end().siblings().find('i').removeClass("click");
      $(this).find("input").attr("checked",true).end().siblings().find("input").attr("checked",false);
       var bankCode = $(this).find("input").val();
        
    });
    $(".subChongzhi").on('click', function() {
     var kahaoInputObj,kahaoInput,radioValue; 
     kahaoInputObj = $(".kahaoInput");
     kahaoInput = $.trim(kahaoInputObj.val());

     $(".errorBank").remove();
      var itemradio = $(".bank li").find("input");
      var nums = itemradio.length;
      var flag = false;     
       
   
     if(kahaoInput==null||kahaoInput==""){
        borderColor(kahaoInputObj,"#ff8574");
        ErrorMessAge(kahaoInputObj,"卡号不得为空");
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
      radioValue = $('.changBank2 input:radio:checked').val();
      $("#replaceCardForm").submit();
   });


  })
