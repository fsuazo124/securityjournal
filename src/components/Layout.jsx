import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.usuarioLogguer);
  if (!user) {
    return (
      <p className="flex justify-center items-center text-8xl h-screen w-screen">
        Loading...
      </p>
    );
  }
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;