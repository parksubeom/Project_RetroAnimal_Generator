import '../Style/ViewSection.css';
import Title from '../component/Title.jsx';

function ViewSection({ randomface, randomcolor, randomeyes, randommouth, randomacc, randompattern, randombackground }) {

  let backgroundurl = `./img/background/background${randombackground}.png`
  let faceurl = `./img/face/face${randomface}/color${randomcolor}.png`
  let eyesurl = `./img/eye/eye${randomeyes}.png`
  let mouthurl = `./img/mouth/mouth${randommouth}.png`
  let accurl = `./img/acc/acc${randomacc}.png`
  let patternurl = `./img/pattern/pattern${randompattern}.png`



  return (
    <div>
      <aside className="ViewSection">
        <div className='viewImg_box'>
          <div className="animal_Img"><img alt="face_" src={backgroundurl} /></div>
          <div className="animal_Img"><img alt="face_" src={faceurl} /></div>
          <div className="animal_Img"><img alt="pattern_" src={patternurl} /></div>
          <div className="animal_Img"><img alt="eyes_" src={eyesurl} /></div>
          <div className="animal_Img"><img alt="mouth_" src={mouthurl} /></div>
          <div className="animal_Img"><img alt="acc_" src={accurl} /></div>
          
        </div>
        <Title />
      </aside>
    </div>

  );
}
export default ViewSection;
