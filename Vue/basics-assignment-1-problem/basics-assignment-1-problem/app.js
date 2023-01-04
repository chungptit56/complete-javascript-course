const app = Vue.createApp({
    data() {
        return {
            myName: 'Chung',
            myAge: 22,
            imageUrl: 'https://picsum.photos/200/300'
        }
    },
    methods: {
        randomNumber(){
            return Math.floor(Math.random() * 10);
        }
    }
});

app.mount('#assignment');