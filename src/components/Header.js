import { React, Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import { CART_UPDATE_RESET } from "../constants/cartConstants";
import { getCarts } from "../actions/cartActions";
import { getHistoryOrders } from "../actions/orderActions";
import Loading from "../screens/Loading";

import { getProvinceList } from "../actions/GHNActions";
import { Server } from "../apis/Api";
import { searchProducts } from "../actions/productActions";
import { toVND } from "../utils/format";
const user = {};
const defaultAvt =
  "data:image/png;base64,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";
const navigation = [
  { name: "??i???n tho???i", href: "??i???n tho???i", current: false },
  { name: "Tablet", href: "Tablet", current: false },
  { name: "Laptop", href: "Laptop", current: false },
  {
    name: "Ph??? ki???n",
    href: "Ph??? ki???n",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  // Handle Nav
  const [nav, setNav] = useState([
    { name: "??i???n tho???i", href: "??i???n tho???i", current: false },
    { name: "Tablet", href: "Tablet", current: false },
    { name: "Laptop", href: "Laptop", current: false },
    {
      name: "Ph??? ki???n",
      href: "Ph??? ki???n",
      current: false,
    },
  ]);

  const handleCLickNav = (index) => {
    navigation.map((item) => (item.current = false));
    navigation[index].current = true;
    setNav([...navigation]);
  };

  const resetNav = () => {
    navigation.map((item) => (item.current = false));
    setNav([...navigation]);
  };

  //Handle Cart

  //get cart
  const { cartItems, loading } = useSelector((state) => state.carts);
  //check cart update
  const { success } = useSelector((state) => state.cartUpdate);

  const [qt, setQuantity] = useState(0);
  useEffect(() => {
    dispatch(getCarts());
  }, []);
  useEffect(() => {
    // setQuantity(0);
    // cartItems?.forEach((element) => {
    //   setQuantity(quantity + element?.item?.quantity);
    // });

    if (userInfo && cartItems) {
      let { total, quantity, count } = cartItems?.reduce(
        (cartTotal, cartItem) => {
          // console.log(cartItem?.item);
          cartTotal.total += cartItem.item.price * cartItem.item.quantity;
          cartTotal.quantity += cartItem.item.quantity;
          cartTotal.count += 1;
          return {
            ...cartTotal,
          };
        },
        {
          total: 0,
          quantity: 0,
          count: 0,
        }
      );
      setQuantity({ total: total, quantity: quantity, count: count });
    }
    // console.log(qt);
  }, [success, cartItems]);

  //Check Authen

  const [userNavigation, setUserNavigation] = useState([]);

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (success) {
      dispatch({ type: CART_UPDATE_RESET });
    }
    if (userInfo) {
      user.name = userInfo.data.user.name;
      user.email = userInfo.data.user.email;
      user.imageUrl = userInfo.data.user.avatar.url;
      setUserNavigation([
        { name: "T??i kho???n c???a t??i", href: "/user-infor" },
        { name: "????n h??ng c???a t??i", href: "/order-list" },
        { name: "????ng xu???t", href: "/" },
      ]);
    } else {
      user.name = "User Name";
      user.email = "xxx@example.com";
      user.imageUrl = defaultAvt;

      setUserNavigation([
        { name: "????ng nh???p", href: "/login" },
        { name: "????ng k??", href: "/register" },
      ]);
    }
  }, [dispatch, userInfo, history, success, cartItems]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  //handle get Order
  const order = useSelector((state) => state.historyOrders);
  useEffect(() => {
    if (userInfo?.status === true) {
      dispatch(getHistoryOrders());
    }
    // dispatch(getHistoryOrders);
  }, [userInfo]);

  //handle district
  useEffect(() => {
    dispatch(getProvinceList());
  }, []);

  //handle search
  const [paramsSearch, setParamsSearch] = useState({
    page: 1,
    size: 10,
    keyword: "",
  });
  const [isSearch, setIsSearch] = useState(false);
  const listSearch = useSelector((state) => state.productSearch);
  const handleChangeKeyWord = (e) => {
    setParamsSearch({ ...paramsSearch, keyword: e.target.value });
    console.log(paramsSearch);
  };

  const handleSearch = () => {
    dispatch(searchProducts(paramsSearch));
    setIsSearch(true);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="min-h-full sticky top-0 z-10">
        <Disclosure as="nav" className="bg-primary-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <Link className="flex-shrink-0" to="/" onClick={resetNav}>
                      <img className="h-8 w-8" src={logo} alt="Your Company" />
                    </Link>

                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {nav.map((item, index) => (
                          <Link
                            key={item.index}
                            to={`${item.href}`}
                            className={classNames(
                              item.current
                                ? "bg-primary-900 text-white"
                                : "text-primary-300 hover:bg-primary-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                            onClick={() => handleCLickNav(index)}
                            // onClick={setNavigation([
                            //   ...navigation,
                            //   (navigation[index].current = true),
                            // ])}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Search */}
                  <div class="flex justify-center ">
                    <div class="relative w-[240px] sm:w-96">
                      <div class="relative  flex w-full flex-wrap items-stretch">
                        <input
                          // onFocus={setListSearch()}
                          onChange={handleChangeKeyWord}
                          type="search"
                          class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l  
                          border border-solid border-neutral-300 bg-white bg-clip-padding 
                          px-3 py-1.5 text-base font-normal text-slate-500 outline-none transition 
                          duration-300 ease-in-out focus:border-primary focus:text-neutral-700 
                          focus:shadow-te-primary focus:outline-none dark:text-slate-600 dark:placeholder:text-neutral-200"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="button-addon1"
                        />
                        <button
                          class="relative z-[2] flex items-center rounded-r bg-primary-500 px-6 py-2.5 
                          text-xs font-medium uppercase leading-tight text-white shadow-md transition 
                          duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 
                          focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                          type="button"
                          id="button-addon1"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          onClick={handleSearch}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Result Search */}
                      {isSearch && (
                        <div
                          className="  absolute top-[120%] right-0 max-h-80 w-[120%] md:w-full shadow bg-gray-100 
                                          rounded-lg p-2 overflow-y-auto "
                        >
                          <h4 className="text-base font-semibold">
                            K???t qu??? t??m ki???m
                          </h4>
                          <hr className="pb-2" />
                          {/* list  */}
                          {listSearch?.loading ? (
                            <div>Loading...</div>
                          ) : (
                            <div className="flex flex-col ">
                              {listSearch?.products.map((product, i) => (
                                <Link
                                  key={i}
                                  to={
                                    "/product/" +
                                    product?.name?.replaceAll(" ", "-")
                                  }
                                  state={{ slug: product?._id }}
                                  className="grid grid-cols-1 sm:grid-cols-2 py-4 px-2 border bg-white rounded-lg my-1 justify-start"
                                  onClick={() => setIsSearch(false)}
                                >
                                  <div className="col-span-1 mr-4 items-center">
                                    <img
                                      src={product?.image}
                                      alt=""
                                      className="max-w-[full] max-h-36 scale-img"
                                    />
                                  </div>
                                  <div className="col-span-1 flex flex-col">
                                    <h2 className="font-semibold">
                                      {product?.name}
                                    </h2>
                                    <h2 className="font-medium">
                                      {toVND(product?.price)}{" "}
                                      <i>
                                        {product?.productOptions[0]?.promotion}%
                                      </i>
                                    </h2>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6 relative">
                      <Link
                        to={"/cart"}
                        className="rounded-full bg-primary-900 p-1 text-primary-400 hover:text-white 
                        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-800"
                        onClick={resetNav}
                      >
                        <span className="sr-only">View notifications</span>
                        <ShoppingCartIcon
                          className="h-6 w-6  "
                          aria-hidden="true"
                        />
                        <span className="absolute text-white text-xs font-bold top-[-5%] right-[60%]">
                          {userInfo?.status ? qt?.quantity : ""}
                        </span>

                        {/* <div
                          className="absolute h-20 right-[60%] z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 
                        shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                        >
                          Hello anh em
                        </div> */}
                      </Link>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button
                            className="flex max-w-xs items-center rounded-full bg-primary-800 
                          text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-800"
                          >
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full ring-2 ring-white"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.href}
                                    onClick={
                                      item.name === "????ng xu???t"
                                        ? logoutHandler
                                        : null
                                    }
                                    className={classNames(
                                      active ? "bg-primary-100" : "",
                                      "block px-4 py-2 text-sm text-primary-700"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button
                      className="inline-flex items-center justify-center 
                    rounded-md bg-primary-800 p-2 text-primary-400 
                    hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-2
                     focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-800"
                    >
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-primary-900 text-white"
                          : "text-primary-300 hover:bg-primary-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>

                <div className="border-t border-primary-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full ring-2 ring-white"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-primary-400">
                        {user.email}
                      </div>
                    </div>

                    <Link
                      to="/cart"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-primary-800 p-1 text-primary-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-800"
                    >
                      {/* <span className="sr-only">View notifications</span> */}
                      <ShoppingCartIcon
                        className="h-6 w-6 "
                        aria-hidden="true"
                      />
                      <span className="absolute text-white text-xs font-bold top-[-5%] right-[10%]">
                        {userInfo?.status ? qt?.quantity : ""}
                      </span>
                    </Link>
                  </div>

                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        onClick={
                          item.name === "????ng xu???t" ? logoutHandler : null
                        }
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-primary-400 hover:bg-primary-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Header;
