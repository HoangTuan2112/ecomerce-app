import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductRequest } from "../features/productReducer";
const OurStore = () => {
  const [grid, setGrid] = React.useState(4);
  const url = "https://669f2742b132e2c136fcdd36.mockapi.io/student/student";
  const [products, setProducts] = React.useState([]);

  // so luong kho
  const countStock = products.filter(
    (product) => product.outOfStock !== true
  ).length;
  const countOutStock = products.filter(
    (product) => product.outOfStock === true
  ).length;

  // so luong size
  const countSizeS = products.filter((product) =>
    product.size.includes("S")
  ).length;
  const countSizeM = products.filter((product) =>
    product.size.includes("M")
  ).length;
  const countSizeL = products.filter((product) =>
    product.size.includes("L")
  ).length;
  const countSizeXL = products.filter((product) =>
    product.size.includes("XL")
  ).length;

  const randomProducts = products
    .sort(() => Math.random() - Math.random())
    .slice(0, 2);
  const rating1 = products[0]?.rating.toString();
  // Panerai
  // Longines
  // Chopard
  // Gucci
  // Alsta
  // TUDOR
  // Garmin Epix Pro
  // RADO

  const filterProduct = (filter) => {
    let listProduct = [];
    if (filter === "best-selling") {
      // quantity la so luong san pham ban ra
      listProduct = products.sort((a, b) => b.quantity - a.quantity);
      return listProduct;
    } else if (filter === "title-ascending") {
      listProduct = products.sort((a, b) => a.tittle.localeCompare(b.tittle));
      return listProduct;
    } else if (filter === "title-descending") {
      listProduct = products.sort((a, b) => b.tittle.localeCompare(a.tittle));
      return listProduct;
    } else if (filter === "price-ascending") {
      listProduct = products.sort((a, b) => a.price - b.price);
      return listProduct;
    } else if (filter === "price-descending") {
      listProduct = products.sort((a, b) => b.price - a.price);
      return listProduct;
    } else if (filter === "manual") {
      listProduct = products;
      return listProduct;
    }else if(filter==="Panerai"){
      listProduct = products.filter((product) => product.brand === "Panerai");
      return listProduct;
    }else if(filter==="Longines"){
      listProduct = products.filter((product) => product.brand === "Longines");
      return listProduct;
    }else if(filter==="Chopard"){
      listProduct = products.filter((product) => product.brand === "Chopard");
      return listProduct;
    }else if(filter==="Gucci"){
      listProduct = products.filter((product) => product.brand === "Gucci");
      return listProduct;
    }else if(filter==="Alasta"){
      listProduct = products.filter((product) => product.brand === "Alasta");
      return listProduct;
    }
    else if(filter==="TUDOR"){
      listProduct = products.filter((product) => product.brand === "TUDOR");
      return listProduct;
    }
    else if(filter==="Garmin Epix Pro"){
      listProduct = products.filter((product) => product.brand === "Garmin");
      return listProduct;
    }
    else if(filter==="RADO"){
      listProduct = products.filter((product) => product.brand === "Rado");
      return listProduct;
    }


  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  console.log(filterProduct("best-selling"));
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);
  const [filter, setFilter] = React.useState("manual");
  return (
    <div>
      <Meta tittle="Our Store" />
      <BreadCrumb tittle="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-tittle">Shop By Brand</h3>
                <div>
                  <ul className="ps-0">
                    <li onClick={()=>setFilter("Panerai")}>Panerai</li>
                    <li onClick={()=>setFilter("Longines")}>Longines</li>
                    <li onClick={()=>setFilter("Chopard")}>Chopard</li>
                    <li onClick={()=>setFilter("Gucci")}>Gucci</li>
                    <li onClick={()=>setFilter("Alasta")}>Alasta</li>
                    <li onClick={()=>setFilter("TUDOR")}>TUDOR </li>
                    <li onClick={()=>setFilter("Garmin Epix Pro")}>Garmin Epix Pro</li>
                    <li onClick={()=>setFilter("RADO")}>RADO</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-tittle">Filter By</h3>
                <div>
                  <h5 className="sub-tittle">Available</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In stock ({countStock})
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out of stock ({countOutStock})
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-tittle">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div class="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        class="form-label"
                      >
                        From
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="from"
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        class="form-label"
                      >
                        To
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="to"
                      />
                    </div>
                  </div>
                  <h5 className="sub-tittle">Colors</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-tittle">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size"
                      />
                      <label className="form-check-label" htmlFor="size">
                        S ({countSizeS})
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size"
                      />
                      <label className="form-check-label" htmlFor="size">
                        M ({countSizeM})
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size"
                      />
                      <label className="form-check-label" htmlFor="size">
                        L ({countSizeL})
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size"
                      />
                      <label className="form-check-label" htmlFor="size">
                        XL ({countSizeXL})
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-tittle">Random Product</h3>
                <div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-25">
                      <img
                        src={randomProducts[1]?.img}
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h5> Smart Watch best for students</h5>
                      <ReactStars
                        count={5}
                        edit={false}
                        value={5}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b className="price">${randomProducts[1]?.price}</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-25">
                      <img
                        src={randomProducts[0]?.img}
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h5> Smart Watch best for students</h5>
                      <ReactStars
                        count={5}
                        edit={false}
                        value={5}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b className="price">${randomProducts[0]?.price}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select
                      name=""
                      className="form-control form-select"
                      id=""
                      value={filter}
                      onChange={handleFilterChange}
                    >
                      <option value="manual" >
                        Featured
                      </option>
                      <option
                        value="best-selling"

                        // onSelect={() => {setFilter("best-selling");console.log(filterProduct(filter))}}
                      >
                        Best selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">
                      {products.length} products
                    </p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="/images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid-view"
                      />{" "}
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="/images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid-view"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="/images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid-view"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="/images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid-view"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  {filterProduct(filter).map((product) => {
                    if (product.outOfStock !== true) {
                      return (
                        <ProductCard
                          key={product.id}
                          img={product.img}
                          title={product.tittle}
                          price={product.price}
                          rating={product.rating}
                          img2={product.img2}
                          brand={product.brand}
                          description={product.description}
                          grid={grid}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
