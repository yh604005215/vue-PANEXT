<template>
  <section class="eikon">
    <section class="list">
      <div v-for="item in eikonLeft" :key="item.pid" class="item">
        <div class="img-box">
          <img v-lazy="item.coverUrl"
          :style="{'width': '100%',
          'min-height': '100px'}">
          <div class="img-text" v-if="item.allNum > 1">{{ item.allNum }}图</div>
        </div>
        <p class="img-title">{{ item.title }}</p>
      </div>
    </section>
    <section class="list">
      <div v-for="item in eikonRight" :key="item.pid" class="item">
          <div class="img-box">
            <img v-lazy="item.coverUrl" :style="{'width': '100%','min-height': '100px' }">
            <div class="img-text" v-if="item.allNum > 1">{{ item.allNum }}图</div>
          </div>
          <p class="img-title">{{ item.title }}</p>
        </div>
    </section>
  </section>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload)
export default {
  name: 'PiclndexList',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      eikonLeft: [],
      eikonRight: [],
      lHeight: 0,
      rHeight: 0
    }
  },
  watch: {
    list () {
      this.eikonLeft = []
      this.eikonRight = []
      this.lHeight = 0
      this.rHeight = 0
      const data = this.list
      if (data.length > 0) {
        data.forEach(item => {
          if (this.lHeight <= this.rHeight) {
            this.lHeight += ~~item.coverHeight
            this.eikonLeft.push(item)
            console.log(this.eikonRight)
          } else {
            this.rHeight += ~~item.coverHeight
            this.eikonRight.push(item)
          }
        })
      }
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
