<template>
<div class="fastlogin">
  	<router-link to='/login' tag='i'><div class="back  iconfont icon-zuojiantou"></div></router-link>
	<h2>注册</h2>
			<form class="margin-top-box">
                   <mu-text-field hintText="请输入手机号码" type='number'  v-model.number="mobile"/><br/>
                       <mu-text-field hintText="请输入密码" type='password' v-model="password"/><br/>
                       <mu-text-field hintText="请确认密码" type='password'  v-model="againpassword"/><br/>
                      <mu-text-field hintText="请输入推荐码"   v-model="throughcode"/><br/>
                     
				
			</form>
       <mu-text-field hintText="请输入验证码" type='number'  v-model.number="testcode" class="inputcode"/>
				  <mu-flat-button :label="kjdl" class="getcode"  @click="gettestcode"/>
			  <mu-flat-button label="注册" class="fastlogin-btn"  @click="register"/>
		
		</div>

</template>

<script>
import baseurl from '../../api/beseurl.js'
export default {
  data () {
    return {
   mobile:'',
   password:'',
   againpassword:'',
   throughcode:'',
   testcode:'',
 kjdl:'获取验证码',
          mm:60,
         timer:null
    }
  },
  methods: {
gettestcode(){
if(this.mobile){



          if(this.mm==60){

        
          this.$http.post(`${baseurl}/api/anon/sms/send/?mobile=${this.mobile}&code=zcdx`).then(res=>{
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
          type: 'wrning',
           center: true
        });
     }
     })
}else{
    return;
}


}else{
     this.$message.error('手机号码不能为空');
 
}
},
register(){

  if(this.mobile!=''&&(this.password==this.againpassword)&&this.throughcode!=''&&this.testcode!=''){


 this.$http.post(`${baseurl}/api/anon/member/register/?mobile=${this.mobile}&password=${this.password}&validCode=${this.testcode}&referralCode=${this.throughcode}`).then(res=>{
       console.log(res);
       if(res.data.code==200){
           localStorage.setItem('pass','pass');
        this.$message({
     
          message:res.data.message ,
          type: 'success',
           center: true
        });
         this.$router.push('/login');
       }else if(res.data.code==500){
         this.$message({
     
          message:res.data.message ,
          type: 'wrning',
           center: true
        });
       }else{
           this.$message.error(res.data.message);
       }
     })
       }else{
           this.$message.error('您填写的相关信息不正确，请重新输入！');
       
       }
}
  },
  beforeDestroy(){
        clearInterval(this.timer);
  }
}
</script>
<style scoped>
.fastlogin{
  position: relative;
	/* width:75%; */
	margin: 0 auto;
	padding-top:2rem;
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
.margin-top-box{
  	width:75%;
    	margin: 0 auto;
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
width: 29%;

}
.getcode{
width: 33%;
background: #045FA2;
color:#fff;
}
.fastlogin-btn{
    margin-top: 2rem;
   width: 70%;
background: #045FA2;
color:#fff; 
}
</style>
