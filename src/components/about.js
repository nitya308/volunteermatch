import img from '../images/profile.png'

export default function About(props) {

    document.body.style.backgroundColor = "#FFFFFF";

    return (
        <div style={{ fontSize: "1.2em" }}>
            <div className="section">
                <h2>ABOUT</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img id="profile" src={img} alt="profile"></img>
                        </div>
                        <div className="col-8" style={{textAlign: "left"}}>
                            This website was created by Nitya A., a high school student from Banglore, India. It aims to connect students at her school with matches of community service projects!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}