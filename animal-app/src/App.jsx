import React from 'react';
import './App.css';
import Title from './component/Title'
import ViewSection from './component/ViewSection'
import SelectButton from './component/SelectButton'
import Manual from './component/Manual'

function App() {
  return (
    <div className="App">
      <Title />
      <ViewSection />
      <SelectButton />
      <Manual />
    </div>
  );
}

export default App;
