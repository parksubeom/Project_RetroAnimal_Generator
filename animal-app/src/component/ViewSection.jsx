import '../Style/ViewSection.css';
import React, {useState} from 'react';


function ViewSection({randomface,randomcolor,randomeyes,randommouth,randomacc,randompattern}) {
    return (
      <div>
        <div className="ViewSection">
          <div className="faceimg"><img alt="face_" src="./img/face/face5/face-5.png"/></div>
          <div className="faceimg"><img alt="eys_" src="./img/eye/eye3.png"/></div>
          <div className="faceimg"><img alt="mouth_" src="./img/mouth/mouth-7.png"/></div>  
        </div>
      </div>
      
    );
  }
  
  export default ViewSection;