<template>
 <div class="fastlogin">
		<router-link to='/findpassword' tag='div'><div class="back  iconfont icon-zuojiantou"></div></router-link>
			<div class="logo">
				<img src="../../assets/img/logo.png" alt="" />
			</div>
			
			<form class="margin-top-box">
                <mu-text-field hintText="请输入密码" type='password' fullWidth  v-model="password"/><br/>
                  <mu-text-field hintText="请再次输入密码" type='password' fullWidth  v-model="passwordagain"/><br/>
      <!-- <mu-text-field hintText="请输入验证码" type='number' v-model.number="testcode" class="inputcode"/>
				  <mu-flat-button :label="kjdl" class="getcode"  @click="getcode"/> -->
				
			</form>
			  <mu-flat-button label="确 定" class="fastlogin-btn"  @click="fastlogin"/>
		
		</div>
</template>
<script>
import baseurl from '../../api/beseurl.js'
export default {
  data(){
      return{
          password:'',
          passwordagain:'',
         account:'',
      
      }
  },
  methods:{

fastlogin(){
        if(this.password==this.passwordagain){
     this.$http.post(`${baseurl}api/anon/member/update_password?mobile=${this.account}&password=${this.passwordagain}`).then(res=>{
     if(res.data.code==200){
       this.$message({
     
          message:res.data.message ,
          type: 'success'
        });
       this.$router.push('/login');
     }else{
         this.$message({
     
          message:res.data.message ,
          type: 'warning',
           center: true
        });
     }
     })

    }else{
      this.$message.error('两次密码不一致!');
    }



}
  },
  mounted(){
this.account=this.$route.query.account;
console.log(this.account)
  }
}
</script>

<style scoped>

.fastlogin{
    position: relative;
	width:75%;
	margin: 0 auto;
	margin-top:2rem;
}
.back{
    position: absolute;
        left: -30px;
    top: -20px;
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
width: 42%;
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

