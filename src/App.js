import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import About from './pages/About';
import LoanCalculator from './pages/LoanCalculator';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Repay from './pages/Repay';
import LegalPage from './pages/LegalPage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState('login');

  const openAuthModal = (type = 'login') => {
    setAuthModalType(type);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar openAuthModal={openAuthModal} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/loan-calculator" element={<LoanCalculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/repay" element={<Repay />} />
            <Route path="/terms-condition" element={<LegalPage page="terms" />} />
            <Route path="/privacy-policy" element={<LegalPage page="privacy" />} />
            <Route path="/interest-rate-policy" element={<LegalPage page="interest" />} />
            <Route path="/risk-management-policy" element={<LegalPage page="risk" />} />
            <Route path="/kyc-aml-policy" element={<LegalPage page="kyc" />} />
            <Route path="/corporate-governance" element={<LegalPage page="governance" />} />
            <Route path="/fair-practice-code" element={<LegalPage page="fairpractice" />} />
            <Route path="/cancellation-refund-policy" element={<LegalPage page="refund" />} />
          </Routes>
        </main>
        <Footer />
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={closeAuthModal} 
          initialType={authModalType} 
        />
      </div>
    </Router>
  );
}

export default App;
