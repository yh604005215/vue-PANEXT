<template>
  <ul  class="yh-paging">
    <li class="yh-prev pageText"
    @click="currentPage === 1 ? currentPage : currentPage-- "
    :class="{disabled: currentPage === 1}"
    ><i class="ivu-icon ivu-icon-ios-arrow-back"></i></li>
    <li v-if="currentPage >= pageSize" class="pageText" @click="currentPage = 1">
      {{ 1 }}
    </li>
    <li class="pageText" v-if="currentPage >= pageSize"
      @click="currentPage - 5 > 0 ? currentPage-=5 : currentPage = 0">
      <span class="page-ellipsis"></span>
    </li>
    <li
    v-for="item in pages"
    @click="onPageNum(item)"
    :class="{active: currentPage === item}"
    :key="item"
    v-text="item"
    class="pageText"></li>
    <li class="pageText" v-if="currentPage <= totalPages-pageSize"
    @click="currentPage + 5 < totalPages ? currentPage+=5 : currentPage = totalPages">
      <span class="page-ellipsis"></span>
    </li>
      <li v-if="currentPage < pageSize" class="pageText" @click="currentPage = totalPages">
      {{ totalPages }}
    </li>
    <li class="yh-next pageText"
    @click="currentPage === totalPages ? currentPage : currentPage++ "
    :class="{disabled: currentPage === totalPages}"
    ><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></li>
  </ul>
</template>

<script>
export default {
  name: 'yh-pagin',
  data () {
    return {
      currentPage: 1
    }
  },
  props: {
    totalPages: {
      type: Number,
      default: 30
    },
    pageSize: {
      type: Number,
      default: 5
    }
  },
  computed: {
    pages () {
      const pages = []
      if (this.totalPages > this.pageSize) {
        for (let i = 1; i < this.totalPages; i++) {
          if (this.currentPage >= i && i + 2 >= this.currentPage) {
            pages.push(i)
          }
          if (this.currentPage < i && i - 2 <= this.currentPage) {
            pages.push(i)
          }
        }
        if (this.currentPage >= this.totalPages - 2) {
          pages.push(this.totalPages)
        }
      }

      return pages
    }
  },
  watch: {
    currentPage (val) {
      this.$emit('hello', val)
    }
  },
  methods: {
    onPageNum (num) {
      this.currentPage = num
    }
  }
}
</script>

<style lang="scss" scoped>
.yh-paging {
  font-size: 12px;
  justify-content: center;
  display: flex;
  .pageText {
    display: inline-block;
    vertical-align: middle;
    min-width: 32px;
    height: 32px;
    line-height: 30px;
    margin:0 3px;
    text-align: center;
    list-style: none;
    background-color: #fff;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    font-family: Arial;
    font-weight: 500;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    padding: 0 4px;
    transition: border .2s ease-in-out,color .2s ease-in-out;
  }
  .active {
    color: #2d8cf0;
    border-color: #2d8cf0;
  }
  .disabled {
    color: #ccc;
  }
  .yh-prev,.yh-next {
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
  }
  .page-ellipsis{
    font-size: 18px;
    &::after{
      content: "\2022\2022\2022";
      display: block;
      letter-spacing: 1px;
      color: #ccc;
      text-align: center;
    }
  }
}
</style>
