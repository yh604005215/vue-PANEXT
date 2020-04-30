<template>
  <div class="panext-group">
    <HeaderMenu>{{ groupInfo.groupName }}</HeaderMenu>
    <div class="main">
      <h2 class="title">{{ groupInfo.groupName }}插图社区</h2>
      <div class="dashed"></div>
      <h3 class="avatar-title">入驻画师</h3>
      <PainterAvatar :painterList="painterList" v-if="painterList.length > 0"/>
      <div class="dashed"></div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getGroupEikon(page)"
      >
        <PainterEikon :list="eikonList" v-if="eikonList.length > 0" />
      </van-list>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import { getGroup, getGroupEikon } from '@/api/getData'
import PainterAvatar from './PainterAvatar'
import PainterEikon from '@/components/PainterEikon'

import Vue from 'vue'
import { List } from 'vant'

Vue.use(List)
export default {
  name: 'Group',
  components: {
    HeaderMenu,
    PainterAvatar,
    PainterEikon
  },
  data () {
    return {
      groupInfo: {},
      painterList: [],
      loading: false,
      finished: false,
      page: 1,
      eikonList: []
    }
  },
  methods: {
    getGroup () {
      getGroup().then(res => {
        this.groupInfo = res.data.groupInfo
        for (let i = 0; i < 5; i++) {
          this.painterList.push(res.data.painterList[i])
        }
      })
    },
    getGroupEikon (page) {
      getGroupEikon(page).then(res => {
        console.log(res)
        res.data.forEach(item => this.eikonList.push(item))
        this.loading = false
        if (this.eikonList.length > 40) this.finished = true
      })
    }
  },
  created () {
    this.getGroup()
  }
}
</script>

<style lang="scss" scoped>
.panext-group {
  display: flex;
  flex-flow: column;
  font-size: 12px;
  line-height: 1.5;
  .main {
    overflow-y: auto;
    flex: 1;
    .title {
      font-size: 16px;
      font-weight: 900;
      text-align: center;
    }
    .avatar-title {
      padding-left: 3px;
      margin-top: 2px;
      margin-bottom: 4px;
    }
  }
}
</style>
