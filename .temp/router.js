import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Topic from '@/components/Topic'
import Detail from '@/components/Detail'
Vue.use(Router)

module.exports = new Router({
  routes: [
  	{ path: '/', redirect: '/topic' },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/about',
    	name: 'About',
    	component: About
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
