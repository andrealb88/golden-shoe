
// import { Link } from "react-router-dom";
import { CounterContext, CartContext } from "../../context/AppContext";
import Dropdown from "../dropdown/Dropdown";
import Button from "../button/Button";
import "./Nav.css";
import React, { useState, useEffect, useRef,useContext } from "react";

import { ReactComponent as Cart } from "../../assets/cart3.svg";
import { ReactComponent as HouseDoor } from "../../assets/house-door.svg";
import {ReactComponent as Search} from "../../assets/search.svg";
import { HashLink as Link } from 'react-router-hash-link';



function Header() {
let count = useContext(CounterContext);
let [cart, setCart] = useContext(CartContext);

  return (

    <Navbar>
        <div className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow ">
             <div className="logo"> 
               <img
                 className="logo ml-3"
                 src="./images/g-shoe-new-logo.jpg"
                 alt="logo"
               />
            </div>
             <div className="flex-justify-content">
           
            <Link to="products#title">
            <NavItem icon={<Search />} ></NavItem>
             </Link>
            <Link to="/">
            <NavItem icon={<HouseDoor />}>
            </NavItem>
          </Link>
            <NavItem icon={<Cart />}>
        <DropdownMenu>
        </DropdownMenu>
        <div className="dropdown-item bbtn-droopdown">
                <div className="moreProd">
                  <Link to="checkout#checkout">
                    <Button value="Go To CheckOut" />
                  </Link>
                </div>  
                </div>
      </NavItem>
      </div>
      </div>
    </Navbar>
  )

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  // const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  // function calcHeight(el) {
  //    const height = el.offsetHeight;
  //   setMenuHeight(height);
  // }

  return (
    <div className="dropdown" ref={dropdownRef}>
              <div className="counter">
                <p className="count">{count[0]}</p>
              </div>
        
            <div
              className="dropdown-menu mt-4"
              aria-labelledby="dropdownMenuButton"
            >
              <div className="items">
                {cart.length ? (
                  cart.map((item) => {
                    return <Dropdown key={item.id} item={item} />;
                  })
                ) : (
                  <p>Your cart is empty</p>
                )}
              </div>
              </div>
      </div>
  )        
}
}
export default Header;