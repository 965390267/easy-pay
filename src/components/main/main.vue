<template>
  <div class="mainpage">
      <div class="topbar">首 页</div>   
   <slider >

  </slider>
  <div class="mid">
    <ul>
      <router-link to='/ant'>  <li class="mainpage-nav"><div class="nav-pic"><img src='../../assets/img/order.png'></div><h3>分期</h3></li></router-link>
      <router-link to='/scan'>  <li class="mainpage-nav"><div class="nav-pic"><img src='../../assets/img/money.png'></div><h3>收款</h3></li></router-link>
    <router-link to='/account'>  <li class="mainpage-nav"><div class="nav-pic"><img src='../../assets/img/rightaccount.png'></div><h3>账单</h3></li></router-link>
    </ul>
  </div>
  <div class="midfont">
<div class="midleft"><ul><li class="nodot">今日</li><li class="nodot changecolor">热点</li></ul></div>
<div class="midright"><ul  class="scroll-content"  :class="{anim:animate==true}" ><li v-for='(item,index) in hotdot' :key='index'  @click="openhot(index)"> . {{item.name}}</li></ul></div>
  </div>
<!-- <menu-bar></menu-bar> -->
<div class="news">
  <h3>资讯</h3>
  <div class="newsimg" v-for='(item,index) in zixunlist' :key='index' @click="open(index)"><img :src='baseurlimg+item.img'><div class="zhezhao">{{item.name}}</div></div>
</div>
<!-- <menu-bar></menu-bar> -->
  </div>
</template>

<script>
import baseurl from '../../api/beseurl.js'
import baseimgpath from '../../api/baseimgpath.js'
// import MenuBar from '../basecomponents/menu'
import slider from '../basecomponents/slider'// 引入slider组件
export default {
  
   data () {
      return {
         animate:false,
  hotdot:[],
  hotdotlength:'',
  zixunlist:[],
  baseurlimg:'',
  activeIndex: 0,
  timer:null
      }
    },
created(){
   var timer= setInterval(this.scroll,1500)
},

  // computed: {
  //   top() {
  //     return - this.activeIndex * 40 + 'px';
  //   }
  // },
    methods:{
       scroll(){
       this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
       setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
               this.hotdot.push(this.hotdot[0]);  // 将数组的第一个元素添加到数组的
               this.hotdot.shift();               //删除数组的第一个元素
               this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
       },1000)
    },
       openhot(i){
 
        this.$router.push({path:'/hot',query:{index:i}});
      },
      open(i){
 
        this.$router.push({path:'/zixun',query:{index:i}});
      },
    hotpoint(){
       this.$http.post(`${baseurl}api/anon/article/page?channeGroupby=1&pageSize=3`).then(res=>{//热点
       if(res.data.code==200){
this.hotdotlength=res.data.data.total;
sessionStorage.setItem('li_length',this.hotdotlength)
this.hotdot=res.data.data.rows;
       }else{
 this.$message.error(res.data.message);
}



       });
    },
       zixun(){
          this.$http.post(`${baseurl}api/anon/article/page?channeGroupby=2&pageSize=2`).then(res=>{
//资讯
if(res.data.code==200){
this.baseurlimg=baseimgpath;
this.zixunlist=res.data.data.rows;
}else{
 this.$message.error(res.data.message);
}

       });
       }
    
    },
    mounted(){
      this.hotpoint();
      this.zixun();

    // console.log(this.hotdot,this.hotdotlength)

 var timer= setInterval(()=> {
         var li_length=Number( sessionStorage.getItem('li_length'));
      if(this.activeIndex < li_length-1) {
        this.activeIndex ++;
      } else {
        this.activeIndex = 0;
      }
    }, 2500);
   
  
      
    },
    beforeDestroy(){
      clearInterval(this.timer);
    },
    components: {
        slider,
        // MenuBar
    }
}
</script>

<style scoped>
.topbar{
  background: #0675C6;
  
  height: 9%;
  line-height: 4rem;
  text-align: center;
  color: #fff;
  font-size: 18px;
  /* font-weight: bold; */
  
}
.mainpage{
  margin-bottom: 60px;
  background-color: #f3f2f2;
}
.mid{
  height: 14%;
  margin-top: 6%;
}

.midfont{
  /* height: 11%; */
margin-top: 8%;
background-color: #fff;
padding: 3% 0;
box-shadow: 0px 2px 5px #999;

}
.midfont li{
 
  white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
}
.midfont .nodot{
  font-size: 16px;
list-style: none;
}
.midfont .changecolor{
  color: #045ea1;
}
.midleft{
 display: inline-block;
  width: 15%;
}
.midright{
display: inline-block;
/* margin-left: 5%; */
width: 68%;
height: 50px;
    overflow: hidden;
}
.scroll-content{
  position: relative;
  /* transition: top 2s; */
}
.anim{
    transition: all 1s;
    margin-top: -20px;
}
.midright li{
   color:#ff4081;
    line-height: 24px;
    text-align: left;
}

.mainpage-nav{
  width: 25%;
  padding: 0.5rem 0;
  margin: 0 2%;
  display: inline-block;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 3px 5px #666;
}
.mainpage-nav h3{
  color:#666;
}
.nav-pic{
  width: 40%;
  margin: 0 auto;
}
.nav-pic img{
  width: 100%;
}
.news{
  height: 18%;
  margin-top: 5%;
}
.news h3{
  font-family: '微软雅黑';
  text-align: left;
  margin-left: 10%;
}
.newsimg{
  position: relative;
  height: 81%;
  width: 85%;
  margin: 5px auto 25px;
  /* margin-bottom: 10px; */
  border-radius: 10px;
    box-shadow:0px 0px 6px 1px #666;

}
.zhezhao{
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 20px;
  width: 100%;
background-color: rgba(0,0,0,.5);
color:white;
text-align: center;
border-radius:0 0 10px 10px; 
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}
.newsimg img{
  width: 100%;

  border-radius:8px; 
}
</style>
