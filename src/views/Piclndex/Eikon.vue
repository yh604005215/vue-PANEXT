<template>
  <section class="eikon">
    <van-list
    class="list"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="getEikon(type, page)">
      <div v-for="item in eikonLeft" :key="item.id" class="item">
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
    </van-list>
    <van-list
    class="list"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了">
      <div v-for="item in eikonRight" :key="item.id" class="item">
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
    </van-list>

  </section>
</template>

<script>
import Vue from 'vue'
import { Lazyload, List } from 'vant'
import { getEikon } from '@/api/getData'

Vue.use(List)
Vue.use(Lazyload)
export default {
  name: 'Eikon',
  data () {
    return {
      page: 1,
      loading: false,
      finished: false,
      eikonLeft: [],
      eikonRight: []
    }
  },
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  methods: {
    getEikon (type, page) {
      getEikon(type, page).then(res => {
        const data = res.data
        data.forEach((item, index) => {
          if (this.page % 2 !== 0) {
            if (index === 1 || index === 2 || index === 4) {
              this.eikonRight.push(item)
            } else {
              this.eikonLeft.push(item)
            }
          } else {
            if (index === 2 || index === 3) {
              this.eikonRight.push(item)
            } else {
              this.eikonLeft.push(item)
            }
          }
        })
        this.page++
        this.loading = false
        if (this.page >= 9) {
          this.finished = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.eikon {
  display: flex;
}
.list {
  flex: 1;
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
