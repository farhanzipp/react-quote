import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { BsTwitter } from "react-icons/bs"


const AniQuote = () => {
    const [quote, setQuote] = useState(null);
    const [anime, setAnime] = useState(null);
    const [character, setCharacter] = useState(null);
    

    const handleClick = () => {
        axios.get('https://animechan.vercel.app/api/random')
          .then(response => {
            setQuote(response.data.quote);
            setAnime(response.data.anime);
            setCharacter(response.data.character);
        })
          .catch(error => console.error(error));
      }  

      useEffect(() => {
        handleClick();
      }, []);

  return (
    <div>
       

        <Card className="mt-5 border-secondary">
            <Card.Header>{anime}</Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
                {quote ? <p>{quote}</p> : null}
                <footer className="blockquote-footer">
                    {character}
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
                <Col onClick={handleClick} className="d-flex justify-content-end"><Button >New Quote</Button></Col>
            </Row>
        </Container>
    </div>
  )
}

export default AniQuote