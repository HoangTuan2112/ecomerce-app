import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner p-3 position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="images/main-banner-1.jpg"
                  alt="main banner"
                ></img>
                <div className="main-banner-contetnt position-absolute ">
                  <h4>SUPPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner p-3 position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-01.jpg"
                  alt="main banner"
                ></img>
                <div className="small-banner-contetnt position-absolute ">
                  <h4>SUPPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62</p>
                </div>
                
              </div>
              <div className="small-banner p-3 position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-02.jpg"
                  alt="main banner"
                ></img>
                <div className="small-banner-contetnt position-absolute ">
                  <h4>SUPPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62</p>
                </div>
                
              </div>
              <div className="small-banner p-3 position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-03.jpg"
                  alt="main banner"
                ></img>
                <div className="small-banner-contetnt position-absolute ">
                  <h4>SUPPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62</p>
                </div>
                
              </div>
              <div className="small-banner p-3 position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-04.jpg"
                  alt="main banner"
                ></img>
                <div className="small-banner-contetnt position-absolute ">
                  <h4>SUPPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62 </p>
                </div>
                
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
