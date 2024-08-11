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
  const randomNumber = Math.floor(Math.random() * products.length);
  const randomProducts = [products[randomNumber], products[randomNumber + 1]];

  const [stock, setStock] = React.useState("inStock");
  const [size, setSize] = React.useState("");

  const listSizeS = products.filter((product) => product.size.includes("S"));
  const listSizeM = products.filter((product) => product.size.includes("M"));
  const listSizeL = products.filter((product) => product.size.includes("L"));
  const listSizeXL = products.filter((product) => product.size.includes("XL"));
  const [textPrice1, setTextPrice1] = React.useState(0);
  const [textPrice2, setTextPrice2] = React.useState(0);

  const [flag, setFlag] = React.useState("best-selling");
  const filterProduct = (filter, stock, color,sort) => {
    let listProduct = [];
  


    if (stock === "inStock") {
      listProduct = products.filter((product) => product.outOfStock === false);

      // loc theo gia price form to price to
      if (filter === "forPrice") {
        if (parseInt(priceFrom) >= 0 && parseInt(priceTo) <= 9999999) {
          listProduct = products.filter(
            (product) =>
              product.price * 1 >= parseInt(priceFrom) &&
              product.price * 1 <= parseInt(priceTo) &&
              product.outOfStock === false
          );
          return listProduct;
        }
      }
      if (filter === "Panerai") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Panerai" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Panerai" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Panerai" &&
              product.color === "red"
          );
          return listProduct;
        }

        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Panerai" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Panerai" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Panerai" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Panerai" &&
              product.color === "brown"
          );
          return listProduct;
        }
        listProduct = products.filter(
          (product) =>
            product.outOfStock === false && product.brand === "Panerai"
        );
        return listProduct;
      }

      if (filter === "Longines") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Longines" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Longines" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Longines" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Longines" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "Longines") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Panerai" &&
              product.color === "brown"
          );
          return listProduct;
        }
        listProduct = products.filter(
          (product) =>
            product.outOfStock === false && product.brand === "Longines"
        );
        return listProduct;
      }
      if (filter === "Chopard") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Chopard" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Chopard" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Chopard" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Chopard" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Chopard" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) =>
            product.outOfStock === false && product.brand === "Chopard"
        );
        return listProduct;
      }
      if (filter === "Gucci") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Gucci" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Gucci" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Gucci" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Gucci" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Gucci" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) => product.outOfStock === false && product.brand === "Gucci"
        );
        return listProduct;
      }
      if (filter === "Alasta") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Alasta" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Alasta" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Alasta" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Alasta" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Alasta" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) =>
            product.outOfStock === false && product.brand === "Alasta"
        );
        return listProduct;
      }
      if (filter === "TUDOR") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "TUDOR" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "TUDOR" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "TUDOR" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "TUDOR" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "TUDOR" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) => product.outOfStock === false && product.brand === "TUDOR"
        );
        return listProduct;
      }
      if (filter === "Garmin Epix Pro") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Garmin" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Garmin" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Garmin" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Garmin" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Garmin" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) =>
            product.outOfStock === false && product.brand === "Garmin"
        );
        return listProduct;
      }
      if (filter === "RADO") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Rado" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Rado" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Rado" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Rado" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false &&
              product.brand === "Rado" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) => product.outOfStock === false && product.brand === "Rado"
        );
        return listProduct;
      }
      if (filter === "manual") {
        listProduct = products.filter(
          (product) => product.outOfStock === false
        );
        if (color === "red") {
          listProduct = products.filter(
            (product) => product.outOfStock === false && product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false && product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false && product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false && product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === false && product.color === "brown"
          );
          return listProduct;
        }
      }
     


      return listProduct;
    } else if (stock === "outOfStock") {
      listProduct = products.filter((product) => product.outOfStock === true);
      // loc theo gia price form to price to

      if (filter === "Panerai") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Panerai" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Panerai" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Panerai" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Panerai" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Panerai" &&
              product.color === "brown"
          );
          return listProduct;
        }
        listProduct = products.filter(
          (product) =>
            product.outOfStock === true && product.brand === "Panerai"
        );
        return listProduct;
      }

      if (filter === "Longines") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Longines" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Longines" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Longines" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Longines" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "Longines") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Panerai" &&
              product.color === "brown"
          );
          return listProduct;
        }
        listProduct = products.filter(
          (product) =>
            product.outOfStock === true && product.brand === "Longines"
        );
        return listProduct;
      }
      if (filter === "Chopard") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Chopard" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Chopard" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Chopard" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Chopard" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Chopard" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) =>
            product.outOfStock === true && product.brand === "Chopard"
        );
        return listProduct;
      }
      if (filter === "Gucci") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Gucci" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Gucci" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Gucci" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Gucci" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Gucci" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) => product.outOfStock === true && product.brand === "Gucci"
        );
        return listProduct;
      }
      if (filter === "Alasta") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Alasta" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Alasta" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Alasta" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Alasta" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Alasta" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) => product.outOfStock === true && product.brand === "Alasta"
        );
        return listProduct;
      }
      if (filter === "TUDOR") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "TUDOR" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "TUDOR" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "TUDOR" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "TUDOR" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "TUDOR" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) => product.outOfStock === true && product.brand === "TUDOR"
        );
        return listProduct;
      }
      if (filter === "Garmin Epix Pro") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Garmin" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Garmin" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Garmin" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Garmin" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Garmin" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) => product.outOfStock === true && product.brand === "Garmin"
        );
        return listProduct;
      }
      if (filter === "RADO") {
        if (color === "red") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Rado" &&
              product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Rado" &&
              product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Rado" &&
              product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Rado" &&
              product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true &&
              product.brand === "Rado" &&
              product.color === "brown"
          );
          return listProduct;
        }

        listProduct = products.filter(
          (product) => product.outOfStock === true && product.brand === "Rado"
        );
        return listProduct;
      }
      // if (filter === "manual") {
      //   listProduct = products.filter(
      //     (product) => product.outOfStock === true
      //   );
      //   if (color === "red") {
      //     listProduct = products.filter(
      //       (product) => product.outOfStock === true && product.color === "red"
      //     );
      //     return listProduct;
      //   }
      //   if (color === "green") {
      //     listProduct = products.filter(
      //       (product) =>
      //         product.outOfStock === true && product.color === "green"
      //     );
      //     return listProduct;
      //   }
      //   if (color === "black") {
      //     listProduct = products.filter(
      //       (product) =>
      //         product.outOfStock === true && product.color === "black"
      //     );
      //     return listProduct;
      //   }
      //   if (color === "white") {
      //     listProduct = products.filter(
      //       (product) =>
      //         product.outOfStock === true && product.color === "white"
      //     );
      //     return listProduct;
      //   }
      //   if (color === "brown") {
      //     listProduct = products.filter(
      //       (product) =>
      //         product.outOfStock === true && product.color === "brown"
      //     );
      //     return listProduct;
      //   }
      // }

      if (filter === "manual") {
        listProduct = products.filter((product) => product.outOfStock === true);
        if (color === "red") {
          listProduct = products.filter(
            (product) => product.outOfStock === true && product.color === "red"
          );
          return listProduct;
        }
        if (color === "green") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true && product.color === "green"
          );
          return listProduct;
        }
        if (color === "black") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true && product.color === "black"
          );
          return listProduct;
        }
        if (color === "white") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true && product.color === "white"
          );
          return listProduct;
        }
        if (color === "brown") {
          listProduct = products.filter(
            (product) =>
              product.outOfStock === true && product.color === "brown"
          );
          return listProduct;
        }
        return listProduct;
      }
    }
  };


  const handleFilterChange = (event) => {
    setFlag(event.target.value);
    
  };

  // handle change stock radio
  const handleChange = (ev) => {
    console.log(ev.target.value);

    setStock(ev.target.value);
  };

  const [color, setColor] = React.useState("");
  const [priceFrom, setPriceFrom] = React.useState("");
  const [priceTo, setPriceTo] = React.useState("");

  // handle sort
  const handleSort= (flag ,clocks)=>{
   
    let sortList=[];
    if(flag==="best-selling"){
    sortList=  clocks.sort((a,b)=>b.quantity-a.quantity)
    return sortList;
    }
    else if(flag==="price-ascending"){
     sortList= clocks.sort((a,b)=>a.price-b.price)
      return sortList;
    }
    else if(flag==="price-descending"){
     sortList= clocks.sort((a,b)=>b.price-a.price)
      return sortList;
    }
    else if(flag==="title-ascending"){
      sortList=clocks.sort((a,b)=>a.tittle.localeCompare(b.tittle))
       return sortList;
    }
    else if(flag==="title-descending"){
     sortList= clocks.sort((a,b)=>b.tittle.localeCompare(a.tittle))
      return sortList;
    }
  

    


  }

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
                    <li onClick={() => setFilter("Panerai")}>Panerai</li>
                    <li onClick={() => setFilter("Longines")}>Longines</li>
                    <li onClick={() => setFilter("Chopard")}>Chopard</li>
                    <li onClick={() => setFilter("Gucci")}>Gucci</li>
                    <li onClick={() => setFilter("Alasta")}>Alasta</li>
                    <li onClick={() => setFilter("TUDOR")}>TUDOR </li>
                    <li onClick={() => setFilter("Garmin Epix Pro")}>
                      Garmin Epix Pro
                    </li>
                    <li onClick={() => setFilter("RADO")}>RADO</li>
                    <li onClick={() => setFilter("manual")}>All</li>
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
                        type="radio"
                        name="stockOption"
                        value="inStock"
                        id="inStock"
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="inStock">
                        In stock ({countStock})
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="stockOption"
                        value="outOfStock"
                        id="outOfStock"
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="outOfStock">
                        Out of stock ({countOutStock})
                      </label>
                    </div>
                  </div>

                  <h5 className="sub-tittle">Colors</h5>
                  <div>
                    <Color color={color} setColor={setColor} />
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
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="from"
                        value={textPrice1}
                        onChange={(e) => {
                          setTextPrice1(e.target.value);
                        }}
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
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="to"
                        value={textPrice2}
                        onChange={(e) => {
                          setTextPrice2(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="">
                    <button
                      className="button"
                      onClick={() => {
                        setPriceFrom(parseInt(textPrice1));
                        setPriceTo(parseInt(textPrice2));
                        setFilter("forPrice");
                      }}
                    >
                      Filter for price
                    </button>
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
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size"
                      />
                      <label className="form-check-label" htmlFor="size">
                        All ({countStock})
                      </label>
                    </div>
                    <div className="mt-3">
                      <button className="button">Filter for size</button>
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
                      value={flag}
                      onChange={handleFilterChange}
                    >
                     
                      <option
                        value="best-selling"
                        selected
                       
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
                  {handleSort(flag,filterProduct(
                    filter,
                    stock,
                    color,
                    size,
                    priceFrom,
                    priceTo,
                 
                  )).map((product) => {
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
                        quantity={product.quantity}
                        grid={grid}
                      />
                    );
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
