import React from "react"
import Test from "../test.mdx"

const BlogPost: React.FunctionComponent = () => {
    React.createElement(Test)
    console.log(Object.keys(Test))
    return (
        <div className="flex bg-white items-center p-10 rounded-md shadow-lg">
            <div className="prose prose-lg prose-slate prose-headings:font-display font-serif max-w-none">
                <Test></Test>
            </div>
        </div>
    )
}

export default BlogPost