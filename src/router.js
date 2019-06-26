import Vue from 'vue'
import Router from 'vue-router'
import Categories from './views/Categories.vue'
import Category from './views/Category.vue'
import CreateCategory from './views/CreateCategory.vue'
import Book from './views/Book.vue'
import CreateBook from './views/CreateBook.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Logout from './components/LogoutComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'categories',
      component: Categories
    },
    {
      path: '/categories/:id',
      name: 'category',
      component: Category
    },
    {
      path: '/categories/create',
      name: 'createCategory',
      component: CreateCategory
    },
    {
      path: '/books/:id',
      name: 'book',
      component: Book
    },
    {
      path: '/books/create',
      name: 'createBook',
      component: CreateBook,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    }
  ]
})
