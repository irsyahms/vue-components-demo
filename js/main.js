let app = new Vue({
  el: "#app",
  data: {
    userId: 'abc123',
    title: 'Kura-kura ninja',
    coach: {
      "id": 1,
      "title": "belajar javascript",
      "created": "naruto",
      "image": "https://vignette.wikia.nocookie.net/narutooriginals/images/d/d2/Masumi.png/revision/latest?cb=20150905230340",
      "check": false,
      "userId": "abc123"
    },
    ninjas: [{
        "id": 1,
        "title": "belajar javascript",
        "created": "naruto",
        "image": "https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest?cb=20170621101134",
        "check": false,
        "userId": "abc123"
      }, {
        "id": 2,
        "title": "master vue",
        "created": "sasuke",
        "image": "https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest?cb=20170621055519&path-prefix=id",
        "check": false,
        "userId": "abc124"
      }, {
        "id": 3,
        "title": "masak",
        "created": "sakura",
        "image": "https://vignette.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png/revision/latest?cb=20170726101444",
        "check": true,
        "userId": "abc123"
    }],
  },
  methods: {
    createNinja(newNinja, message) {
      this.ninjas.push(newNinja);
      console.log(message);
    }
  }
})
