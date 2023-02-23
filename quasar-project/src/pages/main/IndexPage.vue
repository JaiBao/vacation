<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">

    <q-parallax
      src="https://storage.googleapis.com/www-cw-com-tw/article/202108/purchase-reauisition-61233783eed9b.jpg"
    >
      <!-- <h1 class="text-white">Basic</h1> -->
    </q-parallax>

    </div>
  </div>
  <section style="display: flex; flex-direction: row; height: 100%;">
  <div style="flex-grow: 1;">
    <q-table
      title="最新消息"
      :rows="bulletins"
      :columns="columns"
      row-key="name"
      style="height: 100%;"
    />
  </div>
  <div style="flex-grow: 1;">
    <q-row class="q-mt-xs" style="height: 100%;">
      <q-carousel animated v-model="slide" arrows navigation infinite style="height: 100%;">
        <q-carousel-slide
          :name="1"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSclV36OWEK_hHOdqYJRM0ZRZpiDs9oZf-2Pw&usqp=CAU"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://storage.googleapis.com/www-cw-com-tw/article/202108/purchase-reauisition-61233783eed9b.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqNlLc_3IytMSSHmQaEzpvyIQurKVZAJ9wuTirVitB689ftrvaG2NIegcA8gMhux5Pqsc&usqp=CAU"
        />
      </q-carousel>
    </q-row>
  </div>
</section>

    <div id="info" class="row q-mb-md text-center justify-center items-center">
      <div class="col-md-3 ">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <q-img ratio="1" class="col-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5arjrRWJknJ60gFnURUNSpE2qrYW4q0L8g&usqp=CAU" />
            <q-card-section>
              <h4>春及連續假期</h4>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 ">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <q-img  class="col-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREizETBt5aZfpbQes69NeB4qXx8oHLk8F50S_ylHOIeqjdfBHOKC6sSFNYHvAOWNFYico&usqp=CAU" />
            <q-card-section>
              <h4>勞動節連假</h4>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 ">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <q-img class="col-5"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIInz9tBkmzOFtEKRnoxvO3E7z2GsF0eA2xr5ofqQOV_t-3UuJK4iQ25LkD_kghV8KtE&usqp=CAU" />
            <q-card-section>
              <h4>勞動節活動</h4>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 ">
        <q-card class="my-card" flat bordered  >
          <q-card-section>
            <q-img ratio="1" class="col-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDOvaAcRyNVYK9BMDQYJUeAP04V_fCXNdpg&usqp=CAU" />
            <q-card-section>
              <h4>228休假</h4>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>

</template>

<script setup>
import { ref, reactive } from 'vue'
import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'

const slide = ref(1)
const $q = useQuasar()
const columns = [
  { name: 'title', align: 'left', label: '標題', field: 'title' },
  { name: 'content', align: 'left', label: '內容', field: 'content' },
  { name: 'startDate', align: 'center', label: '發布日期', field: 'startDate' },
  { name: 'endDate', align: 'center', label: '截止日期', field: 'endDate' }

]
const bulletins = reactive([])

const getBulletins = async () => {
  try {
    const data = await api.get('/bulletin')
    console.log(data)
    let i = 0
    for (i = 0; i < data.data.result.length; i++) {
      bulletins.push({
        startDate: data.data.result[i].startDate,
        endDate: data.data.result[i].endDate,
        title: data.data.result[i].title,
        content: data.data.result[i].content

      })
    }
  } catch (error) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'cloud_off',
      message: error.message
    })
  }
}
getBulletins()
</script>

<style lang="scss">
q-parallax{
  width: 100vw;
  height: 100vh;
}
// q-row {
//   width: 100vw;
//   flex-wrap: nowrap;
//   display: flex;
//   flex-direction: row;
// }
#info {
  // width: 100vw;
  // img {
  //   max-width: 100%;

  // }
  max-width: 100vw;
  margin: 0 auto;
}
#info2 {
  min-height: 40vh;
  max-height: 200vh;
  width: 100vw;
  img {
    width: 100%;
    height: 100%;
  }
}
section {
  background: #eee;
  // width: 100vw;
  // padding: 20px 10px;
}
// .q-table__container {
//   min-width: 50%;
//   max-width: 50%;
//   height: 100%;
// }
.q-carousel {
  img {
    max-width: 100%;
    ; max-height: 100%;
    object-fit: contain

  }
}
#info {
  .q-img {
    object-fit: cover;
    border: 1px solid rgb(13, 13, 13);
  }
}
.q-parallax{
  width: 100vw;
}

</style>
