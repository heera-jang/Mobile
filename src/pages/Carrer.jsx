import React from 'react';
import IMAGES from "../assets/images/images.js";

import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

function Carrer() {
    SwiperCore.use([Navigation, Pagination, Scrollbar]);
    return (
       <article id="Carrer">
          <div className="content_top">
            <div>
                <img src={IMAGES.bg5} alt="인재채용 페이지 배경이미지" style={{width:'100%'}} />
                <p>recruitment guide</p>
                <h2>인재채용</h2> 
                <p></p>
            </div> 
             <div class="content_area">
                <div class="content_inner">
                    <p>채용구분</p>
                    <div>
                        <ul>
                            <li>・수시채용・</li>
                            <li>신규 사업 진출이나 결원에 의한 인력 수요가 생겼을때 수시로 공고를 통해 채용하는 방식으로
                                홈페이지상에서 온라인 지원 및 합격 여부 확인이 가능합니다.</li>
                        </ul>
                        <ul>
                            <li>・상시채용・</li>
                            <li>영업/마케팅, 연구/개발, 생산/품질, 기획분야와 전문직종(약사)에 대하여 상시 지원할 수 있으며,
                                상시 지원할 수 있으며, 결원 등에 의한 인력 수요발생시 별도의 공고없이
                                적임자를 선발하여 개별연락을 통해 채용절차를 진행하게 됩니다.</li>
                        </ul>
                     </div>
                </div>

            </div> 
          </div>
          <Swiper slidesPerView={1} spaceBetween={0} loop={true}
                navigation={{clickable:true}}
                 className="mySwiper2" >
                        <div className='carrerBox'>
                            <SwiperSlide><img src="/images/icon1.png" alt="화이투벤 이미지" />
                                <ul>
                                    <li>
                                        <p>서류검사</p>
                                    </li>
                                </ul>
                            </SwiperSlide> 
                        </div>
                        <SwiperSlide><img src="/images/icon2.png" alt="케어랩 이미지" />
                            <ul>
                                <li>
                                    <p>적성검사</p>
                                </li>
                            </ul>
                        </SwiperSlide> 
                        <SwiperSlide><img src="/images/icon3.png" alt="판콜 이미지" />
                            <ul>
                                <li>
                                <p>1차 면접</p>
                                </li>
                            </ul>
                        </SwiperSlide> 
                        <SwiperSlide><img src="/images/icon4.png" alt="활명수 이미지" />
                            <ul>
                                <li>
                                <p>2차 면접</p>
                                </li>
                            </ul>
                        </SwiperSlide> 
                        <SwiperSlide><img src="/images/icon5.png" alt="후시딘 이미지" />
                            <ul>
                                <li>
                                <p>최종합격</p>
                                </li>
                            </ul>
                        </SwiperSlide> 
                    </Swiper>
                <div class="content_bottom">
                    <p>채용절차</p>
                    <div class="bottom_inner">
                        <div class="img"></div>
                        <div class="bottom_text">
                            <strong>1. 지원서 접수</strong>
                            <p>지원자는 정해진 기간에 채용홈페이지를 접속하여 온라인 입사지원서를 접수시켜야 합니다.<br />
                                지원서 최종제출 후에는 수정되지 않기 때문에 최종제출 전까지 중간저장을 통해 지원서 수정을 해야 합니다.</p>
                            <strong>2. 서류전형</strong>
                            <p>지원서의 각 항목에 기재된 내용과 자기소개서를 바탕으로, 지원자가 지원직무와 동화약품에 적합한 자격, 경험,<br />
                                열정을 가진 인재인지 종합적으로 평가합니다.</p>
                            <strong>3. 온라인 인성검사</strong>
                            <p>서류전형 합격자에 한해, 온라인 인성검사를 응시 할 수 있는 자격이 주어집니다.<br />
                                유전적 · 환경적 요인들에 의해 형성된 개인의 특징적인 사고, 정서, 행동 패턴을 과학적으로 측정합니다.<br />
                                인성검사는 합격/불합격이 없습니다. 단, 인성검사를 실시하지 않는 경우 면접에 참석하실 수 없습니다.</p>
                            <strong>4. 면접전형</strong>
                            <p>실제 업무를 수행하기 위한 능력과 열정, 전략적 사고역량, 실무역량 등을 평가하는 면접으로 면접 진행방식은 다대일 방식입니다.
                            </p>
                            <strong>5. 최종합격</strong>
                            <p>최종 면접에 합격된 대상자는 채용 건강검진을 거쳐 동화약품의 신입 및 경력사원으로 입사하게 되며, 입문교육을 받게 됩니다.</p>
                        </div>
                    </div>
                    
                </div>
        </article>
          
    );
  }

  export default Carrer;




