// import router2 from '../router/router2.js'
// const app3 = Vue.createApp({})
// app3.use(router2)
// app3.mount('#app2')

export default {
    // el: '#app2',
    name: 'Save',
    data() {
        return {
            count: 0
        }
    },
    template: `
    
    <div id="app2">
                <div class="account-save_wrapper">
                    <h2 class="account-save_title">Сохраненое</h2>
                    <div class="account-nav_save">
                        <router-link to="/save/saveplants" class="link"><button class="account-save_button">Растения</button></router-link>
                        <router-link to="/save/saveinterior" class="link"><button class="account-save_button">Интерьеры</button></router-link>
                        <router-link to="/save/savearticles" class="link"><button class="account-save_button">Статьи</button></router-link>
                        <router-link to="/save/savecommunity" class="link"><button class="account-save_button">Сообщество</button></router-link>
                    </div>
    
                    <div class="info2">
                        <router-view></router-view>
                    </div>

                </div>
    </div>
    
    
    
    
    `
}


