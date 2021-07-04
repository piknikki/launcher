<template>
  <div class="wrapper">
    <table class="interviews-container">
      <tr v-for="(interview, index) in fetchedInterviews"
          :key="interview.key"
          :data-id="index"
          class="row"
          :class="rowColor(index)"
      >
        <RouterLink :to="{ name: 'Interview', params: { id: interview.id, slug: interview.slug }}">
          {{ interview.company }}
        </RouterLink>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Interviews',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'fetchedInterviews'
    ])
  },
  methods: {
    ...mapActions([
      'fetchInterviews'
    ]),
    rowColor: function (row) {
      const rowNum = Number(row)
      return {
        grey: rowNum % 2 === 0
      }
    }
  },
  created () {
    this.fetchInterviews()
  }
}
</script>

<style scoped>
.wrapper {
  margin: 20px auto;
  padding: 20px;
  width: 65%;
  border-radius: 7px;
  -webkit-box-shadow: 0 0 10px #818080;
  box-shadow: 0 0 10px #818080;
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
