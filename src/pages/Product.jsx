import React from 'react';
import IMAGES from "../assets/images/images.js";

function Product() {
    return (
    <article id="Product">
        <div className="content_top">
                <img src={IMAGES.room3} alt="제품소개 페이지 배경이미지" style={{width:'100%'}} />
                <p>product</p>
                <h2>제품소개</h2> 
                <p></p>
            </div> 
        <div class="top_text">
            <p>"<span>언제나 가까이에서 건강을 지키는 동화약품</span>의 일반의약품, 당신의 일상에 믿음을 더합니다."</p>
        </div>
        <div className="title">
            <h3>활명수</h3>
            <p>WHAL MYUNG SU</p>
        </div>
        <div className="content_inner">
            
            <div>
                <img src="/images/sub3_1.png" alt="활명수 이미지" />
            </div>
            <div className="text_line">
                <p><img src="/images/sub3_line1.svg" alt="" /></p>
                <p><img src="/images/sub3_line1.svg" alt="" /></p>
                <p><img src="/images/sub3_line1.svg" alt="" /></p>
            </div>
            <div className='text'>
                <div className="text_right">
                    <p>효능, 효과</p>
                    <p>식욕감퇴(식욕부진), 위부팽만감, 소화불량, 과식, 체함, 구역, 구토</p>
                    <p>용법, 용량</p>
                   <p>15세 이상 : 1회 1병 (75mL)</p>
                   <p>제품 사용설명</p>
                    <p> 11세 이상-15세 미만 : 1회 2/3병 (50mL)<br />
                        8세 이상-11세 미만 : 1회 1/2병 (37.5mL)<br />
                        5세 이상-8세 미만 : 1회 1/3병 (25mL)<br />
                        3세 이상-5세 미만 : 1회 1/4병 (18.75mL)<br />
                        1세 이상-3세 미만 : 1회 1/5병 (15mL)<br /></p>
                </div>
            </div>
        </div>
        <div className="title">
            <h3>판콜</h3>
            <p>PANCOLD</p>
        </div>
        <div className="content_inner">
            <div>
                <img src="/images/sub3_2.png" alt="판콜 이미지" />
            </div>
            <div className="text_line">
                <p><img src="/images/sub3_line1.svg" alt="" /></p>
                <p><img src="/images/sub3_line1.svg" alt="" /></p>
                <p><img src="/images/sub3_line1.svg" alt="" /></p>
            </div>
            <div className='text'>
                <div className="text_right">
                    <p>효능, 효과</p>
                    <p>감기증상(콧물, 코막힘, 재채기, 기침, 인후통, 가래, 오한, 발열, 두통, 관절통)의 완화</p>
                    <p>용법, 용량</p>
                   <p>1일 3회 식후 30분에 복용</p>
                   <p>※ 포장단위</p>
                    <p> - 판콜에스 : 30mL/병 X 5병<br />
                        - 판콜에이 : 30mL/병 X 3병<br /><br />
                        * 다음 용량을 1일 3회 식후에 복용한다. 복용간격은 4시간 이상으로 한다.</p>
                </div>
            </div>
        </div>
        <div className="title">
            <h3>잇치 페이스트</h3>
            <p>EACH Paste</p>
        </div>
        <div className="content_inner last">
            
            <div>
                <img src="/images/sub3_3.png" alt="잇치 이미지" />
            </div>
            <div className="text_line">
                <p><img src="/images/sub3_line1.svg" alt="" /></p>
                <p><img src="/images/sub3_line1.svg" alt="" /></p>
                <p><img src="/images/sub3_line1.svg" alt="" /></p>
            </div>
            <div className='text'>
                <div className="text_right">
                    <p>효능, 효과</p>
                    <p>치은염(잇몸염)ㆍ치조 농루에 의한 여러 증상(잇몸의 부기ㆍ출혈ㆍ고름 등)의 완화</p>
                    <p>용법, 용량</p>
                   <p>1회 1g을 칫솔에 묻혀 1일 2회 잇몸을 마사지한다.</p>
                   <p>제품 사용설명</p>
                    <p> [잇치 페이스트 (120g/튜브)] 1g 중<br />
                        몰약틴크 .................. 6.2mg<br />
                        라타니아틴크 .......... 12.5mg<br />
                        카모밀레틴크 ........... 12.5mg</p>
                </div>
            </div>
        </div>

    </article>
               
           
    );
  }

  export default Product;