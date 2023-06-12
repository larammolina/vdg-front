import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Sidebar } from '../components/Sidebar/Sidebar'


const Layout = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
			<Sidebar/>
      <div className="flex flex-col p-7 grow justify-between ">
				
				<main>
					<Outlet />
				</main>

				<Footer />
      </div>

    </div>
  )
}

export default Layout