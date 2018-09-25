<template>
 <div>
     <div class="topbar">个 人</div>   
    <!-- <router-link to='/account'> <div class="return">返回</div></router-link> -->
     <div class="changs">
		    	
		    	<div class="talas">
		    		<span>商店名称</span>
		    		<span>{{name}}</span>
		    	</div>
		    	<div class="talas">
		    		<span>商户姓名</span>
		    		<span>{{owner}}</span>
		    	</div>
		    	<div class="talas">
		    		<span>商户电话</span>
		    		<span>{{mobile}}</span>
		    	</div>
		    	<div class="talas">
		    		<span>地址</span>
		    		<span>{{address}}</span>
		    	</div>
		    	<div class="showpic">
		    		<span>营业照：</span>
		    		<div><img :src='picsrc'></div>
		    	</div>
		    	<div class="showpic">
		    		<span>身份证正面照：</span>
		    		<div><img :src='cardpicsrc'></div>
		    	</div>
		    	<div class="showpic">
		    		<span>身份证反面照：</span>
		    		<div><img :src='cardbackpicsrc'></div>
		    	</div>
		    	
		    </div>   
             <mu-flat-button label="返回" class="demo-flat-button-three" @click="back"/>
     </div> 
</template>
<script>
import baseurl from '../../../api/beseurl.js'
import baseimgpath from '../../../api/baseimgpath.js'
export default {
  data(){
      return{
name:'',
owner:'',
mobile:'',
address:'',
initprovice:'',
initcity:'',
initarea:'',
picsrc:'',
cardpicsrc:'',
cardbackpicsrc:''
      }
  },
  methods:{
      back(){
          this.$router.push('/person');
      },
 getshopmes(){//商户的所有信息获取
   this.$http.post(`${baseurl}/api/auth/shop/entity`).then(res=>{
    //  console.log(res.data.data)
    var shopmes =res.data.data
   this.name=shopmes.name;
//    this.owner=shopmes.owner;
    this.mobile=shopmes.mobile;
    this.initprovice=shopmes.provinceName;
this.initcity=shopmes.cityName;
this.initarea=shopmes.regionName;
     this.address=this.initprovice+this.initcity+this.initarea+shopmes.address;

this.picsrc=baseimgpath+ shopmes.businessLicense;
this.cardpicsrc=baseimgpath+shopmes.idcardBefore;
this.cardbackpicsrc=baseimgpath+shopmes.idcardAfter;
   })
 }
  },
  mounted(){
this.getshopmes();
  }
}
</script>


<style scoped>
.topbar {
    background: #0675C6;
    /* background: linear-gradient(-90deg,#055EA2 ,transparent, #055EA2); */
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
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
.changs{
				width: 100%;
				
				padding:20px;
				box-sizing: border-box;
			}
			.changs>p{
				text-align: center;
				font-weight: bold ;
				font-size: 24px;
				color: #000000;
				margin: 0px !important;
			}
			.shoy{
				width: 100%;
				height: 48px;
				line-height: 48px;
				font-size: 14px;
				color: #b8b8b8;
				text-align: center;
			
			
			}
			.talas{
				width: 100%;
				height: 30px;
				margin-bottom: 10px;
				font-size: 16px;
			}
			.talas>span:nth-of-type(1){
				float: left;
				color: #B8B8B8;
			}
			.talas>span:nth-of-type(2){
				float: right;
				color: #000000;
			}
</style>

