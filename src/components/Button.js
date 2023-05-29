import React, { useState } from "react";
import { OutputRow } from "./OutputRow";
export const Button = ({ getOutput }) => {
  let [newvalx, setNewvalx] = useState("");
  const [res,setRes]=useState(0)
  const handleClick = (e) => {
    //  console.log(e.target)
    doCal(e.target.value);
  };
  const doCal = (val) => {
    console.log(val);

    //if(!val) return
    // if(val != "delete" && val!== "clear"  ){}
    if (val == "delete") {
      val = 0;
      setNewvalx("");
      setRes((result)=>0)
       getOutput(res);
    } else {
      //  else{
      if (val == "=") {
        // console.log(val, eval(newval));
        // newval=""

        console.log(val, eval(newvalx));
        setRes(result =>eval(newvalx));
        getOutput(res)
        setNewvalx(result=>"");
      } else {
        //  newval+=val;console.log(newval,"in else")
        newvalx += val;
        console.log(newvalx, "in else");
        setNewvalx(result=>newvalx);
      }
    }
    // }
  };
  return (
    <>
      <div>
        <input type="button" value={"delete"} onClick={handleClick} />
        <input type="button" value={"clear"} onClick={handleClick} />
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
        <input type="button" value={"="} onClick={handleClick} />
      </div>
    </>
  );
};
