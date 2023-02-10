<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>

            <!-- <q-icon name="update" size="40px"/> -->

          <q-btn flat  to="/" size="lg" style="font-size:30px" >
            <img src="src/assets/A(60).png" style="width:120px;height: 120px;">出缺勤管理系統雲 </q-btn>
        </q-toolbar-title>

        <q-tabs class="gt-sm" v-model="tab">
          <q-route-tab v-if="login=false" name="login" label="會員登入" to="/" />

        </q-tabs>

        <q-btn
        outline
          class="gt-sm q-mx-10"
          color="primary"
          to="/login"
          text-color="white"
          label="登入/註冊"
          name="login"
        />

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" elevated>
      <!-- drawer content -->
      <div class="q-pa-md" style="max-width: 250px">
    <q-list bordered padding class="rounded-borders text-primary">
      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>

        <q-item-section>Inbox</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'outbox'"
        @click="link = 'outbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section>Outbox</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'trash'"
        @click="link = 'trash'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="delete" />
        </q-item-section>

        <q-item-section>Trash</q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item
        clickable
        v-ripple
        :active="link === 'settings'"
        @click="link = 'settings'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>

        <q-item-section>Settings</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="help" />
        </q-item-section>

        <q-item-section>Help</q-item-section>
      </q-item>
    </q-list>
  </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer id="footer" class="column justify-center items-center bg-grey-8  text-white">
   <p>2023</p>

  </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/articles'
const user = useUserStore()
const tab = ref('top')
const rightDrawerOpen = ref(false)
user.getAllArticles()

function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

</script>

<style>
.q-toolbar {
  height: 7vh;
}
</style>
