<template>
  <div class="interview-container">
    <h1>{{ interview.company }}</h1>
    <p>Interviewee: {{ interview.user }}</p>
    <p>Offer? {{ interview.offer ? 'Yes' : 'No' }}</p>
    <div>
      <span class="bold">Takeaways (tl;dr): </span>{{ interview.takeaways }}
    </div>
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
  font-size: 1.3rem;
}

li {
  list-style-type: none;
  padding-left: 15px;
}

.bold {
  font-weight: 700;
  font-size: 1.4rem;
}
</style>
