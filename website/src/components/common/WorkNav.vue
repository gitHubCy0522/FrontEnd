<template>
  <div>
    <ul class="nav">
      <img src="../../assets/logot.png" width="80" height="80">
      <div class="divuser">{{userName}}</div>
      <div style="position: absolute;bottom: 20px;left: 25px">
        <router-link :to="{name: 'Login'}">退出</router-link>
      </div>
      <li>
        <h1>LOGO</h1>
      </li>
      <li>
        <router-link :to="{name: 'FirstPage'}">首页</router-link>
      </li>
      <li>
        <router-link :to="{name: 'UserInfo'}">员工管理</router-link>
      </li>
      <li>
        <router-link :to="{name: 'UserInfo'}">
          <i class="iconfont iconrenwu"></i>个人中心
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'WorkNav',
  data() {
    return {
      userName:'',
    }
  },
  methods: {},
  watch: {},
  components: {},
  computed: {},

  beforeCreate() {},
  created() {
    var name = sessionStorage.getItem('userName');
    this.userName = name
  },
  mounted() {},
  destroyed() {}
}
</script>
<style scoped>
.nav {
  width: 150px;
  height: 830px;
  background: #e9afe3;
  float: left;
  background:url("../../assets/beijing.jpg");
}
.nav_n {
  width: 150px;
  height: 40px;
  background: orangered;
  text-align: center;
  line-height: 40px;
}
.nav {
  position: fixed;
  text-align: center;
  width: 100px;
  padding-top: 0px;
  background: #e9afe3;
  height: 100%;
}
.nav li {
  line-height: 25px;
  color: #fff;
  height: 67px;
  padding-top: 10px;
  font-size: 16px;
}
.nav li i {
  display: block;
  padding: 0px;
  margin: 0px;
  font-size: 20px;
}
.nav li:nth-of-type(1) {
  padding: 20px 0px;
  background: #f5ef28;
  color: #fff;
}
.nav li:nth-of-type(2) {
  margin-top: 30px;
}
.nav li a {
  color: #050505;
}
.nav li a.router-link-active {
  color: #050505;
}
.nav li:hover {
  background: #07efed;
}
.toxiang {
  position: absolute;
  bottom: 90px;
  left: 9%;
  border-radius: 100%;
  overflow: hidden;
  width: 70px;
  height: 70px;
}
.toxiang img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.divuser {
  left: 15%;
  position: absolute;
  bottom: 50px;
}
.toxiang i {
  width: 30px;
  height: 30px;
}
</style>
