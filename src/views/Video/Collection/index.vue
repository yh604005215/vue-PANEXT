<template>
  <div class="panext-collection">
    <HeaderMenu>{{ name }}</HeaderMenu>
    <div class="main">
      <AnimeList :anime="list" :isTitle="false"/>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import AnimeList from '@/components/AnimeList'
import { getCollection } from '@/api/getData'
export default {
  name: 'Collection',
  data () {
    return {
      name: '',
      list: []
    }
  },
  components: {
    HeaderMenu,
    AnimeList
  },
  methods: {
    getCollection (id) {
      getCollection(id).then(res => {
        this.name = res.name
        this.list = res.videoList
      })
    }
  },
  created () {
    const id = this.$route.query.collectId
    this.getCollection(id)
  }
}
</script>

<style lang="scss" scoped>
.panext-collection {
  display: flex;
  flex-flow: column;
  .main {
    overflow-y: auto;
    flex: 1;
  }
}
</style>
