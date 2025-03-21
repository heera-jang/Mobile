import React, {useState , useEffect} from 'react';

function Footer() {

   const [upDown, setUpDown] = useState(false); //false(위)/true(아래)
   const [isOpen, setIsOpen] = useState(false);

   const famHandler = (e) => {
     e.preventDefault();
     setIsOpen(!isOpen); // 토글
   };
 
   const handleScroll = () => {
      //console.log(window.scrollY);
      if (window.scrollY > 300){
         setUpDown(true);
      }else{
         setUpDown(false);
      } 
    };

   useEffect(() => {
      // window에 scroll 이벤트를 넣는다.
      window.addEventListener('scroll', handleScroll);
      // 페이지를 벗어날 때 이벤트를 제거한다.
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

   const topHandler = (e) => {
      e.preventDefault();
      window.scroll({top:0 , behavior:'smooth'});
    };

    return (
       <footer>
            <a className={'top_move '+( upDown ? 'down' : 'up' )} href="#" onClick={topHandler}>TOP</a>
            <div className="footer_inner">
               <div className="footer_left">
                    <img src="/images/logo_bottom.png" alt="동화약품하단로고" />
                    <ul className="bottom_menu">
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>이메일무단수집거부</li>
                    </ul>
                    <address>
                            04522 서울특별시 중구 남대문로9길 24 패스트파이브 타워 6~8층<br />
                            Tel : 02-2021-9300 Mail : dongwha@dong-wha.co.kr
                    </address>
                    <p className="copy">Copyright(c) DONG WHA PHARM. CO., LTD. All Rights Reserved.</p>
                </div>
                <div className="footer_right">
                     <ul className="sns">
                        <li className="sns01"><a href="https://www.instagram.com/dongwha_pharm/?hl=ko" target="_blank" title="동화약품 인스타그램"></a></li>
                        <li className="sns02"><a href="https://comic.naver.com/webtoon/list?titleId=360841" target="_blank" title="동화약품 네이버 웹툰"></a></li>
                        <li className="sns03"><a href="https://www.youtube.com/channel/UCTvDA4HjUraby5HIHxRJD4A" target="_blank" title="동화약품 유튜브"></a></li>
                     </ul>
                     <div className="family">
                  <a className="arrow" onClick={famHandler} href="/">Family Site&ensp;&ensp;
                     <span><i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i></span>
                  </a>
                  <ul className={`list ${isOpen ? "open" : ""}`}>
                     <li><a href="https://www.dw1897.co.kr/emall/" target="_blank" title="동화 eMall 새창에 열림">동화 eMall</a></li>
                     <li><a href="http://www.whalmyungsu.co.kr/new/main.html" target="_blank" title="활명수 사이트 새창에 열림">활명수</a></li>
                     <li><a href="http://www.myeach.co.kr/" target="_blank" title="잇치 사이트 새창에 열림">잇치</a></li>
                     <li><a href="http://www.dwpharm-dc.com/" target="_blank" title="더마코스메틱 사이트 새창에 열림">더마코스메틱</a></li>
                  </ul>
              </div>
                </div>
                

            </div>
       </footer>
    );
  }

  export default Footer;