<template>
   <div >
      <div class="centered">
        <!--走马灯-->
        <template>
          <div class="logo">
              不断进步，专业态度，团队合作，YES!
          </div>
          <el-carousel :interval="5000" arrow="always" height="600px" >
            <el-carousel-item v-for="(item,index) in Soumatou" :key="index">
              <img :src="item.imgas" class="zmdimg"/>
            </el-carousel-item>
          </el-carousel>
        </template>
        <div class="login">
          <el-form :model="loginform" status-icon ref="loginform" class="demo-ruleForm">
            <h1 class="title">
              <i class="el-icon-setting"></i>后台登录页面
            </h1>
            <el-form-item prop="username">
              <el-input  type="text" v-model="loginform.username" placeholder="邮箱/会员名/8位ID" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input type="password" v-model="loginform.password" placeholder="请输入登陆密码" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item class="elfrongti" >
              <el-button type="primary" @click="postLogin(loginform.username,loginform.password)">登录</el-button>
              <el-button @click="chongzhi(loginform.username,loginform.password)">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        Soumatou:[{imgas: require("../../assets/bejing2.jpg")},
          {imgas: require("../../assets/beijing1.jpg")}],
        //登陆表单的数据
        loginform: {
          username: '',
          password: '',
        },
      }
    },
    methods: {
      postLogin(res1,res2){
        let person =this.$qs.stringify({
          name:res1,
          pwd:res2,
        });
        let This = this;
        this.$axios.post('http://127.0.0.1:8080/wangye/login',person)
          .then(function (res) {//返回成功
            let canshu = res;
            if (canshu.data !=""){
              //将用户名放入sessionStorage
              sessionStorage.setItem('userName',canshu.data.userName);
              This.$store.dispatch('getUserName',2);
              window.location.href="/FirstPage"
            }else {
              alert("用户名或密码错误，请重新输入！")
            }

      })
          .catch(function (res) {//返回失败
            alert(res);
          });
      },
      chongzhi(res1,res2){
        if (res1 !=""&&res2 !=""){
          this.loginform.username="";
          this.loginform.password="";
        }
      },
    },
    watch: {},
    components: {},
    computed: {
    },
    beforeCreate() {
    },
    created() {
    },
    mounted() {

    },
    destroyed() {
    }
  }
</script>
<style scoped>
body,html #app{height: 100%}
  html,body{margin: 0px;padding: 0px;}
  .centered{width: 1520px;margin: 0 auto;position: relative;}
  .zmdimg{width: 1520px;height: 700px}
  .login{width: 420px;height: 350px;background: #fff;position: absolute;top: 25%;right: 20%;border: 1px solid #ccc;border-radius: 4px;box-shadow: 1px 1px 2px #eaedf1;z-index: 10;}
  .el-form{width: 420px;padding-right: 45px;
    padding: 0px 55px 10px 55px}
  .el-form .title{font-size: 22px;column-rule: #333;padding: 20px 0px 30px 0px;}
  .el-input{width: 75%;}
  .loginTxte span{padding-left: 10px;font-size: 12px;}
  .el-icon-setting{padding-right: 15px;}
  .elfrongti{margin-top: 100px;}
  .logo{margin-left: -300px;text-align: center;background:
  -webkit-gradient(linear, left top, right top, color-stop(0, #4d4d4d), color-stop(.4, #4d4d4d), color-stop(.5, rgb(245, 161, 161)), color-stop(.6, #4d4d4d), color-stop(1, #4d4d4d));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                -webkit-animation: animate 1.5s infinite;
            }
            @-webkit-keyframes animate {
                from {background-position: -100px;}
                to {background-position: 100px;}
            }
            @keyframes animate {
                from {background-position: -100px;}
                to {background-position: 100px;}
  }
</style>
