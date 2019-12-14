<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="d-flex"
      mode="horizontal"
      :router="istrue"
      type="flex"
    >
      <el-menu-item class="mr-auto" index="#">version-1.1</el-menu-item>
      <el-menu-item index="/home">{{$t("header.home")}}</el-menu-item>
      <el-menu-item index="/archive">{{$t("header.archive")}}</el-menu-item>
      <el-menu-item index="/about">{{$t("header.about")}}</el-menu-item>
      <el-submenu index="#">
        <template slot="title">{{$t("header.language")}}</template>
        <el-menu-item index="#" @click="toggleLang('zh')">{{$t("header.chinaese")}}</el-menu-item>
        <el-menu-item index="#" @click="toggleLang('en')">{{$t("header.english")}}</el-menu-item>
      </el-submenu>
      <el-menu-item index="/login" @click="goOutLogin">{{isLogin?'退出登录':''}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      activeIndex: "/home",
      istrue: true,
      isLogin: true
    };
  },
  watch: {
    $route: "onRouteChange",
  },
  mounted() {
  },
  methods: {
    onRouteChange(to,from) {
      this.activeIndex = this.$route.path;
    	if (to.name==='login'){
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    },
    toggleLang(lang) {
      if (lang === "zh") {
        this.$store.dispatch("setCourseId", 'zh');
        localStorage.setItem('languge','zh')
        this.$i18n.locale = 'zh';
        this.$message({
          message: "切换为中文！",
          type: "success"
        });
      } else if (lang === "en") {
        this.$store.dispatch("setCourseId", 'en');
        localStorage.setItem('languge','en');
        this.$i18n.locale = 'en';
        this.$message({
          message: "Switch to English!",
          type: "success"
        });
      }
    },
    goOutLogin() {
      Cookies.remove("tk_psw");
    }
  }
};
</script>

<style scoped>
</style>