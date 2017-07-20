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
    $(".newZhangHao,.emaiInput").on('focus', function(event) {
        
        focusFunction($(this));
    });

    $(".newZhangHao").on('blur', function(event) {
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
            else{
                 borderColor(thisObj,"#e1e1e1");  
            } 
        }
    });
    $(".newZhangHao").on('keyup',  function(event) {      
        $(this).val(stripscript($(this).val()));
        var thisObj = $(this);
        var thisValue = $(this).val();
        if(thisValue.length>5){
            $(this).parents(".InputDiv").css({
                "background": 'url(images/true.png) no-repeat center right'
            });
            borderColor(thisObj,"#e1e1e1");  
        }
        else{
             $(this).parents(".InputDiv").css({
                "background": 'none'
            });
            
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
    $(".trueEdit").on('click', function(event) {
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
       alert("成功")
    });





})