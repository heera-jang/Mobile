import React from 'react';
import IMAGES from "../assets/images/images.js";

function Develop() {
    return (
        <article id="Develop">
            <div className="content_top">
                <img src={IMAGES.bg2} alt="연구개발 페이지 배경이미지" style={{width:'100%'}} />
                <p>research and development</p>
                <h2>연구개발</h2> 
                <p></p>
            </div> 
            <div className="main_content">
                <div className="bg_img"></div>
                <p>동화약품 연구소는 지속적인 R&D 투자를 통해 <br />
                    신약 개발은 물론 제네릭, 일반의약품, 기능성 소재 등 다양한 분야에서 활발한 연구를 수행하고 있습니다.</p>
            </div>
            <div className="box">
                <div>
                    <i className="fa-solid fa-book-medical" /><br />
                    <strong>기능성 소재</strong>
                    <p>차별화된 신규소재 개발 및 고령친화 기능성 식품 연구 개발</p>
                </div>
                <div>
                    <i className="fa-solid fa-hand-holding-medical"></i><br />
                    <strong>신약</strong>
                    <p>미래 제약시장을 선도하며 글로벌 제약사의 기술도입 욕구가 높은 혁신 신약개발 연구</p>
                </div>
                <div>
                    <i className="fa-solid fa-flask"></i><br />
                    <strong>개량 신약</strong>
                    <p>의료현장의 요구가 높은 신규 조성복합제, 서방정 등 연구</p>
                </div>
                <div>
                    <i className="fa-solid fa-dna"></i><br />
                    <strong>제네릭</strong>
                    <p>시장 영향력이 큰 오리지널 특허만료 의약품의 국산화 연구</p>
                </div>
                <div>
                    <i className="fa-solid fa-tablets"></i><br />
                    <strong>일반의약품</strong>
                    <p>소비나 니즈와 특성에 맞춘 차별화 컨셉의 일반의약품 개발 연구</p>
                </div>
            </div>

    </article>      
           
    );
  }

  export default Develop;