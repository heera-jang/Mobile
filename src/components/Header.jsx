import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import img1 from '../assets/images/logo_top.png';
import { FaBars } from "react-icons/fa";

function Header() {

  const [isSwitched, setIsSwitced] = useState(false); //햄버거 메뉴 열림(true)/닫힘(false)
  const navHandler = (e) => {
    e.preventDefault();
    setIsSwitced(!isSwitched);  //메뉴 토글
  };

  const closeHandler = () => {
    setIsSwitced(false);  //메뉴 자동으로 닫힘
  };

    return (
      <header>
       <div className="header_inner"> 
          <h1><NavLink to="/" ><img src={img1} alt="동화약품" /></NavLink></h1>
          <nav className={ isSwitched ? 'show' : 'hide' } onClick={closeHandler}>
              <ul>
                  <li><h3><NavLink to="/About">회사소개</NavLink></h3></li>
                  <li><h3><NavLink to="/Develop">연구개발</NavLink></h3></li>
                  <li><h3><NavLink to="/Product">제품정보</NavLink></h3></li>
                  <li><h3><NavLink to="/Esg">ESG경영</NavLink></h3></li>
                  <li><h3><NavLink to="/Community">커뮤니티</NavLink></h3></li>
                  <li><h3><NavLink to="/Carrer">인재채용</NavLink></h3></li>
              </ul>
            </nav>
            <button onClick={navHandler}><FaBars className="ico" /></button>
         </div>
       </header>
    );
  }

  export default Header;