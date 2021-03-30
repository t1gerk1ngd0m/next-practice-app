import '../styles/globals.css'
import '../src/utils/firebase'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Layout from '../src/components/Layout'
import { auth } from '../src/utils/firebase'
import Sidebar from '../src/components/Sidebar'
import Header from '../src/components/Header'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:8080/v1/graphql',
});

const MyApp = ({ Component, pageProps }) => {

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

  return currentUser ? (
    <ApolloProvider client={client}>
      <div className="flex h-screen bg-gray-200 font-roboto">
        <Sidebar/>
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header logOut={() => logOut()}/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </div>
    </ApolloProvider>
  ) : (
    <Component {...pageProps} />
  )
}

export default MyApp
