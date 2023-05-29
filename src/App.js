import logo from './logo.svg';
import './App.css';
import React,{useState } from "react"
import { OutputScreen } from './components/OutputScreen';
import { Button } from './components/Button';
import { Calculator } from './components/Calculator';
function App() {
  const [appres,setAppres] = useState(0)
  const getOutput =(op)=>{
    console.log(op,"op")
    setAppres(result=>op)
  }
  return (
    <div className="App" style={{ border: "1px solid green" }}>
      <OutputScreen   appres={appres} />
      <Button getOutput={getOutput} />
    </div>
  );
}

export default App;
