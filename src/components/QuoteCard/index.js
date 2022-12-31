import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { BsTwitter } from "react-icons/bs"

const QuoteCard = () => {
    return (
        <>
        
        <Card className="mt-5">
            <Card.Header>Quote</Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
                <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
            </Card.Body>
        </Card>
        <Container fluid className="px-0 my-2">
            <Row>
                <Col xs={7}>
                    <Button><BsTwitter /></Button>
                    <Button className="mx-2">Share</Button>
                </Col>
                <Col className="d-flex justify-content-end"><Button >New Quote</Button></Col>
            </Row>
        </Container>
        </>
    )
  }

  export default QuoteCard
