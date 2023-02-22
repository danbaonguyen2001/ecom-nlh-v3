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
} from './reducers/orderReducers'
const reducers = combineReducers({
  userLogin: userLoginReducer,
  productList: productListReducer,
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
})
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
