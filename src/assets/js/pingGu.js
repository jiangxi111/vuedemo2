$(function(){
      var selectText = new Array();
    $(".pingGu ul li").on('click', function() {
        $(this).addClass('addSel').siblings().removeClass('addSel')
    });
    $(".tijiao").on('click', function() {       
        $(".pingGu ul li.addSel").each(function(index, el) {          
            selectText[index]=$(el).children('span').text();
        });
        alert(selectText)

    });
})