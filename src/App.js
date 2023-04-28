import React, { lazy, Suspense, useState, useContext } from "react";
import UserContext from "./utils/UserContext";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import { Provider } from "react-redux";
import store from "./utils/store";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/AboutUs"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    user: {
      name: "Kaif",
      email: "kaifshaikh2013.sk@gmail.com",
    },
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={user}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />,
          </Suspense>
        ),
      },
      {
        path: "/Instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
