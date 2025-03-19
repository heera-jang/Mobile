// navLinkimport React from 'react';
import { NavLink } from "react-router-dom";
import IMAGES from "../assets/images/images.js";

function About() {
    return (
      <div>
          <div className='box'></div>
          <div className='box2'></div>
          <div>
              <img src={IMAGES.room1} alt="" style={{width:'100%'}} />
              <p>About</p> 
              <div className="company_left"  data-aos="fade-right" data-aos-offset="500" ><img src="./images/company02.jpg" alt="" /></div>
                  <div className="company_right" data-aos="fade-left"  data-aos-duration="800">
                      <p className="top1">about</p>
                      <p>회 사 소 개</p>
                      <img className="company_img" src="./images/donghwa.png" alt="" />
                      <div className="company_box">
                          <div className="company_top">
                              <div className="company_box2">
                                  <img src="./images/donghwa_photo.png" alt="" />
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
                          <div className="company_bottom"  data-aos="fade-left"  data-aos-duration="800">
                              <p>동화약품은 1897년 대한민국 최초 제약기업으로<br />
                                  설립된 이래 인간행복 경영을 통하여 고객 및 직원 모두의 행복을 <br />
                                  추구하여 왔습니다. 이제 이러한 행복이 새로운 100년을 이어가도록 <br />
                                  변화혁신 경영을 통하여 진정으로 행복한 기업 동화가 되려 합니다.</p>
                              <NavLink href="./sub1/sub1_1.html">자세히 보기   +</NavLink>
                          </div>
                      </div>
                      
                  </div>
          </div> 
      </div>
    );
  }

  export default About;