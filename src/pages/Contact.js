import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";

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
            <div className="col-12 mt-5">
              <div className="contact-wrapper-inner d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact </h3>
                  <form className="d-flex flex-column gap-15">
                    <div>
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        className="form-control "
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        className="form-control "
                        type="tel"
                        placeholder="Mobile"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols={"30"}
                        rows={"4"}
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with uus</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5 mb-0"/>
                        <address>135, Hai Ba Trung, District 1 , HCM city</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5"/>
                        <a href="tel:+84 377197374" className="text-dark">+84 377197374</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5"/>
                        <a href="mailto:tuanxyz113@gmail.com" className="text-dark" >tuanxyz113@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5"/>
                        <p className="mb-0">Monday - Friday 9 AM - 5 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
