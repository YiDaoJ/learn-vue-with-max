const app = Vue.createApp({
  data(){
    return {
      name: "ZackZack",
      age: 22,
      randomNum: Math.random(),
      imgURL: "https://cdn-icons-png.flaticon.com/512/5052/5052310.png"
    }
  },
  methods: {
    getAgeInFiveYears() {
      return this.age + 5
    }
  },
})

app.mount('#assignment')