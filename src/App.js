// import { ParallaxProvider } from 'react-scroll-parallax'
import { Outlet } from 'react-router-dom'

import Header from './features/Header/Header'
import Footer from './features/Footer/Footer'

import 'animate.css';
import './App.scss'

function App() {
  return (
    // <ParallaxProvider>
      <div className="app">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    // </ParallaxProvider>
  );
}

export default App;
