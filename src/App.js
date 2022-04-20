import Loader from './features/Loader/Loader'
import Header from './features/Header/Header'
import Hero from './features/Hero/Hero'
import About from './features/About/About'
import Advantages from './features/Advantages/Advantages'
import Reviews from './features/Reviews/Reviews'
import Prices from './features/Prices/Prices'
import Calc from './features/Calc/Calc'
import Callback from './features/Callback/Callback'
import Telegram from './features/Telegram/Telegram'
import Footer from './features/Footer/Footer'

import 'animate.css';
import './App.scss'

function App() {

  const mockedData = []
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 2; j++) {
      const hh = String(i).length === 1 ? `0${i}` : i
      const mm = j === 0 ? '00' : '30'
      mockedData.push(`${hh}:${mm}`)
    }
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Advantages />
        <Reviews />
        <Prices />
        <Calc />
        <Callback />
        <Telegram />
      </main>
      <Footer />
    </div>
  );
}

export default App;
