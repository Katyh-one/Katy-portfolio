import './App.css'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { Skills } from './components/skills'

const App = () => (
    <div className="App">
            <h2 style={{ display: 'flex', justifyContent: 'right', alignItems: 'centre' }}>
                <a href="#about-section">
                    <button>About Me</button>
                </a>
                <a href="#content-section">
                    <button>Contact Me</button>
                </a>
                 
            </h2>
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )


export default App
