import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Contact = () => {
  return (
    <div>
      <Meta tittle="Contact" />
      <BreadCrumb title="contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3797609952358!2d106.69603497578406!3d10.782198459085786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f363ee14483%3A0x4cacca0400833464!2zMTM1IEhhaSBCw6AgVHLGsG5nLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1722938022212!5m2!1svi!2s"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
