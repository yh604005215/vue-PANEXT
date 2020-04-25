<template>
  <div class="new-cartoon">
    <h2 class="sub-title"><strong class="title-content"><slot /></strong></h2>
    <van-tabs v-model="active" color="#2c3e50"  :animated="true" swipe-threshold="7">
      <van-tab
      :title="item.weekName"
       v-for="item in anime"
       :key="item.week">
        <van-row type="flex" justify="space-between">
          <van-col span="8" v-for="img in item.list"  :key="img.id" :id="img.id" @click="onVideo(img.id)">
              <div class="video">
                <div class="video_newIcon" v-if="img.isNew">new</div>
                <img  v-lazy="img.pic" />
                <div class="video_tag " v-if="img.newTag">{{ img.newTag }}</div>
              </div>
              <div class="van-multi-ellipsis--l2">
                    {{ img.name }}
              </div>
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Col, Row, Lazyload, Tab, Tabs } from 'vant'

Vue.use(Lazyload)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Col)
Vue.use(Row)
export default {
  name: 'NewCartoon',
  data () {
    return {
      active: this.$attrs.weekDay - 1
    }
  },
  props: {
    anime: {
      type: [Object, Array],
      default () {
        return []
      },
      weekDay: {
        type: [Number, String],
        required: true
      }
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
.new-cartoon {
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
