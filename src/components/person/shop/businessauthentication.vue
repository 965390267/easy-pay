<template>
  <div>
     <!-- <div class="topbar">个 人</div>    -->
 
     <div class="g-va">
						<p class="apid"><span>商店名称：</span></p>
						<p class="ap_input"><input type="text" id="pcnamse" placeholder="请输入商店名称"  v-model="name"/></p>
						<p class="apid"><span>商户姓名：</span></p>
						<p class="ap_input"><input type="text" id="mynadme" placeholder="请输入商户姓名" v-model="owner" /></p>
						<p class="apid"><span>商户电话：</span></p>
						<p class="ap_input"><input type="text" id="namefti" placeholder="请输入商户电话" v-model="mobile" /></p>
           
            <p class="apid"><span>请选择省份：</span></p>
						<p class="ap_input">
              <select @change='getproviceid($event)'  >
                <option value="请选择" selected='selected'  >{{initprovice}}</option>
                <option v-for="(item,index) in provices" :key='index' :value="item.id" >{{item.name}}</option>
              </select>
               </p>
               <p class="apid"><span>请选择市：</span></p>
               	<p class="ap_input">
               <select  @change='getcity($event)' :disabled="isablecity">
                 <option value="请选择" selected='selected'  >{{initcity}}</option>
                <option v-for="(item,index) in citys" :key='index' :value="item.id">{{item.name}}</option>
              </select>
               </p>
                <p class="apid"><span>请选择区：</span></p>
               	<p class="ap_input">
              <select  @change='getarea($event)' class="select-box-center" :disabled="isablearea">
                <option value="请选择" selected='selected'  >{{initarea}}</option>
                <option v-for="(item,index) in area" :key='index' :value="item.id">{{item.name}}</option>
              </select>
              <!-- <input type="text" id="namefti" placeholder="请输入详细地址"  v-model="address"/> -->
              </p>
               <p class="apid"><span>详细地址：</span></p>
						<p class="ap_input"><input type="text" id="pcnamse" placeholder="请输入详细地址"  v-model="address"/></p>
						<p class="apid"><span>营业执照：</span></p>
            <div class="ap_input">
              <!-- <input type="text" id="namefti" placeholder="请输入营业执照" v-model="businessLicense"/> -->
             <form >
               <input type='file' class="img" ref='uploadpic' @change="loadimgdata($event)">
               <div class="picbox" @click="uploadimg"><img :src='picsrc' class="imgarea"></div>
              <mu-flat-button label="确认上传" class="uploadimg" @click="uploadimgdata" />
             </form>
              </div>
				
						<!-- <p class="apid"><span>身份证正面照：</span></p>
						<div class="ap_input"> 
              <form >
               <input type='file' class="img" ref='uploadcardfront' @change="loadcardfrontdata($event)">
               <div class="picbox" @click="uploadcardfront"><img :src='cardpicsrc' class="imgarea"></div>
              <mu-flat-button label="确认上传" class="uploadimg" @click="uploadcardfrontdata"/>
             </form>
              
              
            
             </div>
            <p class="apid"><span>身份证反面照：</span></p>
						<div class="ap_input">
                 <form >
               <input type='file' class="img" ref='uploadcardback' @change="loadcardbackdata($event)">
               <div class="picbox" @click="uploadcardback"><img :src='cardbackpicsrc' class="imgarea"></div>
              <mu-flat-button label="确认上传" class="uploadimg" @click="uploadcardbackdata"/>
             </form>
             </div> -->
            <mu-flat-button label="确认提交认证信息" class="uploadmessage" @click="uploadshopmes"/>
					</div>
 </div>
</template>

