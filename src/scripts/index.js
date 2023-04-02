import './plantLike.js'
import './articles_db.js'
import './plants_db.js'
import './reg.js'
import './auth.js'

window.switchToAuth = function () {
    registration('none')
    auth('block')
}
window.swithToReg = function () {
    auth('none')
    registration('block')
}

