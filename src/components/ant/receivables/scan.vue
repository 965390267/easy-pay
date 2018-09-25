<template>
 <div class="payment-item">
   <div>
       <div class="topbar">收 款</div>    
      
<ul class="clearpadding">
  
     <li><span  class="left">金额</span><span class="right">￥ <mu-text-field  class="putmoney" hintText="输入金额" type='number'  v-model.number="putmoney"/></span></li>
  
       <!-- <li><span  class="left">手续费类型</span> 
   
  <span class="right"> 

       <select class="select-box" v-model="moneytype">
  <option  v-for="(item,index) in type" :key='index' :value="item.value"   >{{item.name}}</option>
  
</select>
   
      </span>
  </li>
        <li><span  class="left">分期数</span><span class="right">
        
            <select v-model="moneynums"  class="select-box">
  <option  v-for="(item,index) in nums" :key='index'  :value="item.value" >{{item.name}}</option>
  
</select>
  </span></li> -->
</ul>
<mu-flat-button label="确定" class="demo-flat-button" @click="submit"/>
</div>
<!-- <two-code v-if='!showorhidden' :twocode='codesrc'></two-code> -->
            </div>
</template>
<script>
// import TwoCode from '../ant/twocode'
import baseurl from '../../../api/beseurl.js'
import baseimgpath from '../../../api/baseimgpath.js'
export default {
//   components:{
// TwoCode
//   },
  data () {
    return {

   putmoney:'', 

    codesrc:'',
    orderid:''
    }
  },
  methods: {

submit(){
  
  if(this.putmoney!=''){

// console.log(this.moneytype,this.moneynums)
this.putmoney=Number(this.putmoney)
this.$http.post(`${baseurl}api/auth/alipay/face?total=${this.putmoney}`).then(res=>{
 
  if(res.data.code==200){
 this.$message({
     
          message:res.data.message ,
          type: 'success',
           center: true
        });
this.codesrc=baseimgpath+res.data.data.qr;
this.orderid=res.data.data.outTradeNo;

this.$router.push({path:'/scancode',query:{codeaddress:this.codesrc,orderid:this.orderid}});
  }else if(res.data.code==301){
     this.$message({
     
          message:res.data.message ,
          type: 'warning',
           center: true
        });
    this.$router.push('/login')
  }else{
 this.$message.error(res.data.message);
  }
})

  }else{
          this.$message.error('金额不能为空');
  }
 
}
  },
  mounted(){
 
// this.showorhidden= localStorage.getItem('showbox');
  }
}
</script>
<style scoped>
.putstyle{
  background: red;
}
.topbar{
  background: #0675C6;
   /* background: linear-gradient(-90deg,#055EA2 ,transparent, #055EA2); */
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  
}
.putmoney {
  border: none;
  width: 60%;
  height: 30px;
   -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.putmoney:focus {
 border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.noline{
  border: none;
}
.mu-dropDown-menu{
  width: 50%!important;
  margin-bottom: 5px;
}
.clearpadding{
  padding-left: 0px;
}
li {
  display: block;
   text-align:left;
  width: 90%;
  margin: 0 auto;
  padding: 1.59rem 0;

  border-bottom: 1px solid #ccc;
}
.putmoney{
  width: 80%;
  background-color: transparent;
  border: none;
  line-height: 30px;
}
.putmoney:focus{
  border:transparent;
}
.right{
  float: right;
  width: 75%;
    text-align: center;
       /* margin-left: 13%; */
}
.righttime{
     /* margin-left: 4rem; */
     width: 80%;
    text-align: center;
}

  .lastright{
  /* margin-left: 6rem; */
  width: 80%;
    text-align: center;
}


.mu-dropDown-menu{
  width: 30%;
  margin-left: 12%;
    text-align: center;
}
.left {
   
 
  padding: 10px 0;
}
.demo-flat-button{
    margin-top: 3rem;
width: 60%;
background: #045FA2;
color: white;
}
.tip{
    color: #5E8EBB;
}
</style>
