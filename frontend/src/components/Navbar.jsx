import React, { useContext, useState, useEffect } from "react";
import { Auth } from "../contexts/Auth";
import { useLogout } from "../hooks/useLogout";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user } = useContext(Auth);
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  //theme toggle
  const [theme, setTheme] = useState("dark");
  function handleThemeToggle(event) {
    console.log(theme);
    const isChecked = event.target.checked;
    const newTheme = isChecked ? "cupcake" : "dark";
    setTheme(newTheme);
  }
  useEffect(() => {
    const htmlTag = document.getElementById("htmlTag");
    htmlTag.setAttribute("data-theme", theme);
  }, [theme]);

  //search by category
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSearch = (value) => {
    if (value) {
      navigate(`/?category=${value}`);
    }
  };

  return (
    <div className="navbar bg-base-100 mb-10">
      <div className="">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            checked={theme === "cupcake"}
            onChange={handleThemeToggle}
          />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">BAZAR</a>
      </div>
      <div className="flex">
        <div className="flex flex-row space-y-1">
          <div className="form-control w-full max-w-xs mb-1">
            <label className="label"></label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                handleSearch(e.target.value);
              }}
              className="select select-ghost w-full max-w-xs mb-1"
            >
              <option value="">Category</option>
              <option value="Clothes">Clothes</option>
              <option value="Dishes">Dishes</option>
              <option value="Toys">Toys</option>
              <option value="Electronics">Electronics</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Accesories">Accesories</option>
              <option value="Home Furniture">Home Furniture</option>
              <option value="Sport Materials">Sport Materials</option>
              <option value="Sea Materials">Sea Materials</option>
            </select>
          </div>

          <div>
            <button
              onClick={handleSearch}
              className="btn btn-ghost btn-circle mt-3"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/myProfile" className="justify-between">
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/addproduct">Add Product</NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
              <li>
                <NavLink to="">Home</NavLink>
              </li>
            </ul>
          </div>
        )}
        {!user && (
          <div className="btn-group">
            <NavLink className="btn btn-active" to="/login">
              Login
            </NavLink>
            <NavLink className="btn" to="/signup">
              Signup
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
