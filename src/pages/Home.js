import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  AOS.init();
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner  position-relative">
                <img
                  className="img-fluid rounded-3"
                  src={`${process.env.PUBLIC_URL}/images/main-banner-1.jpg`}
                  alt="main banner"
                ></img>
                <div className="main-banner-contetnt position-absolute ">
                  <h4>SUPPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>$999.00 </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner  position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src={`${process.env.PUBLIC_URL}/images/catbanner-01.jpg`}
                    alt="main banner"
                  ></img>
                  <div className="small-banner-contetnt position-absolute ">
                    <h4>Best Sale</h4>
                    <h5>Laptops Max</h5>
                    <p>$1699.00</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src={`${process.env.PUBLIC_URL}/images/catbanner-03.jpg`}
                    alt="main banner"
                  ></img>
                  <div className="small-banner-contetnt position-absolute ">
                    <h4>New Arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p> $599 </p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src={`${process.env.PUBLIC_URL}/images/catbanner-02.jpg`}
                    alt="main banner"
                  ></img>
                  <div className="small-banner-contetnt position-absolute ">
                    <h4>15% off</h4>
                    <h5>15% off Smartwatch 7</h5>
                    <p>$299.00</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src={`${process.env.PUBLIC_URL}/images/catbanner-04.jpg`}
                    alt="main banner"
                  ></img>
                  <div className="small-banner-contetnt position-absolute ">
                    <h4>Free Engraving</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>$420 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-betwen">
                <img src={`${process.env.PUBLIC_URL}/images/service.png`} alt="service"></img>
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all orders over $100</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-betwen">
                <img src={`${process.env.PUBLIC_URL}/images/service-02.png`} alt="service"></img>
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save up to 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-betwen">
                <img src={`${process.env.PUBLIC_URL}/images/service-03.png`} alt="service"></img>
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-betwen">
                <img src={`${process.env.PUBLIC_URL}/images/service-04.png` }alt="service"></img>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Factory direct price</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-betwen">
                <img src={`${process.env.PUBLIC_URL}/images/service-05.png`} alt="service"></img>
                <div>
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div data-aos="fade-up" data-aos-anchor-placement="center-center">
            <div className="row">
              <div className="col-12">
                <div
                  className="categories 
            d-flex justify-content-between 
            align-items-center flex-wrap"
                >
                  <div className="d-flex gap-60 align-items-center">
                    <div>
                      <h6>Panerai</h6>
                      <p>10 items</p>
                    </div>
                    <img
                      src="https://th.bing.com/th?id=OIP.yAOT4tBgmpCsrKGsOaBIxAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      alt="Panerai"
                      width={"110px"}
                      height={"110px"}
                    ></img>
                  </div>
                  <div className="d-flex gap-60 align-items-center">
                    <div>
                      <h6>Longines</h6>
                      <p>10 items</p>
                    </div>
                    <img
                      src="https://www.jurawatches.co.uk/cdn/shop/files/longines_logo.webp?v=1660742756"
                      alt="Longines"
                      width={"110px"}
                      height={"110px"}
                    ></img>
                  </div>
                  <div className="d-flex gap-60 align-items-center">
                    <div>
                      <h6>Chopard</h6>
                      <p>10 items</p>
                    </div>
                    <img
                      src="https://www.jurawatches.co.uk/cdn/shop/files/Chopard_Logo_Brand_Page.jpg?v=1691683027"
                      alt="Chopard"
                      width={"110px"}
                      height={"110px"}
                    ></img>
                  </div>
                  <div className="d-flex gap-60 align-items-center">
                    <div>
                      <h6> Gucci</h6>
                      <p>10 items</p>
                    </div>
                    <img
                      src="https://www.jurawatches.co.uk/cdn/shop/files/guc_logo.jpg?v=1672928580"
                      alt="Gucci"
                      width={"110px"}
                      height={"110px"}
                    ></img>
                  </div>
                  <div className="d-flex gap-60 align-items-center">
                    <div>
                      <h6>Alsta</h6>
                      <p>10 items</p>
                    </div>
                    <img
                      src="https://th.bing.com/th?id=OIP.Jhd9uGgBbkKEGUbPJMLHEwAAAA&w=311&h=84&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      alt="Alsta"
                      width={"110px"}
                      height={"110px"}
                    ></img>
                  </div>
                  <div className="d-flex gap-60 align-items-center">
                    <div>
                      <h6>TUDOR </h6>
                      <p>10 items</p>
                    </div>
                    <img
                      src="https://th.bing.com/th?id=OIP.D31wXgnDAVGyTFzOc2WKhgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      alt="TUDOR"
                      width={"110px"}
                      height={"110px"}
                    ></img>
                  </div>
                  <div className="d-flex gap-60 align-items-center">
                    <div>
                      <h6>Garmin Epix Pro</h6>
                      <p>10 items</p>
                    </div>
                    <img
                      src="https://www.jurawatches.co.uk/cdn/shop/files/logo_e929861f-403b-4b01-a753-8d937e393d55.jpg?v=1686131002"
                      alt="Garmin Epix Pro"
                      width={"110px"}
                      height={"110px"}
                    ></img>
                  </div>
                  <div className="d-flex gap-60 align-items-center">
                    <div>
                      <h6> RADO</h6>
                      <p>10 items</p>
                    </div>
                    <img
                      src="https://www.jurawatches.co.uk/cdn/shop/files/Rado_logo.jpg?v=1673009364"
                      alt="RADO"
                      width={"110px"}
                      height={"110px"}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div data-aos="fade-up" data-aos-anchor-placement="center-center">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Featured Collection</h3>
              </div>

              <ProductCard
                img="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_78x.jpg?v=1712579615"
                title="Captain Cook High Tech Ceramic Skeleton"
                price="4600"
                rating={4}
                img2="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_4_78x.jpg?v=1712579615"
                brand="Rado"
                description="Rado Watch Captain Cook High Tech Ceramic Skeleton R32150162. The Captain Cook High-Tech Ceramic Skeleton showcases its innovative R808 movement, a marvel of contrasts, know-how and clever geometry, that allows a distinct view of the various parts. It’s equipped with an anti-magnetic and highly reliable Nivachron™ hairspring that has been fully tested in five positions and provides up to 80 hours of power reserve. The superb matt olive-green high-tech ceramic monobloc case is topped by a rose-gold-colour rotatable bezel with a matt olive-green ceramic insert to match the case and lugs, for visual harmony. The dial is clear and spartan, with generous geometric indices and hour/minute/second hands in rose-gold tones, treated with white Super-LumiNova® for best readability in low-light conditions. Thanks to a matching olive green high-tech ceramic triple-row bracelet with a titanium three-fold clasp, the new Captain Cook remains loyal with you through the most rugged and demanding of your explorations."
                quantity="14"
              />
              <ProductCard
                img="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_78x.jpg?v=1712579615"
                title="Captain Cook High Tech Ceramic Skeleton"
                price="4600"
                rating={4}
                img2="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_4_78x.jpg?v=1712579615"
                brand="Rado"
                description="Rado Watch Captain Cook High Tech Ceramic Skeleton R32150162. The Captain Cook High-Tech Ceramic Skeleton showcases its innovative R808 movement, a marvel of contrasts, know-how and clever geometry, that allows a distinct view of the various parts. It’s equipped with an anti-magnetic and highly reliable Nivachron™ hairspring that has been fully tested in five positions and provides up to 80 hours of power reserve. The superb matt olive-green high-tech ceramic monobloc case is topped by a rose-gold-colour rotatable bezel with a matt olive-green ceramic insert to match the case and lugs, for visual harmony. The dial is clear and spartan, with generous geometric indices and hour/minute/second hands in rose-gold tones, treated with white Super-LumiNova® for best readability in low-light conditions. Thanks to a matching olive green high-tech ceramic triple-row bracelet with a titanium three-fold clasp, the new Captain Cook remains loyal with you through the most rugged and demanding of your explorations."
                quantity="14"
              />
              <ProductCard
                img="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_78x.jpg?v=1712579615"
                title="Captain Cook High Tech Ceramic Skeleton"
                price="4600"
                rating={4}
                img2="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_4_78x.jpg?v=1712579615"
                brand="Rado"
                description="Rado Watch Captain Cook High Tech Ceramic Skeleton R32150162. The Captain Cook High-Tech Ceramic Skeleton showcases its innovative R808 movement, a marvel of contrasts, know-how and clever geometry, that allows a distinct view of the various parts. It’s equipped with an anti-magnetic and highly reliable Nivachron™ hairspring that has been fully tested in five positions and provides up to 80 hours of power reserve. The superb matt olive-green high-tech ceramic monobloc case is topped by a rose-gold-colour rotatable bezel with a matt olive-green ceramic insert to match the case and lugs, for visual harmony. The dial is clear and spartan, with generous geometric indices and hour/minute/second hands in rose-gold tones, treated with white Super-LumiNova® for best readability in low-light conditions. Thanks to a matching olive green high-tech ceramic triple-row bracelet with a titanium three-fold clasp, the new Captain Cook remains loyal with you through the most rugged and demanding of your explorations."
                quantity="14"
              />
              <ProductCard
                img="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_78x.jpg?v=1712579615"
                title="Captain Cook High Tech Ceramic Skeleton"
                price="4600"
                rating={4}
                img2="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_4_78x.jpg?v=1712579615"
                brand="Rado"
                description="Rado Watch Captain Cook High Tech Ceramic Skeleton R32150162. The Captain Cook High-Tech Ceramic Skeleton showcases its innovative R808 movement, a marvel of contrasts, know-how and clever geometry, that allows a distinct view of the various parts. It’s equipped with an anti-magnetic and highly reliable Nivachron™ hairspring that has been fully tested in five positions and provides up to 80 hours of power reserve. The superb matt olive-green high-tech ceramic monobloc case is topped by a rose-gold-colour rotatable bezel with a matt olive-green ceramic insert to match the case and lugs, for visual harmony. The dial is clear and spartan, with generous geometric indices and hour/minute/second hands in rose-gold tones, treated with white Super-LumiNova® for best readability in low-light conditions. Thanks to a matching olive green high-tech ceramic triple-row bracelet with a titanium three-fold clasp, the new Captain Cook remains loyal with you through the most rugged and demanding of your explorations."
                quantity="14"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div data-aos="fade-up" data-aos-anchor-placement="center-center">
            <div className="row">
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/famous-1.jpg`}
                    className="img-fluid"
                    alt="famous"
                  ></img>
                  <div className="famous-content position-absolute ">
                    <h5>Big Screen</h5>
                    <h6>Smart Watch Series 7</h6>
                    <p>From $399 or $16.62/month for 24 months</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/famous-2.jpg`}
                    className="img-fluid"
                    alt="famous"
                  ></img>
                  <div className="famous-content position-absolute ">
                    <h5 className="text-dark">Studio Display</h5>
                    <h6 className="text-dark">600 nits of brightness</h6>
                    <p className="text-dark">27-inch 5K Retina display</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/famous-3.jpg`}
                    className="img-fluid"
                    alt="famous"
                  ></img>
                  <div className="famous-content position-absolute ">
                    <h5 className="text-dark">Smartphones</h5>
                    <h6 className="text-dark">Smartphone 13 Pro</h6>
                    <p className="text-dark">
                      Now in Green. From $999.00 or $41.62/month for 24 months
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/famous-4.jpg`}
                    className="img-fluid"
                    alt="famous"
                  ></img>
                  <div className="famous-content position-absolute ">
                    <h5 className="text-dark">Home Speakers</h5>
                    <h6 className="text-dark">Room-filling sound</h6>
                    <p className="text-dark">
                      From $699 or $116.58/month for 12 months
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div data-aos="fade-up" data-aos-anchor-placement="center-center">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Special Products</h3>
              </div>
            </div>
            <div className="row ">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div data-aos="fade-up" data-aos-anchor-placement="center-center">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products</h3>
              </div>
              <div className="row">
                <ProductCard
                  img="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_78x.jpg?v=1712579615"
                  title="Captain Cook High Tech Ceramic Skeleton"
                  price="4600"
                  rating={4}
                  img2="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_4_78x.jpg?v=1712579615"
                  brand="Rado"
                  description="Rado Watch Captain Cook High Tech Ceramic Skeleton R32150162. The Captain Cook High-Tech Ceramic Skeleton showcases its innovative R808 movement, a marvel of contrasts, know-how and clever geometry, that allows a distinct view of the various parts. It’s equipped with an anti-magnetic and highly reliable Nivachron™ hairspring that has been fully tested in five positions and provides up to 80 hours of power reserve. The superb matt olive-green high-tech ceramic monobloc case is topped by a rose-gold-colour rotatable bezel with a matt olive-green ceramic insert to match the case and lugs, for visual harmony. The dial is clear and spartan, with generous geometric indices and hour/minute/second hands in rose-gold tones, treated with white Super-LumiNova® for best readability in low-light conditions. Thanks to a matching olive green high-tech ceramic triple-row bracelet with a titanium three-fold clasp, the new Captain Cook remains loyal with you through the most rugged and demanding of your explorations."
                  quantity="14"
                />
                <ProductCard
                  img="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_78x.jpg?v=1712579615"
                  title="Captain Cook High Tech Ceramic Skeleton"
                  price="4600"
                  rating={4}
                  img2="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_4_78x.jpg?v=1712579615"
                  brand="Rado"
                  description="Rado Watch Captain Cook High Tech Ceramic Skeleton R32150162. The Captain Cook High-Tech Ceramic Skeleton showcases its innovative R808 movement, a marvel of contrasts, know-how and clever geometry, that allows a distinct view of the various parts. It’s equipped with an anti-magnetic and highly reliable Nivachron™ hairspring that has been fully tested in five positions and provides up to 80 hours of power reserve. The superb matt olive-green high-tech ceramic monobloc case is topped by a rose-gold-colour rotatable bezel with a matt olive-green ceramic insert to match the case and lugs, for visual harmony. The dial is clear and spartan, with generous geometric indices and hour/minute/second hands in rose-gold tones, treated with white Super-LumiNova® for best readability in low-light conditions. Thanks to a matching olive green high-tech ceramic triple-row bracelet with a titanium three-fold clasp, the new Captain Cook remains loyal with you through the most rugged and demanding of your explorations."
                  quantity="14"
                />
                <ProductCard
                  img="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_78x.jpg?v=1712579615"
                  title="Captain Cook High Tech Ceramic Skeleton"
                  price="4600"
                  rating={4}
                  img2="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_4_78x.jpg?v=1712579615"
                  brand="Rado"
                  description="Rado Watch Captain Cook High Tech Ceramic Skeleton R32150162. The Captain Cook High-Tech Ceramic Skeleton showcases its innovative R808 movement, a marvel of contrasts, know-how and clever geometry, that allows a distinct view of the various parts. It’s equipped with an anti-magnetic and highly reliable Nivachron™ hairspring that has been fully tested in five positions and provides up to 80 hours of power reserve. The superb matt olive-green high-tech ceramic monobloc case is topped by a rose-gold-colour rotatable bezel with a matt olive-green ceramic insert to match the case and lugs, for visual harmony. The dial is clear and spartan, with generous geometric indices and hour/minute/second hands in rose-gold tones, treated with white Super-LumiNova® for best readability in low-light conditions. Thanks to a matching olive green high-tech ceramic triple-row bracelet with a titanium three-fold clasp, the new Captain Cook remains loyal with you through the most rugged and demanding of your explorations."
                  quantity="14"
                />
                <ProductCard
                  img="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_78x.jpg?v=1712579615"
                  title="Captain Cook High Tech Ceramic Skeleton"
                  price="4600"
                  rating={4}
                  img2="https://www.jurawatches.co.uk/cdn/shop/files/rdo-1009-rado-watch-captain-cook-high-tech-ceramic-skeleton-r32150162_4_78x.jpg?v=1712579615"
                  brand="Rado"
                  description="Rado Watch Captain Cook High Tech Ceramic Skeleton R32150162. The Captain Cook High-Tech Ceramic Skeleton showcases its innovative R808 movement, a marvel of contrasts, know-how and clever geometry, that allows a distinct view of the various parts. It’s equipped with an anti-magnetic and highly reliable Nivachron™ hairspring that has been fully tested in five positions and provides up to 80 hours of power reserve. The superb matt olive-green high-tech ceramic monobloc case is topped by a rose-gold-colour rotatable bezel with a matt olive-green ceramic insert to match the case and lugs, for visual harmony. The dial is clear and spartan, with generous geometric indices and hour/minute/second hands in rose-gold tones, treated with white Super-LumiNova® for best readability in low-light conditions. Thanks to a matching olive green high-tech ceramic triple-row bracelet with a titanium three-fold clasp, the new Captain Cook remains loyal with you through the most rugged and demanding of your explorations."
                  quantity="14"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div data-aos="fade-up" data-aos-anchor-placement="center-center">
            <div className="row">
              <div className="col-12">
                <div className="marquee-inner-wrapper bg-white p-3 card-wrapper">
                  <Marquee className="d-flex">
                    <div className="mx-4 w-25">
                      <img src={`${process.env.PUBLIC_URL}/images/brand-01.png`} alt="brand"></img>
                    </div>
                    <div className="mx-4 w-25">
                      <img src={`${process.env.PUBLIC_URL}/images/brand-02.png`} alt="brand"></img>
                    </div>
                    <div className="mx-4 w-25">
                      <img src={`${process.env.PUBLIC_URL}/images/brand-03.png`} alt="brand"></img>
                    </div>
                    <div className="mx-4 w-25">
                      <img src={`${process.env.PUBLIC_URL}/images/brand-04.png`} alt="brand"></img>
                    </div>
                    <div className="mx-4 w-25">
                      <img src={`${process.env.PUBLIC_URL}/images/brand-05.png`} alt="brand"></img>
                    </div>
                    <div className="mx-4 w-25">
                      <img src={`${process.env.PUBLIC_URL}/images/brand-06.png`} alt="brand"></img>
                    </div>
                    <div className="mx-4 w-25">
                      <img src={`${process.env.PUBLIC_URL}/images/brand-07.png`} alt="brand"></img>
                    </div>
                    <div className="mx-4 w-25">
                      <img src={`${process.env.PUBLIC_URL}/images/brand-08.png`} alt="brand"></img>
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          {/* <div data-aos="fade-up" data-aos-anchor-placement="center-center"> */}
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Lastest Blogs</h3>
              </div>
              <div className="row">
                <div className="col-3">
                  <BlogCard />
                </div>
                <div className="col-3">
                  <BlogCard />
                </div>
                <div className="col-3">
                  <BlogCard />
                </div>
                <div className="col-3">
                  <BlogCard />
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
