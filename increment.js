let app = Vue.createApp({
    data: function(){
        return{
            number: 0,
            isVisible: false
        }
    },

    methods: {
        increment() {
            this.number = parseInt(this.number)+1;
        },

        decrement() {
            this.number = this.number-1;
        }
    }
})
app.mount('#app');
