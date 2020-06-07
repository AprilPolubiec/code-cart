import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

var firebaseui = require('firebaseui')

const firebaseConfig = {
  apiKey: 'AIzaSyDf90EO4gwMdUCiUHxPmG_8cLD3EgagKHw',
  authDomain: 'code-cart.firebaseapp.com',
  databaseURL: 'https://code-cart.firebaseio.com',
  projectId: 'code-cart',
  storageBucket: 'code-cart.appspot.com',
  messagingSenderId: '345014401316',
  appId: '1:345014401316:web:6eb496e913b7007d8b1bb1',
  measurementId: 'G-ZPXFEDQNRX',
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const functions = firebase.functions()
export const auth = firebase.auth()

export const ui = new firebaseui.auth.AuthUI(auth)

export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      var { email, name, picture } = authResult.additionalUserInfo.profile
      if (authResult.additionalUserInfo.isNewUser) {
        //Create doc
        db.collection('users').doc(authResult.user.uid).set({
          email,
          name,
          picture,
        })
      }
      return false
    },
  },
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
}

if (process.env.NODE_ENV === 'development') {
  if (document.location.hostname === 'localhost') {
    functions.useFunctionsEmulator('http://localhost:5001')
  }
}
