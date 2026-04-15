import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FoxMascot from './components/FoxMascot';
import Home from './pages/Home';
import About from './pages/About';
import LoanCalculator from './pages/LoanCalculator';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import LoginPage from './pages/LoginPage';
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

function RouteFoxMascot() {
  const { pathname } = useLocation();
  return <FoxMascot pathname={pathname} />;
}

function App() {
  const { pathname } = useLocation();
  const isLoginRoute = pathname === '/login';

  return (
    <>
      <div className="App">
        {!isLoginRoute && <Navbar />}
        {!isLoginRoute && <RouteFoxMascot />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/loan-calculator" element={<LoanCalculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<LoginPage />} />
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
        {!isLoginRoute && <Footer />}
      </div>
    </>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}
