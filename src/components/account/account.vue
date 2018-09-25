<template>

 <div class="payment-item">
       <div class="topbar">账单详情</div>      
       <div class="timechoosebox"> 
               
    <el-date-picker class="choosetime"
      v-model="value1"
      type="date"
      placeholder="选择开始日期">
    </el-date-picker>
   
    <el-date-picker class="choosetime"
      v-model="value2"
      type="date"
      placeholder="选择结束日期">
    </el-date-picker>

  </div> 
      
    <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="全部"  />
    <mu-tab value="tab2" title="成功"/>
    
    <mu-tab value="tab3"  title="退款"/>
    
     <mu-tab value="tab4"  title="失败"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
   <allorder></allorder>
  </div>
  <div v-if="activeTab === 'tab2'">
    <successorder></successorder>
  </div>
  <div v-if="activeTab === 'tab3'">
   <tuikuan></tuikuan>
  </div>
  <div v-if="activeTab === 'tab4'">
   <failorder></failorder>
  </div>
<!-- <menu-bar></menu-bar> -->
            </div>


  
</template>
<script>
// import MenuBar from '../basecomponents/menu'
import baseurl from '../../api/beseurl.js'
import allorder from '../account/detailcontainer/allorder'
import doingorder from '../account/detailcontainer/doingorder'
import nopayorder from '../account/detailcontainer/nopayorder'
import tuikuan from '../account/detailcontainer/tuikuan'
import successorder from '../account/detailcontainer/successorder'
import failorder from '../account/detailcontainer/failorder'
export default {
  name:'account',
  components:{
    // MenuBar,
    allorder,doingorder,nopayorder,tuikuan,successorder,failorder
  },
  data() {
    return {
      colors:'colors',
     value1: '',
        value2: '',
         ordersdetail: 'first',
 activeTab: 'tab1',
 colors:[]
    };
  },
  methods: {
 handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      // window.alert('tab active')
    }

  },
  mounted(){



  }
};
</script>
<style scoped>
.colors{
  color:black;
}
/* .mu-tabs{
  background: #ddd;
  color:#000;
} */
.topbar{
  background: #0675C6;
   
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  
}
.clearleft{
overflow: auto;
  padding-left: 0px;
 
}
.timechoosebox{
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  margin-top: 1rem;
}
.demonstrationone,.demonstrationtwo{
width: 48%;
text-align: center;
display: inline-block;
line-height: 40px;
}

.choosetime{
  width: 48%;
}

.choosestate{
  width: 95%;
  margin: 0 auto;
}


</style>
