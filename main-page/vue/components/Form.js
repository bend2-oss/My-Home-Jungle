import Modal from './Modal.js'

const form = `<div>
<form class="account-form" @submit.prevent="onSubmit">
    <h2 class="account-form_title">Настройки профиля</h2>

    <div class="account-form_avatar">
        <div><img class="form_avatar_img" src="img/articles/article_1.jpg" alt=""></div>
    
        <div class="form_avatar_edit">
            <label for="add_img" class="check-label">Изменить фото</label>
            <input id="add_img" class="custom-file-input" type="file" placeholder="Загрузить">
        </div>

        <div class="input__wrapper">
            <label for="input__file" class="check-label">Изменить фото</label>
            <input name="file" type="file" id="input__file" class="input input__file" multiple>
            <label for="input__file" class="input__file-button">
            <span class="input__file-icon-wrapper"><img class="input__file-icon" src="vue/img/add-img.svg" alt="Выбрать файл" width="25"></span>
            <span class="input__file-button-text">Выберите файл</span>
            </label>
        </div>
    </div>

    <div class="account-form_first-block">
        <div>
            <div class="name-input">
                <label for="account-form_name" class="check-label" placeholder="Имя">Имя</label>
                <input type="text" id="account-form_name" placeholder="Имя" ref="input_name" v-model="name" >
            </div>
            <div class="surname-div">
                <label for="account-form_surname" class="check-label">Фамилия</label>
                <input type="text" id="account-form_surname" placeholder="Фамилия" ref="input_surname" v-model="surname">
            </div>
        </div>
        <div>
            <p>
                <label for="account-form_date" class="check-label">Дата рождения</label>
                <input type="date" id="account-form_date" ref="input_date" v-model="date">
            </p>
            <p>
                <label for="account-form_gender" class="check-label">Пол</label>
                <!-- <input type="text" id="account-form_gender" placeholder="Фамилия" ref="input_gender"> -->
                <select name="" id="account-form_gender" ref="input_gender">
                    <option value="gender">М/Ж</option>
                    <option value="male">М</option>
                    <option value="female">Ж</option>
                </select>
            </p>
        </div>
    </div>
    <div class="nickname-div">
        <label for="account-form_nickname" class="check-label">Никнейм</label>
        <input type="text" id="account-form_nickname" ref="input_nickname" placeholder="Имя на сайте" v-model="nickname">
    </div>

    <div class="account-form_second-block">
        <div>
            <p>
                <label for="account-form_country" class="check-label">Страна</label>
                <select id="account-form_country" ref="input_country">
                    <option value="country" disable>Страна</option>
                    <option value="russia">Россия</option>
                    <option value="belorussia">Беларусь</option>
                </select>
            </p>

            <p>
                <label for="account-form_city" class="check-label">Город</label>
                <select id="account-form_city" ref="input_city">
                    <option value="city" disable>Город</option>
                    <option value="Moscow">Моска</option>
                    <option value="Piter">Санкт-Петербург</option>
                </select>
            </p>
        </div>

        <div>
            <p>
                <label for="account-form_mail" class="check-label">Электронный адрес</label>
                <input type="email" id="account-form_mail" placeholder="Электронный адрес" ref="input_mail" v-model="mail">
            </p>
            <p>
                <label for="account-form_phone" class="check-label">Телефон</label>
                <input type="number" id="account-form_phone" ref="input_phone" v-model="phone">
            </p>
        </div>
    </div>

    <div class="account-form_submit">
        <button type="submit" class="account-btn_submit"  @click="showModal = true">Сохранить изменения</button>
        <teleport to="body">
        <!-- use the modal component, pass in the prop -->
            <modal :show="showModal" @close="showModal = false">
                <template #header>
                <h3>Изменения сохранены</h3>
             </template>
            </modal>
        </teleport>
    </div>
    

    <label for="account-form_textarea" class="textarea-label">Расскажите о себе</label>
    <textarea name="" id="account-form_textarea" ref="input_textarea" v-model="textarea"></textarea>
</form>

<form class="change-password_form" @submit.prevent="">
    <h3 class="change-password_title">Сменить пароль</h3>
    <p>
        <label for="change-password_current" class="check-label">Текущий пароль</label>
        <input type="password" id="change-password_current" ref="input_password_current">
    </p>
    <p>
        <label for="change-password_new" class="check-label">Новый пароль</label>
        <input type="password" id="change-password_new" ref="input_password_new">
    </p>
    <p>
        <label for="change-password_repeat" class="check-label">Повторите пароль</label>
        <input type="password" id="change-password_repeat" ref="input_password_repeat">
    </p>
    <div class="change-password_submit">
        <button type="submit" class="change-pass_btn">Сохранить пароль</button>
    </div>
</form>

<div class="account-delete_btn">
    <button v-on:click="getEventData" class="delete_btn">Удалить аккаут</button>

</div>
</div>    

`


export default {
    components: {
        Modal
    },
    name: 'Form',
    template: form
    ,
    data() {
        return {
            // output: '',
            showModal: false,
            name: '',
            surname: '',
            date: new Date().toISOString().slice(0, 10),
            gender: '',
            nickname: '',
            country: '',
            city: '',
            mail: '',
            phone: '',
            textarea: '',

        }
    },


    mounted() {
        const res = {}
        axios
            .get('/accountConnectG.php')
            .then(response => {
                // this.name = response.data.info[0].mail,
                //     this.surname = response.data.info[0].mail,
                this.mail = response.data.info[0].mail
                // res.name = response.data.info[0].mail,
                // res.surname = response.data.info[0].mail

            });

        console.log(res);

        // this.name = response.data.info[0].mail
    },
    methods: {
        getEventData: function (e) {
            console.log(e);
        },
        onSubmit(e) {
            const send = {
                name: this.$refs.input_name.value,
                surname: this.$refs.input_surname.value,
                date: this.$refs.input_date.value,
                gender: this.$refs.input_gender.value,
            }
            // this.output = this.$refs.input_name.value

            console.log(send);
            if (send.name === '') {
                // this.output = 'пусто'
                return
            } else {
                axios.post('/accountConnectP.php', JSON.stringify(send))
                    .then((response) => {
                        // this.output = response.data.info[0].pass
                        this.name = response.data.info[0].pass
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },

    },

}