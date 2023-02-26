import '../Style/SelectButton.css';
import React, { useState } from 'react';
const { Options } = require('./selectData')
//셀렉트 버튼을 누르면  온클릭이벤트가 실행되고 해당버튼에 고유한 값을 앱컴포넌트로 올려줘야한다.
//랜덤버튼을 누르면 온클릭이벤트가 실행되고, Matr.round(Matr.rendom)*10 메서드를 실행해서 나온 정수값을 state값에 넣어준다.
//여기서 나온 정수값은 Viewsection에서 이미지를 랜덤으로 불러오기위해 필요하기에 Viewsection으로 값을 보내줘야한다.
//셀렉트버튼 컴포넌트는 뷰 컴포넌트의 자식컴포넌트로 들어가지 않으니까 state & props로 값을 주고받기 힘들다. => App.jsx로 값을 올려보낸다.

function SelectButton({ setRandomFace, setRandomColor, setRandomEyes, setRandomMouth, setRandomAcc, setRandomPattern, setRandombackground
  , randomface, randomcolor, randomeyes, randommouth, randomacc, randompattern, randombackground }) {
  const [faceSelect, setFaceSelect] = useState(randomface);
  const [colorSelect, setColorSelect] = useState(randomcolor);
  const [eyesSelect, setEyesSelect] = useState(randomeyes);
  const [mouthSelect, setMouthSelect] = useState(randommouth);
  const [accSelect, setAccSelect] = useState(randomacc);
  const [patternSelect, setPatternSelect] = useState(randompattern)
  const [backgroundSelect, setBackgroundSelect] = useState(randombackground);
  const [audio, setAudio] = useState(false)
  console.log(randombackground)


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
    setRandombackground(Math.round(Math.random() * (19 - 1)) + 1)
    setAudio(!audio)
    setTimeout(() => { setAudio(false) }, 300)
  }

  const randomBtn = (event, setRandom) => {
    console.log("얼굴 랜덤버튼 눌렸다")
    if (setRandom === setRandomFace) {
      setRandomFace(Math.floor(Math.random() * 8))
    } else if (setRandom === setRandomColor) {
      setRandomColor(Math.round(Math.random() * 17))
    } else if (setRandom === setRandomEyes) {
      setRandomEyes(Math.round(Math.random() * 13))
    } else if (setRandom === setRandomMouth) {
      setRandomMouth(Math.round(Math.random() * 11))
    } else if (setRandom === setRandomAcc) {
      setRandomAcc(Math.round(Math.random() * (30 - 1)) + 1)
    } else if (setRandom === setRandomPattern) {
      setRandomPattern(Math.round(Math.random() * (6 - 1)) + 1)
    } else if (setRandom === setRandombackground) {
      setRandombackground(Math.round(Math.random() * (19 - 1)) + 1)
    }
    setAudio(!audio)
    setTimeout(() => { setAudio(false) }, 300)
  }
  //==========================랜덤버튼함수==========================//

  const SelectBtn = (e, setSelect) => {
    console.log("얼굴 선택버튼버튼 눌렸다")
    if (setSelect === setFaceSelect) {
      setFaceSelect(e.currentTarget.value)
      setRandomFace(e.target.value)
    } else if (setSelect === setColorSelect) {
      setColorSelect(e.currentTarget.value)
      setRandomColor(e.target.value)
    } else if (setSelect === setEyesSelect) {
      setEyesSelect(e.currentTarget.value)
      setRandomEyes(e.target.value)
    } else if (setSelect === setMouthSelect) {
      setMouthSelect(e.currentTarget.value)
      setRandomMouth(e.target.value)
    } else if (setSelect === setAccSelect) {
      setAccSelect(e.currentTarget.value)
      setRandomAcc(e.target.value)
    } else if (setSelect === setPatternSelect) {
      setPatternSelect(e.currentTarget.value)
      setRandomPattern(e.target.value)
    } else if (setSelect === setBackgroundSelect) {
      setBackgroundSelect(e.currentTarget.value)
      setRandombackground(e.target.value)
    }
  }

  return (

    <div className="btn_allBox">
      <div>
        {audio ? <audio src='./audio/click_1.mp3' autoPlay={audio}></audio> : null}
        <ul className='randomBtn_box'>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={(event) => randomBtn(event, setRandomFace)}>얼굴랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={(event) => randomBtn(event, setRandomColor)}>컬러랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={(event) => randomBtn(event, setRandomEyes)}>눈랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={(event) => randomBtn(event, setRandomMouth)}>입랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={(event) => randomBtn(event, setRandomAcc)}>악세랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={(event) => randomBtn(event, setRandomPattern)}>무늬랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={(event) => randomBtn(event, setRandombackground)}>배경 랜덤</button></li>
        </ul>
        <ul className='selectBtn_box'>

          <li>
            <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, setFaceSelect)} value={randomface}>
              {faceOptions.faceselect.map((item) => (<option key={item.key} value={item.key}>{item.value}</option>))}
            </select>
          </li>


          <li>
            {randomcolor < 16 ? <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, setColorSelect)} value={randomcolor}>
              {colorOptions.colorselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}</select>
              : <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, setColorSelect)} value={randomcolor}>
                <option >🎉레어 컬러🎉</option>
              </select>}
          </li>

          <li>
            {randomeyes < 13 ? <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, setEyesSelect)} value={randomeyes}>
              {eyesOptions.eyesselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}</select>
              : <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, setEyesSelect)} value={randomeyes}>
                <option >🎉레어 눈🎉</option>
              </select>}
          </li>


          <li>
            {randommouth < 11 ? <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, setMouthSelect)} value={randommouth}>
              {mouthOptions.mouthselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}</select>
              : <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, setMouthSelect)} value={randommouth}>
                <option >🎉레어 입🎉</option> </select>}
          </li>

          <li>
            {<select className='selectBtn_Design' onChange={(event) => SelectBtn(event, setAccSelect)} value={randomacc}>
              {accOptions.accselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}
            </select>}
          </li>

          <li>
            <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, setPatternSelect)} value={randompattern}>
              {patternOptions.patternselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}
            </select>
          </li>

          <li>
            {randombackground < 12 ? <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, setBackgroundSelect)} value={randombackground}>
              {backgroundOptions.backgroundselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}</select>
              : <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, setBackgroundSelect)} value={randombackground}>
                <option>🎉레어배경🎉</option></select>}
          </li>

        </ul>
      </div>
      <div className='Button_group'>
        <button type='button' value='button' className='AllRandomBtn_Design' onClick={allrandomBtn}>올 랜덤</button>
        <button type='button' value='button' className='CreateProfile_Design' onClick={allrandomBtn}>프로필생성</button>
      </div>



    </div>

  )

}

export default SelectButton;