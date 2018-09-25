<template>
 <div class="payment-item">
   <div>
       <div class="topbar">分期</div>    
      
<ul class="clearpadding">
  
     <li><span  class="left">金额</span><span class="right" style="width:65%">￥
       <!-- <input class="putmoney" type='number' placeholder="输入金额" v-model.number="putmoney"> -->
         <mu-text-field  class="putmoney" hintText="请输入分期金额" type='number'  v-model.number="putmoney"/>
       </span></li>
  
       <li><span  class="left">手续费类型</span> 
   
  <span class="right"> 

       <select class="select-box" v-model="moneytype">
  <option  v-for="(item,index) in type" :key='index' :value="item.value"   >{{item.name}}</option>
  
</select>
   
      </span>
  </li>
        <li><span  class="left">分期数</span><span class="right">
        
            <select v-model="moneynums"  class="select-box">
  <option  v-for="(item,index) in nums" :key='index'  :value="item.value" >{{item.name}}</option>
  
</select>
  </span></li>
</ul>
<mu-flat-button label="确定" class="demo-flat-button" @click="submit"/>
</div>
<!-- <two-code v-if='!showorhidden' :twocode='codesrc'></two-code> -->
<!-- <menubar></menubar> -->
            </div>
</template>
<script>
// import menubar from '../basecomponents/menu'
// import TwoCode from '../ant/twocode'
import baseurl from "../../api/beseurl.js";
import baseimgpath from "../../api/baseimgpath.js";
export default {
  components: {
    // menubar
  },
  data() {
    return {
      moneytype: 0,
      moneynums: 6,
      putmoney: "",
      type: [],
      nums: [],
      // showorhidden:true,
      codesrc: "",
      orderdetail: ""
    };
  },
  methods: {
    submit() {
      if (this.putmoney != "") {
        this.$http
          .post(
            `${baseurl}api/auth/alipay/instalment?total=${
              this.putmoney
            }&&period=${this.moneynums}&&feeType=${this.moneytype}`
          )
          .then(res => {
            if (res.data.code == 200) {
              this.$message({
                message: res.data.message,
                type: "success",
                center: true
              });
              this.codesrc = baseimgpath + res.data.data.qr;
              this.orderdetail = res.data.data.outTradeNo;
              // console.log(this.orderdetail);
              this.$router.push({
                path: "/twocode",
                query: {
                  codeaddress: this.codesrc,
                  orderdetail: this.orderdetail
                }
              });
            } else if (res.data.code == 301) {
              this.$message({
                message: res.data.message,
                type: "warning",
                center: true
              });
              this.$router.push("/login");
            } else {
              this.$message.error(res.data.message);
            }
          });
      } else {
        this.$message.error("金额不能为空");
      }
    },
    lookdictionary() {
      this.$http.post(`${baseurl}/api/anon/dic/list?dicTypeId=8`).then(res => {
        //查询手续费类型
        if (res.data.code == 301) {
          this.$message({
            message: res.data.message,
            type: "warning",
            center: true
          });
          this.$router.push("/login");
        }
        this.type = res.data.data;
        //  console.log( res)
      });
      this.$http.post(`${baseurl}/api/anon/dic/list?dicTypeId=7`).then(res => {
        //查询手续费类型
        if (res.data.code == 301) {
          this.$message({
            message: res.data.message,
            type: "warning",
            center: true
          });
          this.$router.push("/login");
        }
        this.nums = res.data.data;
        //  console.log( res)
      });
    }
  },
  mounted() {
    this.lookdictionary();
    // this.showorhidden= localStorage.getItem('showbox');
  }
};
</script>
<style scoped>
.putstyle {
  background: red;
}
.topbar {
  background: #0675c6;
  /* background: linear-gradient(-90deg,#055EA2 ,transparent, #055EA2); */
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
/* .select-box  { width: 60%;
  height: 30px;
  border: 1px solid #ccc;
  padding: 7px 0px;
  border-radius: 3px;
  padding-left: 5px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.select-box :focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
} */
.select-box {
  border: none;
  width: 60%;
  height: 30px;
   -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.select-box:focus {
 border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
option{
   border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.noline {
  border: none;
}
.mu-dropDown-menu {
  width: 50% !important;
  margin-bottom: 5px;
}
.clearpadding {
  padding-left: 0px;
}
li {
  display: block;
  text-align: left;
  width: 90%;
  margin: 0 auto;
  padding: 1.59rem 0;

  border-bottom: 1px solid #ccc;
}
.putmoney {
  width: 80%;
  background-color: transparent;
  border: none;
  line-height: 30px;
}
.putmoney:focus {
  border: transparent;
}
.right {
  float: right;
  width: 75%;
  text-align: center;
  /* margin-left: 13%; */
}
.righttime {
  /* margin-left: 4rem; */
  width: 80%;
  text-align: center;
}

.lastright {
  /* margin-left: 6rem; */
  width: 80%;
  text-align: center;
}

.mu-dropDown-menu {
  width: 30%;
  margin-left: 12%;
  text-align: center;
}
.left {
  padding: 10px 0;
}
.demo-flat-button {
  margin-top: 3rem;
  width: 60%;
  background: #045fa2;
  color: white;
}
.tip {
  color: #5e8ebb;
}
</style>
