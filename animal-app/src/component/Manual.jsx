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
    <div>
      <div className="">
        {modal ? <Modal /> : null}
        <button className="button_manual" onClick={handleOnClick}>여기클릭</button>
      </div>
    </div>
  );
}

export default Manual;
