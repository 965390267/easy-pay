

<template>
<div class='menubar'>
  
  <mu-bottom-nav :value="activeTab" @change="handleChange"  class='menu_bottom'>
    <mu-bottom-nav-item value="tab1" title="首页"  to='/'  class='btn-color iconfont icon-shouye'/>
    <mu-bottom-nav-item value="tab2" title="分期"  to='/ant' class="btn-color iconfont icon-icon-test"/>
    <mu-bottom-nav-item value="tab3" title="账单"  to='/account' class="btn-color iconfont icon-web-icon-"/>
     <mu-bottom-nav-item value="tab4" title="个人" to='/person'  class="btn-color iconfont icon-geren"/>
  </mu-bottom-nav>



</div>
</template>

<script>

export default {

  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {

    handleChange (val) {
      this.activeTab = val;
    },
   
  },mounted(){
 
  
  }
}
</script>
<style scoped>


.menu_bottom{
  /* background: #81d4fa; */
   /* background: linear-gradient(-90deg, #035FA2 ,transparent, #035FA2); */
  background:#0675C6;
  border-top:1px solid #ccc;
height: 60px;
  position: fixed;
  bottom: 0px;
  left: 0px;
}
.btn-color{
  color:#ccc;
}
.iconfont{
  font-family: '微软雅黑';
  font-style:inherit;
  font-size: 20px;
  color: white;
  /* font-weight: bold; */
    /* font-weight: bold; */
}

</style>