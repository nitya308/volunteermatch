import { useState } from "react"
import {
  Link
} from "react-router-dom";

export default function Interests(props) {

  const [isActive, setIsActive] = useState({
    "Art": "",
    "Education": "",
    "Creative_Writing": "",
    "Covid_Relief": "",
    "News": "",
    "Health": "",
    "Music": "",
    "Environment": "",
  })

  const handleWidgetClick = (val) => {
    
    const valActive = isActive[val] === "" ? "is-active" : ""
    isActive[val] = valActive
    if (valActive === "") {
      props.remove(val)
    } else {
      props.add(val)
    }
    setIsActive({ ...isActive })
  }

  document.body.style.backgroundColor = "#DEF7F5";

  return (
    <div style={{fontSize:"1.2em"}}>
      <div>
        <a className="exit" href="home">X</a>
      </div>

      <div className="quiz-heading">
        <h1>INTERESTS</h1>
        <p>
          Select as many topics as you like!
        </p>
      </div>

      <div className="section quiz-items">
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz1 ${isActive['Art']}`} onClick={(e) => {
                handleWidgetClick('Art')
              }}>
                <i className="fas fa-palette"></i>
                <br />
                Art
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz1 ${isActive['Music']}`} onClick={(e) => {
                handleWidgetClick('Music')
              }}>
                <i className="fas fa-music"></i>
                <br />
                Music
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz1 ${isActive['Environment']}`} onClick={(e) => {
                handleWidgetClick('Environment')
              }}>
                <i className="fas fa-seedling"></i>
                <br />
                The Environment
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz1 ${isActive['Education']}`} onClick={(e) => {
                handleWidgetClick('Education')
              }}>
                <i className="fas fa-book-open"></i>
                <br />
                Education
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz1 ${isActive['News']}`} onClick={(e) => {
                handleWidgetClick('News')
              }}>
                <i className="fas fa-globe"></i>
                <br />
                News
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz1 ${isActive['Covid_Relief']}`} onClick={(e) => {
                handleWidgetClick('Covid_Relief')
              }}>
                <i className="fas fa-hands-helping"></i>
                <br />
                Covid-Relief
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz1 ${isActive['Creative_Writing']}`} onClick={(e) => {
                handleWidgetClick('Creative_Writing')
              }}>
                <i className="fas fa-pencil-alt"></i>
                <br />
                Creative Writing
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz1 ${isActive['Health']}`} onClick={(e) => {
                handleWidgetClick('Health')
              }}>
                <i className="fas fa-plus-square"></i>
                <br />
                Health
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section button" id="next-button" onClick={() => { }}>
        <Link className="button-link" to="quiz-skills" style={{ textDecoration: "none" }}>
          NEXT
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
}