import Vue from 'src/pages/base'
import { Component } from 'vue-property-decorator'
import template from './myHeader.vue'
import storage from 'src/unit/storage'

@Component({
  name: 'myHeader',
  mixins: [template],
  components: {}
})
export default class MyHeader extends Vue {
  activeIndex ='1'
  activeIndex2 = '1'

  handleSelect(key, keyPath){
    this.setStorageTest(key)
  }

  // 写入storage
  setStorageTest(val) {
    storage.set('headerActiveIndex', val)
    
}

  runGoTo(val,key) {
    key?this.goTo({path:val,query:{name:key}}):this.goTo(val)
  }

  mounted() {
    this.activeIndex = storage.get('headerActiveIndex')?storage.get('headerActiveIndex'):'1'
  }
}
