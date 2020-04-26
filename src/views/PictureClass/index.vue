<template>
  <div class="picture-class">
    <HeaderMenu>社区列表</HeaderMenu>
    <div class="main">
      <van-row v-if="group.length > 0">
        <van-col span="6"
        v-for="item in group" :key="item.groupId">
          <div @click="onSike(item.groupId)" class="itemBox">
            <div class="van-ellipsis item">{{ item.groupName }}</div>
          </div>
        </van-col>
      </van-row>

    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import Vue from 'vue'
import { getPictureClass } from '@/api/getData'
import { Col, Row } from 'vant'

Vue.use(Col)
Vue.use(Row)
export default {
  name: 'PictureClass',
  data () {
    return {
      group: []
    }
  },
  components: {
    HeaderMenu
  },
  methods: {
    getPictureClass () {
      getPictureClass().then(res => {
        this.group = res.data
      })
    },
    onSike (id) {
      this.$router.push({ path: '/group', query: { groupId: id } })
    }
  },
  created () {
    this.getPictureClass()
  }
}
</script>

<style lang="scss" scoped>
.picture-class {
  display: flex;
  flex-flow: column;
  .main {
    overflow-y: auto;
    flex: 1;
    font-size: 12px;
    .itemBox {
      padding: 5px;
      .item {
        border: 1px solid #2c3e50;
        border-radius: 5px;
        padding: 0 10px;
        line-height: 40px;
        text-align: center;
      }
    }
  }
}
</style>
