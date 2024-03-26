import Header from "./components/Header.jsx"
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Controls from './components/Controls.jsx'
import Gradients from './components/Gradients.jsx'
import Blog from "./components/Blog.jsx"
import Footer from "./components/Footer.jsx"
import { useState } from 'react'


function App() {
 
  const [colorChange, setColorChange] = useState({
    primary: '#E5989B',
    secondary: '#B5838D',
    tertiary:  '#FFB4A2',
    quaternary:  '#FFCDB2', 
    quinary: '#6D6875',
    background:  '#6D6875',
});



    return [
      <Controls state={colorChange} setState={setColorChange} />,
      <Header />,
      <Hero />,
      <Stats />,
      <Gradients />,
      <Blog />,
      <Footer />
    ]
}

export default App
