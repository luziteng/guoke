<template>
    <div>
        <div class="container">
            <div class="logo">
                <img src="../img/logo-ed25de9c93.png">
            </div>
                <form method="POST" class="form" novalidate="">
                    <input id="csrf_token" name="csrf_token" type="hidden" value="">
                    <input checked="" id="permanent" name="permanent" type="hidden" value="y">
                    <div class="line-wrap">
                        <p class="line-first">
                            <input class="gbtxt" id="username" maxlength="40" name="username" placeholder="邮箱或者手机号" required="" type="username" value="" @blur="getName">
                        </p>
                        <p class="line-first ">
                            <input class="placeholder" id="password" name="password" placeholder="密码" required="" type="password" value="">
                        </p>
                        <p class="line-last">
                            <input class="placeholder" id="captcha" maxlength="4" name="captcha" placeholder="验证码" required="" type="text" value=""><input type="text" name="captcha_rand" id="captchaRand" value="获取验证码"class="captcha">
                        </p>
                    </div>
                    <p>
                        <a class="forget" href="/phone/forgot_password/">忘记密码</a>
                    </p>
                    <p class="form-do"><input id="btn-submit" type="submit" value="登录"></p>
                </form>
              
            
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import axios from "axios";

    export default{
        methods:{
            getName(){
            axios.post('http://localhost:3000/login/FindLogin', {
                userName:$("#username").val()
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            }
        }
    }

</script>

<style scoped>

             * {
                margin:0;
                padding:0;
                color: #999999;
                font-size: 14px;
            }
            html,body {
                width: 100%;
            }
            a {
                text-decoration: none;
            }
            img {
                width: 100%;
                height:100%
            }

            .container {
                max-width: 500px;
                max-height: 500px;
                position: absolute;
                margin: auto;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }

            /*导航*/
            .logo,.action {
                text-align: center;
                font-size: 12px;
            }
            .logo {
                height: 33px;
                width: 112px;
                margin: 0 auto 5%;
            }
            .action span{
                font-size: 17px;
                color: #3F3F3F;
            }
            .action span:before,.action a{
                content: '';
                width: 100px;
                display: inline-block;
            }
            /*表单*/
            .form>* {
                padding: 0 20px;
            }
            input {
                height: 38px;
                width: 100%;
                margin-top: 17px;
                border: 1px solid #E0E0E0;
                border-radius: 5px;
                color: #ADADAD;
                font-size: 14px;
                text-indent: 10px;
                -webkit-appearance: none;
            }
            #captcha {
                width: calc(100% - 140px);
                vertical-align: top;
            }
            .captcha {
                height: 38px;
                width: 120px;
                margin-top: 17px;
                vertical-align: top;
                float: right;
                text-align:center;
                background-color:#58bc58;
                color:#fff;
                font-weight:bold;
            }
            
            
            .error {
                display: block;
                margin-top: 17px;
                color: orangered;
                font-size: 12px;
            }
            .forget {
                display: block;
                margin-top: 20px;
                font-size: 12px;
            }
            #btn-submit {
                height: 44px;
                color: white;
                font-size: 17px;
                background: #8FC31F;
                border-radius: 4px;
                border: none;
            }
      
</style>