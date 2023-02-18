import React from "react";

const Information = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-lg shadow-lg lg:col-span-1">Mô tả sản phẩm</div>
        <div className="rounded-lg shadow-lg lg:col-span-1">
          Thông số kỹ thuật{" "}
        </div>
      </div>
    </div>
  );
};

export default Information;
