<template>
  <div class="column justify-center items-center q-mt-md">
    <q-avatar size="200px" color="secondary" text-color="white" class="q-mb-xl"  >
      <img src='https://source.boringavatars.com/beam/256/$%7B${{user.name}}colors=ffabab,ffdaab,ddffab,abe4ff,d9abff'>
    </q-avatar>

    <q-form @submit="onSubmit"  class="q-gutter-md text-center">
        <q-input
          outlined
          type="text"
          v-model="form.name"
          label="姓名"
          hint="請輸入姓名"
          lazy-rules

        />
        <q-input
          outlined
          type="text"
          v-model="form.account"
          label="帳號"
          hint="請輸入帳號"
          lazy-rules

        />
        <q-input
          outlined
          type="password"
          v-model="form.password"
          label="密碼"
          hint="請輸入密碼"
          lazy-rules

        />
        <q-input
          outlined
          type="tel"
          v-model="form.phone"
          label="手機"
          hint="請輸入手機號碼"
          lazy-rules

        />
        <div>
          <!-- <q-btn label="儲存" type="submit" color="primary" /> -->
        </div>
      </q-form>
  </div>
</template>

<script setup>
// import { useUserStore } from '@/stores/user'
import { reactive } from 'vue'
import { useUserStore } from 'src/stores/user'

const user = useUserStore()
const form = reactive({
  name: user.name,
  account: user.account,
  password: '',
  phone: '0' + user.phone
})

</script>

<style lang="scss">
.q-form{
width: 75%;

}
</style>
