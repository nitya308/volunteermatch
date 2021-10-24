import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

export default function MyNav(props) {
    return (
        <Navbar className="navbar" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="home">HOME</Nav.Link>
                    <Nav.Link href="about">ABOUT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="home" className="m-auto" style={{fontSize:"1.3em"}}>Student VolunteerMatch</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="button" href="quiz-interests">Take the quiz</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}