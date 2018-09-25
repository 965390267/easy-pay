<template>
   <div class="g-va">
						<p class="apid"><span>企业名称：</span></p>
						<p class="ap_input"><input type="text" id="pcname" placeholder="请输入企业名称" /></p>
						<p class="apid"><span>联系人名称：</span></p>
						<p class="ap_input"><input type="text" id="myname" placeholder="请输入联系人名称" /></p>
						<p class="apid"><span>联系人职务：</span></p>
						<p class="ap_input"><input type="text" id="nameti" placeholder="请输入联系人职务" /></p>
						<p class="apid"><span>联系人电话：</span></p>
						<p class="ap_input"><input type="text" id="iPhone" placeholder="请输入联系人电话" /></p>
						<p class="apid"><span>联系人邮箱：</span></p>
						<p class="ap_input"><input type="text" id="email" placeholder="请输入联系人邮箱" /></p>
					</div>
</template>
<style scoped>

.g-va {
    width: 100%;
    font-size: 12px;
  line-height: 45px;
    height: auto;
}
.apid {
    line-height: 20px !important;
    margin: 0px !important;
    color: #000000;
}
.ap_input {
    margin-top: -5px;
    margin-bottom: 0px !important;
}
.ap_input>input {
    padding: 0px 10px;
    width: 80%;
    height: 30px;
    border: 2px solid #7a7a7a;
    outline: none;
    font-size: 12px;
    box-sizing: border-box;
    line-height: 30px;
    margin: 0px !important;
}
.ap_input>select {
    padding: 0px 10px;
    width: 80%;
    height: 30px;
    border: 2px solid #7a7a7a;
    outline: none;
    font-size: 12px;
    box-sizing: border-box;
    line-height: 30px;
    color: grey;
    /* margin: 0px auto; */
}
</style>

