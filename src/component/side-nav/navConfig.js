const menuList = [
    {
        title:'首页',
        key:'/home',
        icon:'home'
    },
    {
        title:"商品",
        key:'/product',
        icon:'database',
        children:[
            {
                title: '商品管理',
                key: '/product/index',
                icon:'layout'
            },
            {
                title: '品类管理',
                key: '/product/catagory',
                icon:'idcard'
            }          
        ]
    },
    {
        title:"订单",
        key:'/list',
        icon:'table',
        children:[
            {
                title: '订单管理',
                key: '/list/ddgl',
                icon:'project'
            }         
        ]        
    },
    {
        title:"用户",
        key:'/user',
        icon:'user',
        children:[
            {
                title: '用户管理',
                key: '/user/index',
                icon:'setting'
            }         
        ]        
    }
]
export default menuList 