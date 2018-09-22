var app = new Vue({
    el: '#app',
    data: {
        c: 0
    },
    methods: {
        compte: function () {
            this.c++;
        }
    }
});
Vue.component('addn', {
    props: ['val'],
    template: '<p>{{ val }} <button v-on:click="val++">+</button><button v-on:click="val--">-</button></p>'
});
