import React from "react";

const HelpPage = () => {
  return (
    <div className=" w-sm-100 w-75 m-auto">
      <div className="image">
        <img
          className="img-fluid"
          src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2803/Default/components/page/Topic/images/faq2.png?q=best&webp=1&alpha=1"
          alt=""
        />
      </div>
      <div className="content ">
        <h6> Q. How does the site work? </h6>

        <p>
          A. You can browse the site or use our search engine to find your
          desired products. You can then add them to your shopping bag and click
          on place order. You let us know your address, select a delivery time –
          and voila, you are done. A Chaldal representative will then deliver
          your order right to your home or office.{" "}
        </p>

        <h5>Q. How much do deliveries cost? </h5>

        <p>
          A. For orders above Tk 400, the delivery fee is Tk 9. For orders below
          Tk 400, it is Tk 19. This is applicable to all the cities.
        </p>

        <h5>Q. How can I contact you? </h5>

        <p>A. You can always call 16710 or mail us at support@chaldal.com. </p>

        <h5>Q. What are your delivery hours? </h5>

        <p>
          A. We deliver from 7.30 am to 11 pm every day. You can choose from
          available slots to find something that is convenient to you.
        </p>

        <h5>Q. How do I know when my order is here? </h5>

        <p>
          A. A Chaldal representative will call you as soon as they are at your
          house to let you know about your delivery.{" "}
        </p>
      </div>
    </div>
  );
};

export default HelpPage;
