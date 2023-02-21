import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHistoryOrders } from '../../actions/orderActions'
import Loading from '../../screens/Loading'
const OrderList = () => {
  const dispatch = useDispatch()
  const { loading, error, listOrder } = useSelector(
    (state) => state.historyOrders
  )
  const { userInfo } = useSelector((state) => state.userLogin)
  useEffect(() => {
    if (userInfo) {
      dispatch(getHistoryOrders())
    }
  }, [])
  return (
    <>
      {loading && <Loading />}
      {error && <p>ERROR</p>}
      <div>OrderList</div>
    </>
  )
}

export default OrderList
