import '../Style/SelectButton.css';
import React, { useState } from 'react';
const { Options } = require('./selectData')
//셀렉트 버튼을 누르면  온클릭이벤트가 실행되고 해당버튼에 고유한 값을 앱컴포넌트로 올려줘야한다.
//랜덤버튼을 누르면 온클릭이벤트가 실행되고, Matr.round(Matr.rendom)*10 메서드를 실행해서 나온 정수값을 state값에 넣어준다.
//여기서 나온 정수값은 Viewsection에서 이미지를 랜덤으로 불러오기위해 필요하기에 Viewsection으로 값을 보내줘야한다.
//셀렉트버튼 컴포넌트는 뷰 컴포넌트의 자식컴포넌트로 들어가지 않으니까 state & props로 값을 주고받기 힘들다. => App.jsx로 값을 올려보낸다.
//각 컴포넌트들끼리 주고받을 값은 App 컴포넌트로 보내서, 다시 프롭스로 뿌려준다.
function SelectButton({ setRandomFace, setRandomColor, setRandomEyes, setRandomMouth, setRandomAcc, setRandomPattern, setRandombackground }) {
  const [faceSelect, setFaceSelect] = useState();
  const [colorSelect, setColorSelect] = useState(1);
  const [eyesSelect, setEyesSelect] = useState(1);
  const [mouthSelect, setMouthSelect] = useState(1);
  const [accSelect, setAccSelect] = useState(1);
  const [patternSelect, setPatternSelect] = useState(1)
  const [backgroundSelect, setBackgroundSelect] = useState(1);

  const faceOptions = Options[0]
  const colorOptions = Options[1]
  const eyesOptions = Options[2]
  const mouthOptions = Options[3]
  const accOptions = Options[4]
  const patternOptions = Options[5]
  const backgroundOptions = Options[6]

  const allrandomBtn = () => {
    console.log("올 랜덤버튼 눌렸다")
    setRandomFace(Math.round(Math.random() * 8))
    setRandomColor(Math.round(Math.random() * 17))
    setRandomEyes(Math.round(Math.random() * 13))
    setRandomMouth(Math.round(Math.random() * 11))
    setRandomAcc(Math.round(Math.random() * (30 - 1)) + 1)
    setRandomPattern(Math.round(Math.random() * (6 - 1)) + 1)
    setRandombackground(Math.round(Math.random() * 19))
  }

  const randomFaceBtn = (e) => {
    console.log("얼굴 랜덤버튼 눌렸다")
    setRandomFace(Math.floor(Math.random() * 8))
  }

  const randomColorBtn = (e) => {
    console.log("얼굴 컬러 랜덤버튼 눌렸다")
    setRandomColor(Math.round(Math.random() * 17))
  }
  const randomEyesBtn = (e) => {
    console.log("눈 랜덤버튼 눌렸다")
    setRandomEyes(Math.round(Math.random() * 13))
  }

  const randomMouthBtn = (e) => {
    console.log("입  랜덤버튼 눌렸다")
    setRandomMouth(Math.round(Math.random() * 11))
  }

  const randomAccBtn = (e) => {
    console.log("악세서리 랜덤버튼 눌렸다")
    setRandomAcc(Math.round(Math.random() * (30 - 1)) + 1)
  }

  const randomPatternBtn = (e) => {
    console.log("무늬 랜덤버튼 눌렸다")
    setRandomPattern(Math.round(Math.random() * (6 - 1)) + 1)

  }

  const randomBackgroundBtn = (e) => {
    console.log("배경 랜덤버튼 눌렸다")
    setRandombackground(Math.round(Math.random() * (19-1))+1)

  }
  //==========================랜덤버튼함수==========================//


  const faceselectBtn = (e) => {
    console.log("얼굴 선택버튼버튼 눌렸다")
    setFaceSelect(e.currentTarget.value)
    setRandomFace(e.target.value)
  }

  const colorselectBtn = (e) => {
    console.log("얼굴컬러 선택버튼버튼 눌렸다")
    setColorSelect(e.currentTarget.value)
    setRandomColor(e.target.value)

  }
  const eyesselectBtn = (e) => {
    console.log("눈 선택버튼버튼 눌렸다")
    setEyesSelect(e.currentTarget.value)
    setRandomEyes(e.target.value)
  }
  const mouthselectBtn = (e) => {
    console.log("입 선택버튼버튼 눌렸다")
    setMouthSelect(e.currentTarget.value)
    setRandomMouth(e.target.value)
  }
  const accselectBtn = (e) => {
    console.log("악세서리 선택버튼버튼 눌렸다")
    setAccSelect(e.currentTarget.value)
    setRandomAcc(e.target.value)
  }
  const patternselectBtn = (e) => {
    console.log("무늬 선택버튼버튼 눌렸다")

    setPatternSelect(e.currentTarget.value)
    setRandomPattern(e.target.value)
  }

  const backgroundselectBtn = (e) => {
    console.log("무늬 선택버튼버튼 눌렸다")
    setBackgroundSelect(e.currentTarget.value)
    setRandombackground(e.target.value)
  }

  return (
    <div className="btn_allBox">

      <div className='Button_group'>
        <button type='button' value='button' className='randomBtn_Design' onClick={randomFaceBtn}>얼굴랜덤</button>
        <select className='selectBtn_Design' onChange={faceselectBtn} value={faceSelect}>
          {faceOptions.faceselect.map((item, index) => (
            <option key={item.key} value={item.key}>{item.value}</option>
          ))}
        </select>
      </div>

      <div className='Button_group'>
        <button type='button' value='button' className='randomBtn_Design' onClick={randomColorBtn}>컬러랜덤</button>
        <select className='selectBtn_Design' onChange={colorselectBtn} value={colorSelect}>
          {colorOptions.colorselect.map((item, index) => (
            <option key={item.key} value={item.key}>{item.value}</option>
          ))}
        </select>
      </div>

      <div className='Button_group'>
        <button type='button' value='button' className='randomBtn_Design' onClick={randomEyesBtn}>눈랜덤</button>
        <select className='selectBtn_Design' onChange={eyesselectBtn} value={eyesSelect}>
          {eyesOptions.eyesselect.map((item, index) => (
            <option key={item.key} value={item.key}>{item.value}</option>
          ))}
        </select>
      </div>

      <div className='Button_group'>
        <button type='button' value='button' className='randomBtn_Design' onClick={randomMouthBtn}>입랜덤</button>
        <select className='selectBtn_Design' onChange={mouthselectBtn} value={mouthSelect}>
          {mouthOptions.mouthselect.map((item, index) => (
            <option key={item.key} value={item.key}>{item.value}</option>
          ))}
        </select>
      </div>

      <div className='Button_group'>
        <button type='button' value='button' className='randomBtn_Design' onClick={randomAccBtn}>악세랜덤</button>
        <select className='selectBtn_Design' onChange={accselectBtn} value={accSelect}>
          {accOptions.accselect.map((item, index) => (
            <option key={item.key} value={item.key}>{item.value}</option>
          ))}
        </select>
      </div>

      <div className='Button_group'>
        <button type='button' value='button' className='randomBtn_Design' onClick={randomPatternBtn}>무늬랜덤</button>
        <select className='selectBtn_Design' onChange={patternselectBtn} value={patternSelect}>
          {patternOptions.patternselect.map((item, index) => (
            <option key={item.key} value={item.key}>{item.value}</option>
          ))}
        </select>
      </div>

      <div className='Button_group'>
        <button type='button' value='button' className='randomBtn_Design' onClick={randomBackgroundBtn}>배경랜덤</button>
        <select className='selectBtn_Design' onChange={backgroundselectBtn} value={backgroundSelect}>
          {backgroundOptions.backgroundselect.map((item, index) => (
            <option key={item.key} value={item.key}>{item.value}</option>
          ))}
        </select>
      </div>
      <div className='Button_group'>
        <button type='button' value='button' className='randomBtn_Design' onClick={allrandomBtn}>올 랜덤</button>
        <button type='button' value='button' className='randomBtn_Design' onClick={allrandomBtn}>프로필생성</button>
      </div>



    </div>
  )

}

export default SelectButton;