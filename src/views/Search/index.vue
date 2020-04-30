<template>
  <div class="panext-search">
    <HeaderMenu>搜索</HeaderMenu>
    <div class="main">
      <div class="search">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入画师pid·动漫·插图"
          @search="onSearch"
          left-icon=""
          :autofocus="true"
        >
          <template #action>
            <button class="search-btn" @click="onSearch">搜索</button>
          </template>
        </van-search>
      </div>
      <div class="content">
        <van-tabs v-model="active"
        :swipeable="true"
        color="#2d8cf0"
        title-active-color="#2d8cf0">
          <van-tab title="插图与画师">
            <PiclndexList :eikonLeft="eikonLeft" :eikonRight="eikonRight" />
          </van-tab>
          <van-tab title="动漫"><AnimeList :anime="videoList" /></van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import AnimeList from '@/components/AnimeList'
import PiclndexList from './PiclndexList'
import Vue from 'vue'
import { Tab, Tabs, Search } from 'vant'
import { getSearchVideo, getSearchPiclndex } from '@/api/getData'
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Search)
export default {
  name: 'Search',
  data () {
    return {
      active: 1,
      value: this.$route.query.text ? this.$route.query.text : '',
      videoList: [],
      eikonLeft: [],
      eikonRight: [],
      lHeight: 0,
      rHeight: 0
    }
  },
  components: {
    HeaderMenu,
    AnimeList,
    PiclndexList
  },
  methods: {
    onSearch () {
      console.log(this.value)
      this.getSearchVideo(this.value)
      this.getSearchPiclndex(this.value)
    },
    getSearchVideo (val) {
      getSearchVideo(val).then(res => {
        this.videoList = res.list
      })
    },
    getSearchPiclndex (val) {
      getSearchPiclndex(val).then(res => {
        this.eikonLeft = []
        this.eikonRight = []
        this.lHeight = 0
        this.rHeight = 0
        const data = res.data.list
        console.log(res)
        if (data && data.length > 0) {
          data.forEach(item => {
            if (this.lHeight <= this.rHeight) {
              this.lHeight += ~~item.coverHeight
              this.eikonLeft.push(item)
              console.log(this.eikonRight)
            } else {
              this.rHeight += ~~item.coverHeight
              this.eikonRight.push(item)
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.panext-search {
  display: flex;
  flex-flow: column;
  .main {
    flex: 1;
    overflow-y: auto;
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
