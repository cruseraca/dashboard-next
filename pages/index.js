import Head from 'next/head'
import Main from './Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard with nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}
