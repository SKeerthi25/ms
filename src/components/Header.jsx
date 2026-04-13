import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Collections', path: '/collections' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="logo">
        <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
          <img src="/images/logo.png" alt="MS TVK LTD Logo" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-color)', boxShadow: '0 0 15px rgba(212,175,55,0.3)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '4px', color: 'var(--text-main)', lineHeight: '1', fontFamily: "'Playfair Display', serif" }}>MS <span style={{ color: 'var(--accent-color)' }}>TVK</span></span>
            <span style={{ fontSize: '0.6rem', letterSpacing: '8px', color: 'var(--text-muted)', marginTop: '4px', fontWeight: '600' }}>LTD PHOTOGRAPHY</span>
          </div>
        </Link>
      </div>
      
      <nav id="nav" className={isMenuOpen ? 'active' : ''}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X color="var(--accent-color)" /> : <Menu color="var(--accent-color)" />}
        </div>
      </div>
    </header>
  );
};

export default Header;
