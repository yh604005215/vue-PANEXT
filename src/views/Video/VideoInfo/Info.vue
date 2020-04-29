<template>
    <section class="info-box">
    <section>
      <span class="video-name">
        [{{ info.name + '-' +  videoEpisode}}]
      </span>
      <span class="video-update">{{ info.newTag  }}</span>
    </section>
    <section class="information">
      <p>{{ `${info.year}年-每${info.weekday}更新` }}</p>
      <div class="information-text" @click="isShow ? isShow = false : isShow = true">
        详情 <van-icon name="arrow-down" />
      </div>
      <div class="text" v-if="isShow">
        <p  class="van-multi-ellipsis--l2">
          演员：{{ info.act }}
        </p>
        <div class="content">
          详情：{{ info.content }}
        </div>
      </div>
      <van-row  class="list">
        <van-col span="6" ><i class="ivu-icon ivu-icon-ios-alert-outline" style="font-size: 14px;"></i>报错反馈</van-col>
        <van-col span="6"><i class="ivu-icon ivu-icon-ios-cloud-download-outline" style="font-size: 14px;"></i>点击下载</van-col>
        <van-col span="6"><i class="ivu-icon ivu-icon-md-infinite" style="font-size: 14px;"></i>重新加载</van-col>
         <van-col span="6"><i class="ivu-icon ivu-icon-ios-albums" style="font-size: 14px;"></i>追番提醒</van-col>
      </van-row>
    </section>
  </section>
</template>

<script>
import Vue from 'vue'
import { Icon, Col, Row } from 'vant'

Vue.use(Col)
Vue.use(Row)
Vue.use(Icon)
export default {
  name: 'Info',
  props: {
    info: {
      type: Object
    },
    videoEpisode: {
      type: String
    }
  },
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.info-box{
      font-size: 12px;
      color: #2c3e50;
      padding-left: 5px;
      line-height: 1.5;
    }
.video-name {
  font-size: 16px;
  color: #212121;
}
.information {
  position: relative;
  .information-text {
    position: absolute;
    right: 10px;
    top: 2px;
    i {
      position: relative;
      top: 2px;
    }
  }
  .text {
    margin-top: 5px;
  }
  .van-multi-ellipsis--l2 {
    height: 36px;
  }
  .content {
    margin-top: 5px;
  }
}
.list {
  text-align: center;
  margin-top: 10px;
}
</style>
