import React from "react";
import { useState } from 'react';
import '../Style/Modal.css';

function Modal({ handleOnClick }) {

    return (
        <div className="modal_section">
            <div className="modal_view">
                <div className="modal_icon"></div>
                <h2><strong>ANICON PICKER</strong></h2>
                <p className="modal_text">자신의 개성을 보여 줄 나만의 친구들을 가지고싶지 않나요?
                    <br />ANICON PICKER는 다양하고 귀여운 나만의 애니콘을 자신만의
                    <br />개성으로 직접 커스터마이징 가능한 프로필아이콘을 제공합니다.
                    <br />한번 이용시 1000원이라는 저렴한 가격으로 모십니다.
                    <br />돈이 부담되신다구요?
                    <br />가난한 부트캠프 수강생이시라구요?
                    <br /> 정말 돈이없으시다면 따뜻한 리뷰로 대체가능합니다.
                </p>
                <br />
                <br />
                <h2><strong>사용 메뉴얼</strong></h2>
                <p className="modal_bottom_text">얼굴,얼굴컬러,눈,입,악세서리,무늬,배경 등 7가지 카테고리를
                    <br />자신만의 개성에 맞게 커스터마이징 할 수 있습니다.
                    <br />선택하는게 어려우신분들을 위한 랜덤버튼도 구현되어 있습니다.
                    <br />무엇보다 랜덤버튼에는 셀렉버튼에는 없는 레어한 요소들도 있으니,
                    <br />한번쯤 사용해보세요!
                </p>
                <button className="exit_button" onClick={handleOnClick}>닫기</button>
            </div>

        </div>
    )
}


export default Modal;

