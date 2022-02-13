import loader from 'assets/images/loader.gif';
import useAuth from "hooks/useAuth";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { IBooking } from "Types";
import BookingServices from "../../services/Booking/BookingServices";

const CustomorOder = () => {
  const [booking, setBooking] = useState<IBooking[]>([]);
  const { user } = useAuth();
  //Get OWN Book
  BookingServices.getOwnBooking(user.email).then((res) => {
    setBooking(res);
  });

  const handleDelete = (e: any, id: string) => {
    BookingServices.deleteBooking(id).then((res) => {
      if (res) {
        alert("Deleted Success");
      }
    });
    e.target.parentNode.parentNode.style.display = "none";
  };
  return (
    <div className="ms-md-5 ps-md-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name </th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Delete Order</th>
          </tr>
        </thead>
        <tbody>
          {!booking?.length && (
            <img
              className="img-fluid text-center"
              src={loader}
              alt=""
              style={{ width: "100%" }}
            />
          )}
          {booking.map((book, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{book.userName}</td>
              <td style={{ width: "10%" }}>{book.email}</td>
              <td>{book.phone}</td>
              <td>{book.total}</td>
              <td>
                <button className="btn-warning px-2 py-1 rounded">
                  Pending
                </button>{" "}
              </td>
              <td>
                <button
                  className="btn-danger px-2 py-1 rounded"
                  onClick={(e) => handleDelete(e, book._id)}
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomorOder;
