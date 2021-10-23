import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'

export default function Home(props){
    return (
        <div style={{fontSize:"1.2em"}}>
            <div className="section" id="section1">
                <h2>
                Find the perfect volunteer or work opportunity for you!
                </h2>
                <p>
                Helping students find their perfect match with personalised recommendations based on your interests, skills and schedules!
                </p>
                <div className="button" id="main-button">
                <a className="button-link" href="quiz-interests" style={{textDecoration: "none"}}>
                    Take the quiz
                </a>
                </div>
            </div>
            

            
            <div className="section" id="section2">
                <h2>
                How it Works
                </h2>
                <div className="container">
                <div className="row">
                    <div className="col-sm">
                    <img src={img1} height="200" width="200" alt=""/>
                    <br />
                    INTERESTS
                    </div>
                    <div className="col-sm">
                    <img src={img2} height="200" width="200" alt="" />
                    <br />
                    SKILLS
                    </div>
                    <div className="col-sm">
                    <img src={img3} height="200" width="200" alt=""/>
                    <br />
                    REQUIREMENTS
                    </div>
                </div>
                </div>
            </div>
            
            <div className="section" id="section3">
                <p>
                Based on these, we give you personalised recommendations for oppurtunities customised for you!
                </p>
                <br />
                <p>
                It's an easy, fast and reliable way to give back to your community or find the perfect work experience and build connections with other students and organisations!
                </p>
            </div>
        </div>
    )
} 