//import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import QuoteRequest from './components/QuoteRequest';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { QuoteProvider } from './QuoteContext';  // Adjust path

function App() {
  return (
    <QuoteProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <QuoteRequest />
        <Contact />
        <Footer />
      </div>
    </QuoteProvider>
  );
}

export default App;
