import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="" />
        <p className="description">
         <img style={{width:"100%"}} src="https://cdn.pixabay.com/animation/2023/05/28/16/56/16-56-27-962_512.gif"/>
        </p>
      </main>
    </div>
  )
}
