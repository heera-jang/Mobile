import React from 'react';
import IMAGES from "../assets/images/images.js";

function Esg() {
    return (
        <article id="Esg">
        <div className="content_top">
                <img src={IMAGES.room4} alt="ESG경영 페이지 배경이미지" style={{width:'100%'}} />
                <p>ESG management</p>
                <h2>ESG경영</h2> 
                <p></p>
        </div>
            <div class="content_area">
                <div class="esgText">
                    <p><strong>ESG 경영(Environmental, Social, Governance)</strong>은 기업이 지속 가능한 성장을 위해<br />
                        환경(E), 사회(S), 지배구조(G) 측면에서 책임 있는 활동과 전략을 수행하는 경영 방식을 의미합니다. <br />
                        이는 기업의 장기적인 가치를 창출하고 이해관계자들에게 신뢰를 제공하며, 기업의 사회적 책임을 다하기 위한 필수 요소로 여겨지고 있습니다. </p>
                </div>
                <div class="box">
                    <ul>
                        <li>
                            <img src="/images/a1.jpg" alt="활명수 이미지" />
                            <dl>
                                <dt>환경</dt>
                                <dd>
                                    기업이 환경에 미치는 영향을 최소화하고, <br />
                                    지속 가능한 미래를 위해 기여하는 활동을 포함합니다.<br />
                                    ・탄소 배출 감소<br />
                                    ・자원 효율화<br />
                                    ・환경 보호 활동<br />
                                    ・친환경 제품
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <img src="/images/a2.jpg" alt="활명수 이미지" />
                            <dl>
                                <dt>사회</dt>
                                <dd>
                                    기업이 사회적 책임을 다하고 이해관계자들과 <br /> 긍정적인 관계를 유지하며, <br />
                                    공정하고 안전한 사회를 만드는 데 기여합니다. <br />
                                    ・인권 존중 <br />
                                    ・다양성 및 포용성 <br />
                                    ・사회공헌 <br />
                                    ・소비자 신뢰
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <img src="/images/a3.jpg" alt="활명수 이미지" />
                            <dl>
                                <dt>지배구조</dt>
                                <dd>
                                    투명하고 공정한 경영 구조를 통해<br /> 기업의 지속 가능성을 보장하고, <br />
                                    이해관계자들의 신뢰를 확보합니다.<br />
                                    ・투명성 강화<br />
                                    ・윤리 경영<br />
                                    ・사회 독립성<br />
                                    ・위험 관리
                                </dd>
                            </dl>
                            
                        </li>
                    </ul>
                </div>
                <div class="innerTop">
                    <div>
                        <strong>ESG</strong>
                    </div>
                    <div>
                        <p>
                            <span>・기업 이미지 및 신뢰성 향상</span><br /> ESG 경영을 통해 소비자와 투자자의 신뢰를 얻습니다.<br />
                            <span>・지속 가능한 성장</span><br />단기적인 이익보다 장기적인 성장을 추구하며, 사회적 가치 창출에 기여합니다.<br />
                            <span>・규제 및 투자 유치 대응</span><br /> 점점 더 강화되는 ESG 관련 규제와 지속 가능한 투자 트렌드에 부합합니다.
                        </p>
                    </div>
                </div>
            </div>
    </article>       
           
    );
  }

  export default Esg;