import Vue from 'vue'
import VueRouter from 'vue-router'

const Category = () => import('../views/category/Category.vue')
const Teacher = () => import('../views/teacher/Teacher.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

Vue.use(VueRouter)
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: '/',
    name: 'category',
    redirect: '/category'
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/teacher',
    component: Teacher
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
