

import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import QuoteCard from './components/QuoteCard';
import Quotes from './components/Quotes/Quotes';

function App() {
  return (
    <div className="App">
      <Navigation/>

      <Container>
        <QuoteCard />
      </Container>
      
      <Footer/>
    </div>
  );
}

export default App;
