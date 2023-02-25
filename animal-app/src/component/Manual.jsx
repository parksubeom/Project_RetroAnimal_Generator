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
        <button className="button_design" onClick={handleOnClick}>Manual</button>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdR1gs9skIt6DNRYE5GI9blt5J6vgImK8sld5rVblJP1wjjQg/viewform?vc=0&c=0&w=1&flr=0" target="_blank"><button className="button_design">리뷰 폼</button></a>

        {modal ? <Modal handleOnClick={handleOnClick} /> : null}
        <button className="button_design" onClick={handleOnClick}>여기클릭</button>
      </div>
  )
}
export default Manual;
