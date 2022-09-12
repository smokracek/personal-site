import type { NextPage } from "next"
import Head from "next/head"
import Header from "./components/Header"
import Image from "next/image"
import mePic from "../public/me.jpeg"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-white h-screen w-screen">
      <Head>
        <title>Sam Mokracek</title>
        <meta name="description" content="SamMokracek.com, home" />
      </Head>

      <Header></Header>

      <div className="flex flex-col w-1/2 h-screen self-center place-content-center">
        <div className="flex flex-row self-center h-fit justify-around items-center">
          <Image src={mePic} alt="A picture of me" className="rounded-full scale-75 shadow-xl"></Image>
          <h1 className="text-4xl font-display italic">
            {`Hi, I'm Sam Mokracek.`}
          </h1>
        </div>
        <p className="text-xl font-serif self-center text-justify">
          {`I'm an aspiring software engineer at Westmont College, where I'm currently
          pursuing a degree in Computer Science and Data Analytics. I have a particular passion
          for the study of programming languages, especially functional languages at the moment.
          I'm learning to do fullstack-ish work, but I prefer backend engineering for data-intensive
          applications. If you want, you can check out my blog where I plan to post about my work,
          personal projects, and more.`}
        </p>
      </div>

    </div>
  )
}

export default Home
