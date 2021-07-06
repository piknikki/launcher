import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebaseDb'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchedInterviews: []
  },
  mutations: {
    setFetchedInterviews (state, payload) {
      state.fetchedInterviews = payload
    }
  },
  actions: {
    fetchInterviews (context) {
      return db.collection('interviews').get()
        .then(snapshot => {
          const snapArray = []
          snapshot.forEach(doc => {
            const interview = doc.data()
            interview.id = doc.id
            snapArray.push(interview)
          })
          context.commit('setFetchedInterviews', snapArray)
        })
    },
    sendInterview (context, payload) {
      return db.collection('interviews').add({
        company: payload.company,
        date: payload.date,
        description: payload.description,
        offer: payload.offer,
        retro: payload.retro,
        solution: payload.solution,
        steps: payload.steps,
        takeaways: payload.takeaways,
        slug: payload.slug
      })
    }
  },
  getters: {
    getSelectedInterview: (state) => (id) => {
      return state.fetchedInterviews.find(interview => interview.id === id)
    }
  },
  modules: {
  }
})
