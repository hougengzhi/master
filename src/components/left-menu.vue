<template>
  <div class="left side-menu ng-scope">
    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 845px;">
      <div class="sidebar-inner slimscrollleft" style="overflow: hidden; width: auto; height: 845px;">
        <div id="sidebar-menu">
          <ul>
            <li class="has_sub" :class="{show:isActive[0]}">
              <a class="waves-effect" @click="toggle(0)">
              <i class="md md-mail"></i>
              <span>用户权限管理 </span>
              <span class="pull-right">
                <i class="md md-add"></i>
              </span>
              </a>
              <ul class="list-unstyled">
                <li><a href="#/userRight/userStructure" :class="{active: hash == 'userStructure'}" @click="setFocus('userStructure')">组织结构</a></li>
                <li><a href="#/userRight/userRoles" :class="{active: hash == 'userRoles'}" @click="setFocus('userRoles')">角色管理</a></li>
                <li><a href="#/userRight/userUsers" :class="{active: hash == 'userUsers'}" @click="setFocus('userUsers')">用户管理</a></li>
                <li><a href="#/userRight/userMenus" :class="{active: hash == 'userMenus'}" @click="setFocus('userMenus')">菜单管理</a></li>
              </ul>
            </li>

            <li class="has_sub" :class="{show:isActive[1]}">
              <a class="waves-effect" @click="toggle(1)"><i class="md md-palette"></i><span>配置管理 </span> <span class="pull-right"><i class="md md-add"></i></span></a>
              <ul class="list-unstyled">
                <!--<li><a href="#/dashboard/configDatabase">配置数据源</a></li>-->
                <li><a href="#/dashboard/configSap">SAP链接</a></li>
                <li><a href="#/dashboard/configJob">计划任务</a></li>
              </ul>
            </li>

            <li class="has_sub" :class="{show:isActive[2]}">
              <a class="waves-effect" @click="toggle(2)"><i class="md md-invert-colors-on"></i><span>基础主数据 </span><span class="pull-right"><i class="md md-add"></i></span></a>
              <ul class="list-unstyled">
                <li><a href="#/dashboard/baseDataCustomer">客户</a></li>
                <li><a href="#/dashboard/baseDataMaterial">物料</a></li>
              </ul>
            </li>

            <li>
              <a href="#/dashboard/businessData" class="waves-effect"><i class="md md-redeem"></i><span>阶段设计 </span></a>
            </li>

            <li class="has_sub" :class="{show:isActive[3]}">
              <a class="waves-effect" @click="toggle(3)"><i class="md md-now-widgets"></i><span>流程设计</span><span class="pull-right"><i class="md md-add"></i></span></a>
              <ul class="list-unstyled">
                <li><a href="#/dashboard/oaDataCategory">分类设置</a></li>
                <li><a href="#/dashboard/oaDataFormManagement">表单管理</a></li>
                <li><a href="#/dashboard/oaDataBpm">流程设计</a></li>
                <li><a href="#/dashboard/oaDataProcessMonitor">流程监控</a></li>
                <li><a href="#/dashboard/oaDataProcessDelegate">流程代理</a></li>
              </ul>
            </li>

            <li class="has_sub" :class="{show:isActive[4]}">
              <a class="waves-effect" @click="toggle(4)"><i class="glyphicon glyphicon-cog"></i><span>系统管理 </span><span class="pull-right"><i class="md md-add"></i></span></a>
              <ul class="list-unstyled">
                <li><a href="#/dashboard/oaSystemSetup">系统设置</a></li>
                <li><a href="#/dashboard/oaUserOnline">在线用户</a></li>
              </ul>
            </li>

          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      isActive: [],
      hash: ''
    }
  },
  methods: {
    toggle (i) {
      Vue.set(this.isActive, i, !this.isActive[i])
      console.log(this.$router, this.$router.path)
    },
    setFocus (str) {
      this.hash = str
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-menu {
  width: 240px;
  top: 0;
  bottom: 0;
  z-index: 2;
}
.side-menu.left {
  background: #ffffff;
  position: absolute;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  top: 70px;
}
body.fixed-left .side-menu.left {
  margin-top: 0px;
  position: fixed;
  height: 100%;
  bottom: 50px;
  margin-bottom: -70px;
  padding-bottom: 70px;
}
.content-page {
  margin-left: 240px;
  overflow: hidden;
  position: relative;
  min-height: 940px;

}
.content-page > .content {
  margin-top: 70px;
  margin-bottom: 60px;
  padding: 20px 5px 15px 5px;
  position: relative;
}
.button-menu-mobile {
  font-size: 21px;
  background: transparent;
  color: #888;
  border: none;
  line-height: 70px;
  color: #fff;
  padding: 0px 15px;
}
.button-menu-mobile:hover {
  color: #eee;
}
.sidebar-inner {
  height: 100%;
}
#sidebar-menu,
#sidebar-menu ul,
#sidebar-menu li,
#sidebar-menu a {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  position: relative;
}
#sidebar-menu a {
  line-height: 1.3;
}
#sidebar-menu {
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 50px;
}
#sidebar-menu > ul > li > a {
  display: block;
  color: #444;
  padding: 15px 25px;
}
#sidebar-menu > ul > li > a > span {
  vertical-align: middle;
}
#sidebar-menu > ul > li > a:hover {
  background: #f3f3f3;
}
#sidebar-menu > ul > li > a > i {
  display: inline-block;
  font-size: 18px;
  line-height: 17px;
  margin-left: 3px;
  margin-right: 15px;
  text-align: center;
  vertical-align: middle;
  width: 20px;
}
#sidebar-menu > ul > li > a > i.i-right {
  margin: 3px 0 0 0;
  float: right;
}
#sidebar-menu > ul > li > a:hover {
  text-decoration: none;
}
#sidebar-menu > ul > li > a.active,
#sidebar-menu > ul > li > a.active.subdrop {
  background: #f3f3f3 !important;
}
.subdrop {
  background: #f3f3f3;
}

