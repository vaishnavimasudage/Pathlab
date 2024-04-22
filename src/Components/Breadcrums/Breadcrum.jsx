import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Asset/images/arrow_icon.png"; //imported image from assests

//div className= "breadcrum" is added here
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="" />
      {/* SHOP <img src={arrow_icon} alt="" /> */}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
    //breadcrum added to prduct.jsx @
  );
};
export default Breadcrum