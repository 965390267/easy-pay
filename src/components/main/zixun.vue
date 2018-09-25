<template>
  <div>
      <router-link to='/' tag='i'><div class="back  iconfont icon-zuojiantou"></div></router-link>
      <h3 class="zixun">资讯</h3>
       <h4>{{title}}</h4>
      <div class="zixunbox" v-html="zixunlist"></div>
       <!-- <div class="footimg"><img :src='hotimg'></div> -->
  </div>
</template>
<script>
import baseurl from '../../api/beseurl.js'
import lookimg from '../../api/baseimgpath.js'
export default {
  data(){
      return{
zixunindex:0,
zixunlist:'',
hotimg:'',
title:''
      }
  },
  methods:{

getzixun(){
              this.$http.post(`${baseurl}api/anon/article/page?channeGroupby=2`).then(res=>{
//资讯
if(res.data.code==200){
this.zixunlist=res.data.data.rows[this.zixunindex].content;
// this.hotimg=lookimg+res.data.data.rows[this.zixunindex].img;
this.title=res.data.data.rows[this.zixunindex].name;
}else{
 this.$message.error(res.data.message);
}

       });
}

  },
  mounted(){
this.zixunindex= this.$route.query.index;
this.getzixun()
  }
}
</script>
<style scoped>
.back{
    position: fixed;
        left: -6px;
    top:10px;
    width: 30px;
    height: 36px;
}
.iconfont{
        font-size: 25px;
}
.zixun{
    width: 90%;
    margin: 0 auto;
    
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    text-align: center;
}
h4{
    padding: 10px 0;
}
.zixunbox{
    margin: 0 auto;
      margin-bottom: 60px;
    width: 95%;

}
.footimg{
      margin-bottom: 64px;
}
img{
    width: 90%;
}
</style>

