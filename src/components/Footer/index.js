import { Container } from "react-bootstrap"
import { AiFillHeart } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="fixed-bottom "  >
            <Container fluid className="d-flex bg-dark text-muted justify-content-center">
                <p>made with <AiFillHeart /> by farhan</p>
            </Container>
        </footer>
    )
        
}

export default Footer