import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './home.vue'
import NewHeader from './unit/myHeader'
import NewFooter from './unit/myFooter'
import NewMain from './unit/myMain'
import NewAside from './unit/myAside'

@Component({
  name: 'demo',
  mixins: [template],
  components: {NewHeader, NewFooter, NewMain, NewAside}
})
export default class Demo extends Vue {
  msg = 'Welcome to Your Vue.js App'
  active = 0

  next () {
    if (this.active++ > 2) this.active = 0
  }
}
