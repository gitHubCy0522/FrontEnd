<template>
  <div>
    <el-container>
      <el-header></el-header>
      <el-main>
        <div class="dl">
          <p class="p1">内部工单系统</p>
          <p>
            <span class="span1">请输入用户名：</span>
            <el-input
              placeholder="请输入用户名"
              v-model="yhm"
              clearable>
            </el-input>
          </p>
          <p>
            <span class="span1">请输入密码：</span>
            <el-input style="margin-left: 15px;" placeholder="请输入密码" v-model="pwd" show-password></el-input>
          </p>
          <p>
            <span class="span2">
            <el-button type="primary" @click="loadData">登录</el-button>
            </span>
          </p>
        </div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        yhm: '',
        pwd: '',
      }
    },
    methods: {
      loadData(){
        let a = this.$qs.stringify({
            name1:'大佬',
            pwd2:'123',
          });
        this.$axios.post('http://127.0.0.1:8080//wangye/index',a)
          .then(function (res) {//返回成功
              alert("请求成功");
          })
          .catch(function (res) {//返回失败
              console.log(res);
              alert("请求失败");
          })
      }
    },
    watch: {},
    components: {},
    computed: {},

    beforeCreate () {
    },
    created () {
    },
    mounted () {
    },
    destroyed () {
    }
  }
</script>

<style scoped>
  body, html, div {
    height: 100%;
    width: 100%;
  }

  .el-container {
    height: 100%;
    width: 100%;
    background: url("../../assets/images/bj.jpg") no-repeat;
    background-size: 100% 100%;
  }

  .el-header {
    height: 20%;
  }

  .el-main {
    height: 50%;
    color: white;
    margin: auto;
  }

  .el-footer {
    height: 30%;
  }

  .dl {
    width: 500px;
    height: 250px;
    background-color: rgba(255, 255, 255, 0.1);
    text-align: center;
  }

  .dl .p1 {
    font-size: 30px;
  }

  .el-input {
    width: 280px;
  }

  .span1 {
    display: inline-block;
    text-align: left;
  }

  .span2 {
    display: inline-block;
    margin-left: 100px;
  }
</style>
