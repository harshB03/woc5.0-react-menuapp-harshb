import React from 'react'
import './Navbar.css'
import {Link, useLocation} from 'react-router-dom'
import {Navbar as NavbarBs} from 'react-bootstrap'
import { ShoppingCart } from 'phosphor-react'
import { FiSearch } from 'react-icons/fi';
// import {
//   Badge,
//   Button,
//   Container,
//   Dropdown,
//   FormControl,
//   Nav,
// } from "react-bootstrap";
// import { FaShoppingCart } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";
// import useShoppingCart from "../Cart/Shoppingcontext"
export default function Navbar() {
  // const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBs sticky="top" >
    <nav className="navbar">
        <div className="navbar-logo">
            <h2 className="name"><Link to="/" style={{color:"white", textDecoration:"none"}}>Food Vault</Link></h2>
        </div>
        <ul className="navbar-links">
            
            {/* <li className="li-links"><Link to="/">Home</Link></li> */}
            {/* <Navbar.Text></Navbar.Text></> */}
            {/* <input class="form-control md mr-sm-2 medium" type="search" placeholder="Search" aria-label="Search"></input> */}
            {/* <div className="flex justify-center bg-gray-200 h-10 rounded-md sm:pl-2 sm:w-[400px] lg:w-[400px] items-center"> */}
                    {/* <input type="search" className='hidden sm:flex bg-transparent p-2 sm:w-full focus:outline-none text-black ' placeholder='search..' />
                    <FiSearch size={5} className="bg-black text-white p-[10px] h-10 rounded-md w-10 font-bold " /> */}
                    {/* <input id="search" type="search" placeholder='Search your dish here' style={{ width: "100%",
  border:" 3px solid #00B4CC",
  borderRight: "none",
  padding: "5px",
  height: "20px",
  borderRadius:" 5px 0 0 5px",
  outline: "none",
  color: "#9DBFAF"}}></input>
  <button type="submit" class="searchButton">
        <i class="fa fa-search" style={{width: "40px",
  height: "36px",
  border: "1px solid #00B4CC",
  background: "#00B4CC",
  textAlign: "center",
  color: "#fff",
  borderRadius: "0 5px 5px 0",
  fontSize: "20px"}}></i> */}
     {/* </button>
            </div> */}

            {/* <input id='search-btn' type='checkbox'/>
            <label for='search-btn'>Show search bar</label> */}
            {/* <input id='search-bar' type='text' placeholder='Search...'/> */}
            <li className="li-links"><Link to="/menu">Menu</Link></li>
            <li className="li-links"><Link to="/about">About Us</Link></li>
            <li className="li-links"><Link to="/login">Login</Link></li>
            <li className="li-links"><Link to="/signup">SignUp</Link></li>
            <li className="li-links"><Link to="/cart"><ShoppingCart size={32}/></Link></li>
        </ul>
    </nav>
    </NavbarBs>
  )
}
