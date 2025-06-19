import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import FloatingContactButton from './components/FloatingContactButton';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';
import { useState } from 'react';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingContactButton onClick={() => setIsContactModalOpen(true)} />
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
