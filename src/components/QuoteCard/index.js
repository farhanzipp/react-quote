import { useState ,useEffect } from 'react'
import axios from 'axios'

import React from 'react'

import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { BsTwitter } from "react-icons/bs"



const QuoteCard = () => {
    
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getQuote = async () => {
            try {
                const response = await axios.get('https://animechan.vercel.app/api/random');
                setQuote(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setQuote(null);
            } finally {
                setLoading(false);
            }
        };
        getQuote();
    }, [loading])

    return (
        <>
        
        <Card className="mt-5">
            <Card.Header>Quote</Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
                {' '}
                    {loading && <p>Loading...</p>}
                    {!loading && <p>{quote.quote}</p>}
                {' '}
                
                <footer className="blockquote-footer mx-auto">
                {!loading && quote.character} from <cite title="Source Title">{!loading && quote.anime}</cite>
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
