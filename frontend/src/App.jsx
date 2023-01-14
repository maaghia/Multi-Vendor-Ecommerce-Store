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

import UserProfile from "./pages/UserProfile";

function App() {

  const { user } = useContext(Auth);

  return (
    
    <BrowserRouter>
    <Navbar/>
    <main className="h-screen flex justify-center">
      <Routes>
        <Route path="/products" 
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
        
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
    );
}

export default App
