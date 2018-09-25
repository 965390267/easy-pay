<template>
<div class="sliderbox">
  <swiper :options="swiperOption">
        <swiper-slide v-for="slide in swiperSlides" :key="slide.id"><img :src='baseimgpath+slide.img' alt="loading"></swiper-slide>
        <p class="swiper-pagination" slot="pagination"></p>
        </swiper>
        </div>
</template>
<script>
import baseurl from '../../api/beseurl.js'
import baseurlimg from '../../api/baseimgpath.js'
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components:{
    swiper,
    swiperSlide
  },
  data () {   
     return {
      swiperOption: {　　　　　
        autoplay:true,//自动切换
            autoHeight: true,
            loop:true,
            
        pagination: {
          el: '.swiper-pagination'//分页器
        }
      },
      swiperSlides: [],
      baseimgpath:''

    }
  },
    methods:{
    
    },
    mounted(){
     this.baseimgpath=baseurlimg;
      this.$http.post(`${baseurl}api/anon/banner/page?position=sy`).then(res=>{
// console.log(res.data.data.rows)
if(res.data.code==200){
this.swiperSlides=res.data.data.rows;
}else{

   this.$message.error(res.data.message);
}

// console.log(this.swiperSlides)
      })
    },
}
</script>
<style scoped>
.sliderbox{

  overflow: hidden;
}
img{
    min-height: 182px;
  background-color: rgb(176, 208, 235);
  width: 100%;
}
</style>

