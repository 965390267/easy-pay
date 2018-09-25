<template>
  <div>
    <h3 class="fenqi">扫一扫分期</h3>
    <div class="codebox">

<!-- <subs></subs> -->
      <img :src='twocode'>
      </div>
    <mu-flat-button label="查看订单详情" class="demo-flat-button-three" @click="lookdetail"/>
     <!-- <router-link to='/ant'>	<mu-flat-button label="返 回" class="demo-flat-button-three"/></router-link> -->
     <menubar></menubar>
  </div>
</template>
<script>
import menubar from '../basecomponents/menu'
// import subs from './test'
export default {
  components:{
    menubar
  },
  data(){
    return{
twocode:'',
orderdetail:''
    }
  },
  methods:{
    getparams(){
        this.twocode=this.$route.query.codeaddress;
        this.orderdetail=this.$route.query.orderdetail;
        // console.log(this.orderdetail)
    },
    lookdetail(){
this.$router.push({'path':'/detail',query:{orderId:this.orderdetail}})
    }
  },
  mounted(){
    // this.$refs.submit.submit()
    this.getparams()
  },
  watch:{
    '$route':'getparams'
  }
}
</script>

<style scoped>
/* .fenqi{
  padding: 15px 0;
  margin-top: 3rem;
} */
.fenqi {
    background: #0675C6;
    /* background: linear-gradient(-90deg,#055EA2 ,transparent, #055EA2); */
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.codebox{
  width: 280px;
  height: 280px;
  margin: 0 auto;
  margin-top: 2rem;
  /* box-shadow: 0px 0px 5px #90cfec; */
}
.codebox img{
  width: 100%;
  height: 100%;
}
	.demo-flat-button-three{
  font-family: '微软雅黑';
  display: block;
  margin: 0 auto;
    margin-top: 1rem;
width: 80%;
height: 35px;
line-height: 35px;
font-size: 22px;
border-radius:8px;  
background: #045FA2 ;
color: white;
}
</style>

