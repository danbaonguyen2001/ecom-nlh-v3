import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="  m-4 rounded-sm border-2 border-slate-400">
      <section class="bg-white">
        <div class=" px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-12 lg:py-9">
          <div class="xl:w-full xl:max-w-sm 2xl:max-w-md ">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Đăng ký tài khoản mới
            </h2>
            <p class="mt-2 text-base text-gray-600">
              Đã có tài khoản?{" "}
              <Link
                to="/login"
                title=""
                class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
              >
                Đăng nhập
              </Link>
            </p>
          </div>

          <form action="#" method="POST" class="mt-8 ">
            {/* Input */}
            <div class=" flex flex-wrap justify-between">
              <div className="w-full lg:w-[45%] mb-3">
                <label for="" class="text-base font-medium text-gray-900">
                  {" "}
                  Tên khách hàng{" "}
                </label>
                <div class="mt-2.5">
                  <input
                    required
                    type="text"
                    name=""
                    id=""
                    placeholder="Nhập tên của bạn"
                    class=" w-full  p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                  />
                </div>
              </div>

              <div className="w-full lg:w-[45%] mb-3">
                <label for="" class="text-base font-medium text-gray-900">
                  {" "}
                  Số điện thoại{" "}
                </label>
                <div class="mt-2.5">
                  <input
                    required
                    type="phone"
                    name=""
                    id=""
                    placeholder="Nhập số điện thoại"
                    class=" w-full  p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                  />
                </div>
              </div>

              <div className="w-full lg:w-[45%] mb-3">
                <label for="" class="text-base font-medium text-gray-900">
                  {" "}
                  Địa chỉ email{" "}
                </label>
                <div class="mt-2.5">
                  <input
                    required
                    type="email"
                    name=""
                    id=""
                    placeholder="Nhập địa chỉ Email"
                    class="w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                  />
                </div>
              </div>

              <div className="w-full lg:w-[45%] mb-3">
                <label for="" class="text-base font-medium text-gray-900">
                  {" "}
                  Mật khẩu{" "}
                </label>
                <div class="mt-2.5">
                  <input
                    required
                    type="password"
                    name=""
                    id=""
                    placeholder="Nhập mật khẩu"
                    class="w-full  p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                  />
                </div>
              </div>

              {/* address */}
              <div className="w-full lg:w-full  mb-3 ">
                <label for="" class="text-base font-medium text-gray-900">
                  {" "}
                  Địa chỉ{" "}
                </label>
                <div className="w-full flex flex-wrap justify-between">
                  <div class="w-[45%] lg:w-[22%]  py-4 flex justify-center">
                    <div class=" w-full">
                      <select
                        class="form-select appearance-none block w-full p-2 text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300
                              rounded-md
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Tỉnh</option>
                        <option value="1">An Giang</option>
                        <option value="2">HCM</option>
                        <option value="3">Đồng Tháp</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-[45%] lg:w-[22%]  py-4 flex justify-center">
                    <div class=" w-full">
                      <select
                        class="form-select appearance-none block w-full p-2 text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300
                              rounded-md
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Huyện</option>
                        <option value="1">Phú Tân</option>
                        <option value="2">Chợ Mới</option>
                        <option value="3">Tân Châu</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-[45%] lg:w-[22%]  py-4 flex justify-center">
                    <div class=" w-full">
                      <select
                        class="form-select appearance-none block w-full p-2 text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300
                              rounded-md
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Xã</option>
                        <option value="1">Phú Lâm</option>
                        <option value="2">Phú Thạnh</option>
                        <option value="3">Phú An</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full lg:w-[22%] py-4 flex justify-center">
                    <input
                      required
                      type="address"
                      name=""
                      id=""
                      placeholder="Địa chỉ đang cư trú"
                      class="w-full  p-2 m-auto  text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full  mb-3 flex">
                <label
                  className="text-base font-medium text-gray-900 mr-4"
                  htmlFor=""
                >
                  Giới tính
                </label>
                <div class="flex justify-center">
                  <div class="form-check form-check-inline mr-4">
                    <input
                      class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="inlineRadio10"
                    >
                      Nam
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="inlineRadio20"
                    >
                      Nữ
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col justify-center items-center">
              <div class="flex items-center my-3">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  class="w-5 h-5 text-blue-600 bg-white border-gray-200 rounded"
                />

                <label
                  for="agree"
                  class="ml-3 text-sm font-medium text-gray-500"
                >
                  Tôi đồng ý với các{" "}
                  <Link
                    to="#"
                    title=""
                    class="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Điều khoản Dịch vụ
                  </Link>{" "}
                  và{" "}
                  <Link
                    to="#"
                    title=""
                    class="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Chính sách Bảo mật của NLH-Ecom's
                  </Link>
                </label>
              </div>

              <div className="w-full text-center">
                <button
                  type="submit"
                  class=" w-full lg:w-[50%] px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </form>

          <div class="mt-3 space-y-3 w-full lg:w-[50%] text-center">
            <button
              type="button"
              class="relative lg:left-[50%] inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
            >
              <div class="absolute inset-y-0 left-0 p-4">
                <svg
                  class="w-6 h-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </div>
              Đăng ký bằng Google
            </button>

            <button
              type="button"
              class="relative lg:left-[50%] inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
            >
              <div class="absolute inset-y-0 left-0 p-4">
                <svg
                  class="w-6 h-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </div>
              Đăng ký bằng Facebook
            </button>
          </div>
        </div>

        {/* <div class="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
            <div>
              <img
                class="w-full mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
                alt=""
              />

              <div class="w-full max-w-md mx-auto xl:max-w-xl">
                <h3 class="text-2xl font-bold text-center text-black">
                  Design your own card
                </h3>
                <p class="leading-relaxed text-center text-gray-500 mt-2.5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis.
                </p>

                <div class="flex items-center justify-center mt-10 space-x-3">
                  <div class="bg-orange-500 rounded-full w-20 h-1.5"></div>

                  <div class="bg-gray-200 rounded-full w-12 h-1.5"></div>

                  <div class="bg-gray-200 rounded-full w-12 h-1.5"></div>
                </div>
              </div>
            </div>
          </div> */}
      </section>
    </div>
  );
};

export default Register;
