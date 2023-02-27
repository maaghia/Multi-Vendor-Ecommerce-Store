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
import UpdateProduct from "./pages/UpdateProduct";
import { AuthProvider } from "./contexts/Auth";

function App() {
  
  const { user } = useContext(Auth);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  //const history = useHistory();
  
  const handleSearch = (category, city) => {
    setSelectedCategory(category);
    setSelectedCity(city);
  };

   return (
    <AuthProvider>
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
        <Route path="/byCategory/:category" element={<ByCategory />} />
        <Route path="/byCity/:location" element={<ByCity />} />
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
        <Route path="editProduct/:productId" element={<UpdateProduct/>} />
        

      </Routes>
    </div>
    <Footer/>
    </main>
    
    </BrowserRouter>
    </AuthProvider>
    ); 
}

export default App
