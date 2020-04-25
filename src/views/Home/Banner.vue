<template>
  <section class="banner"  v-if="banner.length > 0">
    <van-swipe class="my-swipe" :autoplay="autoplay"  @change="onChange">
      <van-swipe-item v-for="item in banner" :key="item.bannerImg">
        <router-link :to="item.h5Url">
          <img :src="item.picUrl" alt="">
          <p class="banner-title">{{ item.title }}</p>
        </router-link>
      </van-swipe-item>
      <template #indicator>
      <div class="custom-indicators">
        <div class="custom-indicator"
        v-for="(item, index) in banner"
        :key="item.bannerImg"
        :class="{'custom-indicator-active' : index === current }">
        </div>
      </div>
    </template>
    </van-swipe>
  </section>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  name: 'YhBanner',
  data () {
    return {
      current: 0
    }
  },
  props: {
    banner: {
      type: Array,
      default () {
        return []
      }
    },
    autoplay: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    onChange (index) {
      this.current = index
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 117px;
  padding: 0 5px;
  .my-swipe .van-swipe-item {
    height: 117px;
    border-radius: 5px;
    overflow: hidden;
    img {
      height: 117px;
      width: 100%;
    }
    .banner-title {
      position: absolute;
      bottom: 0;
      font-size: 12px;
      color: #fff;
      background: rgba(0,0,0,.5);
      display: block;
      height: 13px;
      text-align: right;
      width: 100%;
      padding-right: 20px;
      box-sizing: border-box;
    }
  }
  .custom-indicators{
    position: absolute;
    bottom: 20px;
    display:flex;
    left: 50%;
    transform: translateX(-50%);
    .custom-indicator {
      width: 10px;
      height: 10px;
      margin: 2px;
      cursor: pointer;
      border-radius: 50%;
      background-color: rgba(0,0,0,.2);
    }
    .custom-indicator-active {
      background-color: rgba(200,200,200,.5);
    }
  }
}

</style>
