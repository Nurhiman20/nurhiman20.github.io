var app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      name: 'Angga Nurhiman',
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-outline' },
        { title: 'About me', icon: 'mdi-account-circle-outline' },
        { title: 'Skills', icon: 'mdi-cog-outline' },
        { title: 'My Work', icon: 'mdi-eye-outline' },
        { title: 'Contact', icon: 'mdi-email-outline' }
      ],
      mini: true
    }
  },
})