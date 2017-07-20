//类别查询
function searchByCategory(val){
    $("#pTypeId").val(val);
    submitSearch();
}

//当前状态
function searchByState(val){
    $("#financingStatusId").val(val);

    submitSearch();
}
function searchByNovince(val){
	 $("#novince").val(val);
	 
	 submitSearch();
}
function submitSearch(){
    $("#conditionSearch").submit();
}

$(function(){
    $(".btsearch").click(function(){
    	$("#codeOrName").submit();
    });
})





