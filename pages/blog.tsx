import type { NextPage } from "next"
import Head from "next/head"
import Header from "./components/Header"
import BlogPosts from "./components/BlogPosts"

const Blog: NextPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 w-screen">
      <Head>
        <title>Sam Mokracek ~ Blog</title>
        <meta name="description" content="SamMokracek.com, blog" />
      </Head>

      <div className="flex flex-col">
        <div className="fixed top-0">
          <Header></Header>
        </div>
        <div className="mt-[172px] flex flex-col w-3/5 self-center place-content-center">
          <BlogPosts></BlogPosts>
        </div>
      </div>
      

    </div>
  )
}

export default Blog
