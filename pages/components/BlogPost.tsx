import React from "react"
import Test from "../posts/test.mdx"

const BlogPost: React.FunctionComponent = () => {
    React.createElement(Test)
    console.log(Object.keys(Test))
    return (
        <div className="flex bg-white items-center p-10 mb-10 rounded-md shadow-lg">
            <div className="prose prose-lg prose-slate prose-headings:font-display prose-code:font-firaCode font-serif max-w-none">
                <Test></Test>
            </div>
        </div>
    )
}

export default BlogPost