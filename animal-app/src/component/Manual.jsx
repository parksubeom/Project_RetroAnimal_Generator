import '../Style/Manual.css';
import React, { useState } from 'react';
import Modal from './Modal';

function Manual() {

  const [modal, setModal] = useState(false)

  const handleOnClick = () => {
    console.log('모달버튼 클릭')
    setModal(!modal);
  }



  return (
    <div className='side_button'>
      <div>
        {modal ? <Modal  handleOnClick = {handleOnClick}/> : null}
        <button className="button_design" onClick={handleOnClick}>여기클릭</button>
      </div>
      <div>
      <a href="https://docs.google.com/forms/d/10kKSvlmLVptyq-lqBhHQuggXGnM8Sm4kaYuGCTgMQdo/edit" target="_blank"><button className="button_design">구글폼</button></a>
      </div>
    </div>
  );
}

export default Manual;
