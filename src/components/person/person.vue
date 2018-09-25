<template>
<div class="">
 <div class="payment-item">
       <div class="topbar">个人</div>       
<el-collapse v-model="shopmessage" accordion @change="showdata">
 <el-collapse-item title="基本信息" name="1" class="pull iconfont icon-geren10">
    <el-collapse accordion>
  <el-collapse-item title="商家信息" name="2" >
  
<!-- <business-mes></business-mes> -->
 <!-- 商家信息组件 -->
  </el-collapse-item>
  <el-collapse-item title="商家账户" name="3">
 <!-- <business-account></business-account> -->
<!-- 商家账户组价 -->
  </el-collapse-item>


</el-collapse>
  </el-collapse-item>
<el-collapse-item title="密码设置" name="4" class="pull iconfont icon-mimasuo">
   <change-password></change-password>
<!-- 密码设置 -->
  </el-collapse-item>
<el-collapse-item title="商家认证" name="5" class="pull iconfont icon-approve">
  <!-- <keep-alive> -->
<shop-test></shop-test>
<!-- </keep-alive> -->

  </el-collapse-item>
<el-collapse-item title="版本更新" name="6" class="pull iconfont icon-iconset0435">
  <!-- <keep-alive> -->
<a>检测更新</a>
<!-- </keep-alive> -->

  </el-collapse-item>
</el-collapse>
<dia-log v-if='show' :message='message' :title='title' @yes='yes' @no='no'></dia-log>
 <mu-flat-button label="退出登陆" class="demo-flat-button-three" @click="exitlogin"/>
            </div>
<!-- <menu-bar></menu-bar> -->
</div>
  
</template>
<script>
import baseurl from '../../api/beseurl.js'
import ShopTest from '../person/shop/businessauthentication'
import ChangePassword from '../person/changepassword/changepassword'
import BusinessMes from '../person/basemes/businessmes'
import BusinessAccount from '../person/basemes/businessaccount'
import DiaLog from '../basecomponents/dialog'
export default {
  components:{
ShopTest,
ChangePassword,BusinessMes,BusinessAccount,DiaLog
  },
  data() {
    return {   
       shopmessage: '3',
  title:'退出提示',
  message:'是否退出？',
  show:false
    };
  },
  methods: {
    yes(val){
// console.log(val);

             this.$http.post(`${baseurl}api/auth/member/logout`).then(res=>{
if(res.data.code==200){
  this.$message({
          message: '成功退出登录',
          type: 'success',
           center: true
        });
        localStorage.removeItem('pass')
    this.$router.push('/')
  }else if(res.data.code==301){
     this.$message({
          message:res.data.message,
          type: 'warning',
           center: true
        });
         this.$router.push('/login')
  }else{
 this.$message.error(res.data.message);
}


 })


    },no(val){
// console.log(val);
 this.show=false;
 this.$message({
            type: 'info',
            message: '已取消',
           center: true
          });  

    },
    lookshop(){
 this.$router.push('/lookshopmes');
    },
    checkshop(){
      this.$router.push('/shoptest')
    },
showdata(val){
// console.log(val);
if(val==5){
// this.isloading=true;
}
}
,
exitlogin(){
 this.show=true;
// this.$confirm('确认退出登录？', {
//           confirmButtonText: '确定',
//           cancelButtonText: '取消',
//           type: 'warning',
//            center: true
//         }).then(() => {

//         }).catch(() => {
                 
//         });

}
  },
  mounted(){

  }
};
</script>
<style scoped>
.topbar{
  background: #0675C6;
  
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  
}
.demo-flat-button-two{
  font-family: '微软雅黑';
  display: block;
  margin: 0 auto;
    margin-top: 2rem;
width: 80%;
height: 35px;
line-height: 35px;
font-size: 22px;
border-radius:8px;  
background: #49A1FB;
color: white;
}
.demo-flat-button-three{
  font-family: '微软雅黑';
  display: block;
  margin: 0 auto;
    margin-top: 2rem;
width: 80%;
height: 35px;
line-height: 35px;
font-size: 22px;
border-radius:8px;  
background: #045FA2 ;
color: white;
}

.pull{
  position: relative;
  width: 90%;
  margin: 0 auto;
  

}
.icon-geren10::before{
   position: absolute;
    left: -23px;
    top: 12px;
    z-index: 99;
}


.icon-mimasuo::before{
  position: absolute;
    left: -23px;
    top: 10px;
      z-index: 99;
}
.icon-approve::before{
 position: absolute;
    left: -23px;
    top: 12px;
      z-index: 99;
}



.icon-iconset0435::before {
    position: absolute;
    left: -23px;
    top: 12px;
    z-index: 99;
}

.el-collapse{
border-bottom: none;
text-align: left;
text-indent: 2rem;
}

</style>
