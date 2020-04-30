<template>
  <div class="panext-painter">
    <HeaderMenu v-if="painterInfo">{{ painterInfo.nick }}</HeaderMenu>
    <div class="main">
      <PainterInfo :painterInfo="painterInfo" v-if="painterInfo" />
      <div class="dashed"></div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getPainter(page)"
      >
      <PainterEikon :list="list" v-if="list"/>
      </van-list>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import { getPainter } from '@/api/getData'
import PainterInfo from './PainterInfo'
import PainterEikon from '@/components/PainterEikon'
import Vue from 'vue'
import { Button, List } from 'vant'
Vue.use(Button)
Vue.use(List)
export default {
  name: 'Painter',
  data () {
    return {
      page: 1,
      painterInfo: null,
      loading: false,
      finished: false,
      list: []
    }
  },
  components: {
    HeaderMenu,
    PainterInfo,
    PainterEikon
  },
  methods: {
    getPainter (page) {
      const id = this.$route.query.painterId
      getPainter(id, page).then(res => {
        if (!this.painterInfo) {
          this.painterInfo = res.data.painterInfo
        }
        res.data.atlasList.forEach(item => this.list.push(item))
        this.page++
        this.loading = false
        if (this.page > 9) this.finished = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.panext-painter {
  display: flex;
  flex-flow: column;
  .main {
    flex: 1;
    overflow-y: auto;
    font-size: 12px;
    .painter-avatar {
      display: flex;
      justify-content: space-between;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 30px;
        margin-top: 4px;
      }
      button {
        margin-right: 15px;
        margin-top: 20px;
      }
    }
    .painterInfo {
      padding-left: 10px;
      font-size: 14px;
      line-height: 1.5;
      p a {
        color: #2d8cf0;
      }
    }
    .p_info {
      display: flex;
      .text {
        color: #515a6e;
        display: inline-block;
        height: 22px;
        line-height: 22px;
        margin: 2px 10px 2px 0;
        padding: 0 8px;
        border: 1px solid #e8eaec;
        border-radius: 3px;
        background: #f7f7f7;
        font-size: 12px;
        vertical-align: middle;
        opacity: 1;
        overflow: hidden;
        cursor: pointer;
      }
    }
    .p_intro {
      font-size: 12px;
    }
  }
}
</style>
