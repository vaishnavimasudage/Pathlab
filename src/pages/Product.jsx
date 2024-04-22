import React,{ useContext } from "react";
import { ShopContext } from '../Components/Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

//breadcrum is to be added here
const Product = () => {
    const {all_product}=useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product;
