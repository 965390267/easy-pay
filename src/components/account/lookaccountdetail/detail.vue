<template>
 <div>
     <div class="topbar">账单详情</div>   
    <!-- <div class="return">返回</div> -->
     <div class="changs">
		    	<p>￥<span>{{detail.total}}</span></p>
		    	<div class="shoy">{{orderstate}}</div>
		    	<div class="talas">
		    		<span>订单名称</span>
		    		<span>{{detail.subject}}</span>
		    	</div>
		    	<div class="talas">
		    		<span>创建时间</span>
		    		<span>{{detail.createTime}}</span>
		    	</div>
		    	<div class="talas">
		    		<span>期数</span>
		    		<span>{{detail.period}}期</span>
		    	</div>
		    	<div class="talas">
		    		<span>费率</span>
		    		<span>{{detail.rate}}%</span>
		    	</div>
		    	<div class="talas">
		    		<span>对方账户</span>
		    		<span>{{detail.sellerAccount}}</span>
		    	</div>
		    	<div class="talas">
		    		<span>费用类型</span>
		    		<span>{{feetype}}</span>
		    	</div>
		    	<div class="talas">
		    		<span>支付宝订单号</span>
		    		<span>{{detail.tradeNo}}</span>
		    	</div>
		    	<div class="talas">
		    		<span>商户订单号</span>
		    		<span>{{detail.outTradeNo}}</span>
		    	</div>
					 <router-link to='/account' tag='p' class="margin_bottom">	<mu-flat-button label="返回" class="demo-flat-button-three"/></router-link>
		    </div>   
	
     </div> 
</template>
<script>
import baseurl from '../../../api/beseurl.js'
export default {
  data(){
      return{
detail:[],
ordernum:'',
feetype:'',
orderstate:'',
ordertype:''
      }
  },
  methods:{

getdatail(){
this.ordertype=this.$route.query.ordertype;
this.ordernum=this.$route.query.orderId;
// console.log(this.ordertype)
if(this.ordertype==1){//type等于1代表退款
 this.$http.post(`${baseurl}api/auth/alipay/refund?outTradeNo=${this.ordernum}`).then(res=>{
     if(res.status==200){
	this.orderstate=res.data.message
 this.$message({
     
          message:res.data.message ,
          type: 'success'
        });
	 }else{
		 this.$message({
     
          message:res.data.message ,
          type: 'warning'
        }); 
	 }

 })
 this.$http.post(`${baseurl}api/auth/order/detail?outTradeNo=${this.ordernum}`).then(res=>{
          if(res.status==200){
        //       this.$message({
     
        //   message:res.data.message ,
        //   type: 'success'
        // });
            this.detail=res.data.data;
		
            if( this.detail.feeType==100){
this.feetype='商家承担';
            }else{
this.feetype='用户承担';
            }
if(this.detail.refundStatus==0){
this.orderstate='退款失败'
}else if(this.detail.refundStatus==1){
this.orderstate='退款成功'
}
          }else{
         this.$message({
     
          message:res.data.message ,
          type: 'warning'
        });
          }
        
          })


}else{

this.ordernum=this.$route.query.orderId;
     this.$http.post(`${baseurl}api/auth/order/detail?outTradeNo=${this.ordernum}`).then(res=>{
          if(res.status==200){
        //       this.$message({
     
        //   message:res.data.message ,
        //   type: 'success'
        // });
            this.detail=res.data.data;
            if( this.detail.feeType==100){
this.feetype='商家承担';
            }else{
this.feetype='用户承担';
            }


if(this.detail.orderStatus==1){

// 	if(this.detail.refundStatus==0){
// this.orderstate='未退款'
// }else if(this.detail.refundStatus==1){
// this.orderstate='已退款'
// }else{
this.orderstate='交易成功';
// }


}else if(this.detail.orderStatus==-1){
this.orderstate='交易超时已关闭';
}else{
	this.orderstate='交易正在进行中';
}
if(this.detail.refundStatus==0){
this.orderstate='退款失败'
}else if(this.detail.refundStatus==1){
this.orderstate='退款成功'
}
          }else{
         this.$message({
     
          message:res.data.message ,
          type: 'warning'
        });
          }
        
          })




}

     
}
  },
  mounted(){
     this.getdatail() ;

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

.changs{
				width: 100%;
			
				padding:20px;
				box-sizing: border-box;
				    margin-bottom: 60px;
			}
			.changs>p{
				text-align: center;
				font-weight: bold ;
				font-size: 24px;
				color: #000000;
			
			}
			.margin_bottom{
				margin-top: 2rem;
			}
			.shoy{
				width: 100%;
				
				line-height: 48px;
				font-size: 14px;
				color: #b8b8b8;
				text-align: center;
			
			
			}
			.talas{
				width: 100%;
			overflow: hidden;
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
			.demo-flat-button-three{
  font-family: '微软雅黑';
  display: block;
  margin: 0 auto;
   
width: 80%;
height: 35px;
line-height: 35px;
font-size: 22px;
border-radius:8px;  
background: #045FA2 ;
color: white;
}
</style>

