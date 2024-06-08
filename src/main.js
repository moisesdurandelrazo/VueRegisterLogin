import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/js/bootstrap'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(store).use(router).use(vuetify).mount('#app')



