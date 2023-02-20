import { useContext, useState, useEffect} from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Product from "./components/Product";
import Products from "./components/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Auth } from "./contexts/Auth";
import ProductsForm from "./components/ProductsForm";
import MyProfile from "./pages/MyProfile"
import ProductInfo from "./pages/ProductInfo";
import EditProfile from "./pages/EditProfile";
import MyProducts from "./pages/MyProducts";
import ByCategory from "./pages/ByCategory";
import ByCity from "./pages/ByCity";
import Search from "./components/Search";

function App() {
  
  const { user } = useContext(Auth);
   return (
    
    <BrowserRouter>
    <Navbar/>
    <main className="flex flex-col gap-60">
    <div className="flex justify-center ">
       <Routes>
        <Route path="/" 
               element={<Products/>}/>
        
        <Route 
            path="/addproduct" 
            element={
            user ? (
              <ProductsForm /> 
              ) : (
              <Navigate to="/login" />
              )
            } 
        />
         
         <Route path="/addproduct" element={<ProductsForm/>}/>
        <Route path="/ProductInfo" element={<ProductInfo />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/myProducts" element={<MyProducts />} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/byCategory" element={<ByCategory />} />
        <Route path="/byCity" element={<ByCity />} />
        <Route path="/:id" element={<ProductInfo />} />
        <Route path="/search" element={<Search/>}/>
        <Route
            path="/login"
            element={
              !user ? (
                <Login/>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !user ? (
                <Signup/>
              ) : (
                <Navigate to="/" />
              )
            }
          />

        <Route path="/editProfile" element={<EditProfile/>} />
        

      </Routes>
    </div>
    <Footer/>
    </main>
    
    </BrowserRouter>
    ); 
}

export default App
