  $(function(){
	 $(".subSearch").click(function(){
		 $("#searchFrom").submit();
	 }); 
	 
	 $(".selState").change(function(){
		 $("#dealStatus").val($(".selState").val());
		 $("#searchFrom").submit();
	 });
  });