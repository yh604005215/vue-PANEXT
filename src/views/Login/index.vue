<template>
  <div class="panext-login">
    <HeaderMenu :logo="true"/>
    <div class="main"
    :style="{ background: `url(${pictureInfo.coverUrl})`,
    backgroundSize: '100%'}">
      <div class="ivu-divider ivu-divider-horizontal ivu-divider-with-text ivu-divider-with-text-center ivu-divider-dashed">
        <span class="ivu-divider-inner-text">登陆</span>
      </div>
      <LoginFrom />
      <div class="ivu-divider ivu-divider-horizontal ivu-divider-dashed"></div>
      <section class="tag">
        <div>图片来自画师：{{ pictureInfo.painterName }}</div>
      </section>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import { getLoginPicture } from '@/api/getData'
import LoginFrom from './LoginFrom'
export default {
  name: 'Login',
  components: {
    HeaderMenu,
    LoginFrom
  },
  data () {
    return {
      pictureInfo: {}
    }
  },
  methods: {
    getLoginPicture () {
      getLoginPicture().then(res => {
        console.log(res.data)
        this.pictureInfo = res.data
      })
    }
  },
  created () {
    this.getLoginPicture()
  }
}
</script>

<style lang="scss" scoped>
.panext-login {
  display: flex;
  flex-flow: column;
  .main {
    flex: 1;
    overflow-y: auto;
    padding-top: 20px;
    font-size: 12px;
    .tag{
      padding-right: 20px;
      text-align: right;
      div {
        display: inline-block;
        height: 22px;
        line-height: 22px;
        margin: 2px 4px 2px 0;
        padding: 0 8px;
        border: 1px solid #e8eaec;
        border-radius: 3px;
        background: #f7f7f7;
        font-size: 12px;
        vertical-align: middle;
        opacity: 1;
        overflow: hidden;
        cursor: pointer;
      }
    }
  }
}
</style>
