import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.totalItems);
  return (
    <div>
      <div className="">
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/011/717/970/non_2x/let-s-eat-handwritten-inscription-in-a-modern-style-with-a-picture-of-a-pot-of-soup-vector.jpg"
                className="h-14 hover:animate-bounce"
                alt="Flowbite Logo"
              />
                <span className="hover:animate-spin self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  LET'S EAT
                </span>
            </a>

            <div className="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <div>
                <Link to="/cart">
                  <IconButton>
                    <ShoppingCartIcon aria-label="add to shopping cart" />
                  </IconButton>
                </Link>
              </div>

              { cartItems > 0 && <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 bg-green-500 `${cartbgColor}` border-white rounded-full top-2 end-78 dark:border-gray-900">
                {cartItems}
              </div>}
              <Tooltip title="Log In">
                <IconButton size="large" color="inherit">
                  <LoginIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Sign Up">
                <IconButton
                  className="text-sm"
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                  {user.loggedInUser}
                </IconButton>
              </Tooltip>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/aboutUs"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contactUs"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
