<template>
  <div style="height:100%;">
    <WorkNav></WorkNav>
    <div class="main">
      <transition name="page">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import WorkNav from "@/components/common/WorkNav";

export default {
  name: 'workOrderIndex',
  data() {
    return {};
  },
  methods: {},
  watch: {},
  components: { WorkNav },
  computed: {},

  beforeCreate() {},
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  padding: 60px 15px 15px 250px;
  background: #fff;
  float: left;
  background: url("../assets/beijing.jpg");
}
</style>
