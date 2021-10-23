import 'bootstrap/dist/css/bootstrap.min.css';


export default function MyNav(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-light" style={{fontSize:"1.2em"}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="home">HOME</a>
                <a className="nav-item nav-link" href="about">ABOUT</a>
            </div>
            </div>
            <a className="navbar-brand mx-auto" href="home">Student Work Match</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{alignItems: "right"}}>
            <div className="navbar-nav" style={{marginLeft:"auto"}}>
                <a className="nav-item nav-link button" id="header-button" href="quiz-interests">Take the quiz</a>
            </div>
            </div>
        </nav>

        
    )
}