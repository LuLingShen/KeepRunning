import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/creategroup',
    name: 'routeName',
    component: () => import('../views/Createpaotuan.vue'),
  },
  {
    path: '/test',
    name: 'routeName',
    component: () => import('../views/test.vue'),
  },
  {
    path: '/createpaotuan',
    name: '创建跑团',
    component: () => import('../views/Createpaotuan.vue'),
  },
  {
    path: '/minemotion',
    name: 'minemotion',
    component: () => import('../views/MineMotion.vue'),
  },
  {
    path: '/mineset',
    name: 'mineset',
    component: () => import('../views/MineSet.vue'),
  },
  {
    path: '/minemsg',
    name: 'minemsg',
    component: () => import('../views/MineMsg.vue'),
  },
  {
    path: '/mineflag',
    name: 'mineflag',
    component: () => import('../views/MineFlag.vue'),
  },
  {
    path: '/minebag_box',
    name: 'minebag_box',
    component: () => import('../views/MineBag_box.vue'),
  },
  {
    path: '/minebag',
    name: 'minebag',
    component: () => import('../views/MineBag.vue'),
  },
  {
    path: '/minecard',
    name: 'minecard',
    component: () => import('../views/MineCard.vue'),
  },
  {
    path: '/minegames',
    name: 'minegames',
    component: () => import('../views/MineGames.vue'),
  },
  {
    path: '/minegift',
    name: 'minegift',
    component: () => import('../views/MineGift.vue'),
  },
  {
    path: '/minetrack',
    name: '/minetrack',
    component: () => import('../views/MineTrack.vue'),
  },
  {
    path: '/mineadd',
    name: 'mineadd',
    component: () => import('../views/MineAdd.vue'),
  },
  {
    path: '/mineaddress',
    name: 'mineaddress',
    component: () => import('../views/MineAddress.vue'),
  },
  {
    path: '/minearea',
    name: 'minearea',
    component: () => import('../views/MineArea.vue'),
  },
  {
    path: '/minegroup',
    name: 'MineGroup',
    component: () => import('../views/MineGroup.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  
  {
    path: '/myhome',
    name: 'myhome',
    component: () => import('../views/MyHome.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'/index',
    
    children:[
      {
        path:'index',
        name:'index',
        component: () => import('../views/Index.vue'),
        
      },
      {
        path: 'pic',
        name: '趣',
        component: () => import('../views/pic.vue'),
        redirect:'/pic/sd',
        children:[
          {
            path: 'sd',
            name: '赛道',
            component: () => import('../views/SaiDao.vue'),
            meta:{
              keepAlive:true
            },
          },
          {
            path: 'hd',
            name: '活动',
            component: () => import('../views/Activity.vue'),
            meta:{
              keepAlive:true
            },
          },
          {
            path: 'ss',
            name: '赛事',
            component: () => import('../views/SaiShi.vue'),
            meta:{
              keepAlive:true
            },
          },
        ]
      },
      {
        path: 'me',
        name: 'routeName',
        component: () => import('../views/Me.vue'),
        meta:{
          keepAlive:true
        },
      },
      {
        path: 'shop',
        name: 'routeName',
        component: () => import('../views/Shop.vue'),
        meta:{
          keepAlive:true
        },
      },
      {
        path: '/myqupao',
        name: 'myqupao',
        component: () => import('../views/MyQupao.vue'),
      },
    ]
  },
  {
    path: '/quan',
    name:'全名体验官',
    component: ()=>import('../views/Quan')
  },
  {
    path: '/pp',
    name:'品牌专区',
    component: ()=>import('../views/Ppzq')
  },
  {
    path: '/slide',
    name:'slide',
    component: ()=>import('../views/Slide')
  },
  {
    path:'/shoes',
    name:'shoes',
    component: ()=>import('../views/Shoes'),
    children:[
      {
        path:'video',
        name:'video',
        component:()=>import('../views/Video')
      },
      {
        path: 'rec',
        name:'推荐',
        component:()=>import('../views/Rec')
      },
      {
        path:'ph',
        name:'排行',
        component:()=>import('../views/Ph')
      },
      {
        path:'kb',
        name:'口碑',
        component:()=>import('../views/Kb')
      },
      {
        path:'dt',
        name:'动态',
        component:()=>import('../views/Dt')
      },
    ]
  },
  {
    path:'/shopdetail',
    name:'商品详情',
    component: ()=>import('../views/ShopDetails')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sddetail',
    name: '赛道详情',
    component: () => import('../views/SdDetail.vue'),
  },
  {
    path: '/ssdetail',
    name: '赛事活动详情',
    component: () => import('../views/SsDetail.vue'),
  },
  {
    path: '/indexactivitydetial',
    name: '首页活动详情',
    component: () => import('../views/IndexActivityDetial.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
