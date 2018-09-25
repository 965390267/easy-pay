<template>
  <div id="app">
    
<!-- <transition name="fade"> -->
  <keep-alive >
  <router-view v-if="$route.meta.keepAlive" class="router"></router-view>
  </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"  class="router"></router-view>
  <!-- </transition> -->
<menu-bar v-if='showmain'></menu-bar>
  </div>
</template>

<script>
import MenuBar from './components/basecomponents/menu'
export default {
components:{
 MenuBar 
},
   data () {
      return {
       
        includedComponents:'/',
    showmain:true,
    　transitionName: 'slide-right' // 默认动态路由变化为slide-right
      }
    },
    methods:{
      mainpage(){

         if(this.$route.path=="/changepassword"||this.$route.path=="/login"||this.$route.path=='/regist'||this.$route.path=='/fastlogin'||this.$route.path=='/start'||this.$route.path=='/findpassword'){
        this.showmain=false;
      }else{
          this.showmain=true;
      }

      }
    },
    mounted(){
      this.mainpage()
     
    },
    watch:{
      '$route':'mainpage'
    }
}
</script>

<style >
/* 默认样式清除 */
*{
  margin: 0;
  padding: 0;
}
html,body{
  /* height: 100%; */
  /* background: #eeeeee!important; */
  font-family: 'Microsoft YaHei'!important;
  /* background-color: #f3f2f2; */
}
#app {
/* height: 100%; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.mu-tab-link{
  min-height: 36px;
  padding-bottom: 0px;
  padding-top: 0px;
}
select{
  background: transparent;
}
p{
    text-align: left;
    margin-left: 15px;
    padding: 3px 0;
}
.mu-bottom-item-text{/* 导航按钮样式设置; */
  font-family:'Microsoft YaHei'!important;
  font-size: '14px';
}
.el-input{/* 时间选择框设置; */
    width: 48%!important;
}
.el-message-box--center {
   
    margin-top: 210px;
}
.fade-enter-active, .fade-leave-active {
  transition: all .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0.7;
}
.router{
  height: 100%;
}
.scrollheight{
  overflow: auto;
}
/*iphone6plus*/


 @media onlyscreen and(-webkit-min-device-pixel-ratio:  1.5) and (max-width: 735px){}
   @media onlyscreen and (max-width: 735px) and (min-resolution: 1.5dppx){

   }
    @media onlyscreen and (max-width: 735px) and (min-resolution: 144dpi){

 

 }

 @media screen and (max-width:419px) {
.el-tabs__content,.scrollheight{
  height: 480px;
  overflow: auto;
  /* margin-bottom: 30px; */
}
}


@media onlyscreen and (-webkit-min-device-pixel-ratio: 1.5) and (max-width: 415px) and (min-resolution: 1.5dppx){

    .el-tabs__content,.scrollheight{
  height: 480px;
  overflow: auto;
  /* margin-bottom: 30px; */
}

}



/*iphone6*/
@media screen and (max-width:380px){
.el-tabs__content,.scrollheight{
  height: 410px;
  overflow: auto;
    /* margin-bottom: 30px; */
}
}
/*galas--s5*/
@media screen and (max-width:370px){
.el-tabs__content,.scrollheight{
  height: 370px;
  overflow: auto;
    /* margin-bottom: 30px; */
}
}
/*iphone5*/
@media screen and (max-width:340px){
.el-tabs__content,.scrollheight{
  height: 310px;
  overflow: auto;
    /* margin-bottom: 30px; */
}
}


</style>
