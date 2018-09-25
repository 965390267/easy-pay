<template>
  
  <div class="g-va">
            <!-- <p class="apid"><span>手机号：</span></p>
						<p class="ap_input"><input type="number" id="oldpadssi" placeholder="请输入您的手机号" v-model="findpasswordmobile" /></p> -->
						<p class="apid"><span>新密码：</span></p>
						<p class="ap_input"><input type="password" id="oldpadssi" placeholder="请输入新密码" v-model="newpassword" /></p>
						<p class="apid"><span>确认新密码：</span></p>
						<p class="ap_input"><input type="password" id="oldpassi" placeholder="请再次输入新密码" v-model="againnewpassword" /></p>
             <mu-flat-button label="确认修改密码" class="uploadmessage" @click="changepassword"/>
					</div>
</template>

<script>
import baseurl from '../../../api/beseurl.js'

export default {
  data(){
      return{
        //   findpasswordmobile:'',
      newpassword:'',
      againnewpassword:'',
      }
  },
  methods:{
          changepassword(){//修改密码接口
if(this.newpassword==this.againnewpassword){
   this.$http.post(`${baseurl}api/auth/member/update_password?password=${this.againnewpassword}`).then(res=>{
  
    this.$message({
          message: res.data.message,
          type: 'success',
           center: true
        });
   })
}else{
  this.$message.error('两次密码输入不一致，请重新输入！');
  return;
}


    },
  }
}
</script>
<style scoped>



.uploadmessage{
  display: block;
   font-family: '微软雅黑';
   margin: 0 auto;
    margin-top: 0.5rem;
width: 60%;
height: 35px;
line-height: 35px;
font-size: 22px;
border-radius:4px;  
background:#045FA2 ;
color: white;
}




.g-va {
    width: 100%;
    font-size: 12px;
  line-height: 45px;
    height: auto;
}
.apid {
    line-height: 20px !important;
    margin: 0px !important;
    color: #000000;
}
.ap_input {
    margin-top: -5px;
    margin-bottom: 0px !important;
}
.ap_input>input {
    padding: 0px 10px;
    width: 80%;
    height: 30px;
    border: 2px solid #7a7a7a;
    outline: none;
    font-size: 12px;
    box-sizing: border-box;
    line-height: 30px;
    margin: 0px !important;
}
.ap_input>select {
    padding: 0px 10px;
    width: 80%;
    height: 30px;
    border: 2px solid #7a7a7a;
    outline: none;
    font-size: 12px;
    box-sizing: border-box;
    line-height: 30px;
    color: grey;
    /* margin: 0px auto; */
}
</style>


