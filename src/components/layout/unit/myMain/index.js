import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './myMain.vue'

@Component({
  name: 'myMain',
  mixins: [template],
  components: {}
})
export default class MyMain extends Vue {
}
