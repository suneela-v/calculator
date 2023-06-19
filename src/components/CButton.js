import React from "react";
export const CButton = ({ question, answer, feedResponse,label }) => {
    
    const handleClick =(e) =>{
const val=  e.target.value 
switch(val){
    case "=":{
if(question!= ""){
   // let ans = ""
    try{
        answer = eval(question);
    }
    catch(error){
        answer = error;
    }
    if (answer == undefined) answer = "error";

    feedResponse(question, answer);
}
    }
    case "clear" :{
        
question ="";answer="";
feedResponse(question, answer);
    }
    default :{
        question += val;
        feedResponse(question, answer);
    }
}


    }
  return <>
  <input type="button"  value={label} onClick={handleClick}/>
  </>;
};
