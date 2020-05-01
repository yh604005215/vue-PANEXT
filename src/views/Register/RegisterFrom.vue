<template>
  <div class="register-from">
    <div class="tabs">
      <div class="email-from">
        邮箱注册
      </div>
    </div>
    <div class="from">
      <div class="sex">
        性别： <span><span class="box" :class="{active: active === 1}"
        @click="active = 1">
          <input type="radio"
          id="man"
          v-model="sex"
          value="男"
          ></span><label for='man'>男</label>
        </span>
        <span><span class="box" :class="{active: active === 2}"
        @click="active = 2">
          <input type="radio"
          id="woman"
          value="女"
          v-model="sex">
          </span><label for='woman'>女</label>
        </span>
      </div>
      <div class="from-box">
        邮箱:
        <input type="text"
        class="input-content"
        placeholder="请输入正确邮箱"
        name="user-email"
        v-model="email">
      </div>
      <div class="from-box">
        验证码：
        <input type="text"
        class="input-content code"
        placeholder="请输入邮箱验证码"
        v-model="eCode"
        name="code">
        <van-button type="primary" size="small"
        @click="getEmailCode(email)">
          {{ time }}
        </van-button>
      </div>
      <div class="from-box">
          密码:
          <input type="password"
          class="input-content"
          placeholder="请输入密码"
          v-model="password"
          name="password">
      </div>
      <div class="from-box">
          确认密码:
          <input type="password"
          class="input-content"
          placeholder="请再次输入密码"
          v-model="password2">
      </div>
      <div class="register">
        <div class="ivu-divider ivu-divider-horizontal ivu-divider-with-text ivu-divider-with-text-center"><span class="ivu-divider-inner-text">
          <van-button type="primary"
          size="small"
          @click="getRegister({
            email, password, sex, eCode
          })">注册</van-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Notify } from 'vant'
import { getRegister, getEmailCode } from '@/api/getUser'
Vue.use(Notify)
Vue.use(Button)
export default {
  name: 'RegisterFrom',
  data () {
    return {
      sex: '男',
      active: 1,
      eCode: '',
      email: '',
      password: '',
      password2: '',
      time: '发送'
    }
  },
  methods: {
    getRegister (info) {
      if (this.password !== this.password2) {
        Notify('密码不一致')
        return
      }
      getRegister(info).then(res => {
        this.$router.push({
          name: 'login',
          params: {
            email: this.email,
            password: this.password
          }
        })
      })
    },
    getEmailCode (email) {
      getEmailCode(email).then(res => {
        Notify({ type: 'primary', message: '已发送' })
        this.countDown(res)
      }).catch(res => {
        console.log(res)
        if (res.ms) {
          this.countDown(res)
        }
      })
    },
    countDown (res) {
      this.time = res.ms
      const timer = setInterval(() => {
        this.time--
        if (this.time === 0) {
          clearInterval(timer)
          this.time = '发送'
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.register-from {
  font-size: 12px;
  .email-from{
    padding-bottom: 5px;
    background: #fff;
    color: #2d8cf0;
    margin-left: 4px;
    padding: 5px 16px 4px;
    border: 1px solid #dcdee2;
    border-bottom: 0;
    border-radius: 4px 4px 0 0;
    font-size: 14px;
    height: 32px;
    line-height: 1.5;
    float: left;
  }
  .tabs {
    height: 32px;
    border-bottom: 1px solid #dcdee2;
    margin-bottom: 20px;
  }
  .sex {
    text-align: center;
    >span {
      margin-right: 10px;
      input {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }
      .box {
        margin-right: 4px;
        display: inline-block;
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
        left: 0;
        background-color: #fff;
        border: 1px solid #dcdee2;
        border-radius: 50%;
        z-index: 9;
      }
      .active {
        border-color: #2d8cf0;
        &::after {
          position: absolute;
          width: 8px;
          height: 8px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 6px;
          display: table;
          content: " ";
          background-color: #2d8cf0;
        }
      }
    }
  }
  .input-content {
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    position: relative;
    cursor: text;
    width: 160px;
    &:hover {
      border-color: #57a3f3;
    }
  }
  .from-box {
    text-align: right;
    padding-right: 100px;
    margin-top: 15px;
  }
  .btn {
    color: #fff;
    background-color: #19be6b;
    font-weight: 400;
    border: 0;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 4px;
  }
  .code {
    width: 100px;
    margin-right: 2px;
  }
}
</style>
