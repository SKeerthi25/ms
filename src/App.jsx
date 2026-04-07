import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import Services from './pages/Services';
import About from './pages/About';
import Collections from './pages/Collections';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import PortfolioDetails from './pages/PortfolioDetails';
import Philosophy from './pages/Philosophy';
import SitemapPage from './pages/SitemapPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/sitemap" element={<SitemapPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
