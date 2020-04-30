<template>
  <van-list
  class="eikon"
  v-model="loading"
    :finished="finished"
    finished-text="豪哥牛逼"
    @load="getEikon({
      type,
      page,
      userPKey,
      userPMain,
      userPBase,
      userUser
    })">
    <section class="list">
      <div v-for="item in eikonLeft" :key="item.pid" class="item"
      @click="onHeadDetail(item.id, item.title)">
        <div class="img-box">
          <img v-lazy="item.coverUrl"
          :style="{'width': '100%',
          'min-height': '100px'}">
          <div class="img-text" v-if="item.allNum > 1">{{ item.allNum }}图</div>
        </div>
        <p class="img-title">{{ item.title }}</p>
        <div class="info">
          <b><img v-lazy="item.painterAvatar" alt="" class="avater"></b>
          <span class="nick">{{ item.nick }}</span>
        </div>
      </div>
    </section>
    <section class="list">
      <div v-for="item in eikonRight" :key="item.pid" class="item"
      @click="onHeadDetail(item.id, item.title)">
          <div class="img-box">
            <img v-lazy="item.coverUrl" :style="{'width': '100%','min-height': '100px' }">
            <div class="img-text" v-if="item.allNum > 1">{{ item.allNum }}图</div>
          </div>
          <p class="img-title">{{ item.title }}</p>
          <div class="info">
            <b><img v-lazy="item.painterAvatar" alt="" class="avater"></b>
            <span  class="nick">{{ item.nick }}</span>
          </div>
        </div>
    </section>

  </van-list>
</template>

<script>
import Vue from 'vue'
import { Lazyload, List } from 'vant'
import { getEikon } from '@/api/getData'
import { mapState } from 'vuex'
Vue.use(List)
Vue.use(Lazyload)
export default {
  name: 'Eikon',
  data () {
    return {
      page: 1,
      userPKey: 1587806628000,
      userPMain: 66,
      userPBase: 188687656,
      userUser: 'potnrey88sauB86',
      loading: false,
      finished: false,
      eikonLeft: [],
      eikonRight: [],
      lHeight: 0,
      rHeight: 0
    }
  },
  computed: {
    ...mapState('moduelA', ['type'])
  },
  watch: {
    type (newVal, oldVal) {
      if (newVal === 1) {
        this.rHeight = 0
        this.lHeight = 0
        this.page = 1
        this.userPKey = 1587806628000
        this.userPMain = 66
        this.userPBase = 188687656
        this.userUser = 'potnrey88sauB86'
        this.eikonLeft = []
        this.eikonRight = []
        this.finished = false
      }
      if (newVal === 2) {
        this.rHeight = 0
        this.lHeight = 0
        this.page = 1
        this.userPKey = 1587861686000
        this.userPMain = 40
        this.userPBase = 311345428
        this.userUser = 'potnrey86sauB14'
        this.eikonLeft = []
        this.eikonRight = []
        this.finished = false
      }
      if (newVal === 3) {
        this.rHeight = 0
        this.lHeight = 0
        this.page = 1
        this.userPKey = 1587862438000
        this.userPMain = 75
        this.userPBase = 166050973
        this.userUser = 'potnrey88sauB69'
        this.eikonLeft = []
        this.eikonRight = []
        this.finished = false
      }
      this.getEikon({
        type: newVal,
        page: this.page,
        userPKey: this.userPKey,
        userPMain: this.userPMain,
        userPBase: this.userPBase,
        userUser: this.userUser
      })
    }
  },
  methods: {
    getEikon (option) {
      getEikon(option).then(res => {
        const data = res.data
        data.forEach(item => {
          if (this.lHeight <= this.rHeight) {
            this.lHeight += ~~item.coverHeight
            this.eikonLeft.push(item)
          } else {
            this.rHeight += ~~item.coverHeight
            this.eikonRight.push(item)
          }
        })
        this.page++
        this.loading = false
        if (this.page >= 10) {
          this.finished = true
        }
      })
    },
    onHeadDetail (id, title) {
      this.$router.push({
        path: 'detail',
        query: { atlasId: id, title }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.eikon {
  overflow: hidden;
}
.list {
  float: left;
}
.item {
  font-size: 12px;
  margin: 2px 3px 4px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  box-shadow: 0 0 2px #dbdbdb;
  width: 181.5px;
  .img-box {
    position: relative;
    display: flex;
    justify-content: center;
    img {
      border-radius: 5px;
    }
    .img-text {
      position: absolute;
      border: 1px solid rgba(255,153,0,.7);
      background: rgba(255,153,0,.7);
      height: 22px;
      padding: 0 8px;
      color: #fff;
      border-radius: 3px;
      top: 5px;
      right: 5px;
      line-height: 22px;
    }
  }
  .img-title {
    padding-top: 2px;
    line-height: 16px;
    height: 16px;
    padding-left: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .avater {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
  .info {
    display: flex;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #2c3e50;
    padding-left: 3px;
    text-align: left;
    align-items: center;
    margin-top: 3px;
  }
  .nick {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #2c3e50;
    margin-left: 2px;
  }
}

</style>
