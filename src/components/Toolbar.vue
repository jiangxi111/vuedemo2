<template>
	<div class="toolbar" id="toolbar">
        <div class="zindexOp">
             <span class="toolbarWeixin"></span>
             <span class="toolbarphone">
                 <p class="n1">400 668 2202</p>
                 <p class="n2">周一 ~ 周五<br>（09:00 ~ 17:00）</p>
             </span>
           <div class="toolbar-item toolbar-item-weixin"> 
           <img src="../assets/public/commonImg/weixin.png">            
           </div>
           <div class="toolbar-item toolbar-item-phone">
              <img src="../assets/public/commonImg/phone.png">   
           </div>
           <div class="toolbar-item toolbar-item-app" target="_blank">   
                <img src="../assets/public/commonImg/app.png">  
           </div>
           <div class="toolbar-item toolbar-item-jisuan">
                <img src="../assets/public/commonImg/jisuan.png">
           </div>
           <div id="top" class="toolbar-item toolbar-item-top"><img src="../assets/public/commonImg/top.png"></div>
       </div>
       <div class="jisuanCon">
           <div class="titjisuan">
               <span>收益计算器</span>
               <p class="closeJisuan">X</p>
           </div>
           <form action="#" autocomplete="off">
            <div class="bigmony">
                <b>大写金额</b>
                <div class="bigMoneyText">ddd</div>
            </div>
               <ul>
                   <li>
                       <section class="InputDiv">
                            <b>投入金额</b>
                            <input  type="text" maxlength="9" placeholder="请输入投入金额" class="jine">
                            <em>元</em>
                       </section>
                   </li>
                   
                   <li>
                       <section class="InputDiv">
                            <b>投入时长</b>
                            <input type="text" maxlength="3" placeholder="请输入投入时长" class="touru">
                            <em>天</em>
                       </section>
                   </li>
                   <li>
                       <section class="InputDiv">
                            <b>年化利率</b>
                            <input type="text" maxlength="4" placeholder="请输入年化利率" class="lilv">
                            <em>%</em>
                       </section>
                   </li>
                   <li>
                       <div  class="subjisuan">计算</div>
                       <div  class="congzhi">重置</div>
                   </li>
               </ul>
               
           </form>
           <div class="jieguo">
               <p class="n1">计算结果</p>
               <p>本息合计<span class="benxi">-</span>元</p>
               <p>利息收入<span class="lixi">-</span>元</p>
           </div>
       </div>
    </div>
</template>