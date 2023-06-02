import { BsArrowLeftShort } from "react-icons/bs"
import { useState } from "react"

export const Sidebar = () => {
	const [open, setOpen ] =  useState(true);
	return (
		<div className={`bg-dark-purple h-screen p-5 pt-8 ${ open ? "w-72" : "w-20"} relative duration-300`}>
			<BsArrowLeftShort className="bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border-2 border-dark-purple" onClick={() => setOpen(!open) }/>
		</div>
	)
}
