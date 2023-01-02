import { Container } from 'react-bootstrap';
import AniQuote from './components/AniQuote';
import Footer from './components/Footer';
import Navigation from './components/Navigation';



function App() {
  return (
    <div className="App">
      <Navigation/>

      <Container>
        <AniQuote />
      </Container>
      
      <Footer/>
    </div>
  );
}

export default App;
