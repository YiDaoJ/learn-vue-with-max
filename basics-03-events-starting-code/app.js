const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "ye"
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
    },
    reduce(num) {
      this.counter = this.counter - num
    },
    updateName(event, lastname) {
      this.name = event.target.value + ' ' + lastname
    }
  },
});

app.mount('#events');
