<template>
  <div class="panext-home">
    <HeaderMenu :logo="true"></HeaderMenu>
    <div class="main">
      <nav id="nav">
        <router-link v-for="item in nav"  :key="item.id" :to="item.path">
          {{ item.title }}
        </router-link>
      </nav>
      <YhBanner :banner="list.banner"></YhBanner>
      <NewCartoon :anime="list.newUpdataVideo"  :weekDay="list.weekDay" v-if="list.weekDay">新番日历</NewCartoon>
      <AnimeList :anime="list.newUp" >番源新增</AnimeList>
      <AnimeList :anime="list.lookVideo" >热番看看看</AnimeList>
      <AnimeList :anime="list.oldVideo" >上季佳品</AnimeList>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import { getHomeData } from '@/api/getData'
import YhBanner from './Banner'
import NewCartoon from './NewCartoon'
import AnimeList from './AnimeList'
export default {
  name: 'Home',
  data () {
    return {
      nav: [
        { id: 1, title: '动漫精选', path: '/home' },
        { id: 2, title: '插图精选', path: '/piclndex' },
        { id: 3, title: '动漫分类', path: '/video-class' },
        { id: 4, title: '插图分类', path: '/picture-class' },
        { id: 5, title: 'P淘商城', path: '/taobao' }],
      list: {}
    }
  },
  components: {
    HeaderMenu,
    YhBanner,
    NewCartoon,
    AnimeList
  },
  created () {
    getHomeData().then(res => {
      this.list = res.specialData
    })
  }
}
</script>

<style lang="scss" scoped>
.panext-home {
  display: flex;
  flex-flow: column;
  .main {
    flex: 1;
    overflow-y: auto;
  }
}
#nav {
  display: flex;
  font-size: 14px;
  justify-content: space-around;
  align-items: center;
  height: 39px;
  a {
    color: #757575;
  }
}
</style>
