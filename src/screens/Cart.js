import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { TiDelete } from "react-icons/ti";

import { updateCart } from "../actions/cartActions";
import {} from "../actions/orderActions";
import { toVND } from "../utils/format";
import Loading from "./Loading";

const Cart = () => {
  const dispatch = useDispatch();
  //Handle Cart

  //get cart
  const { cartItems } = useSelector((state) => state.carts);
  //check cart update
  const { loading, error } = useSelector((state) => state.cartUpdate);

  //handle Update quantity
  const plusQT = (index) => {
    console.log("Plus");

    //checkout qt
    if (cartItems[index].item.quantity === cartItems[index].item.countInStock) {
      toast.error("Số lượng đạt giới hạn", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const body = {
        itemId: cartItems[index]?._id,
        quantity: cartItems[index].item.quantity + 1,
      };

      dispatch(updateCart(body.itemId, body.quantity));
      // check error
      if (error) {
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.success("Tăng số lượng thành công!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  const minusQT = (index) => {
    console.log("Minus");
    // check qt
    if (cartItems[index].item.quantity === 1) {
      toast.error("Không thể giảm tiếp!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const body = {
        itemId: cartItems[index]?._id,
        quantity: cartItems[index].item.quantity - 1,
      };

      dispatch(updateCart(body.itemId, body.quantity));

      //check error
      if (error) {
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.success("Giảm số lượng thành công!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  //Remove Item
  const handleRemoveItem = (index) => {
    const body = {
      itemId: cartItems[index]?._id,
      quantity: 0,
    };

    dispatch(updateCart(body.itemId, body.quantity));
    if (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (loading === false) {
      toast.success(`Xóa sản phẩm thành công`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  //
  return (
    <>
      {loading && <Loading />}
      <div class=" bg-gray-100  rounded-lg border-2 border-dashed border-primary-900 ">
        <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>

        <div
          class="  px-6  xl:px-0 
              grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12  mx-4 mb-4 gap-4"
        >
          {/* Items */}
          <div class="rounded-lg  lg:col-span-7 ">
            {cartItems?.map((cartItem, index) => (
              <div
                class="justify-between mb-4 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                key={index}
              >
                {/* img */}
                <img
                  src={cartItem?.item?.image}
                  alt="img"
                  class="w-full rounded-lg sm:w-40"
                />
                {/* detail */}
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  {/* infor */}
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      {cartItem?.item?.name}
                    </h2>
                    <p class="mt-1 text-base text-gray-700">
                      {cartItem?.item?.info?.optionName}
                    </p>
                    <p class="mt-1 text-base text-gray-700">
                      {cartItem?.item?.info?.colorName}
                    </p>
                  </div>

                  {/* qt-price */}
                  <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block   items-center">
                    <div class="flex items-center border-gray-100">
                      <span
                        class="cursor-pointer rounded-l bg-gray-100 py-1 px-3 duration-100 
                    hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => minusQT(index)}
                      >
                        {" "}
                        -{" "}
                      </span>
                      <input
                        class="h-8 w-8 border bg-white text-center text-xs "
                        type="text"
                        disabled
                        value={cartItem?.item?.quantity}
                        min="1"
                      />
                      <span
                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 
                    hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => plusQT(index)}
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>

                    <div class="flex items-center  ">
                      <p class="text-base font-semibold mr-2">
                        {toVND(
                          cartItem?.item?.price * cartItem?.item?.quantity
                        )}
                      </p>
                      <TiDelete
                        onClick={() => handleRemoveItem(index)}
                        className="h-5 w-5 text-red-600 hover:text-primary-600 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <!-- Sub total --> */}
          <div class=" rounded-lg border bg-white p-6 shadow-md md:mt-0  lg:col-span-5">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">$129.99</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">$4.99</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
