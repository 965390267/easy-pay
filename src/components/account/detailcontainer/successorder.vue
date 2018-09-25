<template>
   <div class="scrollheight" ref='refsuccess'>
         <ul class="clearleft">
        <li v-for="(item,index) in success" :key='index'><div class="codepeople"><span>{{item.subject}}</span><span>{{item.createTime}}</span></div><div class="moneymes"><span>分期金额：￥{{item.total}}</span><span><a class="tuikuan" @click="tuikuan(item.outTradeNo,1)">退款</a><a @click="lookdetail(item.outTradeNo,2)">查看详情</a></span></div></li>
      </ul>
         <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="getsuccess"/>
         <v-dialog  v-if='show' :message='message' :title='title' @yes='yes' @no='no'></v-dialog>
       </div>
</template>

<script>

import baseurl from '../../../api/beseurl.js'
import VDialog from '../../basecomponents/dialog'
// import MenuBar from '../basecomponents/menu'
export default {
  name:'account',
  components:{
    // MenuBar
    VDialog
  },
  data() {
    return {
         success:[],  
          loading: false,  
      scroller: null,
pagenum:1,
totalpage:0,
 title:'点击是后将直接退款',
  message:'是否退款？',
  show:false,
     value:'' ,
     orderid:'' 
    };
  },
  methods: {
        yes(val){
 this.show=false;


  this.$router.push({path:'/detail',query:{orderId:this.orderid,ordertype:this.value}});




    },no(val){
console.log(val);
 this.show=false;
 this.$message({
            type: 'info',
            message: '已取消',
           center: true
          });  

    },
       tuikuan(orderid,val){
         this.show=true;
         this.orderid=orderid;
         this.value=val;
     
    },
getsuccess(){


  this.loading = true;
          this.$http.post(`${baseurl}api/auth/order/page?orderStatus=1&pageNum=${this.pagenum}`).then(res=>{
         
          if(res.status==200){
            res.data.rows.forEach((item,index) => {
               this.success.push(res.data.rows[index]);
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
          }else{
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
this.getsuccess()
        this.scroller = this.$refs.refsuccess;

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
.tuikuan{
  margin-right: 10px;
  color:#ddd;
}
</style>

