import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import Shrimmer from "./components/Shrimmer";
import UserContext from "./utils/UseerContect";
// import Grocery from "./components/grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const Grocery = lazy(() => import("./components/grocery"));

const ApplayOut = () => {
  const [userName, setuserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Jino John",
    };
    setuserName(data.name);
  });
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
        <div className='App'>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
      //{" "}
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ApplayOut />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shrimmer />}>
            <Grocery />{" "}
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
