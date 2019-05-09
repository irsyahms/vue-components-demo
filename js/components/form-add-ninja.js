Vue.component('form-add-ninja', {
  data() {
    return {
      ninja: {
        title: '',
        image: '',
        created: '',
        check: false
      }
    }
  },
  methods: {
    addNinja() {
      this.$emit('add-ninja', this.ninja, 'something');
      this.ninja = {
        title: '',
        image: '',
        created: '',
        check: false
      }
    }
  },
  template: `
    <div>
    <h1 class="text-center">Form Input</h1>
    <form
      method="post"
      class="col border p-4"
      v-on:submit.prevent="addNinja">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          v-model="ninja.title"
          type="text"
          name="title"
          autocomplete="off"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input
          v-model="ninja.image"
          type="text"
          name="image"
          autocomplete="off"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="name">Created</label>
        <input
          v-model="ninja.created"
          type="text"
          name="name"
          autocomplete="off"
          class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  `
})
