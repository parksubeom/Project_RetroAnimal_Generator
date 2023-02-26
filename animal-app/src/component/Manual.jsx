import '../Style/Manual.css';
import React, { useState } from 'react';
import Modal from './Modal';

function Manual() {

  const [modal, setModal] = useState(false)
  const [audio, setAudio] = useState(false)

  const handleOnClick = () => {
    console.log('모달버튼 클릭')
    setModal(!modal);
  }

  const handleonclickAudio = () => {
    setAudio(!audio)
  }


  return (
    <div className='sidebutton_Group'>
      {modal ? <Modal handleOnClick={handleOnClick} /> : null}
      <div>
        <button className='sideBtn_size' onClick={handleOnClick}>
          <div className='sideBtn_Design'>
            <div className='sideBtn_text'>A</div>
          </div>
        </button>
      </div>
      <button className='sideBtn_size'>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdR1gs9skIt6DNRYE5GI9blt5J6vgImK8sld5rVblJP1wjjQg/viewform?vc=0&c=0&w=1&flr=0" target="_blank">
          <div className='sideBtn_Design'>
            <div className='sideBtn_text'>B</div>
          </div>
        </a>
      </button>
      <button className='sideBtn_size' onClick={handleonclickAudio}>
        <div className='sideBtn_Design'>
          <div className='sideBtn_text'>C</div>
        </div>
      </button>
      {audio ? <audio src='./audio/mornimg.mp3' autoPlay={audio} loop="loop"></audio> : null}
    </div>
  )
}
export default Manual;
