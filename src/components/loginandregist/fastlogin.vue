<template>
 <div class="fastlogin">
			<router-link to='/login' tag='i'><div class="back  iconfont icon-zuojiantou"></div></router-link>
			<div class="logo">
				<img src="../../assets/img/logo.png" alt="" />
			</div>
			
			<form class="margin-top-box">
                <mu-text-field hintText="请输入账号" type='number'  v-model.number="account"/><br/>
      <mu-text-field hintText="请输入验证码" type='number'  v-model.number="testcode" class="inputcode"/>
				  <mu-flat-button :label="kjdl" class="getcode"  @click="getcode"/>
				
			</form>
			  <mu-flat-button label="快捷登录" class="fastlogin-btn"  @click="fastlogin"/>
		
		</div>
</template>
<script>
import baseurl from '../../api/beseurl.js'
export default {
  data(){
      return{
         account:'',
         testcode:'' ,
         kjdl:'获取验证码',
         mm:60,
         timer:null
      }
  },
  methods:{
getcode(){
    if(this.account!=''){
        if(this.mm==60){

        
             this.$http.post(`${baseurl}api/anon/sms/send/?mobile=${this.account}&code=dldx`).then(res=>{
     if(res.data.code==200){
       this.$message({
     
          message:res.data.message ,
          type: 'success',
           center: true
        });
       this.kjdl='60s后重新发送';
    
     
      this.timer=setInterval(()=>{
          this.mm--;
          this.kjdl=`${this.mm}s后重新发送`;
          if(this.mm==0){
              clearInterval(this.timer);
              this.mm=60;
              this.kjdl='发送验证码';
          }
      },1000)
     }else{
         this.$message({
     
          message:res.data.message ,
          type: 'warning',
           center: true
        });
     }
     })
}else{
    return;
}
    }else{
         this.$message.error('账号不能为空');
    }
},
fastlogin(){
        if(this.account!=''){
      this.$http.post(`${baseurl}api/anon/member/fast_login?mobile=${this.account}&validCode=${this.testcode}&rememberme=1`).then(res=>{
     if(res.data.code==200){
            localStorage.setItem('pass','pass');
      this.$message({
     
          message:res.data.message ,
          type: 'success',
           center: true
        });
       this.$router.push('/');
     }else{
          this.$message.error(res.data.message);
     }
     })

    }else{
      this.$message.error('账号不能为空');
    }



}
  },
  mounted(){

  },
  beforeDestroy(){
        clearInterval(this.timer);
  }
}
</script>

<style scoped>

.fastlogin{
    position: relative;
	width:75%;
	margin: 0 auto;
	padding-top:2rem;
}
.back{
    position: absolute;
        left: -30px;
    top:15px;
    width: 30px;
    height: 36px;
}
.iconfont{
        font-size: 25px;
}
.margin-top-box{
    margin-top: 3rem;
}
img{
	width:100%;
}
/*登陆页*/
.logo{
	width:50%;
	border-radius: 100%;
	margin:0 auto;
}

.inputcode{
width: 40%;
}
.getcode{
width: 55%;
background: #045FA2;
color:#fff;
}
.fastlogin-btn{
    margin-top: 2rem;
   width: 100%;
background: #045FA2;
color:#fff; 
}
</style>

