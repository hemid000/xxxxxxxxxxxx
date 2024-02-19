import React, { useState } from "react";
// import styled from "styled-components";
// import Select from 'react-select';
import "./../../sass/Navbar.scss";
import Logo from "./../../images/Logo.svg";
// import { FaBars } from "react-icons/fa";
import { Spin as Hamburger } from "hamburger-react";
import Header from "../../Components/Pages/Home/Header";

const Navbar = () => {
  const [currentLanguage, setCurrentLanguage] = useState("ENG");

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
  };

  const [isOpen, setOpen] = useState(false);

  // const [toggle, toggleNav] = useState(false);



  return (

    <>
      <nav id="nav" >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3 col-md-2">
              <div className="left_side">
                <div className="logo">
                  <img src={Logo} alt="" />
                </div>
              </div>
            </div>
            <div className="col-9 normal_part col-md-10">
              <ul className="right_side justify-content-end">
                <li className="navbar_li">Haqqımızda</li>
                <li className="navbar_li">Xidmətlər</li>
                <li className="navbar_li">Layihələr</li>
                <li className="navbar_li">Əlaqə</li>
                <li>
                  <select
                    id="languageSelect"
                    value={currentLanguage}
                    onChange={handleLanguageChange}
                  >
                    <option value="Az">Az</option>
                    <option value="En">En</option>
                  </select>
                </li>
                <li>
                  <button>Sifariş et</button>
                </li>
                <li className="nav_mini_li" >
                  <div className={isOpen ? 'hamburger-react-border' : ''}>
                    <Hamburger
                      toggled={isOpen}
                      toggle={setOpen}
                    // rounded={isOpen}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav id="nav_mobile" className={isOpen ? 'open' : ''}>
        <ul>
          <li className="navbar_li">Haqqımızda</li>
          <li className="navbar_li">Xidmətlər</li>
          <li className="navbar_li">Layihələr</li>
          <li className="navbar_li">Əlaqə</li>
        </ul>
      </nav>
      <Header />
    </>
  );
};

export default Navbar;
