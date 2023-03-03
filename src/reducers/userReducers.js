import { CART_SAVE_SHIPPING_ADDRESS } from '../constants/cartConstants'
import {
  USER_ADDRESS_DETAIL_FAIL,
  USER_ADDRESS_DETAIL_REQUEST,
  USER_ADDRESS_DETAIL_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants'
export const userLoginReducer = (
  state = {
    logout: true,
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      }
    case USER_ADDRESS_DETAIL_REQUEST:
      return {
        loading: true,
        ...state,
      }
    case USER_ADDRESS_DETAIL_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload.userInfo,
        addressDetail: action.payload.data.address,
      }
    case USER_ADDRESS_DETAIL_FAIL:
      return {
        loading: false,
        addressDetail: action.payload,
      }
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case USER_LOGOUT:
      return { logout: true }
    default:
      return state
  }
}
