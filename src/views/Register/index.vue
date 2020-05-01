<template>
  <div class="panext-register">
    <HeaderMenu :logo="true"/>
    <div class="main">
      <RegisterFrom />
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import RegisterFrom from './RegisterFrom'
export default {
  name: 'Register',
  components: {
    HeaderMenu,
    RegisterFrom
  }
}
</script>

<style lang="scss" scoped>
.panext-register {
  display: flex;
  flex-flow: column;
  .main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
