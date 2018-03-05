<template>
<div class="row">
  <div class="col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">
          用户管理
        </h3>
      </div>
      <div class="panel-body">
        <div class="col-sm-12">
          <ul class="nav nav-tabs">
            <li class="active">
              <a href="#user-management">
                <span class="visible-xs">
                  <i class="fa fa-home"></i>
                </span>
                <span class="hidden-xs">
                  用户管理
                </span>
              </a>
            </li>
            <li class="">
              <a href="#user-column-definition">
                <span class="visible-xs">
                  <i class="fa fa-cog"></i>
                </span>
                <span class="hidden-xs">
                  用户字段
                </span>
              </a>
            </li>
          </ul>
          <div class="tab-content p-0 m-t-15">
            <div class="tab-pane active" id="user-management">
              <div>
                <div class="hdbox ng-scope">
                  <div class="row">
                    <div class="col-sm-3" :style="{minWidth:'180px'}">
                      <div class="user-list" :style="{overflow: 'auto', height: '705px'}" id="treeArea">
                        <!-- begin 组织结构的树形 -->
                        <!-- <tree-view tree-data="departments" text-field="name" value-field="id" -->
                        <!-- item-clicked="vm.departmentListClick(item)" class="ng-isolate-scope"> -->
                          <div class="tree tree-plus-minus tree-solid-line tree-unselectable" id="department-tree">
                            <!-- begin 显示公司的名称 -->
                            <div class="tree-item tree-selected ng-isolate-scope" :style="{marginLeft: '-18px'}" role="button">
                              <i class="glyphicon glyphicon-home" :style="{color:'#a6a6a6'}">
                              </i>
                              <div class="tree-item-name allnamebinding"></div>
                            </div>
                            <!-- end 显示公司的名称 -->
                          </div>
                        <!-- </tree-view> -->
                        <!-- end 组织结构的属性 -->
                      </div>
                    </div>
                    <div class="col-sm-9">
                      <div class="border-right  border-left " id="rightArea" :style="{height: '705px'}">
                        <div class="border-bottom p15 clearfix">
                          <div class="pr col-sm-12 p-0 ">
                            <div class="menu-check-s ">
                            <button type="button" class="btn btn-default waves-effect waves-light
                            " @click="showPopWin('add')">添加用户</button>
                            <button type="button" class="btn btn-default waves-effect waves-light
                            " @click="showPopWin('edit')">编辑用户</button>
                            <button type="button" class="btn btn-default waves-effect waves-light
                            " @click="delUser()">删除用户</button>
                            <button type="button" class="btn btn-default waves-effect waves-light
                            ">启用/禁用用户</button>
                            <button type="button" class="btn btn-purple waves-effect waves-light
                            ">分配角色</button>
                            <span class="pull-right"><i class="ion-close" style="cursor:pointer"></i></span>
                            </div>
                            <div class="menu-s-m">
                              <div class="row">
                                <div class="col-sm-12">
                                  <div class="btn-group"></div>
                                </div>
                              </div>
                              <br>
                              <div class="row text-right">
                                <div class="col-sm-5 text-right">
                                  <div class="input-group">
                                    <input type="text" class="form-control" placeholder="请输入账号或用户名进行查询" v-model="search">
                                    <span class="input-group-btn">
                                      <button class="btn btn-default" type="button"
                                      :style="{display: 'inline-block'}" @click="searchName()">
                                        查询
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div class="col-sm-2" :style="{display: 'none'}">
                                  <select class="form-control ng-pristine ng-untouched ng-valid">
                                    <option value="?" selected="selected">
                                    </option>
                                    <option label="全部" value="object:204">
                                      全部
                                    </option>
                                    <option label="在职" value="object:205">
                                      在职
                                    </option>
                                    <option label="离职" value="object:206">
                                      离职
                                    </option>
                                  </select>
                                </div>
                                <div class="col-sm-2">
                                  <button class="btn btn-default">
                                    批量导入
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="p15 table-responsive" id="user-list" :style="{'min-height': '415px'}">
                          <table class="table table-striped" id="user-table">
                            <thead>
                              <tr>
                                <th class="checked">
                                  <input type="checkbox">
                                </th>
                                <!-- <th>用户类型</th> -->
                                <th class="text-center">账号</th>
                                <th class="text-center">姓名</th>
                                <th class="text-center">分部</th>
                                <th class="text-center">部门</th>
                                <th class="text-center">锁定状态</th>
                                <th class="text-center">启用状态</th>
                                <th class="text-center">安全级别</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="user in usersList">
                                <td class="checked"><input type="checkbox" :value="user.id" v-model="selectedUser"></td>
                                <td class="text-center">{{user.loginid}}</td>
                                <td class="text-center">{{user.username}}</td>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                                <td class="text-center">{{user.type ? '是':'否'}}</td>
                                <td class="text-center">{{user.type ? '否':'是'}}</td>
                                <td class="text-center">{{user.securityLevel}}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="row text-right">
                          <ul class="pull-right pagination ng-isolate-scope ng-valid" previous-text="上一页"
                          next-text="下一页" boundary-link-numbers="true" rotate="true" aria-invalid="false">
                            <li class="pagination-prev ng-scope disabled">
                              <a href="" class="ng-binding">
                                上一页
                              </a>
                            </li>
                            <li class="pagination-page ng-scope active">
                              <a href="" class="ng-binding">
                                1
                              </a>
                            </li>
                            <li class="pagination-next ng-scope disabled">
                              <a href="" class="ng-binding">
                                下一页
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane ng-scope" id="user-column-definition">
              <div>
                <div class="border-bottom p15 ng-scope" :style="{display: 'none'}">
                  <div class="row">
                    <div class="col-sm-9">
                      <button type="button" class="btn btn-success waves-effect waves-light">
                        <i class="ion-plus"></i>
                        添加自定义表
                      </button>
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
  <div id="pop" :class="{show:showPop}">
    <div id="popWin" class="modal-content">
      <form id="form1" @submit.prevent="userManage()">
        <div class="modal-header" :style="{cursor: 'move', width: '100%'}">
          <button type="button" class="close" @click="showPop=false">
            <span>×</span>
          </button>
          <h4 class="modal-title">添加角色</h4>
        </div>
        <div class="modal-body row">
          <div class="form-group">
            <label class="col-sm-3 text-right">
              账 号
              <span class="text-danger middle p-r-10">
                *
              </span>
            </label>
            <div class="col-sm-8">
              <input type="text" class="form-control" name="loginid" v-model="loginid" required>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 text-right">
              用户名
              <span class="text-danger middle p-r-10">
                *
              </span>
            </label>
            <div class="col-sm-8">
              <input type="text" class="form-control" name="username" v-model="username" required>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 text-right">
              密 码
              <span class="text-danger middle p-r-10">
                *
              </span>
            </label>
            <div class="col-sm-8">
              <input type="password" class="form-control" name="password1" v-model="password1" required>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 text-right">
              确认密码
              <span class="text-danger middle p-r-10">
                *
              </span>
            </label>
            <div class="col-sm-8">
              <input type="password" class="form-control" name="password2" v-model="password2" required>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="showPop=false">
            <i class="glyphicon glyphicon-remove"></i>
            取消
          </button>
          <button type="submit" class="btn btn-info waves-effect waves-light">
            <i class="glyphicon glyphicon-ok"></i>
            确定
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)
Vue.http.options.headers = {
  'Accept': 'application/json',
  'X-Auth-Token': '2982864e039b43cba26a79755f6bfa04'
}
export default {
  data () {
    return {
      search: '',
      showPop: false,
      type: '',
      username: '',
      loginid: '',
      password1: '',
      password2: '',
      usersList: [],
      usersData: [],
      selectedUser: []
    }
  },
  methods: {
    searchName () {
      this.usersList = this.usersData
      let tmpArr = this.usersList.filter((v) => {
        let re = new RegExp(this.search, 'g')
        return re.test(v.username) || re.test(v.loginid)
      })
      if (this.search) {
        this.usersList = tmpArr
      }
      console.log(this.selectedUser)
    },
    addUser () {
      this.showPop = true
      let username = this.username
      let loginid = this.loginid
      let password1 = this.password1
      let password2 = this.password2
      if (password1 !== password2) {
        alert('两次密码不一致')
        return
      }
      // let str = `?username=${username}&loginid=${loginid}&password=${password1}`
      Vue.http.post('/api/hm_users/new', {}, {
        params: {
          username: username,
          password: password1,
          loginid: loginid
        },
        emulateJSON: true
      })
        .then((res) => {
          console.log(res)
          // this.usersList = res.data
          // this.usersData = res.data
          // console.log(this.usersList.data)
        }, (error) => {
          console.log(error)
        })
    },
    editUser () {
      // console.log(this.username, this.loginid, this.password1)
      Vue.http.put('/api/hm_users/' + this.selectedUser[0], {}, {
        params: {
          username: this.username,
          loginid: this.loginid,
          password: this.password1
        }
      })
        .then((res) => {
          console.log(res)
        }, (error) => {
          console.log(error)
        })
    },
    delUser (id) {
      if (confirm('确定要删除该用户么？')) {
        // this.selectedUser.map((v) => {
        Vue.http.delete('/api/hm_users/' + this.selectedUser[0])
          .then((res) => {
            console.log(res)
            // this.usersList = res.data
            // this.usersData = res.data
            // console.log(this.usersList.data)
          }, (error) => {
            console.log(error)
          })
        // })
      }
    },
    showPopWin (type) {
      this.showPop = true
      this.type = type
      if (type === 'edit') {
        let id = this.selectedUser[0]
        this.usersData.map((v) => {
          console.log(v.id, id)
          if (v.id === id) {
            this.username = v.username
            this.loginid = v.loginid
          }
        })
      }
    },
    userManage () {
      switch (this.type) {
        case 'add':
          this.addUser()
          break
        case 'edit':
          this.editUser()
          break
      }
    }
  },
  created () {
    Vue.http.get('/api/hm_users?filters=%7B%7D&page_size=30')
      .then((res) => {
        console.log(res)
        this.usersList = res.data
        this.usersData = res.data
        console.log(this.usersList)
      }, (error) => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tree:before { top: 22px !important; }
#pop { 
  position: fixed; left: 0; top: 0; width: 100%; height: 100%; 
  background: rgba(0,0,0,.5); z-index: 999; display: none;
}
#pop.show { display: block; }
#popWin {
  width: 400px; height: 300px; background: #fff; margin: auto;
  position: absolute; left: 0; top: 0; right: 0; bottom: 0;
  border: 1px solid #ddd; border-radius: 4px;
}
.modal-body {
  box-sizing: border-box;
}
</style>
