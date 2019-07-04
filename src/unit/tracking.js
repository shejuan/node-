// 百度统计
export function baidu(to = {}) {
    if (to.path) {
        let _hmt = window._hmt || []
        _hmt.push(['_trackPageview', '/#' + to.fullPath])
    }
}

// 有盟统计
export function czc() {
    console.log(window._czc)
    if (window._czc) {
        let location = window.location
        let contentUrl = location.pathname + location.hash
        let refererUrl = '/'
        window._czc.push(['_trackPageview', contentUrl, refererUrl])
    }
}
