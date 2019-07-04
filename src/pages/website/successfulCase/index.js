import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './successfulCase.vue'

@Component({
    name: 'successfulCase',
    mixins: [template],
    components: {
    }
})
export default class SuccessfulCase extends Vue {
    anliList = [
        {
            url:require('@/assets/cgal1.png'), 
            msg:'这里是新闻标题简要介绍一asasadsdadadasdasdasd下吗----1',
            show:false
        },
        {
            url:require('@/assets/cgal2.png'), 
            msg:'这里是新闻标题简要介绍一下吗----2',
            show:false
        },
        {
            url:require('@/assets/cgal3.png'), 
            msg:'这里是新闻标题简要介绍一下吗-----3',
            show:false
        },
        {
            url:require('@/assets/cgal4.png'), 
            msg:'这里是新闻标题简要介绍一下吗-----4',
            show:false
        }
    ]
    anliList1 = []     // 将一维数据变为二维数组,用于控制循环遍历

    onMouseOver(val,key){
        this.anliList1[val][key].show = true
    }
    
    onMouseOut(val,key){
        this.anliList1[val][key].show = false
    }

    mounted(){
        let len = this.anliList.length
        let n =2 // 假设每行显示2个
        let lineNum = len % 2 === 0? len / 2 : Math.floor((len /3 ) + 1)
        for(let i = 0;i<lineNum;i++){
            let temp = this.anliList.slice(i*n,i*n+n)
            this.anliList1.push(JSON.parse(JSON.stringify(temp)))
        }
    }
}
