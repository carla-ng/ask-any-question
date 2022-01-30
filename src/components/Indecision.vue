<template>
  <div class="indecision-container">
      <p class="instructions">
          Write any question you want the answer to! <br>
          (Possible answers: yes, no, maybe) <br>
          Remember to end your question with a question mark (?)
      </p>

      <input
        type="text"
        placeholder="Ask me a question"
        v-model="question">

      <div class="question-answer-container">
          <div v-if="isValidQuestion">
            <h2> {{ question }} </h2>
            <h1> {{ answer }} </h1>
          </div>
      </div>

      <img v-if="img" :src="img" alt="bg">
  </div>
</template>

<script>
export default {
    data() {
        return {
            question: null,
            answer: null,
            img: null,
            isValidQuestion: false
        }
    },
    methods: {
      async getAnswer() {
          this.answer = 'Thinking...'

          const { answer, image } = await fetch('https://yesno.wtf/api').then( r => r.json() )
          this.answer = answer
          this.img = image
      }  
    },
    watch: {
        question(value, oldValue) {
            this.isValidQuestion = false

            if (!value.includes('?')) return

            this.isValidQuestion = true
            this.getAnswer()
        }
    }
}
</script>


<style scoped>

    .indecision-container {
        margin: 50px auto 0 auto;
        max-width: 500px;
        text-align: center;
    }
    
    input {
        border: none;
        border-radius: 5px;
        font-size: 20px;
        padding: 10px 15px;
        width: 80%;
    }
    input:focus {
        outline: none;
    }

    p {
        color: #fff;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: #fff;
    }
    
    h1 {
        text-transform: capitalize;
    }

    img {
        height: auto;
        margin-top: 20px;
        width: 100%;
    }

    .question-answer-container {
        margin-top: 60px;
        min-height: 100px;
    }

</style>