// 1. create vue instance
const app = Vue.createApp({
  data(){
    return {
      courseGoal: "Finish the course and learn vue!",
      vueLink: "https://vuejs.org/"
    }
  }
})

// 2. connect vue instance to html
app.mount('#user-goal') // unique identifier