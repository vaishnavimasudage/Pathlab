import React, {useContext} from "react";
import './ProductDisplay.css';
//import star icon from desired location
import star_icon from "../Asset/images/star_icon.jpeg";
import star_dull_icon from "../Asset/images/star_dull_icon.jpeg";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  



  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {/* <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" /> */}
          {/* <img src={product.image} alt="" /> */}
        </div>
        <div className="productdiplay-img">
          <img className="productdiplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>122</p>
        </div>
        <div className="productdiplay-right-prices">
          <div className="productdisplay-right-price-old">
            ₹ {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ₹ {product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
        ALL TESTS ARE PERFORM UNDER SUPERVISION OF HIGHLY EXPERINCED DOCTORD AND WELL QUALIFIED STAFF.
        </div>
        
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category : </span> IMPORTANT TEST
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay