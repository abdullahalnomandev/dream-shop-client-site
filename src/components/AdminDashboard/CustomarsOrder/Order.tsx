import loader from 'assets/images/loader.gif';
import useAsync from "hooks/useAsync";
import { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import BookingServices from "services/Booking/BookingServices";
import { IGroceryItem } from "Types";
const Order = () => {
  const { data } = useAsync(BookingServices.getBooking);
  console.log("data", data);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cart, setCart] = useState([] as IGroceryItem[]);
  const [beg, setBag] = useState(false);

  const total = cart.reduce( (total, pd) => total + pd.price * (pd.count || 1), 0 );
  const handleButton = (cart:IGroceryItem[],bag:boolean) => {
    handleShow();
    setCart(cart);
    setBag(bag)
  };
  
  const handleDelete =(e:any,id:string)=>{
    //DELETE REQUEST
    BookingServices.deleteBooking(id)
    .then((res)=>{
        if(res){
          alert('Deleted Success')
        }
    })
    e.target.parentNode.parentNode.style.display='none'
  }

  return (
    <div className="order_table " style={{ paddingLeft: "100px" }}>
      <h1>CUSTOMER Order</h1>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customer's Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
            {
                !cart?.length && <div className='text-center'><img className='img-fluid' src={loader} alt="" /></div>
            }
              {cart.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img style={{ width: "50px" }} src={product.image} alt="" />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.count}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
              
            </tbody>
          </Table>
          <h4 className='text-success text-center mt-3'>Total: {beg ? total+7 :total} </h4>
        </Modal.Body>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Booking.No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Order</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((book,index) => (
            <tr key={book._id}>
              <td>{index +1}</td>
              <td>{book._id.slice(1,6)}</td>
              <td>{book.userName}</td>
              <td>{book.phone}</td>
              <td>{book.email}</td>
              <td>
                <button
                  className="btn-info px-3 py-1 rounded"
                  onClick={() => handleButton(book.cart,book.bag)}
                >
                  View Order
                </button>
              </td>
              <td>
                <button className="btn-danger px-3 py-1 rounded" onClick={(e)=>handleDelete(e,book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Order;
