import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      {/* Navbar  */}
      <Navbar></Navbar>
      {/* Outlet for nested routes */}
      <Outlet></Outlet>
      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default App;
