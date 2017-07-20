﻿(function(jQuery){

	$.fn.BreakingNews = function(settings){
			var defaults={
					background		:'#FFF',
					linkcolor		:'#333',
					
					fonttextsize	:14,
					isbold			:false,
					border			:'none',
					width			:'400',
					autoplay		:true,
					timer			:3000,
					modulid			:'brekingnews',
					effect			:'fade'	//or slide	
				};
			var settings=$.extend(defaults,settings);
			
			return this.each(function(){
				settings.modulid="#"+$(this).attr("id");
				var timername=settings.modulid;
				var activenewsid=1;
				
				if (settings.isbold==true)
					fontw='bold';
				else
					fontw='normal';	
					
				if (settings.effect=='slide')
					$(settings.modulid+' ul li').css({'display':'block'});
				else
					$(settings.modulid+' ul li').css({'display':'none'});				
				
				
				$(settings.modulid+' ul').css({'left':"0px"});
				
				$(settings.modulid+' ul li a').css({'color':settings.linkcolor,'fontSize':settings.fonttextsize,'font-weight':fontw,'height':parseInt(settings.fonttextsize)+6});
				$(settings.modulid+' ul li').eq( parseInt(activenewsid-1) ).css({'display':'block'});
				
				// Links hover events ......
				$(settings.modulid+' ul li a').hover(function() 
					{
                    	$(this).css({'color':"#02adea"});
					},
					function ()
					{
						$(this).css({'color':settings.linkcolor});
					}
				);
				
				
			
				
				// Timer events ...............
				if (settings.autoplay==true)
				{
					timername=setInterval(function(){BnAutoPlay('next')},settings.timer);					
					$(settings.modulid).hover(function()
						{
							clearInterval(timername);
						},
						function()
						{
							timername=setInterval(function(){BnAutoPlay('next')},settings.timer);
						}
					);
				}
				else
				{
					clearInterval(timername);
				}
				
				//timer and click events function ...........
				function BnAutoPlay(pos)
				{
					if ( pos=="next" )
					{
						if ( $(settings.modulid+' ul li').length>activenewsid )
							activenewsid++;
						else
							activenewsid=1;
					}
					else
					{
						if (activenewsid-2==-1)
							activenewsid=$(settings.modulid+' ul li').length;
						else
							activenewsid=activenewsid-1;						
					}
					
					if (settings.effect=='fade')
					{
						$(settings.modulid+' ul li').css({'display':'none'});
						$(settings.modulid+' ul li').eq( parseInt(activenewsid-1) ).fadeIn();
					}
					else
					{
						$(settings.modulid+' ul').animate({'marginTop':-($(settings.modulid+' ul li').height())*(activenewsid-1)});
					}
				}
				
				// links size calgulating function ...........
				$(window).resize(function(e) {
                    if ( $(settings.modulid).width()<360 )
					{
						
						$(settings.modulid+' ul').css({'left':4});
					}else
					{
						
						
					}
                });
			});
			
		};
		
})(jQuery);