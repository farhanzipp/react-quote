import { Container, Nav, Navbar} from "react-bootstrap"
import { AiFillHeart } from "react-icons/ai"

const Footer = () => {

    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container className="justify-content-center">
                <Nav >
                    <Navbar.Text>Made with <AiFillHeart /> by </Navbar.Text>
                    <Nav.Link href="https://github.com/farhanzipp" target="blank">farhanzipp</Nav.Link>
                    <Navbar.Text className="d-none d-sm-block">Powered by</Navbar.Text>
                    <Nav.Link className="d-none d-sm-block" href="https://animechan.vercel.app/" target="_blank">animechan</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )     
}

export default Footer