import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './cloudPlatform.vue'

@Component({
    name: 'cloudPlatform',
    mixins: [template],
    components: {
    }
})
export default class CloudPlatform extends Vue {
    
}
