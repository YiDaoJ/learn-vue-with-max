// 1. create vue instance
const app = Vue.createApp({
  data(){
    return {
      courseGoal: "Finish the course and learn vue!",
      vueLink: "https://vuejs.org/"
    }
  },
  methods: {
    chooseGoal() {
      const randomNumber = Math.random()
      return randomNumber < 0.5 ? "Master Vue!" : "Learn Vue!"
    }
  },
})

// 2. connect vue instance to html
app.mount('#user-goal') // unique identifier