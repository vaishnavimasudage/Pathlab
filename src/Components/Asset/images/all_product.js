import p1_img from "./HEARTOUT.jpg";
import p2_img from "./CBC.jpg";
import p3_img from "./LEPROSYOUT.jpg";
import p4_img from "./DRUGSOUT.jpg";
import p5_img from "./THYROID.jpg";
import p6_img from "./BLOODCANCEROUT.jpg";
import p7_img from "./LIPID.jpg";
import p8_img from "./RT-PCR.JPG.jpg";


let all_product = [
  {
    id: 1,
    name: "HEART TEST",
    category: "CRITICAL",
    image: p1_img,
    new_price: 2000,
    old_price: 4000,
  },
  {
    id: 2,
    name: "CBC TEST",
    category: "IMPORTANT",
    image: p2_img,
    new_price: 499,
    old_price: 750,
  },
  {
    id: 3,
    name: "LEPROSY TEST",
    category: "CRITICAL",
    image: p3_img,
    new_price: 700,
    old_price: 1200,
  },
  {
    id: 4,
    name: "DRUGS TEST",
    category: "CRITICAL",
    image: p4_img,
    new_price: 600,
    old_price: 1200,
  },
  {
    id: 5,
    name: "THYROID TEST",
    category: "IMPORTANT",
    image: p5_img,
    new_price: 1000,
    old_price: 2000,
  },
  {
    id: 6,
    name: "BLOOD CANCER TEST",
    category: "CRITICAL",
    image: p6_img,
    new_price: 2500,
    old_price: 4000,
  },
  
  {
    id: 7,
    name: "LIPID PROFILE TEST",
    category: "IMPORTANT",
    image: p7_img,
    new_price: 1200,
    old_price: 2000,
  },
  {
    id: 8,
    name: "RT-PCR TEST",
    category: "COVID-19",
    image: p8_img,
    new_price: 250,
    old_price: 500,
  },
  
];

export default all_product;
