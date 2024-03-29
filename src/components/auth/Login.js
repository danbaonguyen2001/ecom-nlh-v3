import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../actions/userActions";
import Loading from "../../screens/Loading";
import { getCarts } from "../../actions/cartActions";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, userInfo, logout } = useSelector(
    (state) => state.userLogin
  );
  useEffect(() => {
    if (userInfo) {
      dispatch(getCarts());
      history("/");
    }
  }, [history, userInfo, dispatch]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    // if (logout) {
    //   toast.info("Mời bạn đăng nhập vào hệ thống!", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
  }, []);
  return (
    <div className="m-4 rounded-sm border-2 border-slate-400 ">
      {loading && <Loading />}
      <section class="bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Đăng nhập
              </h2>
              <p class="mt-2 text-base text-gray-600">
                Chưa có tài khoản?{" "}
                <Link
                  to="/register"
                  class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                >
                  Đăng ký
                </Link>
              </p>

              <form
                onSubmit={submitHandler}
                action="#"
                method="POST"
                class="mt-8"
                autoComplete="true"
              >
                <div class="space-y-5">
                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Địa chỉ Email{" "}
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Nhập địa chỉ email"
                        class="block w-full p-4 text-black placeholder-gray-500 transition-all 
                        duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none 
                        focus:border-blue-600 focus:bg-white caret-blue-600"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <div class="flex items-center justify-between">
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Mật khẩu{" "}
                      </label>

                      <Link
                        to="/forgotpass"
                        class="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                      >
                        {" "}
                        Quên mật khẩu?{" "}
                      </Link>
                    </div>
                    <div class="mt-2.5  ">
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Nhập mật khẩu"
                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Đăng nhập
                    </button>
                  </div>
                </div>
              </form>

              <div class="mt-3 space-y-3">
                <button
                  type="button"
                  class="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
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
                  Đăng nhập bằng Google
                </button>

                <button
                  type="button"
                  class="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
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
                  Đăng nhập bằng Facebook
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
            <div>
              <img
                class="w-full mx-auto"
                src="https://bcp.cdnchinhphu.vn/344443456812359680/2023/4/25/e-commerce-1682393981623174431461.jpg"
                alt=""
              />

              <div class="w-full max-w-md mx-auto xl:max-w-xl">
                <h3 class="text-2xl font-bold text-center text-black">
                  NLH - Ecommerce Website
                </h3>
                <p class="leading-relaxed text-center text-gray-500 mt-2.5">
                  Chất lượng thay lời nói
                </p>

                <div class="flex items-center justify-center mt-10 space-x-3">
                  <div class="bg-gray-200 rounded-full w-12 h-1.5"></div>
                  <div class="bg-orange-500 rounded-full w-20 h-1.5"></div>

                  <div class="bg-gray-200 rounded-full w-12 h-1.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
