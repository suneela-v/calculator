import React,{useState} from "react"
import { CButton } from "./CButton"
import { Copscreen } from "./Copscreen"

export const Capp =()=>{
    const [question,setQuestion]=useState("")
    const [answer, setAnswer] = useState("");
    const feedResponse =(qs,ans)=>{
setQuestion(qs);
setAnswer(ans);
console.log(qs,ans)
    }
    return (
      <>
        <Copscreen question={question} answer={answer} />
        <div>
          <CButton
            label={"1"}
            feedResponse={feedResponse}
            question={question}
            answer={answer}
          />
          <CButton
            label={"2"}
            feedResponse={feedResponse}
            question={question}
            answer={answer}
          />
          <CButton label={"3"} />
          <CButton label={"4"} />
        </div>
        <div>
          <CButton
            label={"+"}
            feedResponse={feedResponse}
            question={question}
            answer={answer}
          />
          <CButton label={"-"} />
          <CButton label={"*"} />
          <CButton label={"/"} />
        </div>
        <div>
          <CButton
            label={"="}
            feedResponse={feedResponse}
            question={question}
            answer={answer}
          />
          <CButton label={"clear"} />
        </div>
      </>
    );
}