import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-grid">
                <div>
                    <div className="logo" style={{ fontSize: '2rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <img src="/images/logo.png" alt="MS TVK LTD Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--accent-color)' }} />
                        MS <span>TVK LTD</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>Capturing the essence of life's most profound moments through the lens of excellence.</p>
                </div>
                <div>
                    <h4 style={{ marginBottom: '30px', letterSpacing: '2px' }}>QUICK LINKS</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ marginBottom: '15px' }}><Link to="/philosophy" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Philosophy</Link></li>
                        <li style={{ marginBottom: '15px' }}><Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About Us</Link></li>
                        <li style={{ marginBottom: '15px' }}><Link to="/collections" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Collections</Link></li>
                        <li style={{ marginBottom: '15px' }}><Link to="/pricing" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Pricing</Link></li>
                        <li style={{ marginBottom: '15px' }}><Link to="/faq" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '30px', letterSpacing: '2px' }}><Link to="/sitemap" style={{ color: 'inherit', textDecoration: 'none' }}>SITEMAP</Link></h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ marginBottom: '15px' }}><Link to="/services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Services</Link></li>
                        <li style={{ marginBottom: '15px' }}><Link to="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link></li>
                        <li style={{ marginBottom: '15px' }}><Link to="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Booking</Link></li>
                        <li style={{ marginBottom: '15px' }}><Link to="/testimonials" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Reviews</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ marginBottom: '30px', letterSpacing: '2px' }}>NEWSLETTER</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '20px' }}>Get early access to exclusive collection releases.</p>
                    <div style={{ display: 'flex' }}>
                        <input type="email" placeholder="Email" style={{ background: '#111', border: '0', padding: '15px', color: '#fff', width: '100%' }} />
                        <button style={{ background: 'var(--accent-color)', border: '0', padding: '15px 25px', cursor: 'pointer' }}><Send size={16} /></button>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', paddingTop: '50px', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                <p>© 2026 MS TVK LTD. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;
