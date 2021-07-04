<template>
  <div>
    <h1>Form</h1>
  </div>
</template>

<script>
import { db } from '../firebaseDb'

export default {
  name: 'InterviewForm',
  data () {
    return {
      company: String,
      date: Date,
      description: String,
      offer: Boolean,
      retro: String,
      solution: String,
      steps: Array,
      takeaways: Array
    }
  }
}
</script>

<style scoped>

</style>
