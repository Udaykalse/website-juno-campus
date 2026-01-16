import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Features from './components/features/Features'
import Speciality from './components/speciality/Speciality'
import Highlights from './components/highlights/Highlights'
import Partnerships from './components/partnerships/Partnerships'
import Characteristics from './components/characteristics/Characteristics'
import Testimonials from './components/testimonials/Testimonials'
import Demo from './components/demo/demo'
import Footer from './components/footer/footer'
import Bottom from './components/footer/Bottom'


function App() {
  return (
<div style={{ backgroundColor: "rgb(228, 238, 254)" }}>
  <Navbar />
  <Home />
  <Features />
  <Speciality />
  <Highlights />
  <Partnerships />
  <Characteristics />
  <Testimonials />
  <Demo /> 
  <Footer />
  <Bottom />
</div>

  )
}

export default App
