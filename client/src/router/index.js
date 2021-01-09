import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import postsPage from '@/components/pages/postsPage';
import newPost from '@/components/pages/newPostPage';
import editPost from '@/components/pages/editPostPage';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'Posts',
      component: postsPage
    },
    {
      path: '/posts/new',
      name: 'newPost',
      component: newPost
    },
    {
      path: '/posts/:id',
      name: 'editPost',
      component: editPost
    }
  ]
})
