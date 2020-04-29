<template>
  <section>
    <van-row type="flex" justify="center">
      <van-col class="tab" @click="onType(3)" span="8">
        <section class="she" :class="{ active : type == 3}" >女性向</section>
      </van-col>
      <van-col class="tab" @click="onType(1)" span="8">
        <section class="synthesize"  :class="{ active : type == 1 }" >综合向</section>
      </van-col>
      <van-col class="tab"   @click="onType(2)" span="8">
        <section :class="{ active : type == 2 }" class="otaku">宅男向</section>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="5" v-for="item in author" :key="item.id"
      class="author"
      @click="onHeadPainter(item.id)">
        <img :src="item.avatar" alt="" class="author-avatar">
        <span class="author-text">{{ item.nick }}</span>
      </van-col>
      <van-col span="4">
        <router-link to="/picture-class" class="author">
          <img src="@/assets/icon/classify.jpg" class="classify-avatar">
          <span class="classify-text">{{ '分类' }}</span>
        </router-link>
      </van-col>
    </van-row>
  </section>
</template>

<script>
import Vue from 'vue'
import { Col, Row } from 'vant'
import { mapMutations, mapState } from 'vuex'
Vue.use(Col)
Vue.use(Row)
export default {
  name: 'Author',
  computed: {
    ...mapState('moduelA', ['type'])
  },
  props: {
    author: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    ...mapMutations('moduelA', ['SET_TYPE']),
    onType (val) {
      this.SET_TYPE(val)
    },
    onHeadPainter (id) {
      this.$router.push({ path: '/painter', query: { painterId: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #757575;
  margin: 4px;
  margin-top: 6px;
  >section {
    height: 31px;
    width: 117px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 10px;

  }
  .active  {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
  }
  .she {
    background: rgb(255, 210, 209);
  }
  .synthesize {
    background: rgb(255, 245, 210);
  }
  .otaku {
    background: rgb(191, 230, 252);
  }
}
.author {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}
.author-avatar {
  height: 32px;
  width: 32px;
  border-radius: 50%;
}
.author-text {
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 10px;
  color: rgb(157, 157, 157);
  white-space: nowrap;
  box-sizing: border-box;
  display: block;
  width: 58px;
  margin-top: 4px;
}
.classify-avatar {
  width: 42.5px;
  height: 42.5px;
  border-radius: 50%;
}
.classify-text {
  font-size: 10px;
  color: rgb(157, 157, 157);
}
</style>
