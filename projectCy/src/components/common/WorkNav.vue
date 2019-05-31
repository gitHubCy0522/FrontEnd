<template>
  <div>
    <div class="nav">
      <h1>LOGO</h1>
      <div class="d1">
        <ul>
          <li><router-link :to="{name:'ProjectList'}" exact><i class="iconfont icon-shijian"/>待办</router-link></li>
          <li><router-link :to="{name:'WorkOrderList'}" exact><i class="iconfont icon-wodegongdan"/>我的工单</router-link></li>
          <li><router-link :to="{name:'UserInfo'}" exact><i class="iconfont icon-shezhi"/>个人中心</router-link></li>
        </ul>
      </div>
      <div class="tx">
        <img src="../../assets/images/TX.png"  slot="reference"  @click="visible = !visible">
        <p>用户头像</p>
        <p>退出</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        ok: 'false',
        visible: 'false',
      }
    },
    methods: {
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
  .nav {
    position: fixed;
    text-align: center;
    width: 150px;
    background: #5677FC;
    height: 100%;
  }
  .tx {
    position: absolute;
    bottom: 60px;
    left: 30px;
  }

  .li {
    position: absolute;
    height: 130px;
    width: 150px;
    right: -185px;
    top: -10px;
    text-align: left;

  }

  .li div {
    margin: 15px 20px;
    color: #666666;
  }
  h1{
    margin: 0px;
  }
  .d1 ul{
    padding: 0px;
  }
  .d1 li{
    list-style: none;
    margin: 60px 0px;
  }
  a{
    text-decoration: none;
    color: white;
  }
  .router-link-active{
    color: red;
  }
  i{
    font-size: 30px;
    display: block;
    margin-bottom: 2px;
  }
</style>
