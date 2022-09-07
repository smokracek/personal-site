import type { NextPage } from "next"
import Head from "next/head"
import Header from "./components/Header"
import BlogPost from "./components/BlogPost"

const Blog: NextPage = () => {
  return (
    <div className="flex flex-col bg-slate-100 h-full w-screen">
      <Head>
        <title>Sam Mokracek: Blog</title>
        <meta name="description" content="SamMokracek.com, blog" />
      </Head>

      <div className="flex flex-col">
        <div className="sticky top-0">
          <Header></Header>
        </div>
        <div className="flex flex-col mb-10 w-3/5 self-center place-content-center">
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
        </div>
      </div>
      

    </div>
  )
}

export default Blog
