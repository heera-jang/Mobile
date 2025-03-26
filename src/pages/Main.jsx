import React from 'react';
import '../app.css';
import '../main.css';

import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";


function getImgUrl(url, name){
    return new URL(url+'/'+name+'.jpg', import.meta.url).href
    //new URL(이미지의 경로, import.meta.url).href -> vite의 이미지 불러오는 객체.
}


function Main() {

    SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

    return (
        <>
          <section className='visual'>
          <Swiper
                spaceBetween={0} 
                pagination={{clickable:true}} 
                slidesPerView={1} 
                loop={true} 
                autoplay={{
                   delay: 3000,
                   disableOnInteraction: false,
                }}
                modules={{Autoplay}}
                className="mySwiper1" >
                    <SwiperSlide><img src={getImgUrl('/images','visual1')} alt="" />
                        <ul>
                            <li className="link1">
                            <span>" 여러분의 건강을 <br />지키는 파트너"</span></li>
                        </ul>
                    </SwiperSlide>
                    <SwiperSlide><img src={getImgUrl('/images','visual2')} alt="" />
                         <ul>
                            <li className="link1">
                            <span>“동화약품과 <br />함께 만드는 미래”</span></li>
                       </ul>
                    </SwiperSlide>
                    <SwiperSlide><img src="/images/visual3.jpg" alt="" />
                         <ul>
                            <li className="link1">
                            <span>“지속 가능한 발전으로<br /> 더 나은 세상을 위한 약속”</span>
                            </li>
                        </ul>
                    </SwiperSlide> 
                </Swiper>
          </section>
          <section className="company" >
                <div className="company_right" >
                    <p className="top1">about</p>
                    <h3>회 사 소 개</h3>
                    <img src="/images/company02.png" alt="" />
                    <div className="company_box">
                        <div className="company_top">
                            <div className="company_box2">
                                <img src="/images/donghwa_photo.png" alt="" />
                                <p>5대사장<br />
                                    보당 윤창식</p>
                            </div>
                            <div className="company_box3">
                                <p>"좋은 약이 아니면 만들지 마라. <br />
                                    동화는 동화식구 전체의 것이니, <br />
                                    온 식구가 정성을 다해 <br />
                                    다같이 잘 살 수 있는 기업으로 <br /> 이끌어라."</p>
                            </div>
                        </div>
                        <div className="company_bottom">
                            <p>동화약품은 1897년 대한민국 최초 제약기업으로<br />
                                설립된 이래 인간행복 경영을 통하여 고객 및 직원 모두의 행복을
                                추구하여 왔습니다. 이제 이러한 행복이 새로운 100년을 이어가도록
                                변화혁신 경영을 통하여 진정으로 행복한 기업 동화가 되려 합니다.</p>
                            <a href="/About">자세히 보기   +</a>
                        </div>
                    </div>      
                </div>
            </section>
          <section className="product">
                <div className="product_top">
                    <p>products</p>
                    <h3>제 품 정 보</h3>
                    <p>동화약품의 다양한 제품들을 만나보아요.</p>
                    <a href="/Product">자세히 보기   +</a>
                </div>
                <Swiper slidesPerView={1} spaceBetween={0} loop={true}
                pagination={{clickable:true}} navigation={{clickable:true}}
                scrollbar={{ draggable: true }}  className="mySwiper2" >
                    <div className='productBox'>
                        <SwiperSlide><img src="/images/product01.png" alt="화이투벤 이미지" />
                            <ul>
                                <li>
                                    <p>화이투벤<br />Whituben</p>
                                </li>
                            </ul>
                        </SwiperSlide> 
                    </div>
                    <SwiperSlide><img src="/images/product02.png" alt="케어랩 이미지" />
                        <ul>
                            <li>
                                <p>케어랩 인지력케어 DW2009<br />CARELAB</p>
                            </li>
                        </ul>
                    </SwiperSlide> 
                    <SwiperSlide><img src="/images/product03.png" alt="판콜 이미지" />
                        <ul>
                            <li>
                             <p>판콜<br />PANCOLD</p>
                            </li>
                        </ul>
                    </SwiperSlide> 
                    <SwiperSlide><img src="/images/product04.png" alt="활명수 이미지" />
                        <ul>
                            <li>
                             <p>활명수<br />WHAL MYUNG SU</p>
                            </li>
                        </ul>
                    </SwiperSlide> 
                    <SwiperSlide><img src="/images/product05.png" alt="후시딘 이미지" />
                        <ul>
                            <li>
                             <p>후시딘<br />Fucidin</p>
                            </li>
                        </ul>
                    </SwiperSlide> 
                    <SwiperSlide><img src="/images/product06.png" alt="잇치페이스트 이미지" />
                        <ul>
                            <li>
                              <p>잇치 페이스트<br />EACH Paste</p>
                            </li>
                        </ul>
                    </SwiperSlide> 
                </Swiper>
            </section>
            <section className="research">
                <div className="research_top">
                    <p>research and development</p>
                    <h3>연 구 개 발</h3>
                    <a href="/Develop">자세히 보기   +</a>
                </div>
                <div className="research_container">
                    <ul>
                        <li>
                            <div className='bg_box'>
                                <img src="/images/research_icon2.svg" alt="" />                            
                                <p className="p1">중점연구분야</p>
                                <p className="p2">동화약품은 지속적인 R&D 투자를 통해 신약 개발은 물론
                                제네릭, 일반의약품, 기능성 소재 등 다양한 분야에서 활발한 연구를 수행하고 있습니다.</p>
                            </div>
                        </li>
                    </ul>
                    <div className="photo"></div>
                </div>
            </section>
            
            <section className="management">
                <div className="management_top">
                    <p>ESG management</p>
                    <h3>ESG 경 영</h3>
                    <a href="/Esg">자세히보기   +</a>
                </div>
                <Swiper slidesPerView={1} spaceBetween={0} loop={true}
                     navigation={{clickable:true}}
                     className="mySwiper2" >
                        <div className='esgBox'>
                            <SwiperSlide className="img_box"><img src="/images/management.png" alt="ESG철학 이미지" /> 
                                <ul>
                                    <li>
                                        <p><span>ESG 철학</span><br /><br />
                                        동화약품은 1897년 창립된 국내 최초 제약사입니다.“민족이 합심하면 잘 살수 있다.”는
                                             정신 아래 국민의 안전과 건강을 최우선으로 생각하고 있습니다. </p>
                                        {/* <p>동화약품은 1897년 창립된 국내 최초 제약사입니다.“민족이 합심하면 잘 살수 있다.”는
                                             정신 아래 국민의 안전과 건강을 최우선으로 생각하고 있습니다. </p> */}
                                    </li>
                                </ul>
                            </SwiperSlide> 
                        </div>
                        <SwiperSlide className="img_box"><img src="/images/management2.png" alt="케어랩 이미지" />
                            <ul>
                                <li>
                                    <p><span>환경경영</span><br /><br />
                                    환경기본방침을 수립하여 환경경영활동을 적극적으로 수행하고 있습니다.</p>
                                    {/* <p>환경기본방침을 수립하여 환경경영활동을 적극적으로 수행하고 있습니다. </p> */}
                                </li>
                            </ul>
                        </SwiperSlide> 
                        <SwiperSlide className="img_box"><img src="/images/management3.png" alt="판콜 이미지" />
                            <ul>
                                <li>
                                    <p><span>인권경영</span><br /><br />
                                    전문성을 바탕으로 적극적으로 행동하고, 긍정적인 태도로 세상에 가치를 더하는 인재를 지향합니다.</p>
                                    {/* <p>전문성을 바탕으로 적극적으로 행동하고, 긍정적인 태도로 세상에 가치를 더하는 인재를 지향합니다.</p> */}
                                </li>
                            </ul>
                        </SwiperSlide> 
                        <SwiperSlide className="img_box"><img src="/images/management4.png" alt="활명수 이미지" />
                            <ul>
                                <li>
                                    <p><span>윤리경영</span><br /><br />
                                    동화정신에 내포되어 있는 봉사정신과 정도경영의 DNA는 127년간
                                         우리 동화약품의 문화 속에 살아 숨쉬고 있으며 우리 모두와 함께 하고 있습니다. </p>
                                    {/* <p>동화정신에 내포되어 있는 봉사정신과 정도경영의 DNA는 127년간
                                         우리 동화약품의 문화 속에 살아 숨쉬고 있으며 우리 모두와 함께 하고 있습니다. </p> */}
                                </li>
                            </ul>
                        </SwiperSlide>
                    </Swiper>
            </section> 


            <section className="recruit">
                  <p>recruit</p>
                  <h3>인 재 채 용</h3>
                <div className="recruit_inner">
                    <p>행복을 추구하는 기업. 동화약품과 함께<br />
                        미래사회를 이끌어갈 인재를 찾습니다.</p>
                    <a href="/Carrer">자세히 보기   +</a>
                </div>
            </section>

        </> 
    );
  }
  

  export default Main;