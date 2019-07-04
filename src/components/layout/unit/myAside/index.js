import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './myAside.vue'

@Component({
  name: 'myAside',
  mixins: [template],
  components: {}
})
export default class MyAside extends Vue {
  data = [
    {
      title: '首页',
      list: [
        {
          oneTitle: 'e-chart',
          path: '/shouye/e-chart'
        },
        {
          oneTitle: '工作经历',
          // path: 'user/working'
        }
      ]
    },
    {
      title: '路由跳转',
      list: [
        {
          oneTitle: '读取状态机的值',
          path: '/cl/manage'
        },
        {
          oneTitle: '更改状态机的值',
          path: '/cl/jingli'
        }
      ]
    },
    {
      title: 'sass',
      list: [
        {
          oneTitle: '产品部门'
        },
        {
          oneTitle: '研发部门'
        }
      ]
    },
    {
      title: '领筑电商',
      list: [
        {
          oneTitle: '后台'
        },
        {
          oneTitle: '前端'
        }
      ]
    },
    {
      title: '工程云',
      list: [
        {
          oneTitle: 'UI'
        },
        {
          oneTitle: '测试'
        }
      ]
    }
  ]
}
