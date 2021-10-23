import { useState } from "react"
import {
  Link
} from "react-router-dom";

export default function Time(props) {

  const handleWidgetClick = (val) => {
    props.setTime(val)
  }

  const isActive = (val) => {
    return props.time === val ? "is-active" : ""
  }

  return (
    <div style={{ fontSize: "1.2em" }}>
      <div>
        <a className="exit" href="index.html">X</a>
      </div>

      <div className="quiz-heading">
        <h1>TIME REQUIREMENTS</h1>
        <p>
          How many hours <b>per week</b> maximum are you looking to spend? (please select one)
        </p>
      </div>

      <div className="section quiz-items">
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <div className={`quizbox quiz3 ${isActive('1')}`} onClick={(e) => {
                handleWidgetClick('1')
              }}>
                1 to 2 hours
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <div className={`quizbox quiz3 ${isActive('3')}`} onClick={(e) => {
                handleWidgetClick('3')
              }}>
                3 to 4 hours
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <div className={`quizbox quiz3 ${isActive('5')}`} onClick={(e) => {
                handleWidgetClick('5')
              }}>
                5 to 6 hours
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <div className={`quizbox quiz3 ${isActive('7')}`} onClick={(e) => {
                handleWidgetClick('7')
              }}>
                7 to 8 hours
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <div className={`quizbox quiz3 ${isActive('9')}`} onClick={(e) => {
                handleWidgetClick('9')
              }}>
                9 to 10 hours
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <div className={`quizbox quiz3 ${isActive('10')}`} onClick={(e) => {
                handleWidgetClick('10')
              }}>
                10+ hours
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="section button" id="next-button">
        <Link className="button-link" to="results" style={{ textdecoration: "none" }}>
          FINISH
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
}