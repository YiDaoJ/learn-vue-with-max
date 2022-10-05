const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
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
    },
    handleSubmit() {
      alert('submit')
    },
    confirmName() {
      this.confirmedName = this.name
    }
  },
});

app.mount('#events');
