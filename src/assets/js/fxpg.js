$(function(){
    $(".subForm").on('click', function() {
        if($(".fxpgCon :radio:checked").length!=10){
            alert("请全部选中");
        }
     
      //platBt("pop");
    });
})