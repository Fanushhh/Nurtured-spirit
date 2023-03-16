import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
