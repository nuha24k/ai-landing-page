import './index.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  return (
    <div className="dark">
      <Navbar />
      <main id="home">
        <HeroSection />
        {/* <div id="about">
          <AboutSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <CTASection />
        <div id="faq">
          <FAQSection />
        </div> */}
      </main>
    </div>
  )
}

export default App
