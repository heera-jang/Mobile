import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import img1 from '../assets/images/logo_top.png'; // 동화약품 로고
import { FaBars } from "react-icons/fa";

function Header() {
  const [upDown, setUpDown] = useState(false); // false(위)/true(아래)
  const [isSwitched, setIsSwitched] = useState(false); // 햄버거 메뉴 열림(true)/닫힘(false)
  const location = useLocation();

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      let threshold = 780; // 기본값 (index.html의 .visualBox 높이)

      // 현재 페이지가 index가 아니라면 첫 번째 section의 div 높이로 설정
      if (location.pathname !== '/') {
        const firstDiv = document.querySelector('section div:first-of-type');
        if (firstDiv) {
          threshold = firstDiv.offsetHeight;
        }
      }

      // 스크롤 위치에 따라 'up' 또는 'down' 클래스를 설정
      setUpDown(window.scrollY > threshold - 160);
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 컴포넌트 마운트 시 실행

    // 클린업 함수
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]); // location.pathname이 변경될 때마다 실행

  // 메뉴 토글 핸들러
  const navHandler = (e) => {
    e.preventDefault();
    setIsSwitched(!isSwitched);
  };

  // 메뉴 자동 닫힘 핸들러
  const closeHandler = () => {
    setIsSwitched(false);
  };

  return (
    <header className={upDown ? 'down' : 'up'}>
      <div className="header_inner">
        <h1>
          <NavLink to="/">
            <img src={img1} alt="동화약품 로고" />
            <span className='hidden'>동화약품 로고</span>
          </NavLink>
        </h1>
        <nav className={isSwitched ? 'show' : 'hide'} onClick={closeHandler}>
          <h2 className='hidden'>글로벌네비게이션</h2>
          <ul>
            <li><h3><NavLink to="/About">회사소개</NavLink></h3></li>
            <li><h3><NavLink to="/Develop">연구개발</NavLink></h3></li>
            <li><h3><NavLink to="/Product">제품정보</NavLink></h3></li>
            <li><h3><NavLink to="/Esg">ESG경영</NavLink></h3></li>
            <li><h3><NavLink to="/Community">커뮤니티</NavLink></h3></li>
            <li><h3><NavLink to="/Carrer">인재채용</NavLink></h3></li>
          </ul>
        </nav>
        <button onClick={navHandler}>
          <span className='hidden'>메뉴열기</span>
          <FaBars className="ico" />
        </button>
      </div>
    </header>
  );
}

export default Header;
