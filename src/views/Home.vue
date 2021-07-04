<template>
  <div class="home">
    <img class="logo" alt="Launcher logo" src="../assets/launcher.png">
    <h1>Launcher Interviews</h1>
    <p>all interviews go here in a table maybe</p>
    <Interviews />
  </div>
</template>

<script>
import { db } from '../firebaseDb'
import Interviews from '../components/Interviews'

export default {
  name: 'Home',
  components: {
    Interviews
  },
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

<style>
.logo {
  width: 75px;
}
</style>
