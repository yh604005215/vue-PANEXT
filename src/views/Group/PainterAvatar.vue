<template>
  <van-row class="painter-avatar">
  <van-col span="4" v-for="item in painterList"
  :key="item.id"
  @click="onHeadPainter(item.id)">
    <img :src="item.avatar" />
  </van-col>
  <van-col span="4">
    <i class="ivu-icon ivu-icon-ios-apps" style="font-size: 40px;"></i>
  </van-col>
</van-row>
</template>

<script>
import Vue from 'vue'
import { Col, Row } from 'vant'

Vue.use(Col)
Vue.use(Row)
export default {
  name: 'painter-avatar',
  props: {
    painterList: {
      type: Array
    }
  },
  methods: {
    onHeadPainter (id) {
      this.$router.push({
        path: '/painter',
        query: { painterId: id }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.painter-avatar {
  display: flex;
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .van-col {
    text-align: center;
  }
}
</style>
