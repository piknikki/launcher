<template>
  <div class="block">
<!--    <h1>Form</h1>-->
    <div class="form-wrapper">
      <form v-on:submit.prevent.self="onSubmit">
        <fieldset>
          <legend>Submit a new interview experience</legend>
          <label for="user">Your name:<sup class="required">*</sup> </label>
          <input v-model="formData.user" id="user" type="text" placeholder="First name and last initial, if you don't mind" required>
          <br>

          <label for="company">Company:<sup class="required">*</sup> </label>
          <input v-model="formData.company" id="company" type="text" placeholder="Company Name" required>
          <br>

          <label for="offer">Offer received: </label>
          <input v-model="formData.offer" id="offer" type="checkbox">
          <br>

          <label for="date">Date you applied:<sup class="required">*</sup> </label>
          <input v-model="formData.date" id="date" type="date" required>
          <br>

          <label>Steps (select all that apply, at least one)<sup class="required">*</sup></label>
          <div class="options-wrapper">
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
              <input type="checkbox" id="steps-tech" value="technical" v-model="formData.steps">
              <label for="steps-tech" class="step-options">Technical interview</label>
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
              <label class="step-options">Other: </label>
              <input v-if="other" type="text" value="other" v-model.lazy="otherText" @change="setOtherText">
            </div>
          </div>
          <br>

          <label for="description">Description of the tech challenge: </label>
          <textarea v-model="formData.description"
                    id="description"
                    placeholder="As much detail as you can"
                    rows="2"
                    cols="60"
                    wrap="soft"
          ></textarea>
          <br>

          <label for="solution">Solution: </label>
          <textarea v-model="formData.solution"
                    id="solution"
                    placeholder="What did you do?"
                    rows="2"
                    cols="60"
                    wrap="soft"
          ></textarea>
          <br>

          <label for="retro">Retrospective: </label>
          <textarea v-model="formData.retro"
                    id="retro"
                    placeholder="What could you have done better? Include feedback, if you received it."
                    rows="2"
                    cols="60"
                    wrap="soft"
          ></textarea>
          <br>

          <label for="takeaways">Takeaways (tl;dr):<sup class="required">*</sup> </label>
          <textarea v-model="formData.takeaways"
                    id="takeaways"
                    placeholder="What lessons were learned?"
                    rows="2"
                    cols="60"
                    wrap="soft"
                    required
          ></textarea>
          <br>
          <div class="button-wrapper">
            <button type="submit"> Submit</button>
          </div>
        </fieldset>
      </form>
<!--      <div class="form-data" v-if="formData.company">-->
<!--        <p>slug: {{ slug }}</p>-->
<!--        <p>company: {{ formData.company }}  ({{ formData.offer ? 'offer received' : 'no offer' }})</p>-->
<!--        <p>Applied {{ formData.date }}</p>-->
<!--        <p>{{ formData.description }}</p>-->
<!--        <p>steps {{ formData.steps }}</p>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
import { db } from '../firebaseDb'

export default {
  name: 'InterviewForm',
  data () {
    return {
      formData: {
        user: '',
        company: '',
        date: '',
        description: '',
        offer: null,
        retro: '',
        solution: '',
        steps: [],
        takeaways: '',
        slug: ''
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
      const slugifiedName = slugify(this.formData.company, {
        replacement: '-',
        remove: /[$*_+~.()'"!?\-:@]/g,
        lower: true
      })
      this.formData.slug = slugifiedName
      console.log(this.formData)

      return db.collection('interviews').add({
        user: this.formData.user,
        company: this.formData.company,
        date: this.formData.date,
        description: this.formData.description,
        offer: this.formData.offer,
        retro: this.formData.retro,
        solution: this.formData.solution,
        steps: this.formData.steps,
        takeaways: this.formData.takeaways,
        slug: this.formData.slug
      })
        .then(() => {
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.block {
  /*width: 80%;*/
  margin: 20px auto;
  text-align: left;
  font-size: 1.6rem;
}

/*.form-wrapper {*/
/*  display: flex;*/
/*  flex-flow: row nowrap;*/
/*  justify-content: left;*/
/*  align-items: flex-start;*/
/*}*/

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
  max-width: 600px;
  max-height: 100%;
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

.options-wrapper {
  margin: 10px 0 0 20px;
}

.button-wrapper {
  margin: 50px 0;
  float: right;
}

button {
  align-items: center;
  background-color: white;
  box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
  -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  display: flex;
  height: 50px;
  justify-content: center;
  margin-right: 2rem;
  width: 100px;
  font-size: 1.2rem;
}

.required {
  color: red;
}
</style>
