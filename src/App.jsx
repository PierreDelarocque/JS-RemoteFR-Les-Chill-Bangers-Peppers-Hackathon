import { Outlet } from "react-router-dom";
import NavBar from "../src/components/NavBar";

import "./Index.css";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
