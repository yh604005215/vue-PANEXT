<template>
    <van-list
      class="goods-list"
      v-model="loading"
      :finished="finished"
      @load="getTaobao(page, content)"
      finished-text="没有更多了"
    >
   <van-row>
    <van-col
    span="12"
    v-for="(item, index) in goodsList" :key="index"
    @click="onSkip(item.item_url)">
      <div class="goods-box">
        <img v-lazy="item.pict_url" width="100%">
        <div class="price-box">
          <span class="price">¥{{ item.reserve_price }}</span>
          <div v-if="item.coupon_info" class="discounts van-ellipsis">{{ item.coupon_info }}</div>
         </div>
        <p class="van-multi-ellipsis--l2 title">{{ item.short_title }}</p>
        <div class="van-ellipsis nick">
          <span>月销量：{{ item.volume }}</span>
          <span>店铺：{{ item.nick }}</span>
        </div>
      </div>
    </van-col>
  </van-row>
  </van-list>
</template>

<script>
import Vue from 'vue'
import { List, Col, Row, Lazyload } from 'vant'
import { getTaobao } from '@/api/getData'
import { mapState } from 'vuex'
Vue.use(Col)
Vue.use(Row)
Vue.use(List)
Vue.use(Lazyload)
export default {
  name: 'Goods',
  data () {
    return {
      loading: false,
      finished: false,
      page: 1,
      goodsList: []
    }
  },
  computed: {
    ...mapState('moduelA', ['content'])
  },
  watch: {
    content (val) {
      this.page = 1
      this.goodsList = []
      this.getTaobao(this.page, val)
    }
  },
  methods: {
    getTaobao (page, content) {
      getTaobao(page, content).then(res => {
        res.list.forEach(item => {
          this.goodsList.push(item)
        })
        this.page++
        this.loading = false

        if (this.page >= 10) {
          this.finished = true
        }
      })
    },
    onSkip (url) {
      window.location = url
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  .van-col {
    padding: 8px;
    .goods-box {
      border: 1px solid #969696;
      border-radius: 3px;
      font-size: 10px;
      img {
        border-radius: 3px;
        height: 169.53px;
      }
      .price-box {
        display: flex;
        padding: 0 3px;
        line-height: 1.5;
        justify-content: space-between;
        .price {
          color: #f50;
        }
        .discounts {
          border: 1px solid #f50;
          border-radius: 3px;
          background: rgba(255,85,0,.8);
          color: #fff;
          white-space: nowrap;
          height: 18px;
        }
      }
      .title {
        height: 36px;
        line-height: 1.5;
        padding: 0 3px;
      }
      .nick {
        line-height: 1.5;
        padding: 0 3px;
      }
    }
  }
}
</style>
