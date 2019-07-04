import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './noPermission.vue'

@Component({
  name: 'noPermission',
  mixins: [template]
})
export default class NoPermission extends Vue {
}
