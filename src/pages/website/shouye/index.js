// import Vue from 'vue'
import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './shouye.vue'

@Component({
    name: 'shouye',
    mixins: [template],
    components: {
    }
})
export default class Shouye extends Vue {
    cb_current = "1";
    pd_current = "1";
    wheelImg = []     // 首页轮询的图片
    meterImg = []     // 抄表的图片
    zncbList = []
    pdjkList = []

    zncb = require("@/assets/zncb_1.jpg")
    pdjk = require("@/assets/pdjk_1.jpg")
    activeName = 'no_0'

    pdjkSelect(index) {
        let arr = index.split('-')
        console.log(index,this.pdjkList[arr[0]-0])

        if(arr.length>0){
            console.log(this.pdjkList[arr[0]-1].children[arr[1]-1],'----')
            console.log(this.pdjkList[arr[0]-1].children[arr[1]-1].pic_url, '--9999--')
            this.pdjk = this.pdjkList[arr[0]-1].children[arr[1]-1].pic_url
        }
    }   

    // 轮训的图片的数据
    async imgList(data) {
        try {
            console.log(this.api.demo, '0000')
            let res = await this.api.demo.getImgList(data)
            this.wheelImg = res.data.wheel
            this.zncbList = res.data.meter
            this.pdjkList = res.data.power
            console.log('图片列表!', res,this.zncbList)
        } catch (err) {
        }
    }
    mounted() {
        this.imgList({ id: 1 })
    }
}

