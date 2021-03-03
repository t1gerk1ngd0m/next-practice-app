import { firebase } from '@firebase/app'

export const useAuthenticate = () => {
  firebase.auth().signInAnonymously().catch((e) => {
    console.log(e.message)
  })

  firebase.auth().onAuthStateChanged((u) => {
    if (u) {
      console.log(u.uid)
      console.log(u.isAnonymous)
    } else {

    }
  })
}

console.log(process.browser);

if (process.browser) {
  useAuthenticate()
}
