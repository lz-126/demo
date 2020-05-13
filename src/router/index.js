import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/Category.vue")
const Cart = () => import("../views/shoppingCart/Cart.vue")
const Profile = () => import("../views/profile/Profile.vue")
const Detail = () => import("../views/detail/Detail.vue")

Vue.use(Router)
const routes = [{
  path: "",
  redirect: '/home'
},
{
  path: "/home",
  component: Home
}, {
  path: "/category",
  component: Category
},
{
  path: "/cart",
  component: Cart
},
{
  path: "/profile",
  component: Profile
},
// 详情页
{
  // path: "/detail/:iid",通过params
  path: "/detail",//query
  component: Detail
}
]

const router = new Router({
  routes,
  mode: 'history'
})
export default router
