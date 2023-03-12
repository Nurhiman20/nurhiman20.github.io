var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data() {
        return {
            overlay: false,
            name: 'Angga Nurhiman',
            drawer: true,
            items: [
                { title: 'Home', icon: 'mdi-home-outline', to: '#home' },
                { title: 'About me', icon: 'mdi-account-circle-outline', to: '#about-me' },
                { title: 'Skills', icon: 'mdi-cog-outline', to: '#skills' },
                { title: 'My Work', icon: 'mdi-eye-outline', to: '#work' },
                { title: 'Contact', icon: 'mdi-email-outline', to: '#contact' }
            ],
            mini: true,
            mostUsedSkills: [{
                    src: './assets/img/vue.svg',
                    text: 'Vue.js'
                }, {
                    src: './assets/img/nuxt.png',
                    text: 'NuxtJs'
                },
                {
                    src: './assets/img/vuetify.svg',
                    text: 'Vuetify'
                },
                {
                    src: './assets/img/vuex.png',
                    text: 'vuex'
                },
                {
                    src: './assets/img/pinia.svg',
                    text: 'Pinia'
                },
                {
                    src: './assets/img/bootstrap.svg',
                    text: 'Bootstrap'
                },
                {
                    src: './assets/img/html.svg',
                    text: 'HTML'
                },
                {
                    src: './assets/img/css.svg',
                    text: 'CSS'
                },
                {
                    src: './assets/img/javascript.svg',
                    text: 'Javascript'
                },
                {
                    src: './assets/img/typescript.svg',
                    text: 'TypeScript'
                },
                {
                    src: './assets/img/sass.svg',
                    text: 'Sass (Scss)'
                }
            ],
            knowBasics: [{
                    src: './assets/img/react.png',
                    text: 'React'
                },
                {
                    src: './assets/img/nodejs.svg',
                    text: 'Node.js'
                },
                {
                    src: './assets/img/tailwind.png',
                    text: 'Tailwind'
                },
                {
                    src: './assets/img/graphql.png',
                    text: 'GraphQL'
                },
                {
                    src: './assets/img/firebase.svg',
                    text: 'Firebase'
                }
            ],
            selectorTarget: null,
            stacks1: ['Frontend', 'Vue.js', 'Vuetify', 'Vue Router', 'Vuex', 'HTML', 'SASS (SCSS)', 'Axios', 'API Integration'],
            stacks2: ['Frontend', 'Vue.js', 'Vuesax', 'Vue Router', 'Vuex', 'HTML', 'SASS (SCSS)', 'Axios', 'API Integration'],
            stacks3: ['Frontend', 'Bootstrap', 'HTML', 'SASS (SCSS)']
        }
    },
    computed: {
        options() {
            return {
                duration: 750,
                offset: 0,
                easing: 'easeInOutQuad',
            }
        }
    },
    created() {
        this.overlay = true
    },
    watch: {
        overlay(val) {
            val && setTimeout(() => {
                this.overlay = false
            }, 2000)
        }
    }
})
