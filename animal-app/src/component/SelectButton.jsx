import '../Style/SelectButton.css';
import React, { useState } from 'react';
//셀렉트 버튼을 누르면  온클릭이벤트가 실행되고 해당버튼에 고유한 값을 앱컴포넌트로 올려줘야한다.
//랜덤버튼을 누르면 온클릭이벤트가 실행되고, Matr.round(Matr.rendom)*10 메서드를 실행해서 나온 정수값을 state값에 넣어준다.
//여기서 나온 정수값은 Viewsection에서 이미지를 랜덤으로 불러오기위해 필요하기에 Viewsection으로 값을 보내줘야한다.
//셀렉트버튼 컴포넌트는 뷰 컴포넌트의 자식컴포넌트로 들어가지 않으니까 state & props로 값을 주고받기 힘들다. => App.jsx로 값을 올려보낸다.
//각 컴포넌트들끼리 주고받을 값은 App 컴포넌트로 보내서, 다시 프롭스로 뿌려준다.




function SelectButton({setRandomFace,setRandomColor,setRandomEyes,setRandomMouth,setRandomAcc,setRandomPattern}) {

  const allrandomBtn =() => {
    console.log("올 랜덤버튼 눌렸다")
    setRandomFace(Math.floor(Math.random() * 8))
    setRandomColor(Math.round(Math.random() * 12))
    setRandomEyes(Math.round(Math.random() * 12))
    setRandomMouth(Math.round(Math.random() * 7))
    setRandomAcc(Math.round(Math.random() * 16))
    setRandomPattern(Math.round(Math.random() * 7))
  }

  const randomFaceBtn = (e) => {
    console.log("얼굴 랜덤버튼 눌렸다")
    setRandomFace(Math.round(Math.random() * 9))
  }

  const randomColorBtn = (e) => {
    console.log("얼굴 컬러 랜덤버튼 눌렸다")
    setRandomColor(Math.round(Math.random() * 12))
  }
  const randomEyesBtn = (e) => {
    console.log("눈 랜덤버튼 눌렸다")
    setRandomEyes(Math.round(Math.random() * 12))
  }

  const randomMouthBtn = (e) => {
    console.log("입  랜덤버튼 눌렸다")
    setRandomMouth(Math.round(Math.random() * 7))
  }

  const randomAccBtn = (e) => {
    console.log("악세서리 랜덤버튼 눌렸다")
    setRandomAcc(Math.round(Math.random() * 16))
  }

  const randomPatternBtn = (e) => {
    console.log("무늬 랜덤버튼 눌렸다")
    setRandomPattern(Math.round(Math.random() * 7))
  }

  const faceselectBtn = (e) => {
    console.log("얼굴 선택버튼버튼 눌렸다")
    
  }

  const colorselectBtn = (e) => {
    console.log("얼굴컬러 선택버튼버튼 눌렸다")
    
  }
  const eyesselectBtn = (e) => {
    console.log("눈 선택버튼버튼 눌렸다")
   
  }
  const mouthselectBtn = (e) => {
    console.log("입 선택버튼버튼 눌렸다")
    
  }
  const accselectBtn = (e) => {
    console.log("기타 선택버튼버튼 눌렸다")
    
  }
  const patternselectBtn = (e) => {
    console.log("기타 선택버튼버튼 눌렸다")
    
  }

  return (
    <div className="SelectButton">
      <div>
      <button type='button' value='button' id='allrandom' onClick={allrandomBtn}>올 랜덤</button>
      </div>
      <div>
        <button type='button' value='button' id='random' onClick={randomFaceBtn}>얼굴랜덤</button>
        <button type='button' value='button' id='random' onClick={randomColorBtn}>얼굴컬러랜덤</button>
        <button type='button' value='button' id='random' onClick={randomFaceBtn}>눈 랜덤</button>
        <button type='button' value='button' id='random' onClick={randomFaceBtn}>입 랜덤</button>
        <button type='button' value='button' id='random' onClick={randomFaceBtn}>악세서리 랜덤</button>
        <button type='button' value='button' id='random' onClick={randomFaceBtn}>무늬 랜덤</button>
      </div>
      <div>
        <button type='button' value='1' id='random' onClick={faceselectBtn}>얼굴선택</button>
        <button type='button' value='2' id='random' onClick={colorselectBtn}>얼굴 컬러선택</button>
        <button type='button' value='3' id='random' onClick={eyesselectBtn}>눈 선택</button>
        <button type='button' value='4' id='random' onClick={mouthselectBtn}>입 선택</button>
        <button type='button' value='4' id='random' onClick={accselectBtn}>악세서리 선택</button>
        <button type='button' value='4' id='random' onClick={patternselectBtn}>무늬 선택</button>
      </div>
    </div>
  );
}

export default SelectButton;