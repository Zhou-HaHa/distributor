<template>
<el-row :gutter="20" style="margin: 150px auto">
  <el-col :span="6" :offset="6"><div class="logo"></div></el-col>
  <el-col :span="12">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="login-form">
      <h3 class="title">登  录</h3>
      <el-form-item label="用户名" prop="account">
        <el-input v-model="loginForm.account" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-checkbox v-model="checked" label="记住密码" checked></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="submitForm('loginForm')" :loading='logining' class="login-button">登录</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</el-row>
</template>

<script>
import { requestLogin } from '../../api/api'
import { CATALOG } from '../../store/types'

export default {
  data () {
    return {
      logining: false,
      loginForm: {
        account: 'admin',
        password: 'admin'
      },
      rules: {
        account: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      },
      checked: true
    }
  },

  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.logining = true
          let loginData = {
            username: this.loginForm.account,
            password: this.loginForm.password
          }

          requestLogin(loginData).then(res => {
            this.logining = false
            let {msg, code, user, catalog} = res.data
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              })
            } else {
              console.log(JSON.stringify(user))
              this.$store.cosessionStoragemmit(CATALOG, catalog)
              .setItem('user', JSON.stringify(user))
              this.$router.push({path: '/superadmin'})
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
body {
  font-family: Helvetica, sans-serif;
  margin: 0px;
  padding: 0px;
}

.login-form {
  width: 350px;
}
.title {
  text-align: center;
  color: #51aaf9;
}
.login-button {
  width: 200px;
}
.logo {
  border: 1px solid;
  height: 300px;
  width: 300px;
  margin-left: -150px;
}
.el-row {
  border: 1px solid;
  margin-top: 150px;
  padding: 50px;
  width: 760px;
  border: #557794 1px solid;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 5px #888888;
}
</style>
