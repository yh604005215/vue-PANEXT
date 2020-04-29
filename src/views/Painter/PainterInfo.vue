<template>
   <div class="box">
        <div class="painter-avatar">
          <img :src="painterInfo.avatar" alt="">
          <van-button type="primary"
          color="#2db7f5"
          size="small">+关注</van-button>
        </div>
        <section class="painterInfo">
          <p>画师：{{ painterInfo.nick }}</p>
          <p>p站地址(翻墙访问):
            <router-link :to="`pixiv.net/member.php?id=${painterInfo.pid}`">
              {{ `pixiv.net/member.php?id=${painterInfo.pid}` }}
            </router-link>
          </p>
          <div class="p_info">
            <div class="text">画册：{{ painterInfo.atlasNum }}幅</div>
            <div class="text">性别：{{ painterInfo.sexName }}</div>
          </div>
          <div class="p_intro van-multi-ellipsis--l3">
            {{ painterInfo.comment }}
          </div>
        </section>
      </div>
</template>

<script>
export default {
  name: 'PainterInfo',
  props: {
    painterInfo: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  font-size: 12px;
}
.painter-avatar {
  display: flex;
  justify-content: space-between;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 30px;
    margin-top: 4px;
  }
  button {
    margin-right: 15px;
    margin-top: 20px;
  }
}
.painterInfo {
  padding-left: 10px;
  font-size: 14px;
  line-height: 1.5;
  p a {
    color: #2d8cf0;
  }
}
.p_info {
  display: flex;
  .text {
    color: #515a6e;
    display: inline-block;
    height: 22px;
    line-height: 22px;
    margin: 2px 10px 2px 0;
    padding: 0 8px;
    border: 1px solid #e8eaec;
    border-radius: 3px;
    background: #f7f7f7;
    font-size: 12px;
    vertical-align: middle;
    opacity: 1;
    overflow: hidden;
    cursor: pointer;
  }
}
.p_intro {
  font-size: 12px;
}
</style>
