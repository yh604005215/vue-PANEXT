<template>
  <div class="panext-video-class">
    <HeaderMenu>{{ '动漫分类' }}</HeaderMenu>
    <div class="main">
      <section class="class-list">
        <section class="all" @click="onClass(0)"
        :class="{active: classId === 0}">
          <span>全部</span>
        </section>
          <van-row class="theme-list">
            <van-col span="3"
            class="title van-ellipsis"
            v-for="item in classList"
            :key="item.id"
            :class="{active: classId === item.id}"
            @click="onClass(item.id)">
              {{ item.className }}
            </van-col>
          </van-row>
      </section>
      <section class="year">
        <section class="year-box">
          <section class="all" @click="onYear(0)"
          :class="{active: year === 0}"><span>全部</span></section>
            <van-row class="year-list">
                <van-col span="4"
                class="title van-ellipsis"
                v-for="item in yearList"
                :key="item.year"
                @click="onYear(item.year)"
                :class="{active: year === item.year}">
                  {{ item.name }}
                </van-col>
            </van-row>
          </section>
      </section>
      <AnimeList :anime="videoList" :isTitle="false" />
      <Paging :totalPages="pages"
      @hello="onCurrentPage" />
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import AnimeList from '@/components/AnimeList'
import Paging from '@/components/Paging'
import Vue from 'vue'
import { Col, Row } from 'vant'
import { getThemeClass, getVideoList } from '@/api/getData'
Vue.use(Col)
Vue.use(Row)

export default {
  name: 'VideoClass',
  components: {
    HeaderMenu,
    AnimeList,
    Paging
  },
  data () {
    return {
      classList: [],
      yearList: [],
      videoList: [],
      pages: 0,
      currentPage: 1,
      classId: 0,
      year: 0,
      userPKey: 1588004001000,
      userPMain: 60,
      userPBase: 207582222,
      userUser: 'cIagey01sauB02'
    }
  },
  methods: {
    getThemeClass () {
      getThemeClass().then(res => {
        console.log(res)
        this.classList = res.class
        this.yearList = res.year
      })
    },
    getVideoList (option) {
      getVideoList(option).then(res => {
        this.videoList = res.videoList.list
        this.pages = Math.ceil(res.videoList.num / res.params.size)
        this.currentPage = res.params.page
      })
    },
    onClass (id) {
      this.classId = id
      this.currentPage = 1
      if (this.classId === 0 && this.year === 0) {
        this.userPKey = 1588004001000
        this.userPMain = 60
        this.userPBase = 207582222
        this.userUser = 'cIagey01sauB02'
      }
      if (this.classId === 0 && this.year !== 0) {
        this.userPKey = 1588037967000
        this.userPMain = 58
        this.userPBase = 214744823
        this.userUser = 'cIa91P570rnes73'
      }
      if (this.classId !== 0 && this.year === 0) {
        this.userPKey = 1588037223000
        this.userPMain = 95
        this.userPBase = 131107304
        this.userUser = 'cIease82uM5P17'
      }
      if (this.classId !== 0 && this.year !== 0) {
        this.userPKey = 1588037503000
        this.userPMain = 63
        this.userPBase = 197701525
        this.userUser = 'cIa91P570rnes75'
      }
      this.getVideoList({
        page: this.currentPage,
        year: this.year,
        classId: this.classId,
        userPKey: this.userPKey,
        userPMain: this.userPMain,
        userPBase: this.userPBase,
        userUser: this.userUser
      })
    },
    onYear (year) {
      this.year = year
      this.currentPage = 1
      if (this.classId === 0 && this.year === 0) {
        this.userPKey = 1588004001000
        this.userPMain = 60
        this.userPBase = 207582222
        this.userUser = 'cIagey01sauB02'
      }
      if (this.classId === 0 && this.year !== 0) {
        this.userPKey = 1588037967000
        this.userPMain = 58
        this.userPBase = 214744823
        this.userUser = 'cIa91P570rnes73'
      }
      if (this.classId !== 0 && this.year === 0) {
        this.userPKey = 1588037223000
        this.userPMain = 95
        this.userPBase = 131107304
        this.userUser = 'cIease82uM5P17'
      }
      if (this.classId !== 0 && this.year !== 0) {
        this.userPKey = 1588037503000
        this.userPMain = 63
        this.userPBase = 197701525
        this.userUser = 'cIa91P570rnes75'
      }
      this.getVideoList({
        page: this.currentPage,
        year: this.year,
        classId: this.classId,
        userPKey: this.userPKey,
        userPMain: this.userPMain,
        userPBase: this.userPBase,
        userUser: this.userUser
      })
    },
    onCurrentPage (val) {
      this.currentPage = val
      this.getVideoList({
        page: this.currentPage,
        year: this.year,
        classId: this.classId,
        userPKey: this.userPKey,
        userPMain: this.userPMain,
        userPBase: this.userPBase,
        userUser: this.userUser
      })
    }
  },
  created () {
    this.getThemeClass()
    this.getVideoList({
      page: this.currentPage,
      year: this.year,
      classId: this.classId,
      userPKey: this.userPKey,
      userPMain: this.userPMain,
      userPBase: this.userPBase,
      userUser: this.userUser
    })
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
    .active {
      color: #2d8cf0;
    }
  }
}
</style>
