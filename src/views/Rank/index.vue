<template>
  <div class="panext-rank">
    <HeaderMenu>画师top榜</HeaderMenu>
    <div class="main">
      <dl v-for="item in list" :key="item.id" class="painter_item">
        <dt class="painter_avatar">
          <img v-lazy="item.avatar" />
        </dt>
        <dd class="painter-info">
          <p>{{ item.nick }}</p>
          <p>更新作品时间:{{ item.lastUpdateAtlas }}</p>
          <p>{{ item.focusNum }}人关注</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import Vue from 'vue'
import { Lazyload } from 'vant'
import { getPainterRank } from '@/api/getData'
Vue.use(Lazyload)

export default {
  name: 'Rank',
  components: {
    HeaderMenu
  },
  data () {
    return {
      loading: false,
      finished: false,
      page: 1,
      list: []
    }
  },
  methods: {
    getPainterRank (page) {
      getPainterRank(page).then(res => {
        this.list = res
      })
    }
  },
  created () {
    this.getPainterRank(this.page)
  }
}
</script>

<style lang="scss" scoped>
.panext-rank {
  display: flex;
  flex-flow: column;
  .main {
    flex: 1;
    overflow-y: auto;
    .painter_item {
      display: flex;
      font-size: 12px;
      position: relative;
      padding: 10px;
      overflow: hidden;
      &::after {
        content: '';
        height: 0;
        border-top: 1px dashed #e8eaec;
        width: 100%;
        position: absolute;
        bottom: 0;
      }
      .painter_avatar {
        width: 62.5px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 46px;
          height: 46px;
          margin-right: 10px;
          border-radius: 50px;
          overflow: hidden;
        }
      }
      .painter-info {
        flex: 1;
        p {
          margin-top: 8px;
        }
      }
    }
  }
}
</style>
