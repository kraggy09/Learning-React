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

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {
  const [user, setUser] = useState({
    user: {
      name: "Kaif",
      email: "kaifshaikh2013.sk@gmail.com",
    },
  });
  const displayUser = useContext(UserContext);
  return (
    <UserContext.Provider value={{ user: user }}>
      <Header />
      {displayUser.user.name}
      <Outlet />
      <Footer />
    </UserContext.Provider>
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
