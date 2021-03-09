import React from "react"
import styled from "styled-components"
import { Faq } from "../styles"

const FaqSection = (props) => {
    const questions = props.questions

    return(
        <Faq>
            <h2>Des question ? <span>FAQ</span></h2>
            {questions.map((question, i) => {return(
            <div key={i} className="question">
                <h4>{question.question}</h4>
                <div className="answer">
                    <p>{question.answer1}</p>
                    <p>{question.answer2}</p>
                </div>
                <div className="faq-line"></div>
            </div>
            )})}
        </Faq>
    )
}


export default FaqSection