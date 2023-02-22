import axios from 'axios'

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  CLEAR_ERRORS,
  PRODUCT_LIST_BY_CATEGORY_REQUEST,
  PRODUCT_LIST_BY_CATEGORY_SUCCESS,
  PRODUCT_LIST_BY_CATEGORY_FAIL,
  PRODUCT_LIST_BY_SUB_CATEGORY_REQUEST,
  PRODUCT_LIST_BY_SUB_CATEGORY_SUCCESS,
  PRODUCT_LIST_BY_SUB_CATEGORY_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_CREATE_COMMENT_REQUEST,
  PRODUCT_CREATE_COMMENT_SUCCESS,
  PRODUCT_CREATE_COMMENT_FAIL,
} from '../constants/productsConstants'
import { logout } from './userActions'
import { Server } from '../apis/Api'

/** GET Products  */
export const listProducts =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST })

      const { data } = await axios.get(
        `${Server}/api/products?keyword=${keyword}&page=${pageNumber}`
      )
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

/** Get Product Detail */
export const productDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST })

    const { data } = await axios.get(`${Server}/api/products/${id}`)

    dispatch({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
/** GET Product By Category */
export const getProductByCategory = (categoryName) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_BY_CATEGORY_REQUEST,
    })
    const { data } = await axios.get(
      `${Server}/api/products/category/${categoryName}`
    )
    dispatch({
      type: PRODUCT_LIST_BY_CATEGORY_SUCCESS,
      payload: { data, categoryName },
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_BY_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
/** GET Product By SubCategory */
export const getProductsBySubCategory = (subCategoryId) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_BY_SUB_CATEGORY_REQUEST,
    })
    const { data } = await axios.get(
      `${Server}/api/products/subcategory/${subCategoryId}`
    )
    dispatch({
      type: PRODUCT_LIST_BY_SUB_CATEGORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_BY_SUB_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
/** GET Top Products */
export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST })

    const { data } = await axios.get(`${Server}/api/products/top`)

    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
/** Create Product Review */
export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      console.log(review)
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      })
      const { userLogin: userInfo } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.userInfo.data.access_token}`,
        },
      }

      await axios.post(
        `${Server}/api/products/${productId}/reviews`,
        {
          rating: review.rating,
          comment: review.comment,
        },
        config
      )

      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      })
    }
  }
/** Get Product Review */
export const getProductReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_REVIEWS_REQUEST })
    const { data } = await axios.get(`${Server}/api/products/${id}`)
    dispatch({
      type: GET_REVIEWS_SUCCESS,
      payload: data.reviews,
    })
  } catch (error) {
    dispatch({
      type: GET_REVIEWS_FAIL,
      payload: error.response.data.message,
    })
  }
}
// Delete product review
export const deleteReview =
  (reviewId, productId) => async (dispatch, getState) => {
    try {
      dispatch({ type: DELETE_REVIEW_REQUEST })
      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.userInfo.data.access_token}`,
        },
      }
      const { data } = await axios.delete(
        `${Server}/api/products/${productId}/reviews?reviewId=${reviewId}`,
        config
      )
      dispatch({
        type: DELETE_REVIEW_SUCCESS,
        payload: data.success,
      })
    } catch (error) {
      dispatch({
        type: DELETE_REVIEW_FAIL,
        payload: error.response.data.message,
      })
    }
  }
export const createProductComment = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_COMMENT_REQUEST,
    })
    const { userLogin: userInfo } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.userInfo.data.access_token}`,
      },
    }
    const { data } = await axios.post(
      `${Server}/api/comments`,
      {
        comment: params.comment,
        productId: params.productId,
      },
      config
    )
    dispatch({
      type: PRODUCT_CREATE_COMMENT_SUCCESS,
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
      type: PRODUCT_CREATE_COMMENT_FAIL,
      payload: message,
    })
  }
}
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  })
}
