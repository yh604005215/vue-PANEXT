<template>
  <div class="anime-list">
    <h2 class="sub-title" v-if="isTitle"><strong class="title-content"><slot /></strong></h2>
    <van-row type="flex" justify="space-between">
      <van-col span="8" v-for="item in anime"  :key="item.id" @click="onVideo(item.id)">
          <div class="video">
            <div class="video_newIcon" v-if="item.isNew">new</div>
            <img  v-lazy="item.pic" />
            <div class="video_tag " v-if="item.newTag">{{ item.newTag }}</div>
          </div>
          <div class="van-multi-ellipsis--l2">
                {{ item.name }}
          </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { Col, Row, Lazyload } from 'vant'

Vue.use(Lazyload)
Vue.use(Col)
Vue.use(Row)
export default {
  name: 'AnimeList',
  props: {
    anime: {
      type: [Array, Object],
      default () {
        return []
      }
    },
    isTitle: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onVideo (id) {
      this.$router.push({
        path: '/video/videoinfo',
        query: { videoId: id }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-title {
  height: 36.8px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 14px;
  color: #333;
  font-weight: 100;
}
.anime-list {
  .van-row {
    flex-wrap: wrap;
    padding: 0 5px;
    .van-multi-ellipsis--l2 {
      font-size: 12px;
      line-height: 17px;
      margin-bottom: 2px;
      height: 34px;
    }
  }
  .van-col--8 {
    padding: 2px;
    .video_newIcon {
      position: absolute;
      top: 4px;
      right: 4px;
      border: 1px solid #ff5722;
      color: #fff;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
      background: rgba(255,87,34,.5);
    }
    img {
      height: 168.033px;
      width: 100%;
      vertical-align: middle;
      border-radius: 5px;
    }
    .video_tag {
      position: absolute;
      bottom: 4px;
      right: 4px;
      font-size: 10px;
      color: #673ab7;
      font-weight: 500;
      border: 1px solid #d1c4e9;
      background: rgba(209,196,233,.7);
      border-radius: 4px;
      margin-bottom: 2px;
      padding-top: 0;
      padding-bottom: 0;
    }
    .video {
      height: 168.033px;
      width: 100%;
      position: relative;
    }
  }
}
</style>
