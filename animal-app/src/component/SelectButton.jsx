import '../Style/SelectButton.css';
import React, { useState,useRef } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
const { Options } = require('./selectData')
//셀렉트 버튼을 누르면  온클릭이벤트가 실행되고 해당버튼에 고유한 값을 앱컴포넌트로 올려줘야한다.
//랜덤버튼을 누르면 온클릭이벤트가 실행되고, Matr.round(Matr.rendom)*10 메서드를 실행해서 나온 정수값을 state값에 넣어준다.
//여기서 나온 정수값은 Viewsection에서 이미지를 랜덤으로 불러오기위해 필요하기에 Viewsection으로 값을 보내줘야한다.
//셀렉트버튼 컴포넌트는 뷰 컴포넌트의 자식컴포넌트로 들어가지 않으니까 state & props로 값을 주고받기 힘들다. => App.jsx로 값을 올려보낸다.

function SelectButton({ setRandomFace, setRandomColor, setRandomEyes, setRandomMouth, setRandomAcc, setRandomPattern, setRandombackground
  , randomface, randomcolor, randomeyes, randommouth, randomacc, randompattern, randombackground }) {

  const [audio, setAudio] = useState(false)
  const [download,setDownload] = useState(false)
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

  const randomBtn = (setRandom) => {
    console.log("랜덤버튼 눌렸다.")
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
    console.log("셀렉버튼 눌렸다.")
    if (setSelect === "face") {
      setRandomFace(e.target.value)
    } else if (setSelect === "color") {
      setRandomColor(e.target.value)
    } else if (setSelect === "eyes") {
      setRandomEyes(e.target.value)
    } else if (setSelect === "mouth") {
      setRandomMouth(e.target.value)
    } else if (setSelect === "acc") {
      setRandomAcc(e.target.value)
    } else if (setSelect === "pattern") {
      setRandomPattern(e.target.value)
    } else if (setSelect === "background") {
      setRandombackground(e.target.value)
    }
  }

  const onDownloadBtn = () => {
    setDownload(!download)
    setTimeout(() => { setDownload(false) }, 1000)
    domtoimage
      .toBlob(document.querySelector('.viewImg_box'))
      .then((blob) => {
        saveAs(blob, 'anicon.png');
      });
  };


  return (

    <div className="btn_allBox">
      <div>
        {audio ? <audio src='./audio/click_1.mp3' autoPlay={audio}></audio> : null}
        <ul className='randomBtn_box'>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={() => randomBtn(setRandomFace)}>얼굴랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={() => randomBtn(setRandomColor)}>컬러랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={() => randomBtn(setRandomEyes)}>눈랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={() => randomBtn(setRandomMouth)}>입랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={() => randomBtn(setRandomAcc)}>악세랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={() => randomBtn(setRandomPattern)}>무늬랜덤</button></li>
          <li><button type='button' value='button' className='randomBtn_Design' onClick={() => randomBtn(setRandombackground)}>배경 랜덤</button></li>
        </ul>
        <ul className='selectBtn_box'>

          <li>
            <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, "face")} value={randomface}>
              {faceOptions.faceselect.map((item) => (<option key={item.key} value={item.key}>{item.value}</option>))}
            </select>
          </li>


          <li>
            <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, "color")} value={randomcolor}>
              {randomcolor > 15 ? <option>🎉레어 컬러🎉</option> : null}
              {colorOptions.colorselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}</select>

          </li>

          <li>
            <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, "eyes")} value={randomeyes}>
              {randomeyes > 12 ? <option>🎉레어 눈🎉</option> : null}
              {eyesOptions.eyesselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}</select>

          </li>


          <li>
            <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, "mouth")} value={randommouth}>
              {randommouth > 10 ? <option>🎉레어 입🎉</option> : null}
              {mouthOptions.mouthselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}</select>
          </li>

          <li>
            {<select className='selectBtn_Design' onChange={(event) => SelectBtn(event, "acc")} value={randomacc}>
              {accOptions.accselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}
            </select>}
          </li>

          <li>
            <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, "pattern")} value={randompattern}>
              {patternOptions.patternselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}
            </select>
          </li>

          <li>
            <select className='selectBtn_Design' onChange={(event) => SelectBtn(event, "background")} value={randombackground}>
              {randombackground > 12 ? <option>🎉레어 배경🎉</option> : null}
              {backgroundOptions.backgroundselect.map((item) => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}</select>
          </li>

        </ul>
      </div>
      {download ? <audio src='./audio/camera2.wav' autoPlay={download}></audio> : null}
      <ul className='lastBtn_Box'>
        <li><button type='button' value='button' className='AllRandomBtn_Design' onClick={allrandomBtn}>올 랜덤</button></li>
        <li><button type='button' value='button' className='CreateProfile_Design' onClick={onDownloadBtn}>프로필생성</button></li>
      </ul>
    </div>
  )
}

export default SelectButton;
