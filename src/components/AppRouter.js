import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "./Bodyfile";
import { About } from "./Aboutfile";
import { Contact } from "./Contactfile";
import { Cart } from "./Cartfile";
import { SearchBar } from "./SearchBarfile";
import { ErrorPage } from "./ErrorPagefile";
import { Menu } from "./Menufile";
// import{Lazy,}

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "searchbar",
        element: <SearchBar />,
      },
      {
        path: "menu/:id",
        element: <Menu />,
      },
    ],
  },
]);
