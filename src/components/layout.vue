<template>
  <div id="wrapper">
    <div class="topbar">
      <div class="topbar-left">
        <div class="text-center">
          <a href="index.html" class="logo">
            <i class="md md-terrain"></i>
            <span>质量管理系统后台</span></a>
        </div>
      </div>
      <div class="navbar navbar-default" role="navigation">
      </div>
    </div>
    <div is="left-menu"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftMenu from './left-menu'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { LeftMenu }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
li { list-style: none; }
body { padding-top: 70px; background: #f5f5f5; }
@font-face {
  font-family:'Material Design Iconic Font';
  src: url('../assets/fonts/Material-Design-Iconic-Font.woff') format('woff');
}
[class*=" md-"], [class^=md-] {
  display: inline-block;
  font: normal normal normal 14px/1 'Material Design Iconic Font';
  font-size: inherit;
  speak: none;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.topbar {
  left: 0px;
  right: 0;
  top: 0px;
  z-index: 999;
  background: #ffffff;
  position: fixed;
  box-shadow: 1px 0 3px 0 rgba(0,0,0,0.2);
}
.topbar .topbar-left {
  float: left;
  height: 70px;
  position: relative;
  z-index: 1;
  width: 240px;
  background: #363d4c;
}
.navbar-default {
  border: none;
  margin-bottom: 0px;
  background-color: #363d4c;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0px;
}
.logo {
  font-size: 18px;
  letter-spacing: .05em;
  color: #fff !important;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 70px;
}
.logo i {
  font-size: 30px;
  margin-right: 0;
  color: #ee6e73;
}
.md {
    line-height: inherit;
    vertical-align: bottom;
}
.md-terrain:before {
    content: "\f290";
}

</style>
