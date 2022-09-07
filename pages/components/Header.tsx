import React, { useEffect, useState } from "react"

const navItems = [
        {title: "Home", url: "/"},
        {title: "Blog", url: "/blog"},
        {title: "LinkedIn", url: "https://www.linkedin.com/in/samuelmokracek/"},
        {title: "Github", url: "https://github.com/smokracek"},
        {title: "Contact", url: "/contact"}
]

const Header: React.FunctionComponent = () => {

    const [isShrunk, setShrunk] = useState(false)
    
    useEffect(() => {
        const handler = () => {
            setShrunk((isShrunk) => {
                if (!isShrunk && (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)) {
                    return true
                }

                if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
                    return false
                }

                return isShrunk
            })
        }

        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, [])

    return (
        <div className={"transition-all duration-300 p-5 mb-10 bg-white w-screen flex flex-row shadow-md " + (isShrunk ? "h-12" : "h-36")}>
            <div className="flex basis-1/5 content-center">
                <h1 className={"transition-all duration-300 self-center font-display " + (isShrunk ? "text-3xl" : "text-5xl")}>Sam Mokracek</h1>
            </div>
            <div className="border-r-2 border-slate-200 mr-5 ml-5"></div>
            <div className="flex flex-row w-full basis-4/5 place-content-around items-center font-serif text-2xl">
                {
                    navItems.map(item => (
                        <a href={item.url} key={item.title} className="hover:text-slate-500">{item.title}</a> 
                    ))
                }
            </div>
        </div>
    )
}

export default Header