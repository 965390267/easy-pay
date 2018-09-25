<template>
 <transition name='fade'>
  <div class="start-main">
     

    <img :src='startimg'>
     
  </div>
    </transition>
</template>
<script>
import baseurl from '../../api/beseurl.js'
import baseurlimg from '../../api/baseimgpath.js'
export default {
  data(){
      return{
          baseimgpath:'',
          imglist:[]

,index:1,
timer:null,
startimg:''
      }
  },
  methods:{
// gostart(){

// }
  },
  mounted(){
   this.baseimgpath=baseurlimg;
      this.$http.post(`${baseurl}api/anon/banner/page?position=qdt`).then(res=>{
// console.log(res.data.data.rows)
if(res.data.code==200){
this.imglist=res.data.data.rows;

    this.startimg= this.baseimgpath+this.imglist[0].img;
 this.timer= setInterval(()=>{
this.startimg= this.baseimgpath+ this.imglist[this.index].img;

this.index++;
console.log(this.index,this.imglist.length)
if(this.index==this.imglist.length){
    this.$router.push('/')
clearInterval(this.timer);

}
  },2000)


}else{

   this.$message.error(res.data.message);
}

// console.log(this.swiperSlides)
      })

// this.gostart()
  }
}
</script>

<style scoped>
/* .start-main{
    background: url('../../assets/img/start.jpg');
        background-repeat: no-repeat;
    background-size: 100% 100%;
} */
.start-main{
    overflow: hidden;
}
.start-main img{
width: 100%;
height: 100%;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
