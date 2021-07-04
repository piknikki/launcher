<template>
  <div>
    <ul>
      <li v-for="interview in interviews" :key="interview.key">{{ interview }}</li>
    </ul>
  </div>
</template>

<script>
import { db } from '../firebaseDb'

export default {
  name: 'Interviews',
  data () {
    return {
      interviews: []
    }
  },
  created () {
    db.collection('interviews').onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        this.interviews.push({
          key: doc.id,
          company: doc.data().company,
          date: doc.data().date,
          description: doc.data().description,
          offer: doc.data().offer,
          retro: doc.data().retro,
          solution: doc.data().solution,
          steps: doc.data().steps,
          takeaways: doc.data().takeaways
        })
      })
    })
  }
}
</script>

<style scoped>

</style>
