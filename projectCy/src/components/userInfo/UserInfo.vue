<template>
  <div class="app">
    <div class="tou">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="账号安全" name="first">
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="pt">
      <span class="p_t_span1">邮箱账号</span><span class="p_t_span2">暂无</span>
      <span class="p_t_span3">
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    修改<i class="el-icon-arrow-down el-icon-arrow-up"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
          </span>
  </div>
    <div class="div_xg">
      <span class="yx"><span class="yx2">*</span>邮箱</span><el-input v-model="input" style="width: 350px;" placeholder=""></el-input>
      <p class="qrxg">
        <el-button type="primary" style="width: 120px;">确认修改邮箱</el-button>
      </p>
    </div>
    <div class="pt">
    <span class="p_t_span1">手机号码</span><span class="p_t_span2">13760271835</span>
    <span class="p_t_span4">
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    修改<i class="el-icon-arrow-down el-icon-arrow-up"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
          </span>
  </div>
    <div class="div_xg">
      <span class="yx"><span class="yx2"></span>手机号码</span><el-input v-model="input2" style="width: 350px;" placeholder=""></el-input>
      <p class="qrxg">
        <el-button type="primary" style="width: 120px;">确认修改手机</el-button>
      </p>
    </div>

    <div class="pt">
      <span class="p_t_span1">登录密码</span><span class="p_t_span2"></span>
      <span class="p_t_span4">
            <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    修改<i class="el-icon-arrow-down el-icon-arrow-up"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
          </span>
    </div>
    <div class="div_xg">
      <span class="yx"><span class="yx2"></span>密码</span><el-input v-model="input2" style="width: 350px;" placeholder=""></el-input>
      <p><span class="yx"><span class="yx2"></span>确认密码</span><el-input v-model="input3" style="width: 350px;" placeholder=""></el-input></p>
      <p class="qrxg">
        <el-button type="primary" style="width: 120px;">确认修改</el-button>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo',
    data () {
      return {
        activeName: 'first',
        input:'',
        input2:'',
        input3:'',
      }
    },
    methods: {
      handleClick(){

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
  body,html{
    background-color: #f8f8f8;
    height: 100%;
  }
  .app{
    height: 100%;
  }
  .tou {
    padding-top: 20px;
  }
  .pt{
    background-color: rgba(154, 154, 154, 0.54);
    line-height: 50px;
    height: 50px;
    width: 50%;
  }

  .p_t span {
    display: inline-block;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: blue;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
  .p_t_span1{
    margin-left: 30px;
  }
  .p_t_span2{
    margin-left: 20px;
  }
  .p_t_span3{
    margin-left: 400px;
  }
  .p_t_span4{
    margin-left: 330px;
  }
  .div_xg{
    border: 1px solid rgba(154, 154, 154, 0.54);
    margin: 0px;
    height: 150px;
    width: 49.86%;
    padding-top: 20px;
  }
  .yx{
    display: inline-block;
    margin-left: 50px;
    text-align: left;
    width: 70px;
  }
  .yx2{
    color: red;
  }
  .el-input{
    margin-left: 10px;
  }
  .qrxg{
      padding-left: 130px;
  }
</style>
