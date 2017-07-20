$(function(){
    //购买
    $('#payment').click(function(){
        var id = $('#open1').find('[name=id]').val();
        var pId = $('#open1').find('[name=pId]').val();
        var purchaseQuantity = $('#open1').find('[name=purchaseQuantity]').val();
        $.getJSON(CONTEXT+'/payment/' + pId + '/limit?purchaseQuantity=' + purchaseQuantity + '&id=' + id, function(o){
            if(o=='-1'){
            	//platBt("wangyinPop");
                $("#open1").submit();
            }
            else{
            	$(".errorForm").html("购买超限，请修改购买金额");
            }
        })
    });
});