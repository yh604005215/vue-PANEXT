<template>
  <div class="from">
    <div class="input-box">
      <input type="text"
      placeholder="请输入邮箱\手机号" name="email"
      v-model="email">
    </div>
    <div class="input-box">
      <input type="password"
      placeholder="请输入密码"
      name="password"
      v-model="password">
    </div>
    <button class="login"
    @click="onSubmit">登录</button>
    <div class="sub-box">
      <div>
        <router-link class="btn forget" to="forget">忘记密码</router-link>
      </div>
      <div>
        <router-link class="btn register" to="register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getLogin } from '@/api/getUser'
export default {
  name: 'LoginFrom',
  data () {
    return {
      email: this.$route.params.email ? this.$route.params.email : '',
      password: this.$route.params.password ? this.$route.params.password : ''
    }
  },
  methods: {
    onSubmit () {
      getLogin(this.email, this.password).then(res => {
        console.log(res)
        window.localStorage.setItem('token', res.token)
        this.$router.push({ path: '/home' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.input-box {
  width: 240px;
  margin: 0 auto;
  margin-bottom: 20px;
  input {
    display: inline-block;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
  }
}
.login {
  display: block;
  width: 240px;
  color: #fff;
  background-color: #19be6b;
  border:1px solid #19be6b;
  border-radius: 4px;
  padding: 5px 15px 6px;
  line-height: 1.5;
  margin: 0 auto;
}
.sub-box {
  display: flex;
  margin-top: 20px;
  div {
    width: 50%;
    text-align: center;
    a {
      display: inline-block;
      line-height: 1.5;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 1px solid transparent;
      white-space: nowrap;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      padding: 5px 15px 6px;
      font-size: 12px;
      border-radius: 4px;
      transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
      color: #515a6e;
      background-color: #fff;
      border-color: #dcdee2;
    }
  }
}
</style>
