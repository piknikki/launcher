<template>
  <div class="block">
<!--    <h1>Form</h1>-->
    <div class="form-wrapper">
      <form v-on:submit.prevent.self="onSubmit">
        <fieldset>
          <legend>Submit a new interview experience</legend>
          <label for="company">Company: </label>
          <input v-model="formData.company" id="company" type="text" placeholder="Company Name">
          <br>

          <label for="offer">Offer received: </label>
          <input v-model="formData.offer" id="offer" type="checkbox">
          <br>

          <label for="date">Date you applied: </label>
          <input v-model="formData.date" id="date" type="date">
          <br>

          <label>Steps (select all that apply)</label>
            <div>
              <input type="checkbox" id="steps-screen" value="screening" v-model="formData.steps">
              <label for="steps-screen" class="step-options">HR Screening</label>
            </div>
            <div>
              <input type="checkbox" id="steps-video" value="video" v-model="formData.steps">
              <label for="steps-video" class="step-options">Video Interview</label>
            </div>
            <div>
              <input type="checkbox" id="steps-informal" value="informal" v-model="formData.steps">
              <label for="steps-informal" class="step-options">Informal Chat with employee</label>
            </div>
            <div>
              <input type="checkbox" id="steps-takehome" value="takehome" v-model="formData.steps">
              <label for="steps-takehome" class="step-options">Takehome Challenge</label>
            </div>
            <div>
              <input type="checkbox" id="steps-whiteboard" value="whiteboard" v-model="formData.steps">
              <label for="steps-whiteboard" class="step-options">Whiteboard with interviewer</label>
            </div>
            <div>
              <input type="checkbox" id="steps-final" value="final" v-model="formData.steps">
              <label for="steps-final" class="step-options">Final with higher-ups</label>
            </div>
            <div>
              <input type="checkbox" v-model="other" @change="addOther(other)">
              <label class="step-options">Other (click tab when done): </label>
              <input v-if="other" type="text" value="other" v-model.lazy="otherText" @change="setOtherText">
            </div>
          <br>

          <label for="description">Description of the tech challenge: </label>
          <textarea v-model="formData.description"
                    id="description"
                    placeholder="As much detail as you can"
                    rows="2"
                    cols="40"
                    wrap="soft"
          ></textarea>
          <br>

          <label for="solution">Solution: </label>
          <textarea v-model="formData.solution"
                    id="solution"
                    placeholder="What did you do?"
                    rows="2"
                    cols="40"
                    wrap="soft"
          ></textarea>
          <br>

          <label for="retro">Retrospective: </label>
          <textarea v-model="formData.retro"
                    id="retro"
                    placeholder="What could you have done better?"
                    rows="2"
                    cols="40"
                    wrap="soft"
          ></textarea>
          <br>

          <label for="takeaways">Takeaways: </label>
          <textarea v-model="formData.takeaways"
                    id="takeaways"
                    placeholder="What lessons were learned?"
                    rows="2"
                    cols="40"
                    wrap="soft"
          ></textarea>
          <br>
        </fieldset>
        <button type="submit"> Submit</button>
      </form>
      <div class="form-data" v-if="formData.company">
        <p>{{ formData.company }}  ({{ formData.offer ? 'offer received' : 'no offer' }})</p>
        <p>Applied {{ formData.date }}</p>
        <p>{{ formData.description }}</p>
        <p>steps {{ formData.steps }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InterviewForm',
  data () {
    return {
      formData: {
        company: '',
        date: '',
        description: '',
        offer: null,
        retro: '',
        solution: '',
        steps: [],
        takeaways: ''
      },
      other: false,
      otherText: ''
    }
  },
  methods: {
    addOther (e) {
      this.$emit('add-other', {
        other: e
      })
    },
    setOtherText (text) {
      this.$emit('set-other-text', {
        otherText: text
      })
      this.formData.steps.push(this.otherText)
    },
    onSubmit () {
      console.log(this.formData)
    }
  }
}
</script>

<style scoped>
.block {
  width: 80%;
  margin: 20px auto;
  text-align: left;
  font-size: 1.6rem;
}

.form-wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: flex-start;
}

form {
  width: 60%;
  margin: 0 auto;
}

legend {
  padding: 0 10px;
}

fieldset {
  padding: 20px;
}

input {
  font-size: 1.4rem;
  border: none;
  margin-left: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
}

textarea {
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
  border: none;
  margin: 10px 20px;
  border-bottom: 1px solid grey;
  padding: 0 5px;
}

/*.form-data {*/
/*  width: 40%;*/
/*  background: pink;*/
/*}*/

input[type=text] {
  width: 90%;
  padding: 5px;
}

input[type=checkbox] {
  -ms-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  -o-transform: scale(1.5);
  transform: scale(1.5);
  margin-left: 20px;
}

li {
  list-style-type: none;
}

.step-options {
  padding-left: 10px;
}
</style>
