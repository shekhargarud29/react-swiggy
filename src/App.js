// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Headerfile";
// import Body from "./components/Bodyfile";
import Footer from "./components/Footerfile";
// import { AppRouter } from "./components/AppRouter";
// import { RouterProvider } from "react-router-dom";
// import Body from "./components/Bodyfile";
import { Outlet } from "react-router-dom";
import { menuIdContext } from "./utils/userContext";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/store";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// import { useState } from "react";
// import { provider } from "react";
function App() {
  const [menuId, setMenuId] = useState("");
  // const [sum, setSum] = useState(0);
  // const [countObj, setCountObj] = useState({});
  // console.log(menuId);
  // const countObj = useSelector((val) => val.cart.countsObj);

  const location = useLocation();
  // console.log(location.pathname);

  const noFooter = ["/SearchBar", "/searchbar", `/menu/${menuId}`];
  const hideFooter = noFooter.includes(location.pathname);

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
      <Provider store={appStore}>
        <Toaster />
        <Header />
        <menuIdContext.Provider value={{ menuId: { menuId }, setMenuId }}>
          <Outlet />
        </menuIdContext.Provider>
        {/* <RouterProvider router={AppRouter} /> */}

        {!hideFooter && <Footer />}
      </Provider>
    </>
  );
}

export default App;
