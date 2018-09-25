<template>
  <div >
        <router-link to='/' tag='i'><div class="back  iconfont icon-zuojiantou"></div></router-link>
      <h3 class="hot">热点</h3>
      <h4>{{title}}</h4>
      <div class="hotbox" v-html="hotlist"></div>
      <!-- <div class="footimg"><img :src='hotimg'></div> -->
  </div>
</template>
<script>
import baseurl from '../../api/beseurl.js'
import lookimg from '../../api/baseimgpath.js'
export default {
  data(){
      return{
hotindex:0,
hotlist:'',
hotimg:'',
title:'',

      }
  },
  methods:{

gethot(){
              this.$http.post(`${baseurl}api/anon/article/page?channeGroupby=1`).then(res=>{
//热点
if(res.data.code==200){

this.hotlist=res.data.data.rows[this.hotindex].content;
// this.hotimg=lookimg+res.data.data.rows[this.hotindex].img;
this.title=res.data.data.rows[this.hotindex].name;
}else{
 this.$message.error(res.data.message);
}
// this.loading2=true

       });
}

  },
  mounted(){
this.hotindex= this.$route.query.index;
this.gethot()
  }
}
</script>
<style scoped>
.back{
    position: fixed;
        left: 0px;
    top:10px;
    width: 30px;
    height: 36px;
}
.iconfont{
        font-size: 25px;
}
.hot{
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    text-align: center;
}
h4{
    padding: 10px 0;
}
.hotbox{
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

