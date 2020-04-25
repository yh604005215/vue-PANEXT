<template>
  <section>
    <van-row>
      <van-col span="12">
        span: 8
      </van-col>
      <van-col span="12">
        span: 8
      </van-col>
    </van-row>
  </section>
</template>

<script>
import Vue from 'vue'
import { Col, Row } from 'vant'

Vue.use(Col)
Vue.use(Row)
export default {
  name: 'Eikon'
}
</script>

<style>

</style>
