import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../error/Error";
import { getProductByCategory } from "../../actions/productActions";
import Filter from "./Filter";
import Loading from "../../screens/Loading";
import { useLocation } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

const ProductList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { CategoryName } = location.state;

  // console.log(CategoryName);

  const { loading, error, productByCategories, categoryName } = useSelector(
    (state) => state.productListByCategories
  );
  useEffect(() => {
    if (CategoryName != categoryName) {
      dispatch(getProductByCategory(CategoryName));
    }
  }, [CategoryName]);
  // console.log(productByCategories);

  const [list, setList] = useState();

  useEffect(() => {
    setList(productByCategories);
  }, [productByCategories]);
  return (
    <div className="bg-white min-h-[300px]">
      {loading ? <Loading /> : <Filter PDList={productByCategories} />}
      {error && <Error />}
    </div>
  );
};

export default ProductList;
