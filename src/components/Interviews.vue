<template>
  <div class="wrapper">
    <table class="interviews-container">
      <tr v-for="(interview, index) in interviews"
          :key="interview.key"
          :data-id="index"
          class="row"
          :class="rowColor(index)"
      >
        {{ interview.company }}
      </tr>
    </table>
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
  },
  methods: {
    rowColor: function (row) {
      const rowNum = Number(row)
      return {
        grey: rowNum % 2 === 0
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
}

.interviews-container {
  margin: 0 auto;
  line-height: 2;
  width: 60%;
}

.grey {
  background: #b8b8b8;
}
</style>
