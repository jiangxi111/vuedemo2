function hoverAnm(Thisobj){
    var $tt=$(Thisobj);
    //alert($tt)
    //alert($tt.siblings('p').is(':animated'))
    if($tt.is(':animated')){
            return false;
     }

     if($tt.siblings('p').is(':animated')){
        return false;
    }
    else{
        return true;
    }
}
$(function(){
    $(".yidong p.yuan1").hover(function() {
        
       if(!hoverAnm($(this))){
            return false;
       }
       $(".xiangmu5").addClass('xianghover');
       $(this).css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan1Hover.png) no-repeat center top'
       })
       .animate({"top":"6px","left":"6px"}, 300);
       },function(){
            $(".xiangmu5").removeClass('xianghover');
            $(this).css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan1.png) no-repeat center top'
           })
           .animate({"top":"10px","left":"10px"}, 300);
       });

    $(".yidong p.yuan2").hover(function() {
        
        if(!hoverAnm($(this))){
            return false;
       }
       $(".xiangmu1").addClass('xianghover');
       $(this).css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan2Hover.png) no-repeat center top'
       })
       .animate({"top":"6px","left":"109px"}, 300);
       },function(){
            $(".xiangmu1").removeClass('xianghover');
            $(this).css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan2.png) no-repeat center top'
           })
           .animate({"top":"10px","left":"105px"}, 300);
    });

    $(".yidong p.yuan3").hover(function() {
        
        if(!hoverAnm($(this))){
            return false;
       }
       $(".xiangmu2").addClass('xianghover');
       $(this).css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan3Hover.png) no-repeat center top'
       })
       .animate({"top":"82px","left":"156px"}, 300);
       },function(){
            $(".xiangmu2").removeClass('xianghover');
            $(this).css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan3.png) no-repeat center top'
           })
           .animate({"top":"80px","left":"150px"}, 300);
    });

    $(".yidong p.yuan4").hover(function() {
        
        if(!hoverAnm($(this))){
            return false;
       }
       $(".xiangmu3").addClass('xianghover');
       $(this).css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan4Hover.png) no-repeat center top'
       })
       .animate({"top":"175px","left":"47px"}, 300);
       },function(){
            $(".xiangmu3").removeClass('xianghover');
            $(this).css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan4.png) no-repeat center top'
           })
           .animate({"top":"171px","left":"47px"}, 300);
    });

    $(".yidong p.yuan5").hover(function() {
        
        if(!hoverAnm($(this))){
            return false;
       }
       $(".xiangmu4").addClass('xianghover');
       $(this).css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan5Hover.png) no-repeat center top'
       })
       .animate({"top":"82px","left":"0px"}, 300);
       },function(){
            $(".xiangmu4").removeClass('xianghover');
            $(this).css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan5.png) no-repeat center top'
           })
           .animate({"top":"80px","left":"4px"}, 300);
    });

    //右侧列表
    $(".xiangmuList li.xiangmu1").hover(function() {

        /*if(!hoverAnm(".yuan2")) return false;*/
        $(this).addClass('xianghover');
        $(".yuan2").css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan2Hover.png) no-repeat center top'
       })
       .animate({"top":"6px","left":"109px"}, 300);
     },function(){
        $(this).removeClass('xianghover');
        $(".yuan2").css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan2.png) no-repeat center top'
           })
           .animate({"top":"10px","left":"105px"}, 300);
    });

    $(".xiangmuList li.xiangmu2").hover(function() {
        /*if(!hoverAnm(".yuan2")) return false;*/
        $(this).addClass('xianghover');
        $(".yuan3").css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan3Hover.png) no-repeat center top'
       })
       .animate({"top":"82px","left":"156px"}, 300);
     },function(){
        $(this).removeClass('xianghover');
        $(".yuan3").css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan3.png) no-repeat center top'
           })
           .animate({"top":"80px","left":"150px"}, 300);
    });

    $(".xiangmuList li.xiangmu3").hover(function() {
        /*if(!hoverAnm(".yuan2")) return false;*/
        $(this).addClass('xianghover');
        $(".yuan4").css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan4Hover.png) no-repeat center top'
       })
       .animate({"top":"175px","left":"47px"}, 300);
     },function(){
        $(this).removeClass('xianghover');
        $(".yuan4").css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan4.png) no-repeat center top'
           })
           .animate({"top":"171px","left":"47px"}, 300);
    });

    $(".xiangmuList li.xiangmu4").hover(function() {
        /*if(!hoverAnm(".yuan2")) return false;*/
        $(this).addClass('xianghover');
        $(".yuan5").css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan5Hover.png) no-repeat center top'
       })
       .animate({"top":"82px","left":"0px"}, 300);
     },function(){
        $(this).removeClass('xianghover');
        $(".yuan5").css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan5.png) no-repeat center top'
           })
           .animate({"top":"80px","left":"4px"}, 300);
    });

    $(".xiangmuList li.xiangmu5").hover(function() {
        /*if(!hoverAnm(".yuan2")) return false;*/
        $(this).addClass('xianghover');
        $(".yuan1").css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan1Hover.png) no-repeat center top'
       })
       .animate({"top":"6px","left":"6px"}, 300);
     },function(){
        $(this).removeClass('xianghover');
        $(".yuan1").css({
           "background": 'URL('+CONTEXT+'/htmlPage/images/yuan1.png) no-repeat center top'
           })
           .animate({"top":"10px","left":"10px"}, 300);
    });



})