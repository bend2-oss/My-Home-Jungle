import Savearticles from "./Savearticles.js"

export default {
    components: {
        Savearticles
    },
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
                        <router-link to="/account.html/save" class="link"><button class="account-save_button">Растения</button></router-link>
                        <router-link to="/account.html/save/saveinterior" class="link"><button class="account-save_button">Интерьеры</button></router-link>
                        <router-link to="/account.html/save/savearticles" class="link"><button class="account-save_button">Статьи</button></router-link>
                        <router-link to="/account.html/save/savecommunity" class="link"><button class="account-save_button">Сообщество</button></router-link>
                    </div>
    
                    <div class="info2">
                        <router-view></router-view>
                    </div>

                </div>
    </div>
    
    
    
    
    `
}


