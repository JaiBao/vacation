<template>

<div class="q-pa-md">
    <q-table
      title="會員管理"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left"><q-btn label="刪除"/></div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script setup>
const columns = [
  {
    name: 'id',
    required: true,
    label: 'id',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'name', align: 'center', label: 'name', field: 'calories', sortable: true },
  { name: 'phone', label: 'phone', field: 'phone', sortable: true }
]
// const rows = [
//   {
//     name: 'Frozen Yogurt',
//     calories: 159,
//     phone: 6.0
//   },
//   {
//     name: 'Ice cream sandwich',
//     calories: 237,
//     phone: 9.0
//   },
//   {
//     name: 'Eclair',
//     calories: 262,
//     phone: 16.0
//   },
//   {
//     name: 'Cupcake',
//     calories: 305,
//     phone: 3.7
//   },
//   {
//     name: 'Gingerbread',
//     calories: 356,
//     phone: 16.0
//   },
//   {
//     name: 'Jelly bean',
//     calories: 375,
//     phone: 0.0
//   },
//   {
//     name: 'Lollipop',
//     calories: 392,
//     phone: 0.2
//   },
//   {
//     name: 'Honeycomb',
//     calories: 408,
//     phone: 3.2
//   },
//   {
//     name: 'Donut',
//     calories: 452,
//     phone: 25.0
//   },
//   {
//     name: 'KitKat',
//     calories: 518,
//     phone: 26.0
//   }
// ]

// import { apiAuth } from 'src/plugins/axios'
// import { reactive } from 'vue'
// import { useQuasar } from 'quasar'
// const $q = useQuasar()
// const user = reactive([
// ])
// const init = async () => {
//   try {
//     const { data } = await apiAuth.get('/users/all')
//     user.push(data.result)
//     $q.notify({
//       message: 'Jim pinged you.',
//       caption: '5 minutes ago',
//       color: 'secondary'
//     })
//     console.log(user)
//   } catch (error) {
//     $q.notify({
//       message: 'Jim pinged you.',
//       caption: '5 minutes ago',
//       color: 'secondary'
//     })
//   }
// }
</script>
