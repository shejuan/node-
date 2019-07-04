import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './aboutUs.vue'

@Component({
    name: 'aboutUs',
    mixins: [template],
    components: {
    }
})
export default class AboutUs extends Vue {
    
}
