
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Login from "./pages/Login";
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <main className="h-screen">
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
    );
}

export default App
