import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Table from './Table'
const Layout = () => {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>
    </>
  );
}

export default Layout;
