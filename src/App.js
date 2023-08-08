import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Virtual from './components/Virtual/Virtual';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
