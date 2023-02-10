<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-black text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="src/assets/休假2.png">
          </q-avatar>
          出勤系統
        </q-toolbar-title>
        <q-span>
          歡迎{{user.name}}1231312
        </q-span>

      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="200"
        :breakpoint="400"
        bordered
        class="bg-grey-1"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item :to="menuItem.a" clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section >
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>

<div id="app" >
  <div >當前時間：{{nowDay}}{{nowTime}}</div>

</div>
        </q-toolbar-title>
        <q-btn
          color="red"
          @click="logout"
          label="登出"
          icon="logout"
          rounded
        />
        <q-btn
        label="首頁" type="button" color="primary"
        icon="home"
        to="/"
        rounded/>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/user'
import { useRouter } from 'vue-router'

// export default {
//   data () {
//     return {
//       nowDay: '',
//       nowTime: ''
//     }
//   }

//    {
//     timeFormate (timeStamp) {
//       const newdate = new Date(timeStamp)
//       const week = ['日', '一', '二', '三', '四', '五', '六']

//       const year = newdate.getFullYear()
//       const month = newdate.getMonth() + 1 < 10 ? '0' + (newdate.getMonth() + 1) : newdate.getMonth() + 1
//       const date = newdate.getDate() < 10 ? '0' + newdate.getDate() : newdate.getDate()
//       const hh = newdate.getHours() < 10 ? '0' + newdate.getHours() : newdate.getHours()
//       const mm = newdate.getMinutes() < 10 ? '0' + newdate.getMinutes() : newdate.getMinutes()
//       const ss = newdate.getSeconds() < 10 ? '0' + newdate.getSeconds() : newdate.getSeconds()

//       this.nowTime = hh + ':' + mm + ':' + ss
//       this.nowDay = year + '年' + month + '月' + date + '日'
//     },
//     nowTimes () {
//       const self = this
//       self.timeFormate(new Date())
//       setInterval(() => {
//         self.timeFormate(new Date())
//       }, 1000)
//     }
//   },
//   created () {
//     this.nowTimes()
//   }
// }

const user = useUserStore()

const router = useRouter()
const drawer = ref(false)
const miniState = ref(true)
function toggleLeftDrawer () {
  drawer.value = !drawer.value
}

const logout = async () => {
  await user.logout()
  router.push('/')
}
const menuList = [
  {
    icon: 'date_range',
    label: '行事曆',
    separator: false,
    a: '/admin'
  }, {
    icon: 'account_circle',
    label: '使用者資料',
    separator: false,
    a: '/admin/edit'
  },
  {
    icon: 'manage_accounts',
    label: '會員管理',
    separator: false,
    a: '/admin/user'
  },
  {
    icon: 'edit_document',
    label: '休假申請',
    separator: false,
    a: '/admin/reserve'
  },
  {
    icon: 'manage_history',
    label: '假單管理',
    separator: false,
    a: '/admin/article'
  },
  {
    icon: 'free_cancellation',
    label: '休假審核',
    separator: false,
    a: '/admin/limit'
  }

]

</script>

<style>
#app{
    font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(#7BD08D, 1),
                 0 0 20px rgba(#7BD08D, 0);
}
</style>
