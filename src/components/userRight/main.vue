<template>
  <div class="content-page">
    <!-- main -->
    <div class="container">
      <router-view></router-view>     
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-page {
  margin-left: 240px;
  overflow: hidden;
  position: relative;
  min-height: 940px;
  padding: 20px 5px 15px 5px;
}
</style>
