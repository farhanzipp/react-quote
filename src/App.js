import { Container } from 'react-bootstrap';
import QuoteCard from './components/QuoteCard';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

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
