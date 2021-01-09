<template>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <h1>Add new post</h1>
          <div class="spinner-grow text-primary" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
          <form @submit.prevent="addPost" v-else>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Title" v-model.trim="post.title">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Description" v-model.trim="post.description">
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-block btn-primary" name="addPost" id="addPost" >
                Add new post
              </button>
            </div>
            <section>
              <button class="btn btn-success btn-block" @click="goBack">
                Go to posts page
              </button>
            </section>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import postServices from "../../services/postServices";

  export default {
        name: "newPostPage",
        data () {
          return {
            post: {
              title: '',
              description: ''
            },
            loading: false
          }
        },
        methods: {
          async addPost () {
            if (this.post.title !== '' && this.post.description !== '') {
              this.callPreloader(true);
              await postServices.addNewPost({
                title: this.post.title,
                description: this.post.description
              });
              this.callPreloader(false);
              this.post.title = this.post.description = '';
              // this.$router.push({ name: 'Posts' })
            } else {
              alert('Empty fields!')
            }
          },
          callPreloader(value){
            this.loading = value;
          },
          goBack () {
            this.$router.push({ name: 'Posts' })
          }
        }
    }
</script>

<style scoped>

</style>
