<template>
  <div>
    <h3 class="fenqi">扫一扫收款</h3>
    <div class="codebox"><img :src='twocode'></div>
      <mu-flat-button label="查看收款详情" class="demo-flat-button-three" @click="lookdetail"/>
     <!-- <router-link to='/scan'>	<mu-flat-button label="返 回" class="demo-flat-button-three"/></router-link> -->
  </div>
</template>
<script>
export default {
  data(){
    return{
twocode:'',
orderid:''
    }
  },
  methods:{
    getparams(){
        this.twocode=this.$route.query.codeaddress;
         this.orderid=this.$route.query.orderid;
        // console.log(this.orderid)
    },
    lookdetail(){
      this.$router.push({'path':'/detail',query:{orderId:this.orderid}})
    }
  },
  mounted(){
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

