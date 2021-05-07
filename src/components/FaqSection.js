import React from "react"
import styled from "styled-components"
import { Faq } from "../styles"

const FaqSection = (props) => {
    const questions = props.questions
    let toogled = false;


    const ToggleAnswer = (i, u) => {
        let answerToogle =  document.getElementById(i);
        let questionColor = document.getElementById(u);

        if(toogled === false){
            answerToogle.style.display = "block";
            questionColor.style.color = "#23d997";
            toogled = true;
        }else{
            answerToogle.style.display = "none";
            questionColor.style.color = "white";
            toogled = false;
        }
    }
    return(
        <Faq>
            <h2>Des question ? <span>FAQ</span></h2>
            {questions.map((question, i) => {return(
            <Question onClick={() => ToggleAnswer(i, i+i+10)} key={i} className="question">
                <h4 id={i+i+10}>{question.question}</h4>
                <Answer id={i}>
                    <p>{question.answer1}</p>
                    <p>{question.answer2}</p>
                </Answer>
                <div className="faq-line"></div>
            </Question>
            )})}
        </Faq>
    )
}
const Question = styled.div`
    h4:hover{
        color:#23d997 !important;
    }
`
const Answer = styled.div`
display:none;
`

export default FaqSection