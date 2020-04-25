<template>
  <header class="header-menu">
    <div class="header-left">
      <div class="logo" v-if="logo"></div>
      <template v-else>
        <div class="back"  @click="onBack">
          <i class="ivu-icon ivu-icon-ios-arrow-back" style="font-size: 24px;"></i>
        </div>
        <div class="title"><slot /></div>
      </template>
    </div>
    <div class="item col item_top ivu-col ivu-col-span-3">
      <router-link to="/search">
        <i class="ivu-icon ivu-icon-ios-search-outline"></i>
        <p>搜索</p>
      </router-link>
    </div>
    <div class="item col item_top ivu-col ivu-col-span-3" v-if="!logo">
      <router-link to="/home">
        <i class="ivu-icon ivu-icon-ios-home-outline"></i>
        <p>首页</p>
      </router-link>
    </div>
    <div class="item col item_top ivu-col ivu-col-span-3" @click="isMyShow ? isMyShow = false : isMyShow = true">
      <i class="ivu-icon ivu-icon-md-menu"></i>
      <p>我的</p>
    </div>
    <MyMenu v-show="isMyShow"/>
  </header>
</template>

<script>
import MyMenu from './MyMenu'
// import { $Notice } from 'view-design'
export default {
  name: 'HeaderMenu',
  components: {
    MyMenu
  },
  data () {
    return {
      isMyShow: false
    }
  },
  props: {
    logo: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.header-menu {
  height: 54px;
  display: flex;
  position: relative;
  .header-left{
    display: flex;
    flex: 1;
    .logo {
      width: 89px;
      height: 20px;
      background: url('~@/assets/img/logo.png') no-repeat;
      background-size: 100%;
      margin: 11px 0 0 3px;
    }
    .back,.title {
      padding: 11px 6px 3px;
      font-size: 16px;
    }
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      top: 3px
    }
  }

  .item {
    text-align: center;
    padding-top: 3px;
    i {
      color: rgb(12, 124, 201);
    }
    p {
      font-size: 12px;
      padding-top: 3px;
    }
  }
}
</style>
