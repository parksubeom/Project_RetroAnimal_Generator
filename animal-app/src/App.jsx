import React, { useState } from 'react';
import './App.css';
import Manual from './component/Manual.jsx';
import SelectButton from './component/SelectButton.jsx';
import Title from './component/Title.jsx';
import ViewSection from './component/ViewSection.jsx';


function App() {
  //App컴포넌트는 각 컴포넌트로 부터 값을 받아와서 다시 뿌려주는 허브역할을 해야한다.
  const [randomface, setRandomFace] = useState('0')
  const [randomcolor, setRandomColor] = useState('1')
  const [randomeyes, setRandomEyes] = useState('3')
  const [randommouth, setRandomMouth] = useState('6')
  const [randomacc, setRandomAcc] = useState('0')
  const [randompattern, setRandomPattern] = useState('0')
  const [randombackground, setRandombackground] = useState('12')



  return (

    <section className='App'>
      <article className='section_top'>{/* section : 디자인 요소 (수정금지) */}
        <div>
          <div className='design_Top_Line'></div>
          <div className='design_Top_Dot'></div>
        </div>
        <div>
          <div className='design_Top_Line'></div>
          <div className='design_Top_Dot'></div>
        </div>
      </article>
      <div className='section_AllBox'>{/* section : 컨텐츠 박스 */}
        <aside className='asd'> {/* aside: 사이드 아이콘 */}
          {/* <Manual/> */}
        </aside>
        <main className='asd'>{/* main: 메인컨텐츠 */}
          {/* 컨텐츠가 들어갈 곳입니다. */}
          <Title />
          <ViewSection randomface={randomface} randomcolor={randomcolor} randomeyes={randomeyes} randommouth={randommouth} randomacc={randomacc} randompattern={randompattern} randombackground={randombackground} />
          <SelectButton setRandomFace={setRandomFace} setRandomColor={setRandomColor} setRandomEyes={setRandomEyes} setRandomMouth={setRandomMouth} setRandomAcc={setRandomAcc} setRandomPattern={setRandomPattern} setRandombackground={setRandombackground} />
        </main>
      </div>
    </section>


  )


}

export default App;
