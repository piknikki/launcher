<template>
  <div class="wrapper">
    <table class="interviews-container">
      <tbody>
      <tr v-for="(interview, index) in fetchedInterviews"
          :key="interview.key"
          :data-id="index"
          class="row"
          :class="rowColor(interview.offer)"
      >
        <RouterLink :to="{ name: 'Interview', params: { id: interview.id, slug: interview.slug }}">
          {{ interview.company }}
        </RouterLink>
      </tr>
      </tbody>
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
    rowColor: function (offer) {
      return {
        green: offer === true
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
  font-size: 1rem;
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
  font-size: 1.4rem;
}

.grey {
  background: #b8b8b8;
}

.green {
  background: #b0f6b0;
}

a {
  text-decoration: none;
}

</style>
