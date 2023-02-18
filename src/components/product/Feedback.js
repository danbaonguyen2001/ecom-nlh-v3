import React from "react";

const Feedback = (props) => {
  const { reviews, comments } = props;
  // console.log(reviews);
  // console.log(comments);
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-lg shadow-lg lg:col-span-1">
          Đánh giá sản phẩm
        </div>
        <div className="rounded-lg shadow-lg lg:col-span-1">Hỏi đáp</div>
      </div>
    </div>
  );
};

export default Feedback;
