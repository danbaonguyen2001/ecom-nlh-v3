import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_HISTORY_REQUEST,
  ORDER_HISTORY_SUCCESS,
  ORDER_HISTORY_FAIL,
  ORDER_HISTORY_RESET,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  ORDER_DETAIL_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
} from '../constants/orderConstants'

export const getOrderDetailReducer = (
  state = { loading: true, orderItems: [] },
  action
) => {
  switch (action.type) {
    case ORDER_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ORDER_DETAIL_SUCCESS:
      return {
        loading: false,
        orderItems: action.payload.order,
      }
    case ORDER_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const getOrdersHistoryReducer = (state = { listOrders: [] }, action) => {
  switch (action.type) {
    case ORDER_HISTORY_REQUEST:
      return {
        loading: true,
        ...state,
      }
    case ORDER_HISTORY_SUCCESS:
      return {
        loading: false,
        listOrders: action.payload,
      }
    case ORDER_HISTORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_HISTORY_RESET:
      return {}
    default:
      return state
  }
}
export const payOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      }
    case ORDER_PAY_SUCCESS: {
      return {
        loading: false,
        success: true,
      }
    }
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_PAY_RESET:
      return {}
    default:
      return state
  }
}
