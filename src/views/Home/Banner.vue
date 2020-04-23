<template>
  <section class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.bannerImg">
        <router-link :to="item.h5Url">
          <img :src="item.picUrl" alt="">
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </section>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
import { getHomeData } from '@/api/getData'
Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  name: 'banner',
  data () {
    return {
      banner: []
    }
  },

  methods: {
    getHomeData () {
      getHomeData().then(res => {
        this.banner = res.specialData.banner
      })
    }
  },
  created () {
    this.getHomeData()
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 117px;
  .my-swipe .van-swipe-item {
    height: 117px;
  }
}

</style>
