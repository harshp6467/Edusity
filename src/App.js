import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import Campus from "./Components/Campus/Campus.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (                        
    <div className="App">        
      <Navbar />                 
      <Hero />
      <div className="Container">
        <Title subtitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About />
        <Title subtitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subtitle="TESTMONIALS" title="What Students say?" />
        <Testimonials />
        <Title subtitle="CONTACT US" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
