import { Link, useLocation, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main className="md:w-3/4 p-10 ">
          <h1 className='text-2xl'>Hola desde main</h1>
        </main>
      </div>
    </>
  );
}

export default Layout;
