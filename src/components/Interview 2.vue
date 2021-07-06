<template>
  <div class="interview-container">
    <h1>{{ interview.company }}</h1>
    <div>
      Takeaways (tl;dr):
      <ul>
        <li v-for="(t, index) in interview.takeaways" :key="index">{{ t }}</li>
      </ul>
    </div>
    <p>Interviewee: Nikki P.</p>
    <p>Offer? {{ interview.offer }}</p>
    <p>Date of application: {{ interview.date }}</p>
    <ul>Steps in the interview process:
      <li v-for="(step, index) in interview.steps" :key="index">{{ step }}</li>
    </ul>
    <p>Tech challenge:  {{ interview.description }}</p>
    <p>My solution:  {{ interview.solution }}</p>
    <p>What I think went wrong:  {{ interview.retro }}</p>
  </div>
</template>

<script>
export default {
  name: 'Interview',
  computed: {
    interview () {
      return this.$store.getters.getSelectedInterview(this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.interview-container {
  width: 60%;
  margin: 20px auto;
  text-align: left;
}

li {
  list-style-type: none;
  padding-left: 10px;
}
</style>