#sidebar-menu ul ul {
  display: none;
}

#sidebar-menu .show ul {
  display: block;
}

#sidebar-menu ul ul li {
  border-top: 0;
}
#sidebar-menu ul ul li a.active{
  color: #317eeb;
}
#sidebar-menu ul ul a {
  padding: 10px 25px 10px 65px;
  display: block;
  color: #75798B;
}
#sidebar-menu ul ul a:hover {
  color: #317eeb;
}
#sidebar-menu ul ul ul a {
  padding-left: 80px;
}
#sidebar-menu ul ul a i {
  margin-right: 5px;
}
#wrapper.enlarged #sidebar-menu ul ul {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
#wrapper.enlarged .left.side-menu #sidebar-menu > ul > li > a{
  padding-left: 10px;
}
#wrapper.enlarged .left.side-menu #sidebar-menu > ul > li > a:hover {
  background-color: #f3f3f3 !important;
}
#wrapper.enlarged .left.side-menu {
  width: 50px;
  z-index: 5;
}
#wrapper.enlarged .content-page {
  margin-left: 50px;
}
#wrapper.enlarged .topbar .topbar-left {
  width: 50px !important;
}
#wrapper.enlarged .topbar .topbar-left .logo span{
  opacity: 0;
  display: none;
}
#wrapper.enlarged .left.side-menu span.pull-right {
  display: none !important;
}
#wrapper.enlarged .topbar .topbar-left .logo i {
  margin-right: 0px;
}
#wrapper.enlarged .left.side-menu #sidebar-menu ul > li {
  white-space: nowrap;
}
#wrapper.enlarged .left.side-menu #sidebar-menu ul > li > ul {
  display: none;
}
#wrapper.enlarged .left.side-menu #sidebar-menu ul > li:hover > a {
  background: #ffffff;
}
#wrapper.enlarged #sidebar-menu > ul > li:hover > a.open:after,
#wrapper.enlarged #sidebar-menu > ul > li:hover > a.active:after {
  display: none;
}
#wrapper.enlarged .left.side-menu #sidebar-menu ul > li:hover > ul {
  position: absolute;
  left: 50px;
  width: 190px;
  display: block;
}
#wrapper.enlarged .left.side-menu #sidebar-menu ul ul li:hover > ul {
  position: absolute;
  left: 190px;
  margin-top: -36px;
  width: 190px;
  display: block;
}
#wrapper.enlarged .left.side-menu #sidebar-menu ul > li:hover > ul a {
  background: #fff;
  padding-left: 15px;
  border: none;
  width: 190px;
  box-shadow: none;
  z-index: 6;
  position: relative;
  border-left: 3px solid #edf0f0;
}
#wrapper.enlarged .left.side-menu #sidebar-menu ul ul li > a span.pull-right {
  position: absolute;
  right: 20px;
  top: 12px;
  -ms-transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
}
#wrapper.enlarged .left.side-menu #sidebar-menu ul > li > a span {
  display: none;
  padding-left: 10px;
}

#wrapper.enlarged .left.side-menu #sidebar-menu ul > li:hover > a {
  width: 240px;
  position: relative;
}
#wrapper.enlarged .left.side-menu #sidebar-menu ul > li {
  position: relative;
}
#wrapper.enlarged .left.side-menu #sidebar-menu ul > li:hover a span {
  display: inline;
}
/* Leftbar Profile */
#wrapper.enlarged .left.side-menu .user-details {
  display: none;
}
#wrapper.enlarged .left.side-menu {
  padding-top: 80px;
}
.user-details {
  position: relative;
  min-height: 80px;
  padding: 20px;
}
.user-details img {
  position: relative;
  z-index: 9999;
}
.user-details .user-info {
  margin-left: 60px;
  z-index: 99999;
  position: relative;
  color: #444;
}
.user-details .user-info a.dropdown-toggle {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #666;
  font-size: 16px;
  padding-top: 5px;
  display: block;
}
#wrapper.right-bar-enabled .right-bar {
  right: 0;
}
#wrapper.right-bar-enabled .left-layout {
  left: 0;
}
.side-bar.right-bar {
  float: right !important;
  right: -266px;
  top: 70px;
}
.side-bar {
  position: fixed;
  height: 100%;
  width: 240px;
  background-color: #ffffff;
  display: block;
  float: left;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
  overflow-y: auto;
}

</style>
