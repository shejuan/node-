import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './solution.vue'

@Component({
    name: 'solution',
    mixins: [template],
    components: {
    }
})
export default class Solution extends Vue {
    dataType="1"
    list=[
        {name: '公寓抄表收费',label:1},
        {name: '物业抄表收费',label:2},
        {name: '商业商场',label:3},
        {name: '学校宿舍',label:4},
        {name: '智能配电房',label:5},
        {name: '能耗管控',label:6},
        {name: '售电服务抄表方案',label:7}
    ]

    data = {
        solution_id:2
    }
    myList = {}

    handleSelect(key, keyPath){
        console.log(key, keyPath);
        this.data.solution_id = this.list[key].label
        this.getsolutionList()
    }
    async getsolutionList(){
        try{
            let res = await this.api.demo.getsolutionList(this.data)
            this.myList = res.data

        }catch(error){

        }
    }

    mounted(){
        this.getsolutionList()
    }
}
