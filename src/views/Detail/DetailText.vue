<template>
  <section>
    <van-row class="detail">
      <van-col span="24" class="title">
        标题:<h2 class="van-ellipsis">{{ detail.title }}</h2>
      </van-col>
      <van-col span="24">
        {{ detail.chinaIntroduce }}
      </van-col>
    </van-row>
    <div class="dashed"></div>
      <div class="img-box">
        <img v-for="(item, index) in picture"
        style="width: 100%"
        :key="index" :src="item.bigPic" alt="">
      </div>
    <div class="dashed"></div>
    <section class="tag-box">
      <van-tag v-for="(item, index) in detail.tagList"
      :key="index"
      :color="item.tagColor"
      text-color="#fff"
      @click="onHeadSearch(item.tagName)">
        {{ item.tagName }}
      </van-tag>
    </section>
    <div class="dashed"></div>
    <section class="painter-info">
      <h6>画师信息</h6>
      <div>
       <div class="avatar"><img :src="detail.avatar" ></div>
       <div class="info">
         <p>画师：{{ detail.painterNick }}</p>
         <p>共有{{ detail.atlasNum }}个作品</p>
       </div>
      </div>
    </section>
    <div class="dashed"></div>
  </section>
</template>

<script>
import Vue from 'vue'
import { Col, Row, Tag } from 'vant'
Vue.use(Tag)
Vue.use(Col)
Vue.use(Row)
export default {
  name: 'DetailText',
  props: {
    detail: {
      type: Object
    },
    picture: {
      type: Array
    }
  },
  methods: {
    onHeadSearch (text) {
      this.$router.push({
        path: 'search',
        query: {
          text
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  font-size: 12px;
  line-height: 1.5;
  padding: 5px 20px 0 20px;
  .title {
    display: flex;
    justify-content: center;
    color: rgb(70, 76, 91);
    font-size: 16px;
    margin-bottom: 10px;
  }

}
.img-box {
  padding: 3px 0;
}
.tag-box {
  margin: 3px 0 10px 20px;
  .van-tag {
    height: 22px;
    line-height: 22px;
    margin: 2px 4px 2px 0;
    padding: 0 8px;
    border: 1px solid #e8eaec;
    border-radius: 3px;
  }
}
.painter-info {
  font-size: 12px;
  overflow: hidden;
  margin-bottom: 10px;
  h6 {
    font-weight:normal;
    text-align: center;
    padding: 10px 0;
  }
  .avatar {
    float: left;
    margin: 0 20px;
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  }
  .info {
    float: left;
    line-height: 1.5;
  }
}
</style>
