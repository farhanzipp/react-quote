import { Container } from "react-bootstrap"
import { AiFillHeart } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="fixed-bottom "  >
            <Container fluid className="d-flex bg-dark text-muted justify-content-center">
                <p>made with <AiFillHeart /> by <a href="https://github.com/farhanzipp" target="_blank">farhanzip</a> powered by <a href="https://animechan.vercel.app/" target="blank">Animechan</a></p>
            </Container>
        </footer>
    )
        
}

export default Footer