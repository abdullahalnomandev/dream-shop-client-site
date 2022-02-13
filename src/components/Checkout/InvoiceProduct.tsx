import React from "react";
import { IBooking } from "Types";
interface IProps {
  booking: IBooking[];
  total: number;
}

const InvoiceProduct: React.FC<IProps> = ({ booking, total }) => {
  console.log(total);

  return (
    <>
      <div className="container-fluid row">
        <div className="col-md-6">
          <p>Subtotal</p>
          <p>Delivery Charge</p>
          <p>Order Total</p>
          <p className="text-danger">Amount Paid</p>
          <hr />
          <h4>Due</h4>
        </div>
      </div>
    </>
  );
};

export default InvoiceProduct;
