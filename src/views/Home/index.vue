<template>
  <div class="panext-home">
    <HeaderMenu :logo="true"></HeaderMenu>
    <nav id="nav">
      <router-link v-for="item in nav"  :key="item.id" :to="item.path">
        {{ item.title }}
      </router-link>
    </nav>
    <YhBanner />
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import YhBanner from './Banner'
export default {
  name: 'Home',
  data () {
    return {
      nav: [
        { id: 1, title: '动漫精选', path: '/home' },
        { id: 2, title: '插图精选', path: '/piclndex' },
        { id: 3, title: '动漫分类', path: '/video-class' },
        { id: 4, title: '插图分类', path: '/picture-class' },
        { id: 5, title: 'P淘商城', path: '/taobao' }]
    }
  },
  components: {
    HeaderMenu,
    YhBanner
  }
}
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  font-size: 14px;
  color: #757575;
  justify-content: space-around;
  align-items: center;
  height: 39px;
}
</style>
