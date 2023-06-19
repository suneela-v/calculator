import React, { useState } from "react";
import { OutputRow } from "./OutputRow";
export const Button = ({ getOutput }) => {
  let [newvalx, setNewvalx] = useState("");
  const [res, setRes] = useState(0);
  const handleCalculate = () => {
    const resulthere =eval(newvalx)
    setRes(resulthere);
    setNewvalx("");
  };
  const handleDelete = () => {
    setNewvalx("");
    setRes(0);
  };
  const handleClear = () => {};
  const handleClick = (e) => {
    newvalx += e.target.value;    
    setNewvalx(newvalx);
  };
  
  return (
    <>
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
    </>
  );
};
