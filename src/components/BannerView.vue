<template>
	<div class="banner" id="banner">
            <div class="top3_main">
                <div class="gp_wrap"> 
                        <span style="background: transparent url(&quot;http://sudaibang-pic.b0.upaiyun.com/carousel/1442829986142.png!lbanner&quot;)" class="guide_pic gp1" data-img="http://sudaibang-pic.b0.upaiyun.com/carousel/1442829986142.png!lbanner" data-url="http://www.sudaibang.com/product/list"></span>
                    
                        <span style="background: transparent url(&quot;http://sudaibang-pic.b0.upaiyun.com/carousel/1443448973771.png!lbanner&quot;)" class="guide_pic gp2" data-img="http://sudaibang-pic.b0.upaiyun.com/carousel/1443448973771.png!lbanner" data-url="http://www.sudaibang.com/banner/active1"></span>
                    
                        <span style="background: transparent url(&quot;http://sudaibang-pic.b0.upaiyun.com/carousel/1443448974474.png!lbanner&quot;)" class="guide_pic gp3" data-img="http://sudaibang-pic.b0.upaiyun.com/carousel/1443448974474.png!lbanner" data-url="http://www.sudaibang.com/banner/active5"></span>
                    
                    <div class="gp_dot_wrap">
                            <span class="gp_dot gp_dot_se" data-id="1"></span>
                            <span class="gp_dot" data-id="2"></span>
                            <span class="gp_dot" data-id="3"></span>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
	export default{
		mounted(){
			// Banner
			this.lunbo();
		},
		methods:{
			lunbo(){
				$(function(){
				    var NUM = $('.gp_dot_wrap').find('.gp_dot').length,
				        time = 0,
				        title = $('.gp_title'),
				        cont = $('.gp_cont')
				    function dot_click(id){
				        if(id==$('.gp_dot_se').data('id')){
				            return
				        }
				        var pic = $('.gp'+id)
				        $('.guide_pic:visible').fadeOut(800)
				        pic.fadeIn(800)
				        $('.gp_dot_se').removeClass('gp_dot_se')
				        $('.gp_dot[data-id="'+id+'"]').addClass('gp_dot_se')
				        title.text(pic.data('title'))
				        cont.text(pic.data('cont'))
				    }
				    function auto_start(id){
				        function change_gp(){
				            (id==NUM+1) && (id=1)
				            dot_click(id)
				            id ++
				            time = setTimeout(change_gp,4000)
				        }
				        change_gp()
				    }
				    function init_gp(id){
				        $('.gp'+id).show()
				        title.text($('.gp'+id).data('title'))
				        cont.text($('.gp'+id).data('cont'))
				    }
				    init_gp(1)
				    auto_start(1)

				    $('.gp_dot').click(function(){
				        var self = $(this),
				            id = self.data('id')
				        if(self.hasClass('gp_dot_se')){
				            return
				        }
				        clearTimeout(time)
				        auto_start(id)
				    })
				    $('.guide_pic').click(function(){
				        //location.href = $(this).data('url');
				    	if($(this).data('url')!=''){
				    		window.open($(this).data('url'));
				    	}
				    })
				    $('.guide_pic').each(function(){
				        $(this).css({'background':'url('+$(this).data("img")+') no-repeat 50% 50%'})
				    })
				});
			}
		}
	}
</script>