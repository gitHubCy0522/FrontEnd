<template>
</template>
<script>
export default {
    name:'FirstPage',
    data() {
    return {};
  },
  methods: {
    //每当刷新页面的时候，就会从sessionStorage中查询是否有userName的存在,如果没有则跳向登录页面
    isLogo() {
      if (sessionStorage.getItem('userName')) {
        this.$store.commit('userStatus',sessionStorage.getItem('userName'))
      }else{
        this.$router.push("/Login");
      }
    }
  },
  watch: {},
  components: {},
  computed: {},

  beforeCreate() {},
  created() {},
  mounted() {},
  destroyed() {}
};

</script>
<style scoped>

</style>
