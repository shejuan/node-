import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './mall.vue'

@Component({
    name: 'mall',
    mixins: [template],
    components: {
    }
})
export default class Mall extends Vue {
    
}
