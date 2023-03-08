import router from './router/router.js'
import Menu from './components/Menu.js'
import router2 from './router/router2.js'


const app = Vue.createApp({})
app.use(router)
app.mount('#app')

const app2 = Vue.createApp(Menu)
app2.mount('#container-2')

