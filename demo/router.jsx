//页面路由
window.location.href = 'http://...'
history.back()

//hash路由
window.location = '#hash'
window.onhashchange = function(){
    console.log(window.location.hash)
}

//h5路由
//推进一个状态
history.pushState('name','title','/pash')

history.replaceState('name','title','/pash')

window.onpopstate = function(){
    console.log(window.location.href)
    console.log(window.location.pathname)
    console.log(window.location.hash)
    console.log(window.location.search)
}