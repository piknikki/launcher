<template>
  <div class="interview-container">
    <h1>{{ interview.company }}</h1>
    <section>Interviewee: {{ interview.user }}</section>
    <section>Offer? {{ interview.offer ? 'Yes' : 'No' }}</section>
    <section>Position applied to: {{ interview.title }}</section>
    <section>
      <ul>Stack:
        <li v-for="(tech, index) in interview.stack" :key="index">{{ tech }}</li>
      </ul>
    </section>
    <section>
      <span class="bold">Takeaways (tl;dr): </span>{{ interview.takeaways }}
    </section>
    <section>Date of application: {{ interview.date }}</section>
    <section>
      <ul>Steps in the interview process:
        <li v-for="(step, index) in interview.steps" :key="index">{{ step }}</li>
      </ul>
    </section>
    <section>Tech challenge:  {{ interview.description }}</section>
    <section>My solution:  {{ interview.solution }}</section>
    <section>What I think went wrong:  {{ interview.retro }}</section>
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

section {
  border: 1px solid grey;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
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
