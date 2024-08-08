// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Headerfile";
// import Body from "./components/Bodyfile";
import Footer from "./components/Footerfile";
// import { AppRouter } from "./components/AppRouter";
// import { RouterProvider } from "react-router-dom";
// import Body from "./components/Bodyfile";
import { Outlet } from "react-router-dom";
// import { menuIdContext } from "./utils/userContext";

// import { useState } from "react";
// import { provider } from "react";
function App() {
  // const [menuId, setMenuId] = useState("");
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <Header />
      {/* <menuIdContext.Provider value={{ menuId: { menuId }, setMenuId }}> */}
      <Outlet />
      {/* </menuIdContext.Provider> */}
      {/* <RouterProvider router={AppRouter} /> */}

      <Footer />
    </>
  );
}

export default App;
