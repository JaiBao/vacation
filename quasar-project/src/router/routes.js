import AdminLayout from 'layouts/AdminLayout.vue'
import MainLayout from 'layouts/MainLayout.vue'
import UserLayout from 'layouts/UserLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('src/pages/main/IndexPage.vue'),
        meta: {
          title: '出勤系統',
          login: false,
          admin: false
        }
      },
      {
        path: 'intro',
        name: 'intro',
        component: () => import('src/pages/main/IntroPage.vue'),
        meta: {
          title: '',
          login: false,
          admin: false
        }
      },

      {
        path: '/login',
        component: () => import('src/pages/main/LoginPage.vue'),
        meta: {
          title: '登入',
          login: false,
          admin: false
        }
      }, {
        path: '/register',
        component: () => import('src/pages/main/RegisterPage.vue'),
        meta: {
          title: '註冊',
          login: false,
          admin: false
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('src/pages/ErrorNotFound.vue'),
        meta: {
          title: '出勤系統|404'
        }
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'all',
        redirect: '/404'
      }
    ]
  },

  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '/admin',
        component: () => import('pages/admin/AdminPage.vue'),
        meta: {
          title: '管理員',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/user',
        component: () => import('pages/admin/UserAdmin.vue'),
        meta: {
          title: '會員管理',
          login: true,
          admin: true
        }
      }
    ]
  },
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/user',
        component: () => import('pages/user/UserPage.vue'),
        meta: {
          title: '會員資料',
          login: true,
          admin: false
        }
      },
      {
        path: '/user/edit',
        component: () => import('pages/user/EditPage.vue'),
        meta: {
          title: '編輯會員',
          login: true,
          admin: false
        }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
