import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './contact.vue'

@Component({
    name: 'contact',
    mixins: [template],
    components: {
    }
})
export default class Contact extends Vue {
    
}
