<template>
<section>

     
  <div>
    <transition  leave-active-class="fadeOut animated" id="demo">
        <div id="BgMask" :style="BgMask" v-show="isShow" @click="clickPop">

         </div>
    </transition>
    <transition enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutUp">
    	 <section class="popCon" :style="Wleft" v-show="isShow">
            <div class="plateClose"><a @click="clickPop" href="javascript:void(0);">X</a></div>
            <div class="titPop">{{titltPop}}</div>
               <slot></slot>
                <div class="trueEdit bgTranBlue" @click="sureSub">确认修改</div>
        </section>
     </transition>
    </div>
  
    </section>
    
</template>

<script>
	export default{
        data(){
            return {
                BgMask:{},
                Wleft:""
            }
        },
        props:{
            isShow:{
                type:Boolean,
                default:false
            },
            widthCon:{

            },
            titltPop:{

            }
        },
        mounted(){
            this.getInfo();
        },
        methods:{
            sureSub(){
                this.$emit("sureSub")
            },
            clickPop(){
                this.$emit("closePop")
            },
            getInfo(){
                
                 var bh = $("body").height();
                var bw = $("body").width();
                var Wbh = $(window).height();
                var Wbw = $(window).width();
                 this.Wleft ="left:"+(Wbw-this.widthCon*1)/2+"px";
                if(Wbh>bh){
                    bh=Wbh;
                }
                this.BgMask={
                     "height":bh+150+"px",
                     "width":bw+"px"
                }
                
                // $("#"+popCon).css({
                //     left:Wleft
                // });
                // $("#BgMask").fadeIn(1000);
                // $("#"+popCon).fadeIn(500);
            }
                       

   




        }


    }
</script>

<style>
    #BgMask.fadeOut{

    }
	#BgMask {
   animation-duration:0.5s;animation-delay:0.5s;animation-fill-mode:both;
 
    background-color:#000;
    left:0;
    opacity:0.8;
    position:absolute;
    top:0;
    filter:alpha(opacity=80);
    -moz-opacity:0.8;
    -khtml-opacity:0.8;
    z-index:10000;
}

.plateClose{
   width: 100%;
   height: 40px;
}
.plateClose a{ 
    display:block;
    position:absolute;
    right:10px;
    top:12px;
    width:17px; 
    height:17px;
    font-size: 18px;
    color: #ccc;
    /*background: url(../../images/close.png) no-repeat center center;*/
    cursor: pointer;
}
.plateClose a:hover{
    color: #666;
}
.popCon {
    background: #fff none repeat scroll 0 0;
    height: 300px;
    position: fixed;
    top: 10%;
    width: 500px;
    z-index: 100001;
}
</style>