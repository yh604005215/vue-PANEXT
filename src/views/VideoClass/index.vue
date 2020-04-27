<template>
  <div class="panext-video-class">
    <HeaderMenu>{{ '动漫分类' }}</HeaderMenu>
    <div class="main">
      <section class="class-list">
        <section class="all">
          <span>全部</span>
        </section>
          <van-row class="theme-list">
            <van-col span="3"
            class="title van-ellipsis"
            v-for="item in classList"
            :key="item.id"
            @click="onClass(item.id)">
              {{ item.className }}
            </van-col>
          </van-row>
      </section>
      <section class="year">
        <section class="year-box">
          <section class="all"><span>全部</span></section>
            <van-row class="year-list">
                <van-col span="4"
                class="title van-ellipsis"
                v-for="item in year"
                :key="item.year"
                @click="onClass(item.id)">
                  {{ item.name }}
                </van-col>
            </van-row>
          </section>
      </section>
      <AnimeList :anime="videoList" :isTitle="false" />
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import AnimeList from '@/components/AnimeList'
import Vue from 'vue'
import { Col, Row } from 'vant'
import { getThemeClass, getVideoList } from '@/api/getData'
Vue.use(Col)
Vue.use(Row)

export default {
  name: 'VideoClass',
  components: {
    HeaderMenu,
    AnimeList
  },
  data () {
    return {
      classList: [],
      year: [],
      videoList: [],
      pages: 0
    }
  },
  methods: {
    getThemeClass () {
      getThemeClass().then(res => {
        console.log(res)
        this.classList = res.class
        this.year = res.year
      })
    },
    getVideoList () {
      getVideoList().then(res => {
        this.videoList = res.videoList.list
        this.pages = res.videoList.num / res.params.size
        this.currentPage = res.params.page
      })
    },
    onClass (id) {
      console.log(id)
    }
  },
  created () {
    this.getThemeClass()
    this.getVideoList()
  }
}
</script>

<style lang="scss" scoped>
.panext-video-class {
  display: flex;
  flex-flow: column;
  .main {
    flex: 1;
    overflow-y: auto;
    .class-list {
      display: flex;
      font-size: 12px;
      padding: 4px 0;
      margin-left: 4px;
      border-bottom: 1px dotted #d9d9d9;
      .all {
        padding-left: 4px;
        width: 40px;
        text-align: left;
        padding-left: 4px;
        line-height: 1.5;
      }
      .theme-list {
        flex: 1;
        .title {
          text-align: center;
          line-height: 1.5;
        }
      }
    }
    .year {
      font-size: 12px;
      padding-left: 4px;
      .year-box{
        display: flex;
        line-height: 1.5;
        padding: 4px 0;
        width: 304px;
        border-bottom: 1px dotted #d9d9d9;
        .all {
          padding-left: 4px;
          width: 40px;
          text-align: left;
        }
        .year-list {
          flex: 1;
          .title {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
