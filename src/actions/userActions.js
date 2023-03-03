import axios from 'axios'
import {
  USER_ADDRESS_DETAIL_FAIL,
  USER_ADDRESS_DETAIL_REQUEST,
  USER_ADDRESS_DETAIL_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants'
import {
  CART_LIST_RESET,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'
import { ORDER_HISTORY_RESET } from '../constants/orderConstants'
import { Server } from '../apis/Api'
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      'https://tlcn-2022-be.onrender.com/api/auth/login',
      { email, password },
      config
    )
    // const addressDetail = data.data.user.addresses.find(
    //   (address) => address.idDefault === true
    // )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    // dispatch({
    //   type: CART_SAVE_SHIPPING_ADDRESS,
    //   payload: addressDetail,
    // })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const getAddressDetail = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_ADDRESS_DETAIL_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.data.access_token}`,
      },
    }
    const addressId = userInfo.data.user.addresses.find(
      (result) => result.idDefault === true
    )
    const { data } = await axios.get(
      `${Server}/api/users/address/${addressId.detailAddress}`,
      config
    )
    dispatch({
      type: USER_ADDRESS_DETAIL_SUCCESS,
      payload: { data, userInfo },
    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_ADDRESS_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('shippingAddress')
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: CART_LIST_RESET })
  dispatch({ type: ORDER_HISTORY_RESET })
}
