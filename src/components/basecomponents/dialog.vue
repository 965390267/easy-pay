<template>
  <div class="popover fade right in" >
      <div class="arrow" >
     </div>
    
          <h3 class="popover-title">{{title}}</h3>
          <div class="popover-content">{{message}}
              <p class="button-group">
                 
                  <button type="button" class="btn btn-small confirm-dialog-btn-abort" @click="no">否</button>
                   <button type="button" class="btn btn-small btn-danger confirm-dialog-btn-confirm" @click="yes">是</button>
                </p>
               
         </div>
     </div>
</template>
<script>
export default {
  data(){
      return{

      }
  },
  methods:{
yes(){
this.$emit('yes',true)
},
no(){
this.$emit('no',false)
}
  },
  props:[
      'title','message'
  ]
}
</script>

<style scoped>
.popover{  
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
      margin: 0 auto;
    width: 170px;
    height: 120px;
    background-color: #fff;
        border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
        box-shadow: 0 5px 10px rgba(0,0,0,.2);
}
.popover-title {
    padding: 8px 14px;
    margin: 0;
    font-size: 14px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-radius: 5px 5px 0 0;
}
.popover-content{
    background: #fff;
}
.button-group{
    padding: 5px 0;
}
.popover.right>.arrow:after {
         bottom: -136px;
    left: 70px;
    content: " ";
    border-top-color: #eee;
    /* border-right-width: 0; */
}
.popover>.arrow:after {
    content: "";
    border-width: 10px;
}
.popover>.arrow, .popover>.arrow:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
}

p{text-align: center;}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.btn-danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}
</style>

