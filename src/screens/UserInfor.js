import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { BiEdit } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import EditInforModal from "../components/userInfor/EditInforModal";
import EditAddressModal from "../components/userInfor/EditAddressModal";
import DeleteAddressModal from "../components/userInfor/DeleteAddressModal";
import AddAddressModal from "../components/userInfor/AddAddressModal";

const UserInfor = () => {
  const dispatch = useDispatch();
  const { loading, userInfo } = useSelector((state) => state.userLogin);
  const defaultAvt =
    "data:image/png;base64,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";
  // console.log(userInfo);
  // console.log(loading);

  //handle Update name,phone,sex
  const [openEditInfor, setOpenEditnfor] = useState(false);

  //handle Update Address
  const [openEditAddress, setOpenEditAddress] = useState(false);
  const [openDeleteAddress, setOpenDeleteAddress] = useState(false);
  const [openAddAddress, setOpenAddAddress] = useState(false);
  const [address, setAddress] = useState(0);

  const handleEditAddress = (index) => {
    setOpenEditAddress(true);
    setAddress(index);
  };

  const handleDeleteAddress = (index) => {
    setOpenDeleteAddress(true);
    setAddress(index);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="  rounded-lg border-2 border-dashed border-gray-200 mx-4 lg:mx-40">
        <div className="m-4">
          <h1 class="mb-10 text-center text-xl font-bold ">
            Thông tin người dùng
          </h1>

          {/* IMG */}
          <div className="flex flex-col justify-center items-center">
            {userInfo?.data?.user?.avatar?.url ? (
              <img
                class="inline-block h-28 w-28 rounded-full ring-2 ring-white"
                src={userInfo?.data?.user?.avatar?.url}
                alt="Avatar Upload"
              />
            ) : (
              <img
                class="inline-block h-28 w-28 rounded-full ring-2 ring-white"
                src={defaultAvt}
                alt="Avatar Upload"
              />
            )}
            <label className="cursor-pointer mt-4">
              <span class="mt-2 leading-normal px-4 py-2 border border-dashed  text-sm rounded-lg">
                Upload Avatar
              </span>
              <input type="file" multiple class="hidden" />
            </label>
          </div>

          <hr className=" mt-4" />
          {/*Infor */}
          <h3 class=" text-left text-lg font-bold">Thông tin cá nhân</h3>
          <div className="  block  lg:flex items-end justify-between">
            <div>
              <div className="flex items-center justify-start mt-2">
                <h3 class=" text-left text-base font-semibold">Tên:</h3>
                <p className="ml-2">{userInfo?.data?.user?.name}</p>
              </div>
              <div className="flex items-center justify-start mt-2">
                <h3 class=" text-left text-base font-semibold">Email:</h3>
                <p className="ml-2">{userInfo?.data?.user?.email}</p>
              </div>
              <div className="flex items-center justify-start mt-2">
                <h3 class=" text-left text-base font-semibold">
                  Số điện thoại:
                </h3>
                <p className="ml-2">{userInfo?.data?.user?.phone}</p>
              </div>
              <div className="flex items-center justify-start mt-2">
                <h3 class=" text-left text-base font-semibold">Giới tính:</h3>
                <p className="ml-2">
                  {userInfo?.data?.user?.gender === "man" ? "Nam" : "Nữ"}
                </p>
              </div>
            </div>

            <div class="flex justify-center space-x-2 mr-2 lg:w-[15%] w-[45%] mt-2 lg:mt-0 ">
              <button
                type="button"
                onClick={() => setOpenEditnfor(true)}
                class="flex w-full  items-center justify-center rounded-md border border-transparent 
                          bg-primary-600 p-2 text-base font-medium text-white hover:bg-primary-700 focus:outline-none 
                            focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <BiEdit className="mr-2" />
                Sửa
              </button>
            </div>
          </div>

          <hr className=" mt-4" />
          {/* Address */}
          <div className="flex mt-2 justify-between">
            <h3 class=" text-left text-lg font-bold">Địa chỉ nhận hàng</h3>
            <div class="flex justify-center space-x-2 mr-4 md:w-30% lg:w-[13%] ">
              <button
                type="button"
                onClick={() => setOpenAddAddress(true)}
                class="flex w-full  items-center justify-center rounded-md border border-gray-200
                          bg-transparent p-2 text-base font-medium text-black hover:bg-gray-400 focus:outline-none 
                            focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <GrAddCircle className="mr-2 text-gray-300" />
                Thêm
              </button>
            </div>
          </div>
          <div>
            {userInfo?.data?.user?.addresses?.map((address, index) => (
              <div className=" key={index}">
                <div className="lg:flex items-center justify-between flex-wrap block  mt-2">
                  <p className="ml">{address?.address}</p>
                  <div className="flex lg:w-[30%] w-full mt-2 lg:mt-0">
                    <div class="flex justify-center space-x-2 mr-4 w-[45%] ">
                      <button
                        type="button"
                        onClick={() => handleEditAddress(index)}
                        class="flex w-full  items-center justify-center rounded-md border border-transparent 
                          bg-primary-600 p-2 text-base font-medium text-white hover:bg-primary-700 focus:outline-none 
                            focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        <BiEdit className="mr-2" />
                        Sửa
                      </button>
                    </div>
                    <div class="flex justify-center space-x-2 w-[45%] ">
                      <button
                        type="button"
                        onClick={() => handleDeleteAddress(index)}
                        className={
                          address?.idDefault
                            ? "flex w-full  items-center justify-center rounded-md border border-solid  bg-transparent p-2 text-base font-medium text-gray-300 cursor-default  "
                            : "flex w-full  items-center justify-center rounded-md border border-solid border-red-500 bg-transparent p-2 text-base font-medium text-red-500  disabled hover:bg-gray-200"
                        }
                      >
                        <MdDeleteForever
                          className={address?.idDefault ? "mr-2 " : "mr-2"}
                        />
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {openEditInfor && (
        <EditInforModal open={openEditInfor} setOpen={setOpenEditnfor} />
      )}
      {openEditAddress && (
        <EditAddressModal
          open={openEditAddress}
          setOpen={setOpenEditAddress}
          indexAddress={address}
        />
      )}
      {openAddAddress && (
        <AddAddressModal open={openAddAddress} setOpen={setOpenAddAddress} />
      )}

      {openDeleteAddress && (
        <DeleteAddressModal
          open={openDeleteAddress}
          setOpen={setOpenDeleteAddress}
          address={address}
        />
      )}
    </>
  );
};

export default UserInfor;