<script>
// import MenuBar from '../basecomponents/menu'
import baseurl from '../../../api/beseurl.js'
import baseimgpath from '../../../api/baseimgpath.js'
export default {
  components:{
// MenuBar
  },
  data() {
    return {   
    isablecity:true,
    isablearea:true,
    src:'',
      picsrc:require('../../../assets/img/add.png'),
      cardpicsrc:require('../../../assets/img/add.png'),
       cardbackpicsrc:require('../../../assets/img/add.png'),
       zhizhaoobj:{},
       cardfront:{},
       cardback:{},
       obj:{},
      cityid:'',
      proviceid:'', 
      areaid:'',
    //    activeName: '3',
       name:'',
       owner:'',
       mobile:'',
       address:'',
      provices:[],
      citys:[],
      area:[],
       businessLicense:'',
       idcardBefore:'',
       idcardAfter:'',
     initprovice:'请选择省',
     initcity:'请选择市',
     initarea:'请选择区'
    };
  },
  methods: {
    lookphoto(ev){
if(!ev.target.files)return;
this.zhizhaoobj=ev.target.files[0];

var readimg=  new FileReader();
readimg.readAsDataURL(ev.target.files[0]);
  
       return  readimg

    },

 uploadimg(){//input文件框模拟点击
   this.$refs.uploadpic.click();
 },
//   uploadcardfront(){//input文件框模拟点击
//    this.$refs.uploadcardfront.click();
//  },
//    uploadcardback(){//input文件框模拟点击
//    this.$refs.uploadcardback.click();
//  },
 loadimgdata(ev){//营业执照预览

  var img= this.lookphoto(ev);

  var that=this;
  img.onload=function(){
  that.picsrc=this.result;
  }


 },
//   loadcardfrontdata(ev){//身份证正面照预览

//   this.cardpicsrc= this.lookphoto(ev)

//  },
//   loadcardbackdata(ev){//身份证反面预览


//   this.cardbackpicsrc=this.lookphoto(ev)

//  },
 uploadimgdata(){//上传营业执照


var formdata=new FormData();
formdata.append('files',this.zhizhaoobj);
let config={ headers:{'Content-Type':'multipart/form-data'}};
this.$http.post(`${baseurl}api/anon/file/upload`,formdata,config).then(res=>{
   
     if(res.data.code==200){
       this.businessLicense=res.data.data.path;
       this.picsrc=require('../../../assets/img/right.png')
     } else{
       this.$message.error(res.data.message)
     }
 })
 },
//   uploadcardfrontdata(){//上传身份证正面


//    var formdata=new FormData();
// formdata.append('files',this.cardfront);
// let config={ headers:{'Content-Type':'multipart/form-data'}};
// this.$http.post(`${baseurl}api/anon/file/upload`,formdata,config).then(res=>{
//     //  console.log(res)
//      if(res.data.code==200){
//         this.idcardBefore=res.data.data.path;
//        this.cardpicsrc=require('../../../assets/img/right.png')
//      }
// else{
//        this.$message.error(res.data.message)
//      }
//  })
//  },
//   uploadcardbackdata(){//上传身份证反面


//    var formdata=new FormData();
// formdata.append('files',this.cardback);
// let config={ headers:{'Content-Type':'multipart/form-data'}};
// this.$http.post(`${baseurl}api/anon/file/upload`,formdata,config).then(res=>{
//     //  console.log(res)
//      if(res.data.code==200){
//         this.idcardAfter=res.data.data.path;
//        this.cardbackpicsrc=require('../../../assets/img/right.png')
//      }
//    else{
//        this.$message.error(res.data.message)
//      }
//  })
//  },
      getproviceid(ev){//获取省份id传入pid得到下面的市
 this.citys=[];
 this.isablecity=false;
      this.proviceid=ev.target.value;
       this.$http.post(`${baseurl}/api/anon/region/list?pid=${this.proviceid}`).then(res=>{
     this.citys=res.data.data;
  
   })
    
    },
    getcity(ev){//获取市id传入pid得到下面的区列表
     this.isablearea=false;
     
     this.area=[];
      this.areaid=[];
     this.cityid=ev.target.value;
         this.$http.post(`${baseurl}/api/anon/region/list?pid=${this.cityid}`).then(res=>{
     this.area=res.data.data;
   
   })
    },
    getarea(ev){//获取地区的id
    this.areaid=[];
this.areaid=ev.target.value
    },
  
 uploadshopmes(){//上传商户信息
  
  //  var shopAuth= JSON.stringify(shopAuth)
this.$http.post(`${baseurl}api/auth/shop/create?name=${this.name}&owner=${this.owner}&mobile=${this.mobile}&address=${this.address}&businessLicense=${this.businessLicense}&idcardBefore=${this.idcardBefore}&idcardAfter=${this.idcardAfter}&provinceId=${this.proviceid}&cityId=${this.cityid}&regionId=${this.areaid}
`).then(res=>{
  this.$message(res.data.message);


})
 },
 searchprovice(){//进入页面先遍历省份以便于在select框中查看
   this.$http.post(`${baseurl}/api/anon/region/list?pid=0`).then(res=>{
     this.provices=res.data.data;
    this.area=[];
      this.areaid=[];
   })
 },
 getshopmes(){//商户的所有信息获取
   this.$http.post(`${baseurl}/api/auth/shop/entity`).then(res=>{
    //  console.log(res.data.data)
     if(res.data.code==200){
    var shopmes =res.data.data
   this.name=shopmes.name;
   this.owner=shopmes.owner;
    this.mobile=shopmes.mobile;
    // localStorage.setItem('savemobile',this.mobile);
    this.initprovice=shopmes.provinceName;
this.initcity=shopmes.cityName;
this.initarea=shopmes.regionName;
     this.address=this.initprovice+this.initcity+this.initarea+shopmes.address;
this.businessLicense= shopmes.businessLicense;
this.picsrc=baseimgpath+ shopmes.businessLicense;
this.cardpicsrc=baseimgpath+shopmes.idcardBefore;
this.idcardBefore=shopmes.idcardBefore;
this.idcardAfter=shopmes.idcardAfter;
this.cardbackpicsrc=baseimgpath+shopmes.idcardAfter;
     }else if(res.data.code==301){
         this.$message(res.data.message);
         this.$router.push('/login');
     }else{
         this.$message(res.data.message);
     }

   })
 }

  },
  mounted(){
    this.searchprovice();
  
this. getshopmes();
  }
};
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
.img{
  display: none;
}
.picbox{
  width: 85px;
    height: 65px;
    margin: 0 auto;
    border: 1px dashed #ccc;
    padding: 5px;
}
.imgarea{
  width: 100%;
    height: 100%;
    display: block;
}


.uploadimg{
    font-family: '微软雅黑';
  display: block;
     margin: 0 auto;
     margin-top: 5px;
width: 30%;
height: 25px;
background: #0675C6;
color: white;
}
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

