import {
  VND_TO_USD_REQUEST,
  VND_TO_USD_SUCCESS,
  VND_TO_USD_FAIL,
} from '../constants/vndtousdConstants'
import axios from 'axios'
import { APP_ID } from '../apis/Api'

export const VNDToUSD = (VND) => async (dispatch) => {
  try {
    dispatch({ type: VND_TO_USD_REQUEST })
    const { data } = await axios.get(
      `https://openexchangerates.org/api/latest.json?app_id=${APP_ID}&symbols=VND&base=USD`
    )
    console.log(data, 'asdasd', VND)
    dispatch({
      type: VND_TO_USD_SUCCESS,
      payload: (VND / data.rates.VND).toFixed(2),
    })
  } catch (error) {
    dispatch({
      type: VND_TO_USD_FAIL,
      error: error,
    })
  }
}
