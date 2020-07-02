var app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      name: 'Angga Nurhiman',
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true
    }
  },
})