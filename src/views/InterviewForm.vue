<template>
  <div class="block">
<!--    <h1>Form</h1>-->
    <div class="form-wrapper">
      <form>
        <fieldset>
          <label for="company">Company: </label>
          <input v-model="company" id="company" type="text" placeholder="Company Name"><br>

          <label for="offer">Offer received: </label>
          <input v-model="offer" id="offer" type="checkbox"><br>

          <label for="date">Date</label>
          <input v-model="date" id="date" type="date"><br>

          <label for="steps-screen">Steps (select all that apply)</label>
            <input type="radio" id="steps-screen" value="HR screening" name="steps">
            <input type="radio" id="steps-video" value="Video interview" name="steps">
            <input type="radio" id="steps-takehome" value="Take-home challenge" name="steps">
            <input type="radio" id="steps-whiteboard" value="Whiteboard w/interviewer" name="steps">
          <br>

          <label for="description">Description of the tech challenge: </label>
          <input v-model="description" id="description" type="text" placeholder="As much detail as you can"><br>

          <label for="solution">Solution: </label>
          <input v-model="solution" id="solution" type="text" placeholder="What did you do?"><br>

          <label for="retro">Retrospective: </label>
          <input v-model="retro" id="retro" type="text" placeholder="What could you have done better?"><br>

          <label for="takeaways">Takeaways: </label>
          <input type="text" v-model="takeaways" id="takeaways" placeholder="What lessons were learned?">

        </fieldset>
      </form>
      <div class="form-data" v-if="company">
        <p>{{ company }}  ({{ offer ? 'offer received' : 'no offer' }})</p>
        <p>Applied {{ date }}</p>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InterviewForm',
  data () {
    return {
      company: '',
      date: '',
      description: '',
      offer: null,
      retro: '',
      solution: '',
      steps: [],
      takeaways: []
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

label {
  padding-left: 20px;
}

input {
  font-size: 1.4rem;
  border: none;
  margin-left: 20px;
  border-bottom: 1px solid grey;
}

.form-data {
  width: 40%;
  background: pink;
}

input[type=text] {
  width: 90%;
}

input[type=checkbox] {
  -ms-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  -o-transform: scale(1.5);
  transform: scale(1.5);
  margin-left: 20px;
}
</style>
