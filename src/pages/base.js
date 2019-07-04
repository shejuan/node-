import Vue from 'vue'
import api from '../api/index'
console.log(api, '0000')

export default class Base extends Vue {
    // 页面跳转
    api = api
    goTo(options) {
        this.$router.push(options)
    }
}
