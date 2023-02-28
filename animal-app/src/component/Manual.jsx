import '../Style/Manual.css';
import React, { useState } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVolumeXmark} from "@fortawesome/free-solid-svg-icons"


function Manual() {

  const [modal, setModal] = useState(false)
  const [audio, setAudio] = useState(false)
  const [manualsound,setManualSound] = useState(false)

  const handleOnClick = () => {
    console.log('모달버튼 클릭')
    setModal(!modal);
    setManualSound(!manualsound)
    setTimeout(() => { setManualSound(false) }, 800)
  }

  const handleOnClick2 = () => {
    console.log('모달버튼 클릭')
    setManualSound(!manualsound)
    setTimeout(() => { setManualSound(false) }, 800)
  }

  const handleonclickAudio = () => {
    setAudio(!audio)
  }

  return (
    
    <div className='sidebutton_Group'>
      {manualsound ? <audio src='./audio/manual1.mp3' autoPlay={manualsound}></audio> : null}
      {modal ? <Modal handleOnClick={handleOnClick} /> : null}
      <div>
        <button className='sideBtn_size' onClick={handleOnClick}>
          <div className='sideBtn_Design'>
            <div className='sideBtn_text'><img src="https://cdn-icons-png.flaticon.com/512/831/831681.png"></img></div>
          </div>
        </button>
      </div>
      <button className='sideBtn_size'  onClick={handleOnClick2}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdR1gs9skIt6DNRYE5GI9blt5J6vgImK8sld5rVblJP1wjjQg/viewform?vc=0&c=0&w=1&flr=0" target="_blank">
          <div className='sideBtn_Design'>
            <div className='sideBtn_text'><img src="https://cdn-icons-png.flaticon.com/512/6728/6728483.png"></img></div>
          </div>
        </a>
      </button>
      <button className='sideBtn_size' onClick={handleonclickAudio}>
        <div className='sideBtn_Design'>
          <div className='sideBtn_text'>{!audio ? <img src="https://cdn-icons-png.flaticon.com/512/1014/1014333.png"></img> : <FontAwesomeIcon icon={faVolumeXmark} />}</div>
        </div>
      </button>
      {audio ? <audio src='./audio/mornimg.mp3' autoPlay={audio} loop="loop"></audio> : null}
    </div>
  )
}
export default Manual;
