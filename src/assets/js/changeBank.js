
  $(function(){

    $(".bank li").on('click',function() {
      $(".errorBank").remove();
      $(this).find('i').addClass('click').end().siblings().find('i').removeClass("click");
      $(this).find("input").attr("checked",true).end().siblings().find("input").attr("checked",false);
       var bankCode = $(this).find("input").val();
       $.ajax({
           type: "POST",
           url: CONTEXT+'/my/replaceCard/account',
           data: { bankCode:bankCode},
           dataType: "text",
           success: function(data){
               if(data!=""){
             	  var strs= new Array();
                   strs = data.split(",");
                   var f_limit = strs[0];
                   var day_limit = strs[1];
                   var mon_limit = strs[2];
                   if(""!= f_limit && "null" != f_limit){
                 	  $("#f_limit").html(f_limit+"元");
                   }else{
                 	  $("#f_limit").html("不限");
                   }
                   if(""!= day_limit && "null" != day_limit){
                 	  $("#day_limit").html(day_limit+"元");
                   }else{
                 	  $("#day_limit").html("不限");
                   }
                 
                   if(""!= mon_limit && "null" != mon_limit){
                 	  $("#mon_limit").html(mon_limit+"元");
                   }else{
                 	  $("#mon_limit").html("不限");
                   }
               }
               
           },
       });
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
      radioValue = $('.changBank1 input:radio:checked').val();
      $("#replaceCardForm").submit();
   });


  })
  