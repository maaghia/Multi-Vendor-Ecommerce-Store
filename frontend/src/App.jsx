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
import UserProfile from "./pages/UserProfile";
import EditProfile from "./pages/EditProfile";
import Demo from "./pages/Demo";
import ProfileNFalert from "./components/profileNFalert";
import MyProducts from "./pages/MyProducts";

function App() {

  const { user } = useContext(Auth);
  /* return(
    <Demo/>
  ); */
   return (
    
    <BrowserRouter>
    <Navbar/>
    <main className="h-screen flex justify-center">
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
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/myProducts" element={<MyProducts />} />
        <Route path="/:id" element={<Product />} />
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

        <Route path="/signup" element={<Signup/>} />
        <Route path="/editProfile" element={<EditProfile/>} />
        <Route path="/profileNFalert" element={<ProfileNFalert/>} />
        

      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
    ); 
}

export default App
