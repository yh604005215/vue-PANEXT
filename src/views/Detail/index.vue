<template>
  <div class="panext-detail">
    <HeaderMenu>{{ detail.title }}</HeaderMenu>
    <div class="main">
      <DetailText :detail="detail" :picture="picture" />
      <h2 class="title">画师其他作品推荐</h2>
      <PainterEikon :list="recommend" />
      <div class="dashed"></div>
      <h2 class="title">其他相似作品推荐</h2>
      <PainterEikon :list="likeness" />
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import { getDetail, getPicture, getRecommend, getLikeness } from '@/api/getData'
import DetailText from './DetailText'
import PainterEikon from '@/components/PainterEikon'
export default {
  name: 'Detail',
  components: {
    HeaderMenu,
    DetailText,
    PainterEikon
  },
  data () {
    return {
      detail: {},
      picture: null,
      recommend: [],
      likeness: []
    }
  },
  methods: {
    getDetail () {
      getDetail().then(res => {
        this.detail = res.data
      })
    },
    getPicture () {
      getPicture().then(res => {
        this.picture = res.data
      })
    },
    getRecommend () {
      getRecommend().then(res => {
        this.recommend = res.data
      })
    },
    getLikeness () {
      getLikeness().then(res => {
        this.likeness = res.data
      })
    }
  },
  created () {
    this.getDetail()
    this.getPicture()
    this.getRecommend()
    this.getLikeness()
  }
}
</script>

<style lang="scss" scoped>
.panext-detail {
  display: flex;
  flex-flow: column;
  .main {
    flex: 1;
    overflow-y: auto;
    .title {
      font-size: 20px;
      font-weight: 600;
      padding: 5px 0 8px 20px;
    }
  }
}
</style>
