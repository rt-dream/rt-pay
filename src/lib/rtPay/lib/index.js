import inputPwd from './password'
import keyboard from './keyboard';
import vpay from './pay'

const pay = {
    install (Vue, options) {
        Vue.component('rtPay', vpay)
        Vue.component('rtPwd', inputPwd)
        Vue.component('rtKeyboard', keyboard)
    }
}

export default pay