import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../features/productReducer";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import ReactStars from "react-rating-stars-component";
import { addToCart } from "../features/cartSlice";
import Swal from "sweetalert2";
const SingleProduct = () => {
  const id = useParams().id.slice(1);
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const productIndex = products.findIndex((product) => product.id === id);
  const product = products[productIndex];
  console.log(product);
  const img = product.img;

  const props = { width: 400, height: 500, zoomWidth: 500, img: img, scale: 5 };

  return (
    <div>
      <Meta tittle="Single Product" />
      <BreadCrumb tittle="Single Product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6">
              <div className="product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="product-image">
                <div>
                  <img src={product.img2}></img>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="tittle text-danger">{product.brand}</h3>
                </div>
                <div className="border-bottom">
                  <h3 className="tittle">{product.tittle}</h3>
                </div>
                <div className="border-bottom">
                  <p className="price my-2">${product.price}</p>
                </div>
                <div className="border-bottom">
                  <ReactStars
                    count={5}
                    edit={false}
                    value={product.rating}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className="price">Sold: {product.quantity}</p>
                </div>
                <div className="border-bottom my-2">
                  <p className="price">Color: {product.color}</p>
                </div>
                <div className="border-bottom my-2">
                  <p className="price">Size: {product.size}</p>
                </div>
                <div className=" my-2 mb-2">
                  <button
                    className="button"
                    onClick={() => {
                      dispatch(addToCart(product));
                      Swal.fire({
                        title: "Added to Cart",
                        text: "Success!",
                        icon: "success",
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>Description</h4>
                <p className=""> {product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="review-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
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
      </section>
    </div>
  );
};

export default SingleProduct;
