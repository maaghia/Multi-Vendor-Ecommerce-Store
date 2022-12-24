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
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const [products, setProducts] = useState([]);

  const { user } = useContext(Auth);

  useFetchData("/api/products");
  
  console.log(  useFetchData("/api/products"));

  return (
    
    <BrowserRouter>
    <Navbar/>
    <main className="h-screen flex justify-center">
      <Routes>
        <Route path="/products" 
               element={<Products setProducts={setProducts} products={products} />}/>
        
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
