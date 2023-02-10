import { defineStore } from 'pinia'
import { useQuasar } from 'quasar'
import { reactive, ref } from 'vue' // ref
import { api } from 'src/boot/axios' // apiAuth

export const useUserStore = defineStore(
  'articles',
  () => {
    const articles = reactive({
      date: ref(''),
      title: ref('')
    })
    const $q = useQuasar()

    const getAllArticles = async () => {
      try {
        const { data } = await api.get('/articles')
        articles.date = data.result
        articles.title = data.result
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: '接收成功'
        })
      } catch (error) {
        $q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: error.message
        })
      }
    }
    return {
      articles,
      getAllArticles
    }
  })
