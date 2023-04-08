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
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  CANCEL_ORDER_FAIL,
  MOMO_QUICK_PAY_ORDER_REQUEST,
  MOMO_QUICK_PAY_ORDER_SUCCESS,
  MOMO_QUICK_PAY_ORDER_FAIL,
} from "../constants/orderConstants";
import { logout } from "./userActions";
import { APP_ID, Server } from "../apis/Api";
import axios from "axios";
export const getOrderDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAIL_REQUEST,
    });
    const { userLogin: userInfo } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.userInfo.data.access_token}`,
      },
    };
    const { data } = await axios.get(`${Server}/api/orders/${id}`, config);
    dispatch({
      type: ORDER_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Login first to access this resource.") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_DETAIL_FAIL,
      payload: message,
    });
  }
};
export const getHistoryOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_HISTORY_REQUEST,
    });
    const { userLogin: userInfo } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.userInfo.data.access_token}`,
      },
    };
    const { data } = await axios.get(`${Server}/api/orders/myorders`, config);
    dispatch({
      type: ORDER_HISTORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Login first to access this resource.") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_HISTORY_FAIL,
      payload: message,
    });
  }
};
export const createOrder =
  (dataForm, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_ORDER_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${userInfo.data.access_token}`,
        },
      };
      const { data } = await axios.post(
        `${Server}/api/orders`,
        { ...dataForm, paymentResult },
        config
      );
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const cancelOrder =
  (orderId, description) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CANCEL_ORDER_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${userInfo.data.access_token}`,
        },
      };
      const { data } = await axios.put(
        `${Server}/api/orders/${orderId}`,
        {
          status: {
            statusNow: "cancel",
            description: `${description}`,
          },
        },
        config
      );
      dispatch({
        type: CANCEL_ORDER_SUCCESS,
        payload: data,
      });
      dispatch({
        type: ORDER_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CANCEL_ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const initiateQuickPay = (dataForm) => async (dispatch, getState) => {
  try {
    dispatch({ type: MOMO_QUICK_PAY_ORDER_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.data.access_token);
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${userInfo.data.access_token}`,
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/orders/momo`,
      { ...dataForm },
      config
    );

    // var accessKey = 'F8BBA842ECF85'
    // var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz'
    // var orderInfo = 'pay with MoMo'
    // var partnerCode = 'MOMO'
    // var redirectUrl =
    //   'https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b'
    // var ipnUrl = 'https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b'
    // var amount = '50000'
    // var orderId = partnerCode + new Date().getTime()
    // var requestId = orderId
    // var extraData = ''
    // var paymentCode =
    //   'T8Qii53fAXyUftPV3m9ysyRhEanUs9KlOPfHgpMR0ON50U10Bh+vZdpJU7VY4z+Z2y77fJHkoDc69scwwzLuW5MzeUKTwPo3ZMaB29imm6YulqnWfTkgzqRaion+EuD7FN9wZ4aXE1+mRt0gHsU193y+yxtRgpmY7SDMU9hCKoQtYyHsfFR5FUAOAKMdw2fzQqpToei3rnaYvZuYaxolprm9+/+WIETnPUDlxCYOiw7vPeaaYQQH0BF0TxyU3zu36ODx980rJvPAgtJzH1gUrlxcSS1HQeQ9ZaVM1eOK/jl8KJm6ijOwErHGbgf/hVymUQG65rHU2MWz9U8QUjvDWA=='
    // var orderGroupId = ''
    // var autoCapture = true
    // var lang = 'vi'
    // var rawSignature =
    //   'accessKey=' +
    //   accessKey +
    //   '&amount=' +
    //   amount +
    //   '&extraData=' +
    //   extraData +
    //   '&orderId=' +
    //   orderId +
    //   '&orderInfo=' +
    //   orderInfo +
    //   '&partnerCode=' +
    //   partnerCode +
    //   '&paymentCode=' +
    //   paymentCode +
    //   '&requestId=' +
    //   requestId
    // //puts raw signature
    // console.log('--------------------RAW SIGNATURE----------------')
    // console.log(rawSignature)
    // //signature
    // var signature = crypto
    //   .createHmac('sha256', secretKey)
    //   .update(rawSignature)
    //   .digest('hex')
    // console.log('-----------------SIGNATURE----------------')

    // const requestBody = JSON.stringify({
    //   partnerCode: partnerCode,
    //   partnerName: 'TEST',
    //   storeId: 'MomoTestStore',
    //   requestId: requestId,
    //   amount: amount,
    //   orderId: orderId,
    //   orderInfo: orderInfo,
    //   redirectUrl: redirectUrl,
    //   ipnUrl: ipnUrl,
    //   lang: lang,
    //   autoCapture: autoCapture,
    //   extraData: extraData,
    //   paymentCode: paymentCode,
    //   orderGroupId: orderGroupId,
    //   signature: signature,
    // })
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Content-Length': Buffer.byteLength(requestBody),
    //   },
    // }
    // const response = await axios.post(
    //   `https://test-payment.momo.vn//v2/gateway/api/pos`,
    //   config
    // )
    dispatch({ type: MOMO_QUICK_PAY_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MOMO_QUICK_PAY_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
