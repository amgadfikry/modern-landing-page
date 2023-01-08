import { useRef, useState } from "react";
import {IoIosClose, IoIosMenu} from "react-icons/io"

import "./navbar.css"
import logo from "../../assets/logo.svg"

function Navbar() {
    const[menuIcon,setMenuIcon] = useState(false)

    const handleMenu =(e)=>{
        menuIcon ? setMenuIcon(false) : setMenuIcon(true)
    }

    return (
        <nav className="navbar ">
            <div className="logo">
                <img src={logo} alt="logo of website"/>
            </div>
            <ul className={`menu ${menuIcon && "menu-active"}`}>
                <li className="menu-item"> <a href="#home" className="menu-link">Home</a> </li>
                <li className="menu-item"> <a href="#what-is-gpt" className="menu-link">What is GPT?</a> </li>
                <li className="menu-item"> <a href="#open-ai" className="menu-link">Open AI</a> </li>
                <li className="menu-item"> <a href="#case-studies" className="menu-link">Case Studies</a> </li>
                <li className="menu-item"> <a href="#library" className="menu-link">Library</a> </li>
                <div className="buttons">
                    <button className="transperent-btn btn">Sign In</button>
                    <button className="colored-btn btn">Sign Up</button>
                </div>
            </ul>
            <div className="icons" onClick={handleMenu} >
                {menuIcon ? <IoIosClose /> : <IoIosMenu /> }
            </div>
        </nav>
    );
}

export default Navbar;