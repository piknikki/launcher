import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyAkYT6ocKhvitd9jN8sDgQR4TjOgi2Wkss',
  authDomain: 'launcher-30e4a.firebaseapp.com',
  projectId: 'launcher-30e4a',
  storageBucket: 'launcher-30e4a.appspot.com',
  messagingSenderId: '1073805040980',
  appId: '1:1073805040980:web:0b50784d3d581dd2b1bcc1',
  measurementId: 'G-E4C1Z6CJZ1'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
