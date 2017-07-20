<template>
	<section class="rowLeft">
                       <h2>{{routerImg}}</h2>
                        <router-link to="/grxx"  >
                            <i class="icon5"></i>
                            <span>个人信息</span>
                        </router-link>
                        <router-link to="/wdzc">
                            <i class="icon6"></i>
                            <span>我的资产</span>
                        </router-link>

                        <router-link to="/jyjl">
                            <i class="icon11"></i>
                            <span>交易记录</span>
                        </router-link>
                        
                       <router-link to="/ddgl">
                            <i class="icon7"></i>
                            <span>订单管理</span>
                        </router-link>
                         <router-link to="/analysis">
                            <i class="icon7"></i>
                            <span>练习</span>
                        </router-link>
                      
                        
                      
                    </section>
</template>

<script>
	export default{
        data(){
            return {
                getMap:{
                    "/grxx":"标题1",
                    "/wdzc":"标题2",
                    "/jyjl":"标题3",
                    "/ddgl":"标题4"
                }
            }
        },
        methods:{

        },
        mounted(){
           
        },
        computed:{
            routerImg(){
                return this.getMap[this.$route.path]
            }
        }
    }
</script>

<style scoped>
	.router-link-active{
            background: #e9e9e9;
    }
    .rowLeft h2{
        text-align: center;
    }
</style>