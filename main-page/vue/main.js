import router from './router/router.js'
import Menu from './components/Menu.js'


const app = Vue.createApp({
    data() {
        return {
            active: null,
            showMain: true,
            showElse: false
        }
    },
    methods: {
        checkDisplay() {
            if (window.innerHeight > 600) {
                this.active = true
            } else {
                this.active = false
            }
        },

        switchDisplay() {
            this.showMain = false
            this.showElse = true
        }
    },
    computed: {
        check() {
            if (window.innerWidth < 600) return false
            return true
        }
    }
})
app.use(router)
app.mount('#app')

const app2 = Vue.createApp(Menu)
app2.mount('#container-2')

export default {
    name: 'main',
    data() {
        return {
            active: true
        }
    },
    methods: {
        checkDisplay() {
            if (window.innerHeight < 600) {
                this.active = false
            } else {
                this.active = true
            }
        },
    },
    mounted() {
        // this.checkDisplay()
    }
}