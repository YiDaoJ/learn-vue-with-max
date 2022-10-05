const app = Vue.createApp({
  data(){
    return {
      paragraphInput: "",
      paragraphInput2: "",
      finalOutput: ""
    }
  },
  methods: {
    showAlert(){
      alert('hihi do you see me?')
    },
    handleInput(event){
      this.paragraphInput = event.target.value
    },
    handleInputChange(event){
      this.paragraphInput2 = event.target.value
    },
    showFinalOutput() {
      this.finalOutput = this.paragraphInput2
    }
  },
})

app.mount('#assignment')