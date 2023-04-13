import React from "react";
import { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import logo from "../assets/images/logo.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

const Chat = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <div class="fixed bottom-0 right-0 top-0 left-0 md:bottom-12 md:right-6 md:left-auto md:top-auto z-20">
          <div class="flex flex-col flex-grow w-full h-screen md:h-auto   md:max-w-2xl bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Header */}
            <header className="bg-primary-600 px-4 py-2 flex justify-between items-center ">
              <div className="flex items-center ">
                <img src={logo} alt="avt" className="w-10 h-10 mr-2 " />
                <h3 className="text-white">Admin NLH</h3>
              </div>
              <MdKeyboardArrowDown
                className="w-8 h-8 text-white cursor-pointer"
                onClick={() => setOpen(!open)}
              ></MdKeyboardArrowDown>
            </header>
            {/* Content */}
            <div class="flex flex-col flex-grow h-auto md:max-h-[360px] p-4 overflow-auto">
              {/* {Array(3).map((i) => (
                <div>
                  <div class="flex w-full mt-2 space-x-3 max-w-xs">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    <div>
                      <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                        <p class="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                  </div>
                  <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                    <div>
                      <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                        <p class="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              ))} */}
              <div class="flex w-full mt-2 space-x-3 max-w-xs">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div>
                  <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p class="text-sm">Lorem ipsum dolor sit.</p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">
                    2 min ago
                  </span>
                </div>
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
            </div>

            {/*Input */}
            <div class="bg-gray-200 p-4 border-t border-gray-400 relative">
              <textarea
                class="flex items-center h-10 w-full rounded px-3 text-sm "
                type="text"
                placeholder="Nhập tin nhắn…"
              />
              <BsFillSendFill className="absolute top-6 right-6 w-6 h-6 text-primary-600 cursor-pointer"></BsFillSendFill>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="fixed bottom-12 right-3 md:right-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <AiFillMessage className="text-primary-500 bg-white w-14 h-14 rounded-full p-1 border border-primary-300"></AiFillMessage>
        </div>
      )}
    </>
  );
};

export default Chat;
