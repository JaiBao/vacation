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
  <section>
    <h3>最新消息</h3>
    <div id="info2" class="row q-px-xl">
      <div class="col-md-4 col-xs-12" >
        <q-img ratio="1"
          src=""
        />
      </div>
      <div class="col-md-4 col-xs-12 text-center justify-center items-center">

      </div>
      <div class="col-md-4 col-xs-12">
        <q-img ratio="1"
          src=""
        />
      </div>
    </div>
  </section>
  <q-row class="q-mt-xs">
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide
        :name="1"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMypq_c0FOdGalrjULvQPRUPJsqvTsyBuUiVVZjdFLJ0hmHDVdpWpYAANmwwXmAQN5umo&usqp=CAU"
      />

      <q-carousel-slide
        :name="2"
        img-src="https://storage.googleapis.com/www-cw-com-tw/article/202108/purchase-reauisition-61233783eed9b.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqNlLc_3IytMSSHmQaEzpvyIQurKVZAJ9wuTirVitB689ftrvaG2NIegcA8gMhux5Pqsc&usqp=CAU"
      /> -->
    </q-carousel>
  </q-row>
  <div id="info" class="row q-mb-md text-center justify-center items-center">
    <div class="col-md-3 col-xs-11">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <q-img ratio="1" class="col-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5arjrRWJknJ60gFnURUNSpE2qrYW4q0L8g&usqp=CAU" />
          <q-card-section>
            <h4>春及連續假期</h4>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-md-3 col-xs-11">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <q-img  class="col-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREizETBt5aZfpbQes69NeB4qXx8oHLk8F50S_ylHOIeqjdfBHOKC6sSFNYHvAOWNFYico&usqp=CAU" />
          <q-card-section>
            <h4>勞動節連假</h4>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-md-3 col-xs-11">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <q-img class="col-5"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIInz9tBkmzOFtEKRnoxvO3E7z2GsF0eA2xr5ofqQOV_t-3UuJK4iQ25LkD_kghV8KtE&usqp=CAU" />
          <q-card-section>
            <h4>勞動節活動</h4>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-md-3 col-xs-11">
      <q-card class="my-card" >
        <q-card-section>
          <q-img ratio="1" class="col-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMgF0LxTO058duTlj2UFpz3NFGCWixNd2VT2Epx1ZhRrf7t-7CSGhD7RVonIuQA4inKg&usqp=CAU" />
          <q-card-section>
            <h4>51粉絲活動</h4>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)

</script>

<style lang="scss">
q-parallax{
  width: 100vw;
  height: 100vh;
}
q-row {
  width: 100vw;
  flex-wrap: nowrap;
  display: flex;
  flex-direction: row;
}
#info {
  width: 100vw;
  img {
    max-width: 100%;
  }
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
  width: 100vw;
  padding: 20px 10px;
}
.q-table__container {
  min-width: 75%;
  max-width: 100%;
}
.q-carousel {
  width: 100%;
}
#info {
  .q-img {
    object-fit: cover;
    border: 1px solid rgb(13, 13, 13);
  }
}
</style>
