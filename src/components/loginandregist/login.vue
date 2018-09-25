<template>
 <div id='login'>
   	<router-link to='/' tag='i'><div class="back  iconfont icon-zuojiantou"></div></router-link>
   <div class="logo"><img src='../../assets/img/logo.png'></div>
   <form>
      <mu-text-field hintText="请输入账号" type='number'  v-model.number="account" /><br/>
      <mu-text-field hintText="请输入密码" type='password' @focus="showpassword"   v-model="password"/><br/>
     
   <div class="savepassword"> <mu-checkbox class="demo-checkbox" v-model="savepassword" @input="showstate"/> <a class="forget">记住密码</a>
   </div>  

   <div class="forgetpassword"><router-link to='/findpassword'>忘记密码？</router-link></div>
   </form>
    <mu-flat-button label="登 录" class="demo-flat-button-three first"  @click="login"/><br>
    <mu-flat-button label="快捷登录" class="demo-flat-button-three two"  @click="fastlogin"/>
  
   <h3 class="noaccount">没有账号？<router-link to='/regist' class="regist">注册</router-link></h3>
 </div>
</template>
<script>
import baseurl from '../../api/beseurl.js'
  export default {
    data() {
  return{
account:'',
password:'',
savepassword:false
  }
     
    },
    methods: {
 showstate(){
      console.log(this.savepassword);
      if(this.savepassword){

        if(this.password==''){
      this.$message({
     
          message:'请先输入密码后再保存密码!!',
          type: 'warning',
           center: true
        });
        }else{
  localStorage.setItem('remainstate',this.savepassword);

         localStorage.setItem('save',this.password);
        }
       
      
      }else{
           localStorage.removeItem('save');
            localStorage.removeItem('remainstate');
      }
 },
     login(){
    console.log(this.savepassword)
      if(this.account!=''&&this.password!=''){
      
  this.$http.post(`${baseurl}api/anon/member/login?mobile=${this.account}&password=${this.password}&rememberme=1`).then(res=>{
     
       if(res.data.code==200){
           this.$message({
     
          message:res.data.message ,
          type: 'success',
           center: true
        });
         localStorage.setItem('pass','pass');
 this.$router.push('/');

       }else if(res.data.code==301){

      this.$router.push('/login');

       }else{
   this.$message({
     
          message:res.data.message ,
          type: 'warning',
           center: true
        });
       }
     });
      } else{
         this.$message.error('相关信息不能为空');
      }

    
     },
     fastlogin(){
this.$router.push('/fastlogin')
     },
     showpassword(){
    
       this.password=localStorage.getItem('save') ;

  
     }
    },
    mounted(){

 this.savepassword=false;
  
    }
  }
</script>
 <style  scoped>
.logo {
    width: 40%;
  
    margin: 0 auto;
    padding-top: 3rem;
    margin-bottom: 2rem;
}
.back{
    position: absolute;
        left: 15px;
    top: 15px;
    width: 30px;
    height: 36px;
}
.iconfont{
        font-size: 25px;
}
img{
  width: 100%;
}
.demo-flat-button-three{
  width: 60%;
  background: #045FA2;
  color:white;
  border-radius:6px; 
 margin-bottom: 1.5rem;
  
}
.savepassword,.forgetpassword{
  width: 49%;
}
.savepassword{
  float: left;
}
.forgetpassword{
  float: right;
}
.first{
  margin-top: 1rem;
}
.forget{
  vertical-align: super;
}
.regist{
      vertical-align: baseline;
}
.noaccount{
  /* position: absolute;
  text-align: center;
  left:50%;
  transform: translateX(-50%);
  bottom: 50px; */
  margin-top: 5rem;
}
</style>