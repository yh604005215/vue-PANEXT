<template>
  <div class="menu">
    <div class="col itemmenu ivu-col ivu-col-span-6">
      <router-link to="/home">
        <i class="ivu-icon ivu-icon-md-radio-button-off"></i>
        <p>首页</p>
      </router-link>
    </div>
    <div class="col itemmenu ivu-col ivu-col-span-6">
      <router-link to="/home">
        <i class="ivu-icon ivu-icon-ios-albums-outline"></i>
        <p>收藏</p>
      </router-link>
    </div>
    <div class="col itemmenu ivu-col ivu-col-span-6">
      <router-link to="/home">
        <i class="ivu-icon ivu-icon-md-disc"></i>
        <p>关注</p>
      </router-link>
    </div>
    <div class="col itemmenu ivu-col ivu-col-span-6">
      <router-link to="/home">
        <i class="ivu-icon ivu-icon-md-color-filter"></i>
        <p>反馈</p>
      </router-link>
    </div>
     <div class="col itemmenu ivu-col ivu-col-span-6">
        <i class="ivu-icon ivu-icon-md-clipboard"></i>
        <p>签到</p>
    </div>
    <div class="col itemmenu ivu-col ivu-col-span-6">
      <router-link to="/home">
        <div class="icon-qq"></div>
        <p class="text-qq">qq群</p>
        <p class="text-qq">105824364</p>
      </router-link>
    </div>
    <div class="col itemmenu ivu-col ivu-col-span-6">
      <router-link to="/home">
        <i class="ivu-icon ivu-icon-ios-albums"></i>
        <p>追番列表</p>
      </router-link>
    </div>
    <div class="col itemmenu ivu-col ivu-col-span-24 user-btn">
      <button type="button" class="ivu-btn ivu-btn-default ivu-btn-long ivu-btn-circle">
        <router-link to="/register" v-if="token">个人中心</router-link>
        <router-link to="/login" v-if="!token">登陆/注册</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'MyMenu',
  computed: {
    ...mapState('moduelA', ['token'])
  },
  methods: {
    ...mapMutations('moduelA', ['SET_TOKEN'])
  },
  created () {
    this.SET_TOKEN()
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  right: 0;
  left: 0;
  top: 54px;
  z-index: 100;
  background: #fff;
  p {
    color: #969696;
    font-size: 12px;
    line-height: 18px;
  }
  i {
    font-size: 24px;
  }
  .icon-qq {
    height: 24px;
    width: 24px;
    background: url('~@/assets/icon/qq-icon.png')  no-repeat;
    background-size: 100%;
    margin: 0 auto;
  }
  .text-qq {
    color: #2d8cf0;
  }
  .ivu-btn {
    width: 230px;
  }
  .user-btn {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  [class*=ivu-col-span-] {
    text-align: center;
    padding-top: 6px;
  }
}
</style>
