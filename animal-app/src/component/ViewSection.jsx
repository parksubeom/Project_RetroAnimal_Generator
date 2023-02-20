import '../Style/ViewSection.css';
import React, {useState} from 'react';


function ViewSection({randomface,randomcolor,randomeyes,randommouth,randomacc,randompattern}) {
  


  let faceurl = `./img/face/face${randomface}/color${randomcolor}.png`
  let eyesurl = `./img/eye/eye${randomeyes}.png`
  let mouthurl = `./img/mouth/mouth-${randommouth}.png`
    return (
      <div>
        <div className="ViewSection">
          <div className="faceimg"><img alt="face_" src={faceurl}/></div>
          <div className="faceimg"><img alt="eyes_" src={eyesurl}/></div>
          <div className="faceimg"><img alt="mouth_" src={mouthurl}/></div>  
           
        </div>
      </div>
      
    );
  }
  
  export default ViewSection;