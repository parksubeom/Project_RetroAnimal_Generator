import React from "react";
import '../Style/Modal.css';

function Modal({ handleOnClick }) {

    return (
        <div className="modal_section">{/*모달 백그라운드*/}
            <div className="modal_contents">{/*모달 컨텐츠*/}
                <ul>
                    <li class="modalPattern mtop-left"></li>
                    <li class="modalPattern mtop-right"></li>
                    <li class="modalPattern mbottom-left"></li>
                    <li class="modalPattern mbottom-right"></li>
                </ul>
                <div className="modal_icon"></div> {/*모달 상단 범 아이콘*/}
                <button className="exit_button" onClick={handleOnClick}>×</button>{/*모달 닫기버튼*/}
                <div className="modal_totalview">{/*모달 탑뷰*/}
                    <div className="modal_topview">
                        <img className="logo_img" src="https://i.imgur.com/iLtMaIJ.png" />
                        <p className="modal_text">자신의 개성을 보여 줄 나만의 친구들을 가지고싶지 않나요?
                            ANISCHOOL는 다양하고 귀여운 나만의 애니콘을 자신만의
                            개성으로 직접 커스터마이징 가능한 프로필아이콘을 제공합니다.
                            <br /><br />
                            <h3>한번 이용시 1000원이라는 저렴한 가격!</h3>
                            <br />
                            하지만 돈이 부담되신다구요?<br />
                            가난한 부트캠프 수강생이시라구요?<br />
                            정말 돈이없으시다면 따뜻한 리뷰로 대체가능합니다.
                        </p>
                    </div >
                    <div className="modal_bottomview">{/*모달 바텀뷰*/}
                        <img className="logo_img2" src="https://i.imgur.com/c74otaA.png" />
                        <p className="textcolor modal_text">
                            랜덤버튼에는 셀렉버튼에는 없는 레어한 <br />
                            요소들도 있으니,한번쯤 사용해보세요!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Modal;
