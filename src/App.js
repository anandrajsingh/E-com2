import './App.css';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
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
    </div>
  );
}

export default App;
