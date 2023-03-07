import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer } from './reducers/userReducers'
import {
  productListReducer,
  productDetailReducer,
  productListByCategoryReducer,
  productListBySubCategoryReducer,
  productReviewCreateReducer,
  productReviewDeleteReducer,
  productReviewsReducer,
  productTopRateReducer,
  productCommentCreateReducer,
} from './reducers/productReducers'
import { cartsReducer, cartUpdateReducer } from './reducers/cartReducers'
import {
  getOrderDetailReducer,
  getOrdersHistoryReducer,
  payOrderReducer,
} from './reducers/orderReducers'
import { GHNReducers, getShippingFeReducer } from './reducers/GHNReducers'
import { VNDToUSDReducer } from './reducers/vndtousdReducer'
const reducers = combineReducers({
  userLogin: userLoginReducer,
  productCompare: productListReducer,
  productDetail: productDetailReducer,
  productListByCategories: productListByCategoryReducer,
  productListBySubCategory: productListBySubCategoryReducer,
  productReviewCreate: productReviewCreateReducer,
  productReviewDelete: productReviewDeleteReducer,
  productReviews: productReviewsReducer,
  productTopRate: productTopRateReducer,
  productCommentCreate: productCommentCreateReducer,
  //cart
  cartUpdate: cartUpdateReducer,
  carts: cartsReducer,

  //order
  orderDetail: getOrderDetailReducer,
  historyOrders: getOrdersHistoryReducer,
  payOrder: payOrderReducer,
  //addresses
  GHN: GHNReducers,
  shippingFee: getShippingFeReducer,
  //VND to USD
  VNDToUSD: VNDToUSDReducer,
})
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = userInfoFromStorage
  ? {
      userLogin: { userInfo: userInfoFromStorage },
    }
  : {
      userLogin: { userInfo: userInfoFromStorage, logout: true },
    }
const middleware = [thunk]
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
