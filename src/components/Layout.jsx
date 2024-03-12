import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Unauthorized from "./Unauthorized";

function App() {
  const user = useSelector((state) => state.user.usuarioLogguer);
  if (!user) {
    return (
      <Unauthorized />
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