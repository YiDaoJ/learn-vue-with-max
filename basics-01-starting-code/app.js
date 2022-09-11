// 1. create vue instance
const app = Vue.createApp({
  data(){
    return {
      courseGoalA: "Finish the course and learn vue!",
      courseGoalB: "Master Vue and make amazing App!",
      vueLink: "https://vuejs.org/"
    }
  },
  methods: {
    chooseGoal() {
      const randomNumber = Math.random()
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB
    }
  },
})

// 2. connect vue instance to html
app.mount('#user-goal') // unique identifier