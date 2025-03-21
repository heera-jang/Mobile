import React from 'react';
import IMAGES from "../assets/images/images.js";
import "./sub.css"



function About() {
    return (

        <article id="About">
            <div className="content_top">
                 <img src={IMAGES.room1} alt="회사소개 페이지 배경이미지" style={{width:'100%'}} />
                <p>ceo message</p>
                <h2>회사소개</h2> 
                <p></p>
            </div> 
            <div className="content_area">
                <div className="content_left">
                        <img src="/images/content1_company.jpg" alt="동화약품 CEO 이미지" />
                </div>
                <div className="content_right">
                        <p>저희 동화는 <strong>"좋은 약을 만들어 소비자에게 봉사하고 그 효험을 본 정당한 대가로 경영되는 회사"</strong>라는 
                            고객의 안전과 건강 최우선의 기업정신 하에 고객의 행복을 추구하고 있습니다.<br /><br />
                            또한, 저희 동화인은 <strong>"젊어서 정당하게 땀흘려 일하고 노후에 잘 살아 보려는 
                                동화식구의 회사"</strong> 라는 직원 개개인의 가치 존중 이념 하에 모두 회사의 주인이라는 신뢰와 믿음을 바탕으로 고객 한분 한분께 다가서고 있습니다.</p>
                        <p><strong>인류건강과 행복한 삶을 추구하는 동화의 노력을 지켜봐 주십시오.<br />
                            감사합니다.</strong></p><br />
                        <p><strong>인간행복 경영<br />
                            회장 윤 도 준</strong> 전문의 의학박사 </p>
                </div>
                <img src="/images/content1_bg.png" alt="동화약품 글씨 이미지" />
            </div>
        </article>
    );
  }

  export default About;