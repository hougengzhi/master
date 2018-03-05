import Vue from 'vue'
import Router from 'vue-router'
import UserRight from '@/components/userRight/main'
import UserStructure from '@/components/userRight/userStructure'
import UserRoles from '@/components/userRight/userRoles'
import UserUsers from '@/components/userRight/userUsers'
import UserMenus from '@/components/userRight/userMenus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/userRight',
      component: UserRight,
      children: [
        {
          path: 'userStructure',
          component: UserStructure
        },
        {
          path: 'userRoles',
          component: UserRoles
        },
        {
          path: 'userUsers',
          component: UserUsers
        },
        {
          path: 'userMenus',
          component: UserMenus
        }
      ]
    }
  ]
})
