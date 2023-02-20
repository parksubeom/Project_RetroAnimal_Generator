import React, {useState} from 'react';
import './App.css';
import  Manual  from './component/Manual.jsx';
import  SelectButton  from './component/SelectButton.jsx';
import  Title  from './component/Title.jsx';
import  ViewSection  from './component/ViewSection.jsx';


function App() {
//App컴포넌트는 각 컴포넌트로 부터 값을 받아와서 다시 뿌려주는 허브역할을 해야한다.
  const [randomface, setRandomFace] = useState('')
  const [randomcolor, setRandomColor] = useState('')
  const [randomeyes, setRandomEyes] = useState('')
  const [randommouth, setRandomMouth] = useState('')
  const [randomacc, setRandomAcc] = useState('')
  const [randompattern, setRandomPattern] = useState('')

  
  console.log(randomface)
  console.log(randomcolor)
  console.log(randomeyes)
  console.log(randommouth)
  console.log(randomacc)
  console.log(randompattern)

  return (
    <div className="App">
      <div className="title_container">
        <Title/>  
      </div>

      <section className="view_container">
        <ViewSection randomface ={randomface} randomcolor ={randomcolor} randomeyes = {randomeyes} randommouth = {randommouth} randomacc = {randomacc} randompattern = {randompattern}/>
      </section>

      <section className="btnsection_container">
        <SelectButton setRandomFace = {setRandomFace} setRandomColor = {setRandomColor} setRandomEyes = {setRandomEyes} setRandomMouth = {setRandomMouth} setRandomAcc = {setRandomAcc} setRandomPattern = {setRandomPattern}/>
      </section>

      <div>
        <Manual/>
      </div>
    </div>
  );
}

export default App;
