import React from "react";

import { Rating } from "@mui/material";
import { GrSend } from "react-icons/gr";
import Loading from "../../screens/Loading";
import { toDate } from "../../utils/format";

const Feedback = (props) => {
  const { product, loading, reviews, comments } = props;
  console.log(reviews);
  console.log(comments);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Review */}
            <div className="rounded-lg shadow-lg lg:col-span-1 p-4">
              <h2 className="text-lg tracking-tight text-gray-900 font-bold">
                Đánh giá sản phẩm {product?.name}
              </h2>
              <div className="flex  items-center">
                <div className="mr-2 text-amber-500 text-lg">
                  {product?.rating}
                </div>
                <Rating value={product?.rating} readOnly />
                <span className="ml-2">{product?.numReviews} đánh giá</span>
              </div>

              {/* List */}
              <div>
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="rounded-lg border-2 border-slate-400 border-solid p-1 my-2"
                  >
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center">
                        <img
                          src={review?.avatarUrl}
                          class="w-10 rounded-full shadow-lg mr-2"
                          alt="Avatar"
                        />
                        {review?.name}
                      </div>
                      <div> {toDate(review?.updatedAt)}</div>
                    </div>
                    <div className="mt-2 pl-4 w-[90%] h-auto ">
                      <div className="flex items-center mb-2 ">
                        <b className="mr-2">Đánh giá:</b>
                        <Rating value={review?.rating} readOnly />
                      </div>
                      <div className="flex items-center flex-wrap">
                        <b className="mr-2">Nhận xét: </b>
                        <p> {review?.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add review */}
              <div className="flex items-center justify-center mt-4">
                <button
                  type=""
                  className="  flex w-[90%] lg:w-[50%]  items-center justify-center rounded-md border border-transparent bg-primary-600 py-3 px-8 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Đánh giá ngay
                </button>
              </div>
            </div>

            {/*Q&A  */}
            <div className="rounded-lg shadow-lg lg:col-span-1 p-4">
              <h2 className="text-lg tracking-tight text-gray-900 font-bold">
                Hỏi đáp
              </h2>
              {/* <button
                type=""
                className=" mt-4 flex w-[20%] lg:w-[20%]  items-center justify-around rounded-md border border-transparent bg-primary-600 py-3 px-8 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <GrSend size={5} />
                Thêm
              </button> */}
              <div>
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="rounded-lg border-2 border-slate-400 border-solid p-1 my-2"
                  >
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center">
                        <img
                          src={comment?.avatarUrl}
                          class="w-10 rounded-full shadow-lg mr-2"
                          alt="Avatar"
                        />
                        {comment?.name}
                      </div>
                      <div> {toDate(comment?.updatedAt)}</div>
                    </div>
                    <div className="mt-2 pl-4 w-[90%] h-auto ">
                      <div className="flex items-center flex-wrap">
                        <p> {comment?.comment}</p>
                      </div>
                    </div>
                    {/* Replies */}
                    {comment?.replies.map(() => (
                      <div className="ml-3">
                        <div className="flex items-center justify-between ">
                          <div className="flex items-center">
                            <img
                              src={comment?.avatarUrl}
                              class="w-10 rounded-full shadow-lg mr-2"
                              alt="Avatar"
                            />
                            {comment?.name}
                          </div>
                          <div> {toDate(comment?.updatedAt)}</div>
                        </div>
                        <div className="mt-2 pl-4 w-[90%] h-auto ">
                          <div className="flex items-center flex-wrap">
                            <p> {comment?.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
