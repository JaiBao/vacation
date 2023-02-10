<template>
  <h3>如何到達</h3>
  <div class="row justify-center gt-sm q-pa-md" style="width: 100vw">
    <div class="col" style="max-width: 100%; min-width: 60%">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5736977893575!2d121.42544693219492!3d25.048537388606263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7c8a31768a7%3A0x49399b4f4a4ea003!2zMjQz5paw5YyX5biC5rOw5bGx5Y2AMTA357ij6YGTMjM3LTIwOQ!5e0!3m2!1szh-TW!2stw!4v1675383785832!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="col" style="width: 100%">
      <div class="q-gutter-y-md">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="car" label="汽車"></q-tab>
            <q-tab name="walk" label="步行"></q-tab>
            <q-tab name="trans" label="大眾運輸"></q-tab>
          </q-tabs>

          <q-separator></q-separator>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="car">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="walk">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="trans">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </div>
  <div
    class="column justify-center items-center lt-md q-pa-md"
    style="width: 100vw"
  >
    <div
      class="col"
      style="max-width: 100%; min-width: 50%; margin-bottom: 3rem"
    >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5736977893575!2d121.42544693219492!3d25.048537388606263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7c8a31768a7%3A0x49399b4f4a4ea003!2zMjQz5paw5YyX5biC5rOw5bGx5Y2AMTA357ij6YGTMjM3LTIwOQ!5e0!3m2!1szh-TW!2stw!4v1675383785832!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="col" style="width: 75%">
      <div class="q-gutter-y-md">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="car" label="汽車"></q-tab>
            <q-tab name="walk" label="步行"></q-tab>
            <q-tab name="trans" label="大眾運輸"></q-tab>
          </q-tabs>

          <q-separator></q-separator>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="car">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="walk">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="trans">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </div>
  <q-row class="text-center justify-center items-center">
    <p>地址:新北市泰山區明志路三段887號 </p>
</q-row>
</template>

<script setup>
import 'src/css/app.scss'
import { ref } from 'vue'
const tab = ref('mails')
</script>

<style lang="scss">
#footer{
  border-top: 5px solid $secondary;
  }
  .q-row{
  width: 100vw;
  }
</style>
