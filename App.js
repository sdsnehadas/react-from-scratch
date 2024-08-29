import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import DesignedBar from "./src/components/DesignedBar";
import Footer from "./src/components/Footer";
import BodyContainer from "./src/components/BodyContainer";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import Restaurentmenu from "./src/components/Restaurentmenu";
import Header from "./src/components/Header"
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import CartPage from "./src/components/CartPage";

const AppComponent = () => {
  return (
    <Provider store={appStore}>
       <div>
      <Header/>
      <DesignedBar />
      <Outlet />
      <Footer />
    </div>
    </Provider>
   
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      { path: "/", element: <BodyContainer /> },
      { path: "/aboutUs", element: <AboutUs></AboutUs> },
      { path: "/contactUs", element: <ContactUs></ContactUs> },
      { path: "/cart", element: <CartPage></CartPage> },
      {path:"/restaurents/:resId", element:<Restaurentmenu></Restaurentmenu>}
    ],
    errorElement: <Error />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
