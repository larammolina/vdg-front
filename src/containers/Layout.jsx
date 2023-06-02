import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Sidebar } from '../components/Sidebar/Sidebar'


const Layout = () => {
  return (
    <div className='flex'>
			<Sidebar/>
      <main className="p-7">
      <Header />
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default Layout