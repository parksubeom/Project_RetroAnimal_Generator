import React, {useState} from 'react';
import './App.css';
import  Manual  from './component/Manual.jsx';
import  SelectButton  from './component/SelectButton.jsx';
import  Title  from './component/Title.jsx';
import  ViewSection  from './component/ViewSection.jsx';


function App() {
  return (
    <div className="App">
     <Manual/>
     <SelectButton/>
     <Title/>
     <ViewSection/>
    </div>
  );
}

export default App;
