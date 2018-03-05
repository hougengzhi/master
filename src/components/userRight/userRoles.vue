<template>
<div class="row">
  <div class="col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">
          角色管理
        </h3>
      </div>
      <div class="panel-body">
        <div class="hdbox">
          <div class="col w con-left-sider">
            <input class="form-control pristine untouched valid" value="" placeholder="输入角色名进行查询">
            <ul class="p-0"></ul>
          </div>
          <div class="border-right  border-left m-h-500 p15">
            <div class="row">
              <h3 class="ng-binding">
              </h3>
            </div>
            <button type="button" class="btn btn-default waves-effect waves-light m-t-10">
              <i class="glyphicon glyphicon-plus"></i>
              添加角色
            </button>
            <button type="button" class="btn btn-default waves-effect waves-light m-t-10" disabled>
              <i class="glyphicon glyphicon-edit"></i>
              编辑角色
            </button>
            <button type="button" class="btn btn-default waves-effect waves-light m-t-10" disabled>
              <i class="fa fa-copy"></i>
              复制角色
            </button>
            <button type="button" class="btn btn-default waves-effect waves-light m-t-10" disabled>
              <i class="glyphicon glyphicon-trash"></i>
              删除角色
            </button>
            <br>
            <br>
          </div>
        </div>
      </div>
    </div>
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
.hdbox {
  display: table;
  width: 100%;
  height: 100%;
  border-spacing: 0;
  table-layout: fixed;
}
.col {
  display: table-cell;
  float: none;
  height: 100%;
  vertical-align: top;
}
.w {
  width: 200px;
}
.border-left {
  border-left: 1px solid #e4e4e4; 
}
.m-h-500 {
  min-height: 500px;
}
.p15 {
  padding: 10px 15px;
}
</style>
