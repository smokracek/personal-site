import React from "react"
import Caracal1 from "../posts/caracal1.mdx"

const BlogPosts: React.FunctionComponent = () => {
    React.createElement(Caracal1)
    console.log(Object.keys(Caracal1))
    return (
        <div className="flex bg-white items-center p-10 mb-10 rounded-md shadow-lg">
            <div className="prose prose-lg prose-slate prose-headings:font-display prose-code:font-firaCode font-serif max-w-none">
                <Caracal1></Caracal1>
            </div>
        </div>
    )
}

export default BlogPosts