import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const ShippingPolicy = () => {
  return (
    <div>
      <Meta tittle="Shipping Policy" />
      <BreadCrumb tittle="Shipping Policy" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <h2>Shipping Policy</h2>
                <p>
                  We are committed to delivering your order accurately, in good
                  condition, and always on time.
                </p>

                <h3>Shipping Charges</h3>
                <p>
                  Shipping charges are calculated based on the weight of the
                  order and the delivery location.
                </p>

                <h3>Delivery Time</h3>
                <p>
                  Orders are usually delivered within 5-7 business days.
                  Delivery times may vary depending on the location and other
                  factors.
                </p>

                <h3>Order Tracking</h3>
                <p>
                  Once your order is shipped, you will receive an email with the
                  tracking number and a link to track your order.
                </p>

                <h3>International Shipping</h3>
                <p>
                  We currently do not offer international shipping. We only ship
                  within the country.
                </p>

                <h3>Lost or Damaged Packages</h3>
                <p>
                  If your package is lost or damaged during transit, please
                  contact our customer service team for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPolicy;
