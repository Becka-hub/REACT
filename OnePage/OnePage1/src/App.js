import React,{useEffect} from 'react';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Recommend from './Components/Recommend';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import scrollreveal from 'scrollreveal';
const App = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <>
     <ScrollToTop/>
     <Navbar/>
     <Hero/>
     <Services/>
     <Recommend/>
     <Testimonials/>
     <Footer/>
    </>
  );
}

export default App;
