import { useContext, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Product from "./components/Product";
import Products from "./components/Products";
import Login from "./pages/Login";
import { Auth } from "./contexts/Auth";

function App() {
  const [products, setProducts] = useState([]);

  const { user } = useContext(Auth);
  return (
    
    <BrowserRouter>
    <Navbar/>
    <main className="h-screen">
      <Routes>
      <Route
            path="/"
            element={
              user ? (
                <Books setProducts={setProducts} products={products} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        <Route path="/:id" element={<Product />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
    );
}

export default App
