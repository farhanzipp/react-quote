import Container from "react-bootstrap/Container"
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="justify-content-center">
                <Nav >
                    <Navbar.Brand>ANIQUOTE</Navbar.Brand>
                    {/* <Nav.Link href="#home">Quote</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    )
        
}

export default Navigation
