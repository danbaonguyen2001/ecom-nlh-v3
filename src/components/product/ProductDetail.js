import React, { useEffect } from "react";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../../actions/productActions";
import Loading from "../../screens/Loading";
import Introduce from "./Introduce";
import Information from "./Information";
import Feedback from "./Feedback";

// const product = {
//   name: "Basic Tee 6-Pack",
//   price: "$192",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Điện thoại", href: "#" },
//     { id: 2, name: "IOS", href: "#" },
//   ],
//   images: [
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
//       alt: "Two each of gray, white, and black shirts laying flat.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
//       alt: "Model wearing plain black basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
//       alt: "Model wearing plain gray basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
//       alt: "Model wearing plain white basic tee.",
//     },
//   ],
//   colors: [
//     { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//     { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//     { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
//   ],
//   sizes: [
//     { name: "XXS", inStock: false },
//     { name: "XS", inStock: true },
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//     { name: "XL", inStock: true },
//     { name: "2XL", inStock: true },
//     { name: "3XL", inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     "Hand cut and sewn locally",
//     "Dyed with our proprietary colors",
//     "Pre-washed & pre-shrunk",
//     "Ultra-soft 100% cotton",
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetail = () => {
  const location = useLocation();
  const { slug } = location.state;
  const [render, setRender] = useState(false);

  const dispatch = useDispatch();
  const { product, loading, error, reviews, comments } = useSelector(
    (state) => state.productDetail
  );
  console.log(product);
  useEffect(() => {
    dispatch(productDetail(slug));
  }, [slug]);

  //

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div
      className="min-h-[300px] rounded-lg border-2 border-dashed border-primary-900
   px-4 sm:px-6 lg:max-w-7xl lg:px-8 mx-4 lg:mx-auto
    "
    >
      {loading ? (
        <Loading />
      ) : (
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className=" flex max-w-2xl items-center space-x-2 ">
              <li key={product?.category}>
                <div className="flex items-center">
                  <Link
                    to={`/${product?.category}`}
                    state={{ CategoryName: `${product?.category}` }}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {product?.category}
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li key={product?.subCategory}>
                <div className="flex items-center">
                  <Link
                    to={`/${product?.category}`}
                    state={{ CategoryName: `${product?.category}` }}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {product?.subCategory}
                  </Link>
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="text-2xl pt-4 font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product?.name}
          </h1>
        </div>
      )}

      <Introduce product={product} />
      <Information product={product} />
      <Feedback reviews={reviews} comments={comments} setRender={setRender} />
    </div>
  );
};

export default ProductDetail;
