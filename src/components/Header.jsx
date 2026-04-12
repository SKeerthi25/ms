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
          <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.3))' }}>
            <defs>
              <linearGradient id="premiumGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#996515" />
              </linearGradient>
            </defs>
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" stroke="url(#premiumGold)" strokeWidth="3" fill="rgba(212,175,55,0.05)" />
            <circle cx="50" cy="50" r="16" stroke="url(#premiumGold)" strokeWidth="4" />
            <circle cx="50" cy="50" r="6" fill="url(#premiumGold)" />
            <path d="M 50 15 L 50 34 M 50 66 L 50 85 M 15 50 L 34 50 M 66 50 L 85 50" stroke="url(#premiumGold)" strokeWidth="2" opacity="0.8" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '4px', color: 'var(--text-main)', lineHeight: '1', fontFamily: "'Playfair Display', serif" }}>MS <span style={{ color: 'var(--accent-color)' }}>TVK</span></span>
            <span style={{ fontSize: '0.6rem', letterSpacing: '8px', color: 'var(--text-muted)', marginTop: '4px', fontWeight: '600' }}>LTD</span>
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
