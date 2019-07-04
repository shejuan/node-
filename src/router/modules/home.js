
import Layout from '@/components/layout'

function getView(viewName, title) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            let modules = require(`@/pages/website/${viewName}`)
            modules.default.options.metaInfo = { title }
            resolve(modules)
        }, reject, 'Layout')
    }
}

let routes = 
    {
        name: 'website',
        path: '/website',
        redirect: '/website/shouye',
        meta: {
            title: '首页'
        },
        component:Layout,
        children:[
            // 首页
            {
                name: 'shouye',
                path: 'shouye',
                meta: {
                    title: '首页'
                }
            },
            // 解决方案
            {
                name: 'solution',
                path: 'solution',
                meta: {
                    title: '解决方案'
                }
            },
            // 智能装置
            {
                name: 'smartDevice',
                path: 'smartDevice',
                meta: {
                    title: '智能装置'
                }
            },
            // 云平台
            {
                name: 'cloudPlatform',
                path: 'cloudPlatform',
                meta: {
                    title: '云平台'
                }
            },
            // 关于科中
            {
                name: 'aboutUs',
                path: 'aboutUs',
                meta: {
                    title: '关于科中'
                }
            },
            // 成功案例
            {
                name: 'successfulCase',
                path: 'successfulCase',
                meta: {
                    title: '成功案例'
                }
            },
            // 商城
            {
                name: 'mall',
                path: 'mall',
                meta: {
                    title: '商城'
                }
            },
            // 联系我们
            {
                name: 'contact',
                path: 'contact',
                meta: {
                    title: '联系我们'
                }
            },

             // 设备详细
             {
                name: 'shebeixiangxi',
                path: 'shebeixiangxi',
                meta: {
                    title: '设备详细'
                }
            },
        ]
    }


routes.children.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name, v.meta.title)
    }
})

export default routes
