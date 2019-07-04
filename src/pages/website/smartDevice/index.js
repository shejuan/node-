import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './smartDevice.vue'

@Component({
    name: 'smartDevice',
    mixins: [template],
    components: {
    }
})
export default class SmartDevice extends Vue {
    dataType = "1-1";

    sbxx(){
        var aa = this.$router.resolve({
        name: "shebeixiangxi",
        params:{catId:"111"}
        });
        window.open(aa.href, '_blank');
        }
}
