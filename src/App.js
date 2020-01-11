import React, {useCallback, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import './css/Basic.css';
import imgAws from './images/p_ic_aws.png';
import imgCss from './images/p_ic_css.png';
import imgExpress from './images/p_ic_express.png';
import imgGit from './images/p_ic_git.png';
import imgHtml from './images/p_ic_html.png';
import imgJs from './images/p_ic_js.png';
import imgMysql from './images/p_ic_mysql.png';
import imgNode from './images/p_ic_node.png';
import imgReact from './images/p_ic_react.png';
import imgRedux from './images/p_ic_redux.png';
import imgSass from './images/p_ic_sass.png';
import imgSketch from './images/p_ic_sketch.png';
import imgTs from './images/p_ic_ts.png';
import imgWebpack from './images/p_ic_webpack.png';
import imgZepline from './images/p_ic_zepline.png';
import imgSnuperCover from './images/p_img_snuper_cover.png'
import imgDeco1 from './images/p_img_deco_1.png'
//import imgSnuper1 from './images/p_img_snuper_1.png'
import imgSnuper2 from './images/p_img_snuper_2.png'
import imgSnuper3 from './images/p_img_snuper_3.png'
import imgSnuper4 from './images/p_img_snuper_4.png'
import imgSnuper5 from './images/p_img_snuper_5.png'
import imgSnuper6 from './images/p_img_snuper_6.png'
import imgSnuper8 from './images/p_img_snuper_8.png'
import imgSnuper0 from './images/p_img_snuper_0.png'

const App = () => {
    const [isPopupOpen, setIsPopupOpen ] = useState(false);

    const onClickThisProject = useCallback((value)=>{
        console.log(`click : ${value}`);
        setIsPopupOpen(true);

    },[]);
    const onClickBackground = useCallback((e) => {
        e.preventDefault();
        setIsPopupOpen(false);
    },[]);
  return (
      <div>
        <div style={{backgroundColor:'#463AF5', paddingTop:84, paddingBottom:84, textAlign:'center'}}>
            <div style={{width:1080, display:'inline-block', textAlign:'left', paddingLeft:20}}>
                <h1 style={{color:'white'}}>안녕하세요! <br/> 웹 프론트엔드 개발자 이수민 입니다.</h1>
                <p style={{color:'white',marginTop:145,fontWeight:'bold'}}>Introduce</p>
                <p style={{color:'white', marginTop:8, inlineHeight:20}}>
                    안녕하세요! 주니어 프론트엔드 개발자 이수민입니다.<br/>
                    항상 배우는것을 즐기며, 리액트와 자바스크립트를 주력으로 일하고있습니다.<br/>
                    UX관련 경력을 기반으로 협업 및 커뮤니케이션에서 장점을 발휘하고 있습니다.
                </p>
            </div>
        </div>
          <div style={{backgroundColor:'white', paddingTop:80, paddingBottom:100, textAlign:'center'}}>
              <div style={{width:1080, display:'inline-block', textAlign:'left', paddingLeft:20}}>
                  <h1>리액트 - 자바스크립트 웹 프로젝트! <br/> 즐겁게 하고 있습니다.</h1>
                  <p style={{marginTop:40, color:'#333333'}}>
                      <span style={{fontWeight:'bold'}}>신규 React 웹 프로젝트를 구축하거나, 기존 React 프로젝트를 유지보수 한 경험이 있습니다.</span><br/><br/>
                      신규 React 프로젝트 및 기존 프로젝트 유지보수 경험이 있습니다.<br/>
                      Hooks 기반의 설계와 Redux, Context Api 로 상태관리 가능합니다.<br/>
                      Axios 로 데이터 바인딩 및 전처리가 가능합니다.<br/>
                      Express 서버 세팅 및 관리 경험이 있습니다.<br/>
                      UI 컴포넌트(아키텍처) 설계 및 Api 문서 작성이 가능합니다.
                  </p>
                  {/*<p style={{color:'#463AF5', marginTop:80}}>Skills & Stack</p>*/}
                  <div style={{marginTop:100}}>
                      <div style={{ display:'inline-block', textAlign:'center', width:60,  marginRight:20}}>
                          <img  alt="image1" style={{width:60}} src={imgHtml}/>
                          <p style={{marginTop:7, fontSize:12}}>HTML</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img  alt="image2" style={{width:60}} src={imgCss}/>
                          <p style={{marginTop:7, fontSize:12}}>CSS</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img  alt="image3" style={{width:60}} src={imgJs}/>
                          <p style={{marginTop:7, fontSize:12}}>JS (ES6)</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img alt="image4" style={{width:60}} src={imgTs}/>
                          <p style={{marginTop:7, fontSize:12}}>TypeScript</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img  alt="image5" style={{width:60}} src={imgSass}/>
                          <p style={{marginTop:7, fontSize:12}}>SASS</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img alt="image6"  style={{width:60}} src={imgReact}/>
                          <p style={{marginTop:7, fontSize:12}}>React</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img  alt="image7" style={{width:60}} src={imgRedux}/>
                          <p style={{marginTop:7, fontSize:12}}>Redux</p>
                      </div>
                      <br/><br/>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img alt="image8"  style={{width:60}} src={imgAws}/>
                          <p style={{marginTop:7, fontSize:12}}>AWS</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img alt="image9"  style={{width:60}} src={imgNode}/>
                          <p style={{marginTop:7, fontSize:12}}>Node.js</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img alt="image10"  style={{width:60}} src={imgExpress}/>
                          <p style={{marginTop:7, fontSize:12}}>Express.js</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img alt="image11"  style={{width:60}} src={imgWebpack}/>
                          <p style={{marginTop:7, fontSize:12}}>Webpack</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img alt="image12"  style={{width:60}} src={imgMysql}/>
                          <p style={{marginTop:7, fontSize:12}}>MySQL</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img alt="image13"  style={{width:60}} src={imgGit}/>
                          <p style={{marginTop:7, fontSize:12}}>git</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img alt="image14"  style={{width:60}} src={imgSketch}/>
                          <p style={{marginTop:7, fontSize:12}}>Sketch</p>
                      </div>
                      <div style={{ display:'inline-block', textAlign:'center', width:60, marginRight:20}}>
                          <img alt="image15"  style={{width:60}} src={imgZepline}/>
                          <p style={{marginTop:7, fontSize:12}}>Zepline</p>
                      </div>
                  </div>
              </div>
          </div>
          <div style={{backgroundColor:'#323232', paddingTop:80, paddingBottom:120, textAlign:'center'}}>
              <div style={{width:1080, display:'inline-block', textAlign:'left', paddingLeft:20}}>
                  <h1 style={{color:'white'}}>웹 프론트엔드 개발자로 일하며<br/>다음과 같은 <span style={{color:'#65FF7F'}}> 멋진 프로젝트 </span>경험을 쌓았습니다.</h1>
                  <div style={{marginTop:38, display: 'flex', flexBasis:'50%'}}>
                        <div style={{width:206, cursor:'pointer', flex:1 }} id="snuper" onClick={() => onClickThisProject(1)}>
                            <img alt="image16" style={{width:206, marginBottom:19, paddingRight:24}} src={imgSnuperCover}/>
                            <h4 style={{color:'white', margin:0}}>Snuper (스누퍼)</h4>
                            <p style={{color:'#cccccc', marginTop:8}}>리액트 웹 프론트엔드 개발<br/> 업무 및 과업관리 웹 서비스</p>
                        </div>
                  </div>
              </div>
          </div>
          <div style={{backgroundColor:'white',paddingTop:80, paddingBottom:100, textAlign:'center'}}>
              <div style={{width:1080, display:'inline-block',position:'relative', textAlign:'left', paddingLeft:20}}>
                  <h1>UX전문가로 시작해서, <br/> <span style={{color:'#5D4CFF'}}>프론트엔드 개발자</span>가 되기까지의 여정입니다.</h1>
                  <p style={{marginTop:40, color:'#333333'}}>
                      개발이 너무 하고싶어서, 디자인회사 근무와 병행하며 오랜시간 개발공부를 했습니다.<br/>
                      늦은 시작과 러닝 커브에 우여곡절이 있었지만,<br/>
                      제 지난 경력이 프로젝트 이해관계자간의 협력 및 커뮤니케이션에서 큰 장점으로 발휘되고 있습니다.<br/>
                      지금은 누구보다 기획자와 디자이너에게 사랑받는 개발자로 일하고 있습니다.<br/>
                  </p>
                  <p style={{marginTop:68, fontWeight:'bold'}}>Career</p>
                  <p style={{marginTop:16}}>
                      현재는 AI 솔루션 스타트업 (주)시즐에서 웹 프론트엔드 개발자로 있습니다<br/>
                      자사 인공지능 엔진, 협력사 서비스 등을 개발합니다
                  </p>
                  <img alt="image17"  src={imgDeco1} style={{width:500, position:'absolute', bottom:0, right:0}}/>
                  <table style={{marinTop:26, color:'#555555', fontSize:13}}>
                      <tbody>
                          <tr style={{verticalAlign:'top'}}>
                              <td style={{fontWeight:'bold'}}>2019.04 - </td>
                              <td>(주)시즐 <br/>웹 프론트엔드 개발자<br/>&nbsp;</td>

                          </tr>
                          <tr style={{verticalAlign:'top'}}>
                              <td style={{paddingRight:45, fontWeight:'bold'}}>2017.09 - 2018.10</td>
                              <td>(주)리즘 인터렉티브 <br/>UX 디자인 및 삼성페이 디자인 가이드 PM<br/>&nbsp;</td>
                          </tr>
                          <tr style={{verticalAlign:'top'}}>
                              <td style={{fontWeight:'bold'}}>2015.08 - 2017.05</td>
                              <td>(주)크리섹터 <br/>UX 디자인 및 기획<br/>&nbsp;</td>
                          </tr>
                          <tr style={{verticalAlign:'top'}}>
                              <td style={{fontWeight:'bold'}}>2011.03- 2015.02</td>
                              <td>한국산업기술대학교 학사 졸업<br/>&nbsp;</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <div style={{backgroundColor:'#37355C', paddingTop:150, paddingBottom:150, textAlign:'center'}}>
              <div style={{width:1080, display:'inline-block', textAlign:'center'}}>
                  <h2 style={{color:'white', margin:0}}>열람해주셔서 감사합니다</h2>
                  <p style={{color:'white', marginTop:11, fontSize:16}}>
                      웹 프론트엔드 개발자 이수민 <br/><span style={{color:'#70FFC0'}}>suminpixel@gmail.com</span>
                  </p>
              </div>
          </div>
          {isPopupOpen ?
              <div>
                  <a href="/" onClick={onClickBackground} style={{backgroundColor:'#1B324298', position:'fixed', textAlign:'center', height:'100%', zIndex:3, top:0, left:0, right:0,}}>
                  </a>
                  <div className="div-modal-dashboard" style={{position:'fixed', textAlign:'center', height:'100%', zIndex:4, top:0, left:'50%', transform:'translate(-50%, 0)'}}>

                          <div className="div-white-bg-view-task-body" style={{position:'relative', width:'100%', height: `calc(100vh - 120px)`}} >
                              <div className="div-bg-image-1" style={{position:'absolute', width:'100%',height:364, }}>&nbsp;</div>
                              {/*
                              <div style={{position:'absolute', backgroundColor:'#00000095', width:'100%',height:365}}>
                                  <h2 style={{color:'white', paddingRight:10, fontSize:28}}>스누퍼 프리미엄 플랜</h2>
                                  <p style={{ fontSize:16, paddingRight:10,color:'#ffffff90'}}>한국의 복잡한 업무 및 과업관리는 관리자에게 고된 작업을 요구합니다.<br/>스누퍼 프리미엄은 관리자 및 실무자의 고충을 해결하는데 먼저 집중합니다.</p>

                              </div>*/}
                              <div style={{ marginTop:365,width:'100%',height:'100%'}}>
                                <div style={{marginLeft:48, marginTop:48, marginRight:48, marginBottom:48}}>
                                  <h2 style={{ paddingTop:48}}>업무관리 웹 플랫폼 스누퍼 </h2>
                                  <table style={{marginTop:18, color:'#555555', fontSize:14}}>
                                      <tbody>
                                      <tr style={{verticalAlign:'top'}}>
                                          <td style={{fontWeight:'bold', paddingRight:40}}>업무 종류</td>
                                          <td>리액트 웹 개발 &nbsp;</td>

                                      </tr>
                                      <tr style={{verticalAlign:'top'}}>
                                          <td style={{fontWeight:'bold'}}>역할</td>
                                          <td>프론트 엔드 개발 (100%)</td>

                                      </tr>
                                      <tr style={{verticalAlign:'top'}}>
                                          <td style={{fontWeight:'bold'}}>주요 기능</td>
                                          <td>문서 및 일정 작성, 파일첨부, 조직도 열람 및 관리, 댓글작성, 자료검색, 구독형 결제(아임포트)</td>

                                      </tr>
                                      <tr style={{verticalAlign:'top'}}>
                                          <td >&nbsp;</td>

                                      </tr>
                                      <tr style={{verticalAlign:'top'}}>
                                          <td style={{fontWeight:'bold'}}>설명</td>
                                          <td style={{color:'#333333', fontSize:15}}>

                                                  - 킥오프 부터 1차 출시 까지 메인 프론트엔드 개발자로 프로젝트를 진행<br/>
                                                  - Hooks 기반의 설계와 Redux 도입으로 상태 관리  <br/>
                                                 - 문서/댓글 작성 및 파일 첨부, 구독형 결제(아임포트) 구현 <br/>
                                                  - Node js (Express js) 프론트 서버 세팅 및 관리 병행<br/>
                                                  - 디자이너, 기획자와 직 커뮤니케이션하며 UX 관련 이슈를 해결<br/>
                                                  - API 문서 작성 및 관리

                                          </td>

                                      </tr>
                                      </tbody>
                                  </table>
                                  <div style={{width:'100%',display: 'flex', flexBasis:'50%', marginTop:66}}>
                                      <div style={{width:'50%',cursor:'pointer', flex:1, padding:12 }} >
                                          <img  alt="image18" style={{width:'100%', marginBottom:19, paddingRight:24}} src={imgSnuper0}/>
                                      </div>
                                      <div style={{width:'50%',cursor:'pointer', flex:1 , padding:12 }} >
                                          <img  alt="image19" style={{width:'100%', marginBottom:19, paddingRight:24}} src={imgSnuper8}/>
                                      </div>
                                  </div>
                                    <div style={{width:'100%',display: 'flex', flexBasis:'50%'}}>
                                        <div style={{width:'100%',cursor:'pointer', flex:1 , padding:12 }} >
                                            <img  alt="image20" style={{width:'100%', marginBottom:19, paddingRight:24}} src={imgSnuper3}/>
                                        </div>
                                    </div>
                                    <div style={{width:'100%',display: 'flex', flexBasis:'50%'}}>
                                        <div style={{width:'50%',cursor:'pointer', flex:1, padding:12 }} >
                                            <img  alt="image21" style={{width:'100%', marginBottom:19, paddingRight:24}} src={imgSnuper2}/>
                                        </div>
                                        <div style={{width:'50%',cursor:'pointer', flex:1 , padding:12 }} >
                                            <img  alt="image22" style={{width:'100%', marginBottom:19, paddingRight:24}} src={imgSnuper6}/>
                                        </div>
                                    </div>
                                    <div style={{width:'100%',display: 'flex', flexBasis:'50%'}}>
                                        <div style={{width:'50%',cursor:'pointer', flex:1, padding:12 }} >
                                            <img  alt="image23" style={{width:'100%', marginBottom:19, paddingRight:24}} src={imgSnuper4}/>
                                        </div>
                                        <div style={{width:'50%',cursor:'pointer', flex:1 , padding:12 }} >
                                            <img  alt="image24" style={{width:'100%', marginBottom:19, paddingRight:24}} src={imgSnuper5}/>
                                        </div>
                                    </div>
                              </div>
                              </div>
                          </div>

                  </div>
              </div>
              :
              null}
      </div>



  );
};

export default App;
