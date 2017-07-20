$(function(){
   
}); 

//最新公告
$(function(){
    $('#breakingnews2').BreakingNews({
        timer: 2000,
        effect: 'slide' 
    });
});


//圆形统计


//鼠标经过最新产品效果
$(function(){
    $(".proList ul li").hover(function() {
       $(this).css({
           "border": 'solid #02ADEA 1px'
       });
    }, function() {
        $(this).css({
           "border": 'solid #e1e1e1 1px'
       });
    });
});









