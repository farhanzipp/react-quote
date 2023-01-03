import { Container, Nav, Navbar } from "react-bootstrap"
import { AiFillHeart } from "react-icons/ai"

const Footer = () => {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container className="justify-content-center">
                <Nav>
                    <Navbar.Text>
                        <p>Made With <AiFillHeart /> by</p>
                    </Navbar.Text>
                    <Nav.Link href="https://github.com/farhanzipp" target="_blank">farhanzipp</Nav.Link>
                    <Navbar.Text>
                        <p>Powered by</p>
                    </Navbar.Text>
                    <Nav.Link href="https://animechan.vercel.app/" target="_blank">animechan</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
   )
        
}

export default Footer