import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { Button, Card, Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap"
import { BsTwitter } from "react-icons/bs"

const AniQuote = () => {
    const [quote, setQuote] = useState("Click Motivate Me! and I'll get a quote that can motivate You....");
    const [anime, setAnime] = useState("WELCOME TO ANIQUOTE!");
    const [character, setCharacter] = useState("Anons-Kun");
    const [showTooltip, setShowTooltip] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleClick = () => {
        axios.get('https://animechan.vercel.app/api/random')
          .then(response => {
            const {quote, anime, character} = response.data;
            setQuote(quote);
            setAnime(anime);
            setCharacter(character);
        })
          .catch(error => console.error(error));
      }  

      useEffect(() => {
        if (showTooltip && !timeoutId) {
          const id = setTimeout(() => setShowTooltip(false), 1000); // 3 seconds
          setTimeoutId(id);
        } else if (!showTooltip && timeoutId) {
          clearTimeout(timeoutId);
          setTimeoutId(null);
        }
      },[showTooltip, timeoutId]);

      const toggleTooltip = () => setShowTooltip(!showTooltip);

      const handleTweet = () => {
				const tweetText = `"${quote}" ${"\n"}- ${character}`;
				const tweetTextEncoded = encodeURIComponent(tweetText);

				window.open("https://twitter.com/intent/tweet?text=" + tweetTextEncoded, "twitter-tweet", "height=450, width=550, top=100, left=100");
			}

			const handleCopyText = () => {
        const textToCopy = `"${quote}" ${"\n"}- ${character}`
				 navigator.clipboard.writeText(textToCopy);
			}

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
										{/* twitter button */}
                    <Button variant='info' onClick={handleTweet}><BsTwitter style={{ color: 'white' }} /></Button>
										{/* copy button with tooltip */}
										<OverlayTrigger
											trigger="click"
											placement="right"
											show={showTooltip}
                      onToggle={toggleTooltip}
											overlay={
												<Tooltip id="copy-tooltip" >Copied!</Tooltip>
											}
										>
                    	<Button onClick={handleCopyText} className="mx-2" variant='dark'>Copy</Button>
									</OverlayTrigger>
                </Col>
                <Col onClick={handleClick} className="d-flex justify-content-end"><Button variant='dark'>Motivate Me!</Button></Col>
            </Row>
        </Container>
    </div>
  )
}

export default AniQuote