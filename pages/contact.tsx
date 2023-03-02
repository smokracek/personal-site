import type { NextPage } from "next"
import Head from "next/head"
import Header from "./components/Header"

const Contact: NextPage = () => {
    return (
      <div className="flex flex-col bg-gray-100 h-screen w-screen">
        <Head>
          <title>Sam Mokracek ~ Contact</title>
          <meta name="description" content="SamMokracek.com, contact" />
        </Head>

        <Header></Header>
        
        <div className="flex flex-col w-1/2 h-screen self-center place-content-center">
          <h1 className="font-display italic text-3xl self-center mb-10">{`Contact Me.`}</h1>
          <a className="font-serif text-lg self-center">{`Phone: 818-640-3156`}</a>
          <a className="font-serif text-lg self-center">{`Email: samuelmokracek@gmail.com`}</a>
        </div>
      </div>
    ) 
}

export default Contact