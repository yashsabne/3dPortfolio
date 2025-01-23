import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Footer from './sections/Footer'
import { Analytics } from "@vercel/analytics/react"
export default function App() {
  return (
   <main className='nax-w-7xl mx-auto'> 
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Education/>
    <Contact/> 
    <Footer/>
 
 
        <Analytics/>
 
  </main>
    
  )
}
