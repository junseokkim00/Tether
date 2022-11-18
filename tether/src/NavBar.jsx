import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
    const navigate = useNavigate();

    const goHome= () => {
        navigate("/");
    }

    const goTL = () => {
        navigate("/TimeLog");
    }

    const goPomodoro = () => {
        navigate("/Pomodoro");
    }

    const goAttendance = () => {
        navigate("/Attendance");
    }

    const goContact = () => {
        navigate("/Contactus");
    }




    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand>tether</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={goHome}>Home</Nav.Link>
                        <Nav.Link onClick={goTL}>Time Log</Nav.Link>
                        <Nav.Link onClick={goPomodoro}>Pomodoro</Nav.Link>
                        <Nav.Link onClick={goAttendance}>Attendance</Nav.Link>
                    </Nav>
                    <Nav className='justify-content-end'>
                        <Nav.Link onClick={goContact}>Contact us</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>  
    );
}

export default NavBar;