import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

function App() {

  return (
    <main className='App'>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}

export default App;
