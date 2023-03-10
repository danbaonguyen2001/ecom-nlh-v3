import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";

const EditInforModal = (props) => {
  const { open, setOpen, address } = props;
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const [user, setUser] = useState({
    name: `${userInfo?.data?.user?.name}`,
    email: `${userInfo?.data?.user?.email}`,
    phone: `${userInfo?.data?.user?.phone}`,
    gender: `${userInfo?.data?.user?.gender}`,
    addrerss: "",
  });
  console.log(user);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  className="relative transform overflow-hidden rounded-lg 
              bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div> */}
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className=" flex items-center text-lg font-medium leading-6 text-gray-900 mb-1"
                        >
                          <BiEdit className="text-primary-500 mr-2" />
                          Cập nhật thông tin cá nhân
                        </Dialog.Title>

                        {/* Input */}
                        <div className="mt-2 flex flex-wrap justify-between ">
                          <div className="w-full  mb-3">
                            <label
                              for=""
                              class="text-base font-medium text-gray-900"
                            >
                              {" "}
                              Tên khách hàng{" "}
                            </label>
                            <div class="mt-2.5">
                              <input
                                required
                                type="text"
                                value={user?.name}
                                placeholder="Nhập tên của bạn"
                                class=" w-full  p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                              />
                            </div>
                          </div>
                          <div className="w-full  mb-3">
                            <label
                              for=""
                              class="text-base font-medium text-gray-900"
                            >
                              {" "}
                              Số điện thoại{" "}
                            </label>
                            <div class="mt-2.5">
                              <input
                                required
                                type="phone"
                                value={user?.phone}
                                placeholder="Nhập số điện thoại"
                                class=" w-full  p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                              />
                            </div>
                          </div>
                          <div className="w-full  mb-3">
                            <label
                              for=""
                              class="text-base font-medium text-gray-900"
                            >
                              {" "}
                              Địa chỉ email{" "}
                            </label>
                            <div class="mt-2.5">
                              <input
                                required
                                type="email"
                                value={user?.email}
                                placeholder="Nhập địa chỉ Email"
                                class="w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                              />
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
                                  value="male"
                                  checked={
                                    user?.gender === "man" ||
                                    user?.gender === "men" ||
                                    user?.gender === "male"
                                  }
                                  onClick={() =>
                                    setUser({ ...user, gender: "male" })
                                  }
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
                                  value="female"
                                  checked={user?.gender === "female"}
                                  onClick={() =>
                                    setUser({ ...user, gender: "female" })
                                  }
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
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-300 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent
                     bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm
                      hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-red-500 
                      focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      //   onClick={() => handleAddToCart()}
                    >
                      Cập nhật
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border 
                    border-gray-300 bg-white px-4 py-2 text-base font-medium 
                    text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 
                    focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Trở về
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default EditInforModal;
