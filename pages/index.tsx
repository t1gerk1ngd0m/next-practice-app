import { useEffect, FC, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

import { auth } from '../src/utils/firebase'

const Home: FC = (props: any) => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<null | object>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : router.push('/logIn')
    })
  }, [])

  const logOut = async () => {
    try {
      await auth.signOut()
      router.push('/logIn')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <div className="flex justify-center">
        aaa
      </div>
      <pre>{currentUser && JSON.stringify(currentUser, null, 4)}</pre>
      <button onClick={logOut}>Logout</button>
    </div>
  )
}

export default Home
