<template>
   <div class="scrollheight" ref='allorder'>
      <ul class="clearleft">
        <li v-for="(item,index) in all" :key='index'><div class="codepeople"><span>{{item.subject}}</span><span>{{item.createTime}}</span></div><div class="moneymes"><span>分期金额：￥{{item.total}}</span><span><a @click="lookdetail(item.outTradeNo,2)">查看详情</a></span></div></li>
      </ul>
       <mu-infinite-scroll :scroller="scroller"  :loading="loading" @load="getall"/>
    </div>
</template>

<script>

import baseurl from '../../../api/beseurl.js'
// import MenuBar from '../basecomponents/menu'
export default {
  name:'account',
  components:{
    // MenuBar
  },
  data() {
    return {
         all:[],  
          loading: false,
   
      scroller: null,
pagenum:1,
totalpage:0,
hh:''
       
    };
  },
  methods: {
    // tuikuan(orderid,val){
    //    this.$router.push({path:'/detail',query:{orderId:orderid,ordertype:val}});
    // },
getall(){


  this.loading = true;
          this.$http.post(`${baseurl}api/auth/order/page?pageNum=${this.pagenum}`).then(res=>{
         
          if(res.status==200){
            res.data.rows.forEach((item,index) => {
               this.all.push(res.data.rows[index]);
            });
            
              this.totalpage=Math.ceil(res.data.total/10);
             
            if(res.data.rows.length!=0){
              setTimeout(()=>{
 this.pagenum++;
  this.loading = false
              },500)
 

            }else{
               this.loading = false   
            }
          }
          else if(res.data.code==301){
     this.$message({
          message:res.data.message,
          type: 'warning',
           center: true
        });
          this.loading = false   
         this.$router.push('/login')
  }else
          
          {
              this.loading = false   
          this.$message.error( res.statusText);
          }
        
          })
  
},

    lookdetail(orderid,val){
    
      this.$router.push({path:'/detail',query:{orderId:orderid,ordertype:val}});
    },


  },
  mounted(){



          this.$http.post(`${baseurl}api/auth/order/page`).then(res=>{
        
          if(res.status==200){
            this.all=res.data.rows;

          }
           if(res.data.code==301){
              this.$message({
          message:res.data.message,
          type: 'warning',
           center: true
        });
            this.$router.push('/login')

          }
 
          })
        this.scroller = this.$refs.allorder;
    //     var screenhh=window.innerHeight-252;
    //  this.hh=screenhh+'px'
    //   this.$refs.allorder.style.height=this.hh
    //  localStorage.setItem('screenheight',this.hh)

  }
};
</script>
<style scoped>
.clearleft{
overflow: auto;
  padding-left: 0px;
  /* padding-bottom: 65px; */
}
.codepeople{
  display: inline-block;
  padding-left: 0.5rem;
  width: 35%;
}
.moneymes{
   display: inline-block;
   text-align: right;
  width: 64%;
}
ul{
  padding-left: 0px;
}
li{
  width: 95%;
  margin: 0 auto;
  padding: 0.5rem 0;
  line-height: 1rem;
  text-align: left;
  list-style: none;
  border-bottom: 1px solid #ccc;
}
span {
    display: block;
    padding: 5px 0;
}
/* .tuikuan{
  margin-right: 10px;
  color:#ddd;
} */
</style>

