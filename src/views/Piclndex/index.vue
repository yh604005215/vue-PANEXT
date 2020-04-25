<template>
  <div class="panext-piclndex">
    <HeaderMenu>{{ '插图精选' }}</HeaderMenu>
    <div class="main">
      <div class="banner">
        <router-link to="/rank">
          <img :src="banner.picUri" alt="">
        </router-link>
      </div>
      <Author :author="author" v-if="author"></Author>
      <div class="ivu-divider ivu-divider-horizontal ivu-divider-dashed"></div>
      <Eikon :type="type" />
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import { getPiclndex } from '@/api/getData'
import Author from './Author'
import Eikon from './Eikon'
export default {
  name: 'Piclndex',
  components: {
    HeaderMenu,
    Author,
    Eikon
  },
  data () {
    return {
      banner: [],
      author: [],
      type: 1
    }
  },
  methods: {
    getPiclndex () {
      getPiclndex().then(res => {
        this.banner = res.specialData.banner[0]
        this.author = res.specialData.painterData
      })
    }
  },
  created () {
    this.getPiclndex()
    this.$on('switch', val => {
      this.type = val
    })
  }
}
</script>

<style lang="scss" scoped>
.panext-piclndex{
  display: flex;
  flex-flow: column;
  .main {
    flex: 1;
    .banner  {
      height: 117px;
      padding: 0 5px;
      img  {
        height: 117px;
        width: 100%;
        border-radius: 5px;
      }
    }
    .van-col {
      font-size: 14px;
      color: #757575;
    }
  }
}

</style>
