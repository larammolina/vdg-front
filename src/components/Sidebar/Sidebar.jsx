import { useState } from "react"
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsReverseLayoutSidebarReverse } from "react-icons/bs"
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFundProjectionScreen } from "react-icons/ai"
import { BiFootball } from "react-icons/bi";
import { RiDashboardFill, RiFlowChart } from "react-icons/ri"
import { Link } from "react-router-dom";
import '../Header/NavBar/nav.css'

export const Sidebar = () => {
	const [open, setOpen ] =  useState(true);
	const [submenuOpen, setSubmenuOpen ] =  useState(false);
	const Menus = [
		{index:1, path: '', title: "Buscar Errores", icon : <AiOutlineBarChart/>},
		{index:2, path: 'pronostico', title: "Pronóstico", icon: <AiOutlineFundProjectionScreen/> },
		{index:3,
			path: 'servicios',
			title: "Servicios",
			icon: <AiOutlineBarChart/>,
			submenu: true,
			submenuItems:[
				{index: "a", path: 'contratacion-prod', title:"Contratación Producto"},
				{index: "b", path: 'contratacion-cli', title:"Contratación Cliente"},
				{index: "c", path: 'evaluacion', title:"Evaluación Crediticia"},
			]
		},
		{index:4, path: 'MapearErrores', title: "Mapear Errores desde Archivo", icon: <BsReverseLayoutSidebarReverse/>}
	]
	
	return (
		<div className={`bg-dark-purple p-5 pt-8 ${ open ? "w-72" : "w-20"} relative duration-300`}>
			<BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border-2 border-dark-purple ${!open && "rotate-180"}`} onClick={() => setOpen(!open) }/>

			<div className="inline-flex">
				<BiFootball className={`bg-light-orange text-4xl rounded-full cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
				<h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Motorcito</h1>
			</div>

			{/* <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open? "px-2.5": "px-4" } py-2`}>
				<BsSearch className={`text-white text-lg block float-left cursor-pointer ${ open && "mr-2" }`}/>
				<input type="search" placeholder="Buscar" className={`text-base bg-transparent w-full text-white placeholder-white focus:outline-none ${!open && "hidden"}`}/>
			</div> */}

			<ul className="pt-2">
				{
					Menus.map( (menu, index) => (
						<div  key={index}>
						<li  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-light-white ${menu.spacing ? "mt-9" : "mt-2"}`}>
							<span className="text-2xl block float-left">
							<Link to={'/' + menu.path } className="link" >{menu.icon ? menu.icon :  <RiDashboardFill/>}</Link>
							</span>
							<span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>
								<Link to={'/' + menu.path } className='link'>{menu.title}</Link>
							</span>
							{menu.submenu && open &&(<BsChevronDown className={`duration-500 ${submenuOpen && "rotate-[90deg]"}`} onClick={() => setSubmenuOpen(!submenuOpen) }/>)}
							
						</li>
								{menu.submenu && submenuOpen && open && (
									<ul>
										{
											menu.submenuItems.map((submenuItem, subindex) =>(
												<li key={subindex} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 rounded-md  hover:bg-light-white`}>
													<Link to={'/servicios/' + submenuItem.path } className='link'>{submenuItem.title}</Link>
												</li>
											))
										}
									</ul>
								)}
					</div>
					))
				}
			</ul>

		</div>
	)
}
