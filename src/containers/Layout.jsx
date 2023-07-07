import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import ErroresPorServicio from '../pages/ErroresPorServicio'


const Layout = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
			<Sidebar/>
      <div className="flex flex-col p-7 grow justify-between ">
				
				<main className='grow'>
					<Outlet />
          
				</main>
        
				<Footer />
      </div>

    </div>
  )
}

export default Layout;