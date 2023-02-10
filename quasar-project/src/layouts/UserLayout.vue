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
        <q-spacer>
        </q-spacer>
        <q-span>歡迎{{user.name}}</q-span>
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
        :breakpoint="500"
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
                <q-item-section>
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
    <q-footer bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>

          <div>date</div>
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

const router = useRouter()
const drawer = ref(false)
const miniState = ref(true)
const user = useUserStore()

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
    a: '/user'
  },
  {
    icon: 'account_circle',
    label: '使用者資料',
    separator: false,
    a: '/user/edit'
  },
  {
    icon: 'edit_document',
    label: '休假申請',
    separator: false,
    a: '/user/reserve'
  },
  {
    icon: 'manage_search',
    label: '申請查詢',
    separator: false,
    a: '/user/see'
  }

]

</script>
