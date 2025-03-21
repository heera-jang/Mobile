import React from 'react';
import IMAGES from "../assets/images/images.js";

function Esg() {
    return (
        <article id="Esg">
            <div className="content_top">
                    <img src={IMAGES.bg4} alt="ESG경영 페이지 배경이미지" style={{width:'100%'}} />
                    <p>ESG management</p>
                    <h2>ESG경영</h2> 
                    <p></p>
            </div>
            <div class="content_area">
                <p class="p1">
                <strong>ESG 경영(Environmental, Social, Governance)</strong>은 기업이 지속 가능한 성장을 위해
                        환경(E), 사회(S), 지배구조(G) 측면에서 책임 있는 활동과 전략을 수행하는 경영 방식을 의미합니다.
                        이는 기업의 장기적인 가치를 창출하고 이해관계자들에게 신뢰를 제공하며, 기업의 사회적 책임을 다하기 위한 필수 요소로 여겨지고 있습니다. 
                </p>
                <ul>
                    <li>
                        <img src="/images/a1.jpg" alt="" />
                        <div>
                            <h3>환경</h3>
                            <p>
                            기업이 환경에 미치는 영향을 최소화하고,
                                    지속 가능한 미래를 위해 기여하는 활동을 포함합니다.<br />
                                    ・탄소 배출 감소
                                    ・환경 보호 활동
                                    ・친환경 제품
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src="/images/a2.jpg" alt="" />
                        <div>
                            <h3>사회</h3>
                            <p>
                            기업이 사회적 책임을 다하고 이해관계자들과 긍정적인 관계를 유지하며, <br />
                                공정하고 안전한 사회를 만드는 데 기여합니다. <br />
                                ・인권 존중 
                                ・다양성 및 포용성 
                                ・사회공헌 
                            </p>
                        </div>
                    </li>
                    <li >
                        <img src="/images/a3.jpg" alt="" />
                        <div>
                            <h3>지배구조</h3>
                            <p>
                            투명하고 공정한 경영 구조를 통해 기업의 지속 가능성을 보장하고, 이해관계자들의 신뢰를 확보합니다.<br />
                            ・투명성 강화
                            ・윤리 경영
                            ・사회 독립성
                            ・위험 관리
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

         </article>
           
    );
  }

  export default Esg;