import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="p1">
      <div className="p1-texts">
        <h1 className="p1-title"> Create & Inspire. Life is Beautiful</h1>
        <p1 className="p1-desc">
          Live Better. Make lives Better. Life has no limitations, except the
          ones you make.
        </p1>
        <br />
        <h3 className="p1-co">
          <b>
            Following are the modules of a Network Optimization. Please click to
            go through the code..
          </b>
        </h3>
      </div>

      <div className="p1-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
