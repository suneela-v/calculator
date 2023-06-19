import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { OutputScreen } from "./components/OutputScreen";
import { Button } from "./components/Button";
import { Calculator } from "./components/Calculator";
function App() {
  // const [appres,setAppres] = useState(0)
  let [newvalx, setNewvalx] = useState("");
  const [res, setRes] = useState("");
  const [showhistory, setShowhistory] = useState(false);
  const [history, setHistory] = useState([]);
  const handleCalculate = () => {
    try{
    const resulthere = eval(newvalx);  
    let totalres = newvalx + "=" + resulthere;
    setRes(resulthere);
    const newhistory = [...history,res];
    setHistory(newhistory);
    setNewvalx("");
    }catch(error){
      setRes("error")
       setNewvalx("");
    }
    //
  };
  const handleDelete = () => {
    setNewvalx("");
    //setRes(0);
  };

  const handleClear = () => {
    setNewvalx("");
    setRes("");
  };
  const handleClick = (e) => {
    newvalx += e.target.value;
    setNewvalx((prev) => prev + e.target.value);
  };
  const handleHistory = () => {
    setShowhistory(!showhistory);
  };
  const clearPrevious =() =>{
    setNewvalx(prev => prev.slice(0,-1))
  }

  return (
    <div className="App" style={{ border: "1px solid green" }}>
      {showhistory && (
        <div>
          {history.map((as) => (
            <div>{as}</div>
          ))}
        </div>
      )}
      <input value={newvalx} />
      <input value={res} />
      <div>
        <input type="button" value={"delete"} onClick={handleDelete} />
        <input type="button" value={"clear"} onClick={handleClear} />
        <input type="button" value={"."} onClick={handleClick} />
        <input type="button" value={"/"} onClick={handleClick} />
      </div>
      <div>
        <input type="button" value={"7"} onClick={handleClick} />
        <input type="button" value={"8"} onClick={handleClick} />
        <input type="button" value={"9"} onClick={handleClick} />
        <input type="button" value={"*"} onClick={handleClick} />
      </div>
      <div>
        <input type="button" value={"4"} onClick={handleClick} />
        <input type="button" value={"5"} onClick={handleClick} />
        <input type="button" value={"6"} onClick={handleClick} />
        <input type="button" value={"+"} onClick={handleClick} />
      </div>
      <div>
        <input type="button" value={"1"} onClick={handleClick} />
        <input type="button" value={"2"} onClick={handleClick} />
        <input type="button" value={"3"} onClick={handleClick} />
        <input type="button" value={"-"} onClick={handleClick} />
      </div>
      <div>
        <input type="button" value={"0"} onClick={handleClick} />
        <input type="button" value={"="} onClick={handleCalculate} />
      </div>
      <button onClick={handleHistory}>
        {showhistory ? "hidehistory" : "showhistory"}
      </button>
      <button onClick={clearPrevious}>clearprevious </button>
    </div>
  );
}

export default App;
