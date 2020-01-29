import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDBuIMQcQE4UYPmm-auWQ7Qw6vheyD8WEk",
  authDomain: "post-dfd61.firebaseapp.com",
  databaseURL: "https://post-dfd61.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
