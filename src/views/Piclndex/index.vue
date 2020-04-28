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
      <div class="dashed"></div>
      <Eikon />
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
      author: []
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
    overflow-y: auto;
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
    .dashed {
      height: 0;
      border-top: 0.02667rem dashed #e8eaec;
      margin: 5px 0;
    }
  }
}

</style>
