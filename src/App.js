
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import Navbar from './Components/Navbar';
// //import Slider from './components/Slider/Slider';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import ShopCategory from '../src/pages/ShopCategory';
// import Shop from '../src/pages/Shop';
// import Product from '../src/pages/Product';
// import Cart from '../src/pages/Cart';
// import Login from '../src/pages/Login';
// import Register from '../src/pages/Register';
// import Footer from './Components/Footer/Footer';
// import bannerDiamond from './Components/Asset/images/bannerDiamond.jpg';
// import bannerGold from './Components/Asset/images/bannerGold.jpg';
// import bannerSilver from './Components/Asset/images/bannerSilver.jpg';
// import ShopContextProvider from './Components/Context/ShopContext';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <ShopContextProvider> 
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Shop/>}/>
//         <Route path='/gold' element={<ShopCategory banner={bannerGold} category="gold"/>}/>
//         <Route path='/silver' element={<ShopCategory banner={bannerSilver} category="silver"/>}/>
//         <Route path='/diamond' element={<ShopCategory banner={bannerDiamond} category="diamond"/>}/>
//         <Route path='/product' element={<Product/>}>
//           <Route path=':productId' element={<Product/>}/>
//         </Route>
//         <Route>
//           <Route path='/cart' element={<Cart/>}/>
//           <Route path='/login' element={<Login/>}/>
//           <Route path='/register' element={<Register/>}/>
//         </Route>
//       </Routes>
//       <Footer/>
//       </ShopContextProvider>

//       </BrowserRouter>
      
      
//     </div>
//   );
// }

// export default App;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ShopCategory from '../src/pages/ShopCategory';
import Home from '../src/pages/Home';
import Product from '../src/pages/Product';
import Cart from '../src/pages/Cart';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Footer from '../src/Components/Footer/Footer';
import bannerDiamond from './Components/Asset/images/bannerDiamond.jpg';
import bannerGold from './Components/Asset/images/bannerGold.jpg';
import bannerSilver from './Components/Asset/images/bannerSilver.jpg';
import ShopContextProvider from './Components/Context/ShopContext';
import UserForm from './Components/UserForm';
import AboutUs from '../src/pages/About';
import ContactUs from '../src/pages/Contact';
//import ListEmployeeComponent from '../src/pages/ListEmployeeComponent';
import ViewPage from '../src/pages/ViewPage';
import Admin from '../src/pages/Admin';

//import ViewPage from "./ViewPage"; 
function App() {
  return (
    <div>
      <BrowserRouter>
        <ShopContextProvider> 
          <Navbar />
          <Routes>
            {/* ... Your routes */}
            <Route path='/home' element={<Home/>}/>
              <Route path='/gold' element={<ShopCategory banner={bannerGold} category="gold"/>}/>
              <Route path='/silver' element={<ShopCategory banner={bannerSilver} category="silver"/>}/>
              <Route path='/diamond' element={<ShopCategory banner={bannerDiamond} category="diamond"/>}/>
              <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
              </Route>
              <Route path='/about' element={<AboutUs/>}></Route>
              <Route path='/contact' element={<ContactUs/>}></Route>
              <Route>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                

                <Route path="/view" element={<ViewPage />} />

              </Route>
              <Route>
              <Route path='/admin' element={<Admin/>}/>
              </Route>
                <Route path='/userform' element={<UserForm/>}></Route>
               

          </Routes>
          <Footer />
        </ShopContextProvider>
      </BrowserRouter>

    </div>
  );
}
//  export function ProtectedRoutes(props) {
//   if (localStorage.getItem('user')) {
//     return props.children;
//   }else {
//     return <Navigate to="/login" />;
//   }
//  }

export default App;
