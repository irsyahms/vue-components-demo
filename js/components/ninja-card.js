Vue.component('ninja-card', {
  props: ['ninja', 'title'],
  template: `
    <div class="card text-center" style="width: 18rem;">
      <img :src="ninja.image" class="card-img-top" :alt="ninja.name">
      <div class="card-body">
        <h5 class="card-title">{{ ninja.title }}</h5>
        <p class="card-text">{{ ninja.created }}</p>
      </div>
    </div>
`
})
