const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: ''
    };
  },
  methods: {
    addCount(num) {
      this.counter += num;
    },
    reduceCount(num) {
      this.counter -= num;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event) {
      alert("submitted")
    },
    confirmInput(){
      this.confirmName = this.name;
    }
  }
});

app.mount('#events');
