import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './notFound.vue'

@Component({
  name: 'myNotFound',
  mixins: [template]
})
export default class MyNotFound extends Vue {
}
