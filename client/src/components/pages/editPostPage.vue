<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12">
        <section class="edit">
          <h1>Edit post</h1>
          <form action="" @submit.prevent="editPost">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Title" v-model.trim = "post.title">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Title" v-model.trim = "post.description">
            </div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit">
                Edit post
              </button>
            </div>
          </form>
          <div>
            <router-link to="/posts">
              Go to list of posts
            </router-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import postServices from "../../services/postServices";

  export default {
        name: "editPostPage",
        data () {
          return {
            post: {
              title: '',
              description: ''
            }
          }
        },
        methods: {
          async getPost () {
            const response = await postServices.getPost({ id: this.$route.params.id });
            this.post.title = response.data.title;
            this.post.description = response.data.description;
          },
          async editPost () {
            if (this.post.title !== '' && this.post.description !== '') {
              await postServices.updatePost({
                id: this.$route.params.id,
                title: this.post.title,
                description: this.post.description
              });
              this.$router.push({ name: 'Posts' });
            }
          }
        },
        mounted () {
          this.getPost()
        }
    }
</script>

<style scoped>

</style>
