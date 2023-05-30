import React from "react";

const ReTypePass = () => {
  return (
    <div class="container flex justify-center items-center mx-4 ">
      <div class="w-full sm:w-[80%] md:w-[70%] lg:w-[40%]  bg-white p-5 rounded-lg ">
        <div class="px-8  text-center">
          <h class="pt-4 mb-2 text-2xl font-bold">Lấy lại mật khẩu</h>
        </div>
        <form class="px-8 pt-6 pb-4  bg-white rounded">
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Nhập mật khẩu mới
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="password"
              placeholder="Enter new password..."
            />
          </div>
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="pass"
            >
              Nhập lại mật khẩu mới
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="pass"
              type="password"
              placeholder="Enter again new password..."
            />
          </div>

          <div class=" text-center">
            <button
              class="w-full px-4 py-2 font-bold text-white bg-primary-600 rounded-full hover:bg-primary-800 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Xác nhận
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReTypePass;
