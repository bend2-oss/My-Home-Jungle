import Axios from '../components/Axios.js'
import Message from '../components/Message.js'
import Form from '../components/Form.js'
import Save from '../components/Save.js'
import Community from '../components/Community.js'
import Myplants from '../components/Myplants.js'
import Calendar from '../components/Calendar.js'
import Selection from '../components/Selection.js'
import Notifications from '../components/Notifications.js'
import Privacy from '../components/Privacy.js'

import Saveplants from '../components/Saveplants.js'
import Savearticles from '../components/Savearticles.js'
import Saveinterior from '../components/Saveinterior.js'
import Savecommunity from '../components/Savecommunity.js'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/account.html/Save',
            component: Save,
            children: [{
                path: "/account.html/Save",
                component: Saveplants,
            },
            {
                path: "/account.html/Save/Savearticles",
                component: Savearticles,
            },
            {
                path: "/account.html/Save/Saveinterior",
                component: Saveinterior,
            },
            {
                path: "/account.html/Save/Savecommunity",
                component: Savecommunity,
            }]
        },
        {
            path: '/account.html/Community',
            component: Community,

        },
        {
            path: '/account.html/Message',
            component: Message
        },
        {
            path: '/account.html/Myplants',
            component: Myplants
        },
        {
            path: '/account.html/Calendar',
            component: Calendar
        },
        {
            path: '/account.html/Selection',
            component: Selection
        },
        {
            path: '/account.html/',
            component: Form,
            alias: '/'
        },
        {
            path: '/account.html/Notifications',
            component: Notifications
        },
        {
            path: '/account.html/Privacy',
            component: Privacy
        },
        {
            path: '/account.html/Axios',
            component: Axios,

        },


    ]
})


export default router





