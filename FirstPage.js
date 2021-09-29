import React from 'react'
//sryles
import './styles/first.css'


function FirstPage({ questionType, easy, medium, hard }) {
    return (
        <div className= "card-first-page">
            <h2>QuizPinas</h2>
            <strong>Sharpen your mind and learn the Philippine History with this app!</strong>
            <div className="scores">
                <p>All Your Scores:</p>
                <div>Easy: <strong>{easy ? easy: 0} / 5</strong></div>
                <div>Medium: <strong>{medium ? medium : 0} / 10</strong></div>
                <div>Hard: <strong>{hard ? hard: 0} / 15</strong></div>
            </div>
            <p>Select a difficulty:</p>
            <div>
                <button className="buttons" onClick = {() => questionType("easy")}>Easy</button>
                <button className="buttons" onClick = {() => questionType("medium")}>Medium</button>
                <button className="buttons" onClick = {() => questionType("hard")}>Hard</button>
            </div>
        </div>
    )
}

export default FirstPage
