import { useState } from "react"
import {
  Link
} from "react-router-dom";


export default function Skills(props) {
  const [isActive, setIsActive] = useState({
    "Writing": "",
    "FineArts": "",
    "Teaching": "",
    "Fundraising": "",
    "GraphicDesign": "",
    "Marketing": "",
    "Instruments": "",
    "Singing": "",
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

  return (
    <div style={{ fontSize: "1.2em" }}>
      <div>
        <a className="exit" href="home">X</a>
      </div>

      <div className="quiz-heading">
        <h1>SKILLS</h1>
        <p>
          Tell us all about your talents!
        </p>
      </div>

      <div className="section quiz-items">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 col-xl-3">

              <div className={`quizbox quiz2 ${isActive['Writing']}`} onClick={(e) => {
                handleWidgetClick('Writing')
              }}>
                <i className="fas fa-pencil-alt"></i>
                <br />
                Writing
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz2 ${isActive['GraphicDesign']}`} onClick={(e) => {
                handleWidgetClick('GraphicDesign')
              }}>
                <i className="fas fa-magic"></i>
                <br />
                Graphic Design
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz2 ${isActive['FineArts']}`} onClick={(e) => {
                handleWidgetClick('FineArts')
              }}>
                <i className="fas fa-palette"></i>
                <br />
                Fine Arts and Crafts
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz2 ${isActive['Marketing']}`} onClick={(e) => {
                handleWidgetClick('Marketing')
              }}>
                <i className="fas fa-mail-bulk"></i>
                <br />
                Marketing
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz2 ${isActive['Teaching']}`} onClick={(e) => {
                handleWidgetClick('Teaching')
              }}>
                <i className="fas fa-chalkboard-teacher"></i>
                <br />
                Teaching
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz2 ${isActive['Instruments']}`} onClick={(e) => {
                handleWidgetClick('Instruments')
              }}>
                <i className="fas fa-guitar"></i>
                <br />
                Playing Instruments
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz2 ${isActive['Singing']}`} onClick={(e) => {
                handleWidgetClick('Singing')
              }}>
                <i className="fas fa-music"></i>
                <br />
                Singing
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className={`quizbox quiz2 ${isActive['Fundraising']}`} onClick={(e) => {
                handleWidgetClick('Fundraising')
              }}>
                <i className="fas fa-coins"></i>
                <br />
                Fundraising
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="section button" id="next-button" onClick={(e) => { }}>
        <Link className="button-link" to="quiz-time" style={{ textdecoration: "none" }}>
          NEXT
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
}