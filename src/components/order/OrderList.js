import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHistoryOrders } from "../../actions/orderActions";
import Loading from "../../screens/Loading";
import { toDate, toVND } from "../../utils/format";

import { FaLongArrowAltRight } from "react-icons/fa";
import { BsFillCartXFill } from "react-icons/bs";
import { AiTwotoneHome } from "react-icons/ai";
const OrderList = () => {
  const dispatch = useDispatch();
  const { loading, error, listOrders } = useSelector(
    (state) => state.historyOrders
  );
  // console.log(listOrders.length === 0);
  const { userInfo } = useSelector((state) => state.userLogin);
  // useEffect(() => {
  //   // if (userInfo) {
  //   //   dispatch(getHistoryOrders());
  //   // }
  // }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <p>ERROR</p>}
      <div class=" bg-gray-100  rounded-lg border-2 border-dashed border-gray-200 mx-2 ">
        <h1 class="mb-10 text-center text-2xl font-bold">Đơn hàng gần đây</h1>

        {/* List Items */}

        {listOrders?.length === 0 ? (
          <div className="flex items-center justify-center flex-col ">
            <BsFillCartXFill className="w-10 h-10 text-red-600" />
            <h4 className="my-2"> Không có sản phẩm nào trong giỏ hàng</h4>
            <Link to="/" className="flex items-center justify-center mb-4">
              <button
                type=""
                className="  flex w-full  items-center justify-center rounded-md border border-transparent bg-primary-600 py-3 px-8 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <AiTwotoneHome className="mr-2" />
                Về trang chủ
              </button>
            </Link>
          </div>
        ) : (
          <div class="rounded-lg  lg:col-span-1 mx-4">
            {listOrders?.map((OrderItem, index) => (
              <div
                class="justify-between mb-4 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                key={index}
              >
                {/* img */}
                <img
                  src={OrderItem?.orderItems[0]?.image}
                  alt="img"
                  class="w-full rounded-lg sm:w-40"
                />
                {/* detail */}
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  {/* infor */}
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      {OrderItem?.orderItems.length >= 2
                        ? `${OrderItem?.orderItems[0]?.name} và ${
                            OrderItem?.orderItems.length - 1
                          } sản phẩm khác `
                        : OrderItem?.orderItems[0]?.name}
                    </h2>
                    <p class="mt-1 text-base text-gray-700">
                      <b>Ngày đặt:</b> {toDate(OrderItem?.createdAt)}
                    </p>
                    <p class="mt-1 text-base text-gray-700">
                      <b>Tổng cộng:</b> {toVND(OrderItem?.totalPrice)}
                    </p>
                  </div>

                  {/* qt-price */}
                  <div class="mt-4 flex flex-row items-center md:flex-col justify-between md:items-end  ">
                    <div class="flex items-center border-gray-100">
                      <span className="text-gray-700 font-bold">
                        Trạng thái:
                      </span>
                      <b className="ml-2">{OrderItem?.status?.statusNow}</b>
                    </div>

                    <Link to={"/order/" + OrderItem?._id}>
                      {/* <FaLongArrowAltRight className="w-8 h-8 text-primary-600 hover:text-primary-900" /> */}
                      <div className="flex items-center justify-center mb-4">
                        <button
                          type=""
                          className="  flex w -full items-center justify-center rounded-md border border-transparent 
                          bg-primary-600 py-2 px-4 text-base font-medium text-white 
                          hover:bg-primary-700 focus:outline-none focus:ring-2
                           focus:ring-primary-500 focus:ring-offset-2"
                        >
                          <FaLongArrowAltRight className="mr-2" />
                          Chi tiết
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default OrderList;
