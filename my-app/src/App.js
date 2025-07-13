// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TechTimeline from './pages/TechTimeline';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Main App layout with navbar, pages, and footer
function App() {
  return (
    <Router> 
      <Navbar />
      <div className="pt-12"> {/* 👈 Add top padding to push content below navbar */}
          {/* page content here */}
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
          {/* Header/Nav */}

          {/* Page Routes */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/techtimeline" element={<TechTimeline />} />
              </Routes>
            </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
      
    </Router>
  );
}

export default App;
