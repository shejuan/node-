import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './myFooter.vue'

@Component({
  name: 'myFooter',
  mixins: [template],
  components: {}
})
export default class MyFooter extends Vue {
}
