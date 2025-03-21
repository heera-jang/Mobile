import React from 'react';
import '../app.css';
import '../main.css';

import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
//import { NavLink } from 'react-router-dom';


function getImgUrl(url, name){
    return new URL(url+'/'+name+'.jpg', import.meta.url).href
    //new URL(이미지의 경로, import.meta.url).href -> vite의 이미지 불러오는 객체.
}


function Main() {

    SwiperCore.use([Navigation, Pagination, Scrollbar]);

    return (
        <>
          <section className='visual'>
          <Swiper
                spaceBetween={0} 
                pagination={{clickable:true}} 
                slidesPerView={1} 
                loop={true} 
                // autoplay={{
                //    delay: 4000,
                //    disableOnInteraction: false,
                // }}
                // modules={{Autoplay}}
                className="mySwiper1" >
                    <SwiperSlide><img src={getImgUrl('/images','visual1')} alt="" />
                        <ul>
                            <li className="link1">
                            <span>"신뢰를 바탕으로, <br />여러분의 건강을 지키는
                                                        파트너가 되겠습니다."</span></li>
                        </ul>
                    </SwiperSlide>
                    <SwiperSlide><img src={getImgUrl('/images','visual2')} alt="" />
                         <ul>
                            <li className="link2">
                            <span>“인간 중심의 헬스케어,<br />
                            동화약품과 함께 건강한 미래를 만듭니다.”</span></li>
                       </ul>
                    </SwiperSlide>
                    <SwiperSlide><img src="/images/visual3.jpg" alt="" />
                         <ul>
                            <li className="link3">
                            <span>“지속 가능한 발전으로 더 나은 세상을 위한 약속,<br />
                                        동화약품과 함께하세요.”</span>
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
                                설립된 이래 인간행복 경영을 통하여 고객 및 직원 모두의 행복을 <br />
                                추구하여 왔습니다. 이제 이러한 행복이 새로운 100년을 이어가도록 <br />
                                변화혁신 경영을 통하여 진정으로 행복한 기업 동화가 되려 합니다.</p>
                            <a href="./About.jsx">자세히 보기   +</a>
                        </div>
                    </div>      
                </div>
            </section>
          <section className="product">
                <div className="product_top">
                    <p>products</p>
                    <h3>제 품 정 보</h3>
                    <p>동화약품의 다양한 제품들을 만나보아요.</p>
                    <a href="./Product.jsx">자세히 보기   +</a>
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
            <section className="management">
                <div className="management_inner">
                        <div className="management_top" data-aos="fade-zoom-in">
                            <p>ESG management</p>
                            <h3>ESG 경 영</h3>
                            <a href="./sub4/sub4_1.html">자세히보기   +</a>
                        </div>
                </div>
            </section> 





            <section className="recruit">
                <div className="recruit_inner">
                    <p>recruit</p>
                    <h3>인 재 채 용</h3>
                    <p>행복을 추구하는 기업. 동화약품과 함께<br />
                        미래사회를 이끌어갈 인재를 찾습니다.</p>
                    <a href="./Carrer.jsx">자세히 보기   +</a>
                </div>
            </section>

        </> 
    );
  }
  

  export default Main;