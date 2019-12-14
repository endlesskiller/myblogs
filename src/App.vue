<template>
  <div class="app">
    <f-header :class="{'navBarWrap':navBarFixed}"></f-header>
    <el-row type="flex" justify="center" id="content">
      <el-col :xs="20" :md="20" :style="{'minHeight':minHeight+'px'}">
        <router-view></router-view>
      </el-col>
    </el-row>
    <f-footer></f-footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      minHeight: 0,
      navBarFixed: true
    };
  }
};
</script>

<style scoped>
.app {
  font-family: "microsoft yahei";
}
#content {
  background-color: #f9f9f9;
  padding: 30px 0;
}
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  box-shadow: 5px 5px 3px #eee;
}
</style>
