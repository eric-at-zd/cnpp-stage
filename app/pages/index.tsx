import type { NextPage } from 'next'
import Head from 'next/head'
import Home from './components/Home'

const Landing: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Community Navigator Pilot program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </div>
  )
}

export default Landing
