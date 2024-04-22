import p6_img from "./CBC.jpg";
import p20_img from "./THYROID.jpg";
import p33_img from "./LIPID.jpg";
import p34_img from "./RT-PCR.JPG.jpg";



let data_product = [
  {
    id: 2,
    name: "CBC TEST",
    category: "BLOOD TEST",
    image: p6_img,
    new_price: 499,
    old_price: 750,
  },
  {
    id: 5,
    name: "THYROID TEST",
    category: "GENERAL",
    image: p20_img,
    new_price: 1000,
    old_price: 2000,
  },
  {
    id: 7,
    name: "LIPID PROFILE TEST",
    category: "GENERAL TEST",
    image: p33_img,
    new_price: 1200,
    old_price: 2000,
  },
  {
    id: 8,
    name: "RT-PCR",
    category: "COVID-19",
    image: p34_img,
    new_price: 250,
    old_price: 500,
  },
  ];
  
  export default data_product;