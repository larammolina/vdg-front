import { useState } from "react"
import { BsArrowLeftShort, BsSearch } from "react-icons/bs"
import { AiFillEnvironment } from "react-icons/ai"

export const Sidebar = () => {
	const [open, setOpen ] =  useState(true);
	return (
		<div className={`bg-dark-purple p-5 pt-8 ${ open ? "w-72" : "w-20"} relative duration-300`}>
			<BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border-2 border-dark-purple ${!open && "rotate-180"}`} onClick={() => setOpen(!open) }/>
			<div className="inline-flex">
				<AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
				<h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Motorcito</h1>
			</div>
			<div className={`flex items-center rounded-md bg-light-white mt-6 ${!open? "px-2.5": "px-4" } py-2`}>
				<BsSearch className={`text-white text-lg block float-left cursor-pointer ${ open && "mr-2" }`}/>
				<input type="search" placeholder="Buscar" className={`text-base bg-transparent w-full text-white placeholder-white focus:outline-none ${!open && "hidden"}`}/>
			</div>
		</div>
	)
}
