<template>
  <div class="panext-taobao">
    <HeaderMenu>{{ 'Pnext淘宝商城页' }}</HeaderMenu>
    <div class="main">
      <div class="taobao-text">
        以下均为淘宝商品,且部分商品有优惠券可以使用(比正常买便宜哦!),从此处购买成单后，小站可以获取用来运营网站的佣金
      </div>
      <div class="search">
        <van-search
          v-model="value"
          show-action
          placeholder="动漫,日用百货,零食等均可搜索"
          @search="onSearch"
          left-icon=""
          :autofocus="true"
        >
          <template #action>
            <button class="search-btn" @click="onSearch">搜索</button>
          </template>
        </van-search>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import Vue from 'vue'
import { Search } from 'vant'

Vue.use(Search)
export default {
  name: 'Taobao',
  components: {
    HeaderMenu
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {
      console.log(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.panext-taobao {
  display: flex;
  flex-flow: column;
  .main {
    flex: 1;
    .taobao-text {
      padding: 0px 4px;
      font-size: 16px;
      color: rgb(255, 85, 0);
      line-height: 24px;
      height: auto;
    }
    .van-search {
      padding-top: 4px;
      .van-search__content--square {
        border-radius: 4px;
        padding: 2px 0;
        background: #fff;
        border: 1px solid #dcdee2;
        padding-left: 5px;
      }
      .van-search__action {
        display: flex;
        justify-content: center;
        .search-btn {
          font-size: 14px;
          padding: 2px 15px;
          border-radius: 4px;
          color: #515a6e;
          background-color: #fff;
          border: 1px solid #dcdee2;
          &:active,:hover {
            color: #2b85e4;
            background-color: #fff;
            border-color: #2b85e4;
          }
        }
      }
    }
  }
}
</style>
