<template>

<div class="q-pa-md text-right">
    <q-table
      title="會員管理"
      :rows="rows"
      :columns="columns"
      row-key="id"
      selection="single"
      v-model:selected="selected"
    >
    <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <q-avatar>
<q-img :src="`https://source.boringavatars.com/beam/${props.row.name}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`"/></q-avatar>
        </q-td>
      </template>
    </q-table>
    <q-btn
    v-if="selected[0]"
  icon="edit_note"
   color="info"
   label="編輯"
   @click="UserEdit=true"
                />
    <q-btn
    v-if="selected[0]"
    icon="delete"
    color="red"
    label="刪除"
    @click="delete1"></q-btn>
  </div>
  <!-- -------------------------------- -->
  <q-dialog v-model="UserEdit" persistent >
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">會員id</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input outline  v-model="selected[0].id" readonly />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">姓名</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input outline type="text" v-model="selected[0].name" />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">帳號</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input outline type="text" v-model="selected[0].account" />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">密碼</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input outline type="password" v-model="selected[0].password" />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">手機</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input outline type="text" v-model="selected[0].phone" />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">角色:管理員:1 使用者:0</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input outline type="text" v-model="selected[0].role" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="取消" v-close-popup />
        <q-btn flat label="更改" v-close-popup @click="edit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
      <!-- ------------------------ -->
</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useQuasar } from 'quasar'
// import { useUserStore } from 'src/stores/user'

const $q = useQuasar()
// const user = useUserStore()
const selected = ref([])
const UserEdit = ref(false)
// ----------------------------------------
// const accountForm = reactive({
//   _id: '',
//   email: '',
//   phone: '',
//   name: '',
//   password: '',
//   confirmPassword: '',
//   isPwd: true,
//   isConfirmPwd: true,
//   dialog: false,
//   loading: false
// })

// const rules = {
//   email (email) {
//     return user.isEmail(email) || '信箱格式錯誤'
//   },
//   phone (phone) {
//     return user.isMobilePhone(phone, 'zh-TW') || '手機號碼格式錯誤'
//   },
//   required (value) {
//     return (value && value.length > 0) || '欄位必填'
//   },
//   length (value) {
//     return (
//       (value.length >= 4 && value.length <= 12) || '長度必須為 4 ~ 12 個字'
//     )
//   },
//   name (value) {
//     return (
//       (value.length >= 1 && value.length <= 12) || '長度必須為 1 ~ 12 個字'
//     )
//   },
//   confirmPassword (value) {
//     return value === accountForm.password || '密碼不一致'
//   }
// }
// const openDialog = (index) => {
//   const idx = result.data.message.findIndex((account) => {
//     return account._id === index
//   })

//   if (index === -1) {
//     accountForm._id = ''
//     accountForm.email = ''
//     accountForm.phone = ''
//     accountForm.name = ''
//     accountForm.password = ''
//     accountForm.confirmPassword = ''
//     accountForm.loading = false
//     accountForm.index = -1
//   } else {
//     accountForm._id = result.data.message[i]._id
//     accountForm.email = result.data.message[i].email
//     accountForm.phone = result.data.message[i].phone
//     accountForm.name = result.data.message[i].name
//     accountForm.password = result.data.message[i].password
//     accountForm.loading = false
//     accountForm.index = idx
//   }
//   accountForm.dialog = true
// }

// const onSubmit = async () => {
//   if (accountForm._id === '') {
//     await register({
//       email: accountForm.email,
//       phone: accountForm.phone,
//       name: accountForm.name,
//       password: accountForm.password
//     })
//   } else {
//     await editUser({
//       _id: accountForm._id,
//       email: accountForm.email,
//       phone: accountForm.phone,
//       name: accountForm.name,
//       password: accountForm.password
//     })
//   }

//   accountForm.dialog = false
// }
// const editUser = async (form) => {
//   try {
//     const { data } = await apiAuth.patch('/users/edituser', form)
//     $q.notify({
//       message: '修改成功',
//       textColor: 'primary',
//       icon: 'mdi-emoticon-happy-outline',
//       color: 'white'
//     })
//   } catch (error) {
//     $q.notify({
//       message: '資料取得失敗',
//       textColor: 'secondary',
//       color: 'white',
//       icon: 'mdi-emoticon-dead-outline',
//       caption: error?.response?.data?.message || '發生錯誤'
//     })
//   }
// }
// ------------------------------------
const columns = [
  {
    name: 'id',
    required: true,
    label: '會員id',
    align: 'left',
    field: 'id',
    sortable: true
  },
  {
    name: 'name',
    align: 'left',
    label: '姓名',
    field: 'name',
    sortable: true
  },
  {
    name: 'account',
    align: 'left',
    label: '姓名',
    field: 'account',
    sortable: true
  },
  {
    name: 'phone',
    label: '電話',
    field: 'phone',
    sortable: true
  }, {
    name: 'role',
    label: '角色',
    field: 'role',
    sortable: true
  }
]

const rows = reactive([])

const getuser = async () => {
  try {
    const result = await apiAuth.get('/users/all')
    console.log(result.data.message)
    let i = 0
    for (i = 0; i < result.data.message.length; i++) {
      rows.push({
        name: result.data.message[i].name,
        account: result.data.message[i].account,
        phone: result.data.message[i].phone,
        id: result.data.message[i]._id,
        role: result.data.message[i].role

      })
    }
  } catch (error) {
    console.log(error)
  }
}

getuser()

const delete1 = async () => {
  const result = await apiAuth.delete(`/users/delete/${selected.value[0]?.id}`)
  console.log(result)
  rows.splice(0, rows.length)
  getuser()
}

const edit = async () => {
  try {
    console.log(selected?.value[0])
    await apiAuth.patch(`/users/admin/${selected.value[0]?.id}`, selected.value[0])
    await $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '修改成功'
    })
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'info',
      message: error.message
    })
  }
}

</script>
