<template>
  <div class="panext-video">
     <HeaderMenu>{{ info.name }}</HeaderMenu>
     <div class="main">
        <DriveVideo :videoUrl="videoUrl" v-if="videoUrl"/>
        <Info :info="info" :videoEpisode="videoEpisode" />
        <van-tabs v-model="active"
        class="anthology"
        title-active-color="#2d8cf0"
        color="#2d8cf0"
        line-width="67px">
          <van-tab title="选集："  disabled></van-tab>
          <van-tab title="来源 0">
            <div class="tex">如视频不能播放,请切换来源</div>
            <div v-for="item in videoList1" :key="item.id" class="box"
            :class="{active: videoEpisode == item.name}">
              {{ item.name }}
              <div class="isNew" v-if="item.isNew === 1">新</div>
            </div>
          </van-tab>
          <van-tab title="来源 1">
            <div class="tex">如视频不能播放,请切换来源</div>
              <div v-for="item in videoList2"
              :key="item.id" class="box"
              :class="{active: videoEpisode == item.name}">
                {{ item.name }}
              <div class="isNew" v-if="item.isNew === 1">新</div>
            </div>
          </van-tab>
          <van-tab disabled></van-tab>
        </van-tabs>
     </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import { getVideoInfo, getVideo } from '@/api/getData'
import DriveVideo from './DriveVideo'
import Info from './Info'
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
Vue.use(Tab)
Vue.use(Tabs)
export default {
  name: 'VideoInfo',
  components: {
    HeaderMenu,
    DriveVideo,
    Info
  },
  data () {
    return {
      videoUrl: null,
      videoEpisode: null,
      info: {},
      active: 0,
      videoList1: [],
      videoList2: []
    }
  },
  methods: {
    getVideoInfo () {
      getVideoInfo().then(res => {
        this.info = res.videoInfo.videoInfo
        this.videoList1 = res.videoInfo.videoList[0]
        this.videoList2 = res.videoInfo.videoList[1]
      })
    },
    getVideo () {
      getVideo().then(res => {
        this.videoUrl = res.videoSource.url
        this.videoEpisode = res.videoSource.name
        console.log(this.videoUrl)
      })
    }
  },
  created () {
    this.getVideoInfo()
    this.getVideo()
  }
}
</script>

<style lang="scss" scoped>
.panext-video {
  display: flex;
  flex-flow: column;
  .main {
    overflow-y: auto;
    flex: 1;
    .anthology {
      margin-top: 10px;
      font-size: 12px;
    }
    .tex {
      margin-top: 15px;
      width: 100%;
      margin-bottom: 10px;
    }
    .van-tab__pane {
      display: flex;
      flex-wrap: wrap;
      padding-left: 5px;
    }
    .box {
      border: 1px solid #bdbdbd;
      color: #515a6e;
      font-size: 14px;
      width: 24%;
      position: relative;
      padding: 5px 0;
      margin-right: 3px;
      border-radius: 3px;
      text-align: center;
      .isNew {
        position: absolute;
        right: 0;
        top: 0;
        background: rgba(255,0,0,.5);
        border-radius: 2px;
        color: #fff;
      }
    }
    .active {
      border: 1px solid #2d8cf0;
      color: #2d8cf0;
    }
  }
}
</style>
