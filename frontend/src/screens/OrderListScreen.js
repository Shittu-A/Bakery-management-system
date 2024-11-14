import React, { useEffect,useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../actions/orderActions";
import getProductCounts  from '../components/ProductCount'
import SalesBarChart from '../components/Sales'


function OrderListScreen({ history }) {
  const dispatch = useDispatch();
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const [orders,setOrders] = useState([])

  /* PULLING OUT STATE */
  // const orderList = useSelector((state) => state.orderList);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setLoading(true)
        const response = await fetch("http://127.0.0.1:8000/api/orders",{
          headers: {
            "authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyMDE5MTExLCJpYXQiOjE3Mjk0MjcxMTEsImp0aSI6ImQ0ZjJlODIwYjU4MjRkZDliM2FmYWRkMWQwNjNkZjg3IiwidXNlcl9pZCI6OX0.wpBsykU5MDCeunQRythHnnQAgzX5vGqIq1pTd5JKmis`
          }
        })
        const data = await response.json()
        setOrders(data)
        setLoading(false)
        console.log(data)
      } catch (error) {
        setError(error.message)
      }
    }

    makeRequest()
  },[])

  // let { orders, loading, error } = orderList;
  // console.log(orders)


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const paidorders =[{name:'Bread',qty:43},{name:'Cup Cake' , qty :27},{name:'Donuts',qty:67},{name:'Cake',qty:33},{name:'Muffins',qty:20}]
  



  useEffect(() => {
    // WE DON'T WANT NON ADMINS TO ACCESS THIS PAGE SO REDIRECT IF SOMEBODY TRIES TO

    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }

  }, [dispatch, history, userInfo]);

  // useEffect(() => {
  //   if (orders) {
  //      productData = getProductCounts(orders);
  //   }
  // }, [orders]);

  const productData = getProductCounts(orders);

  console.log("product data 1", productData)
  return (
    <div>
       <div classname='analysis' >
       <SalesBarChart  data={productData} />
        </div>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.User && order.User.name}</td>
                <td>{order.createdAt && order.createdAt.substring(0, 10)}</td>
                <td>₦{order.totalPrice}</td>

                <td>
                  {order.isPaid ? (
                    // order.paidAt.substring(0, 10)
                    <i className="fas fa-check" style={{ color: "blue" }}></i>

                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>

                <td>
                  {order.isDeliver ? (
                    <i className="fas fa-check" style={{ color: "blue" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>

                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant="dark" className="btn-sm">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default OrderListScreen;
