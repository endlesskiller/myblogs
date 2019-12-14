<template>
  <div class="login">
    <el-form
      :model="numberValidateForm"
      ref="numberValidateForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="账号"
        prop="account"
        :rules="[
      { required: true, message: '账号不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
      >
        <el-input type="account" v-model.number="numberValidateForm.account" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item
        label="密码"
        prop="password"
        :rules="[
      { required: true, message: '密码不能为空'},
    ]"
      >
        <el-input type="password" v-model.number="numberValidateForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">登录</el-button>
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: "login",
  data() {
    return {
      numberValidateForm: {
        account: "",
        password: ""
      }
    };
  },
  // watch: {
  //   "numberValidateForm.account":function(newQuestion, oldQuestion){
  //     if (!!newQuestion) {
  //       console.log(newQuestion, oldQuestion,'监听一下账号的数据')
  //     }
  //   }
  // },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (!/^1[3456789]\d{9}$/.test(this.numberValidateForm.account)) {
             this.$message({
            type: "warning",
            message: "手机号码有误，请重填"
          });
          } else {
            this.$message({
              type: "success",
              message: "登录成功"
            });
            Cookies.set('tk_psw','123456');
            this.$router.push({ path: '/home' })
          }
        } else {
          this.$message({
            type: "warning",
            message: "请重新登录"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  margin: 100px 0 440px 0;
  width: 300px;
  height: auto;
}
</style>

