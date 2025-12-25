import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      {/* Main Wrapper: 
          - bg-black: Sets the pure #000000 background
          - text-zinc-400: Sets a readable light gray for body text
          - selection: Customizes the highlight color when you drag your mouse over text
      */}
      <div className="bg-[var(--site-bg)] min-h-screen text-zinc-400 font-sans selection:bg-emerald-500 selection:text-black antialiased">
        
        {/* Subtle Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <Navbar />

        {/* Content Area:
            - relative z-10: Places content above the grid
            - pt-16: Prevents content from being hidden behind the fixed navbar
        */}
        <main className="relative z-10 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;