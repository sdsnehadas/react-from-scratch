import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {
  clearCart,
  increaseItemQuantity,
  reduceItemQuantity,
} from "../utils/cartSlice";

const CartPage = () => {
  const cart = useSelector((store) => store.cart);
  const cartItems = cart.items;
  const cartTotalAmount = cart.totalAmount;
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const increaseQuantity = (item) => {
    dispatch(increaseItemQuantity(item));
  };
  const reduceQuantity = (id) => {
    dispatch(reduceItemQuantity(id));
  };

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <div>
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          {cartItems.length == 0 && (
            <div>
              <img
                className="w-3/4 justify-center items-center m-20 px-20"
                src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
              />
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div>
            <button
              className="rounded-full w-[200] max-w-[280px] text-center justify-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700"
              onClick={()=>handleClearCart()}
            >
              Clear Cart
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="hidden lg:grid grid-cols-2 py-6">
              <div className="font-normal text-xl leading-8 text-gray-500">
                Product
              </div>
              <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                <span className="w-full max-w-[260px] text-right">
                  Quantity
                </span>
                <span className="w-full max-w-[200px] text-end">Total</span>
              </p>
            </div>

            {cartItems.map((item, id) => {
              return (
                <div
                  key={id}
                  className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
                >
                  <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div className="img-box">
                      <img
                        className="xl:w-[140px] rounded-xl"
                        src={
                          item.card.info.imageId
                            ? CDN_URL + item.card.info.imageId
                            : "https://silverhillsbakery.ca/wp-content/uploads/2019/02/SHB_Canada-FoodGuide_1200x800_BLOG-1200x800-c-default.jpg"
                        }
                      ></img>
                    </div>
                    <div className="pro-data w-full max-w-sm ">
                      <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center"></h5>
                      <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                        {item?.card?.info?.name}
                      </p>
                      <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
                        {item?.card?.info?.price / 100}
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <div className="flex items-center w-full mx-auto justify-start">
                      <button
                        onClick={() => reduceQuantity(item)}
                        className="group rounded-l-full px-6 py-[10px] border border-gray-400 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <Tooltip title="Reduce quantity">
                          <IconButton>
                            <RemoveIcon aria-label="reduce quantity" />
                          </IconButton>
                        </Tooltip>
                      </button>
                      <input
                        type="text"
                        defaultValue={item.quantity}
                        className="border-y border-gray-400 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                        placeholder={item.quantity}
                      />
                      <button
                        onClick={() => increaseQuantity(item)}
                        className="group rounded-r-full px-6 py-[10px] border border-gray-400 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <Tooltip title="Increase quantity">
                          <IconButton>
                            <AddIcon aria-label="increase quantity" />
                          </IconButton>
                        </Tooltip>
                      </button>
                    </div>
                    <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-start">
                      {(item?.card?.info?.price / 100) * item.quantity}
                    </h6>
                  </div>
                </div>
              );
            })}

            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-normal text-xl leading-8 text-gray-400">
                  Sub Total
                </p>
                <h6 className="font-semibold text-xl leading-8 text-gray-900 float-left">
                  💰{cartTotalAmount.toFixed(2)}
                </h6>
              </div>
              <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                <p className="font-normal text-xl leading-8 text-gray-400">
                  Delivery Charge
                </p>
                <h6 className="font-semibold text-xl leading-8 text-gray-900">
                  💰45.00
                </h6>
              </div>
              <div className="flex items-center justify-between w-full py-6">
                <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                  Total
                </p>
                <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                  💰{(cartTotalAmount+ 45).toFixed(2)}
                </h6>
              </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
              <button className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">
                  Add Coupon Code
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                    stroke="#4F46E5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
                Continue to Payment
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                >
                  <path
                    d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
