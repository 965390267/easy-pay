<template>

   <div class="g-va">
						<p class="apid"><span>开户银行：</span></p>
						<p class="ap_input">

							<select>
								<option>请选择开户的银行</option>
								<option>中国邮政银行</option>
								<option>中国农业银行</option>
								<option>中国华夏银行</option>
							</select>

						</p>
						<p class="apid"><span>开户名：</span></p>
						<p class="ap_input"><input type="text" id="mynametl" placeholder="请务必填写好正确的开户名" /></p>
						<p class="apid"><span>开户账号：</span></p>
						<p class="ap_input"><input type="text" id="nametina" placeholder="请务必填写好正确的开户账号" /></p>
						<p class="apid"><span>提现密码：</span></p>
						<p class="ap_input"><input type="password" id="passw" placeholder="谨慎设置" /></p>
						<p class="apid"><span>确认提现密码：</span></p>
						<p class="ap_input"><input type="password" id="passd" placeholder="谨慎设置" /></p>
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

