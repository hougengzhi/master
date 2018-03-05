<template>
<div class="row">
  <div class="col-md-12">
    <div class="panel panel-default">
      <div class="panel-heading head-border"> 组织结构 </div>
      <div class="panel-body">
        <div class="col-sm-12">
          <ul class="nav nav-tabs">
            <li class="active">
              <a href="#department-management">
                <span class="visible-xs"><i class="fa fa-home"></i></span>
                <span class="hidden-xs"> 组织结构 </span>
              </a>
            </li>
            <li class="">
              <a href="#department-column-definition" data-toggle="tab">
                <span class="visible-xs"><i class="fa fa-cog"></i></span>
                <span class="hidden-xs">自定义字段</span>
              </a>
            </li>
          </ul>
          <div class="tab-content  p-0 m-t-15">
            <div class="tab-pane active" id="department-management">
              <div class="ng-scope">
                <div class="hdbox ng-scope">
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="user-list" :style="{overflow: 'auto', height: '739px'}" id="treeArea">
                        <!-- begin 组织结构的树形 -->
                        <!-- <tree-view tree-data="departments" text-field="name" value-field="id" class="ng-isolate-scope"> -->
                          <div class="tree tree-plus-minus tree-solid-line tree-unselectable" id="department-tree">
                            <div class="tree-item tree-selected ng-isolate-scope">
                              <i class="glyphicon glyphicon-home">
                              </i>
                              <div class="tree-item-name allname ng-binding">
                              </div>
                            </div>
                          </div>
                        <!-- </tree-view> -->
                        <!-- end 组织结构的属性 -->
                      </div>
                    </div>
                    <div class="col-sm-9">
                      <div class="border-right border-left" id="rightArea" :style="{height: '730px'}">
                        <div class="tabcon1">
                          <div class="border-bottom p15">
                            <button type="button" class="btn btn-default waves-effect waves-light hide">
                              <i class="glyphicon glyphicon-trash"></i>删除
                            </button>
                            <button type="button" class="btn btn-default waves-effect waves-light">
                              <i class="glyphicon glyphicon-plus">
                              </i>
                              创建分部
                            </button>
                            <button type="button" class="btn btn-default waves-effect waves-light hide">
                              <i class="glyphicon glyphicon-plus"></i>
                              创建部门
                            </button>
                          </div>
                          <form class="form-horizontal m-t-20 p15" id="formEditDpt" name="edit_department_form">
                            <div class="form-group form-group-sm">
                              <label class="col-sm-5 control-label col-md-3 hide">
                                部门编码
                                <span class="text-danger middle p-r-10">
                                  *
                                </span>
                              </label>
                              <label class="col-sm-5 control-label col-md-3">
                                分部编码
                                <span class="text-danger middle p-r-10">
                                  *
                                </span>
                              </label>
                              <div class="col-sm-6 col-md-6">
                                <input type="text">
                                <div class="error ng-active hide">
                                  <div class="ng-scope">
                                    必填
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form-group form-group-sm">
                              <label class="col-sm-5 col-md-3 control-label hide">
                                部门名称
                                <span class="text-danger middle p-r-10">
                                  *
                                </span>
                              </label>
                              <label class="col-sm-5 col-md-3 control-label">
                                分部名称
                                <span class="text-danger middle p-r-10">
                                  *
                                </span>
                              </label>
                              <div class="col-sm-6 col-md-6">
                                <input type="text" name="name"
                                class="form-control input-sm"
                                placeholder="">
                                <div class="error ng-active hide">
                                  <div>
                                    必填
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form-group form-group-sm">
                              <label class="col-sm-5 col-md-3 control-label hide">
                                部门简称
                              </label>
                              <label class="col-sm-5 col-md-3 control-label">
                                分部简称
                              </label>
                              <div class="col-sm-6 col-md-6">
                                <input type="text" name="simple_name" class="form-control input-sm">
                                <div class="error inactive hide">
                                </div>
                              </div>
                            </div>
                            <div class="form-group form-group-sm">
                              <label class="col-sm-5 control-label col-md-3">
                                显示顺序
                                <span class="text-danger middle p-r-10">
                                  *
                                </span>
                              </label>
                              <div class="col-sm-6 col-md-6">
                                <input type="number" name="view_order"
                                class="form-control input-sm">
                                <div class="error active hide">
                                  <div class="ng-scope">
                                    必填
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- 部门的上级只能是分部或部门 -->
                            <!-- 分部的上级只能是分部或总部门 -->
                            <!-- 部门/分部的显示 end -->
                            <!-- 自定义字段 start -->
                            <div class="form-group form-group-sm">
                              <label class="col-sm-5 control-label col-md-3">
                                描述
                              </label>
                              <div class="col-sm-6 col-md-6">
                                <textarea name="description" class="form-control input-sm" placeholder="">
                                </textarea>
                                <div class="error inactive hide">
                                </div>
                              </div>
                            </div>
                            <!--根据部门类型显示所需字段-->
                            <div class="form-group m-b-0">
                              <div class="col-sm-offset-2 col-sm-9">
                                <button type="submit" class="btn btn-default waves-effect waves-light" disabled>
                                  <i class="fa fa-save"></i>
                                  保存
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane " id="department-column-definition">
              <div class="ng-scope">
                <div class="hbox ng-scope">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a href="#dptAllCol" data-toggle="tab" aria-expanded="false">
                        <span class="visible-xs">
                          <i class="fa fa-home">
                          </i>
                        </span>
                        <span class="hidden-xs">
                          全部字段
                        </span>
                      </a>
                    </li>
                    <li class="">
                      <a href="#brdptCol" data-toggle="tab" aria-expanded="false">
                        <span class="visible-xs">
                          <i class="fa fa-cog">
                          </i>
                        </span>
                        <span class="hidden-xs">
                          分部字段
                        </span>
                      </a>
                    </li>
                    <li class="">
                      <a href="#dptCol">
                        <span class="visible-xs">
                          <i class="fa fa-cog">
                          </i>
                        </span>
                        <span class="hidden-xs">
                          部门字段
                        </span>
                      </a>
                    </li>
                  </ul>
                  <!-- tab-content start -->
                  <div class="tab-content  p-0 m-t-15">
                    <!-- 全部字段 -->
                    <div class="tab-pane active" id="dptAllCol">
                      <button type="button" class="btn btn-default waves-effect waves-light">
                        <i class="ion-plus">
                        </i>
                        添加字段
                      </button>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>
                              字段名称
                            </th>
                            <th>
                              字段描述
                            </th>
                            <th>
                              字段类型
                            </th>
                            <th :style="{width:'8em'}">
                              显示顺序
                            </th>
                            <th :style="{width:'4em'}">
                              必填
                            </th>
                            <th :style="{width:'4em'}">
                              常用
                            </th>
                            <th :style="{width:'4em'}">
                              可见
                            </th>
                            <th :style="{width:'4em'}">
                              状态
                            </th>
                            <th :style="{width:'12em'}">
                              操作
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>
                    <!-- /全部字段 -->
                    <!-- 分部字段 -->
                    <div class="tab-pane " id="brdptCol">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>
                              字段名称
                            </th>
                            <th>
                              字段描述
                            </th>
                            <th>
                              字段类型
                            </th>
                            <th :style="{width:'8em'}">
                              显示顺序
                            </th>
                            <th :style="{width:'4em'}">
                              必填
                            </th>
                            <th :style="{width:'4em'}">
                              常用
                            </th>
                            <th :style="{width:'4em'}">
                              可见
                            </th>
                            <th :style="{width:'4em'}">
                              状态
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>
                    <!-- /分部字段 -->
                    <!-- 部门字段 -->
                    <div class="tab-pane " id="dptCol">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>字段名称</th>
                            <th>字段描述</th>
                            <th>字段类型</th>
                            <th :style="{width:'8em'}">
                              显示顺序
                            </th>
                            <th :style="{width:'4em'}">
                              必填
                            </th>
                            <th :style="{width:'4em'}">
                              常用
                            </th>
                            <th :style="{width:'4em'}">
                              可见
                            </th>
                            <th :style="{width:'4em'}">
                              状态
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
.tree:before { top: 22px !important; }
.border-left {
  border-left: 1px solid #e4e4e4;
}
.border-bottom {
  border-bottom: 1px solid #e4e4e4 !important;
}
.p15 {
  padding: 10px 15px;
}
</style>
