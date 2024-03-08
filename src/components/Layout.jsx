import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Table from './Table'
const Layout = () => {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div class="flex min-h-screen flex-row bg-gray-100 text-gray-800">
        <Sidebar />

        <main class="main -ml-48 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
          <div class="flex h-full w-auto bg-white text-2xl font-bold shadow-md p-10">
            <Table />
          </div>
        </main>
      </div>
    </>
  );
}

export default Layout;
