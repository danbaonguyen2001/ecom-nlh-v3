import axios from "axios";

import {
  GET_PROVINCE_LIST_REQUEST,
  GET_DISTRICT_LIST_REQUEST,
  GET_DISTRICT_LIST_FAIL,
  GET_PROVINCE_LIST_FAIL,
  GET_PROVINCE_LIST_SUCCESS,
  GET_DISTRICT_LIST_SUCCESS,
  GET_WARD_LIST_REQUEST,
  GET_WARD_LIST_SUCCESS,
  GET_WARD_LIST_FAIL,
  GET_SHIPPING_FEE_REQUEST,
  GET_SHIPPING_FEE_SUCCESS,
  GET_SHIPPING_FEE_FAIL,
} from "../constants/GHNConstants";
import {
  Token_API_GHN,
  GHN,
  GHN_CALCULATE_FEE,
  SHOP_ID,
  district_id,
} from "../apis/Api";
export const getProvinceList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROVINCE_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Token: `${Token_API_GHN}`,
      },
    };
    const { data } = await axios.get(`${GHN}/province`, config);
    dispatch({
      type: GET_PROVINCE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROVINCE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getDistrictList = (provinceId) => async (dispatch) => {
  try {
    dispatch({ type: GET_DISTRICT_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Token: `${Token_API_GHN}`,
      },
    };
    const { data } = await axios.get(`${GHN}/district`, {
      headers: {
        "Content-Type": "application/json",
        Token: `${Token_API_GHN}`,
      },
      params: {
        province_id: provinceId,
      },
    });

    dispatch({
      type: GET_DISTRICT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_DISTRICT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getWardList = (districtId) => async (dispatch) => {
  try {
    dispatch({ type: GET_WARD_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Token: `${Token_API_GHN}`,
      },
    };
    const { data } = await axios.get(
      `${GHN}/ward?district_id=${districtId}`,
      config
    );
    dispatch({
      type: GET_WARD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_WARD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getShippingFe = (ward) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SHIPPING_FEE_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Token: `${Token_API_GHN}`,
      },
    };
    const { data } = await axios.get(
      `${GHN_CALCULATE_FEE}`,
      {
        service_id: 53320, // Lo???i d???ch v??? v???n chuy???n
        service_type_id: null, // Lo???i d???ch v??? v???n chuy???n
        shop_id: SHOP_ID, //Qu???n l?? th??ng tin c???a h??ng/ng?????i b??n
        from_district_id: district_id, // M?? qu???n/huy???n n??i g???i h??ng
        to_district_id: ward.DistrictID, // M?? qu???n/huy???n n??i nh???n h??ng
        to_ward_code: ward.WardCode, // M?? M?? ph?????ng nh???n b??u ki???n.
        weight: 500, // Kh???i l?????ng g??i h??ng (gram)
        length: 20, // Chi???u d??i (cm)
        width: 20, // Chi???u r???ng (cm)
        height: 10, // Chi???u cao (cm)
      },
      config
    );
    dispatch({ type: GET_SHIPPING_FEE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SHIPPING_FEE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
