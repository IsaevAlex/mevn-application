<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12">
        <h1>Posts</h1>
        <h3>This file will list all the posts</h3>
        <div class="col-xl-12 mb-2 mt-2">
          <router-link to="/posts/new">
            Add new post
          </router-link>
        </div>
        <section class="panel panel-succes" v-if="posts.length">
          <div class="panel-heading">
            list of posts
          </div>
          <table class="table table-striped">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            <tr v-for="post in posts" :key="post.title">
              <td>
                {{ post.title }}
              </td>
              <td>
                {{ post.description }}
              </td>
              <td>
                <router-link tag="button" class="btn btn-primary btn-sm" :to="{ name: 'editPost', params: { id: post._id } }">
                  Edit post
                </router-link>
                <button class="btn btn-danger btn-sm" type="button" @click="removePost(post._id)">
                  Delete
                </button>
              </td>
            </tr>
          </table>
        </section>
        <section class="panel panel-danger" v-else>
          <p>
            There are no posts ... Lets add one now!
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import postServices from "../../services/postServices";
  export default {
      name: "postsPage",
      data(){
        return{
          posts: []
        }
      },
      methods:{
        async getPosts () {
          const response = await postServices.fetchPosts();
          this.posts = response.data.posts;
        },
        async removePost (value) {
          await postServices.deletePost(value);
          this.getPosts();
        }
      },
      mounted () {
        this.getPosts()
      }
  }
</script>

<style scoped>

</style>
