<template>
    <div class="video">
    <video-player class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions">
    </video-player>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
  name: 'DriveVideo',
  props: {
    videoUrl: {
      type: String
    }
  },
  components: {
    videoPlayer
  },
  data () {
    return {
      playerOptions: {
        playbackRates: [0, 5, 1.0, 1.5, 2.0],
        // 如果为true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: 'auto',
        language: 'zh-CN',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: '16:9',
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [{
          src: this.videoUrl
        }],
        // 封面地址
        poster: '',
        // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  }
}
</script>

<style lang="scss">
.video-js .vjs-big-play-button{
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video {
  margin-bottom: 10px;
}
</style>
