import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_HISTORY_REQUEST,
  ORDER_HISTORY_SUCCESS,
  ORDER_HISTORY_FAIL,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  ORDER_DETAIL_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
} from '../constants/orderConstants'
import { logout } from './userActions'
import { APP_ID, Server } from '../apis/Api'
import axios from 'axios'

export const getOrderDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAIL_REQUEST,
    })
    const { userLogin: userInfo } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.userInfo.data.access_token}`,
      },
    }
    const { data } = await axios.get(`${Server}/api/orders/${id}`, config)
    dispatch({
      type: ORDER_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Login first to access this resource.') {
      dispatch(logout())
    }
    dispatch({
      type: ORDER_DETAIL_FAIL,
      payload: message,
    })
  }
}
export const getHistoryOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_HISTORY_REQUEST,
    })
    const { userLogin: userInfo } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.userInfo.data.access_token}`,
      },
    }
    const { data } = await axios.get(`${Server}/api/orders/myorders`, config)
    dispatch({
      type: ORDER_HISTORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Login first to access this resource.') {
      dispatch(logout())
    }
    dispatch({
      type: ORDER_HISTORY_FAIL,
      payload: message,
    })
  }
}
export const payOrder = (paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_PAY_REQUEST,
    })
    console.log(paymentResult)
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${userInfo.data.access_token}`,
      },
    }
    const { data } = await axios.post(
      `${Server}/api/orders`,
      paymentResult,
      config
    )
    dispatch({
      type: ORDER_PAY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
