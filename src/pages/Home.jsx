import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';
import { ArrowRightLeft, Target, Award, Users } from 'lucide-react';

const Home = () => {
    const sliderRef = useRef(null);
    const beforeImgRef = useRef(null);
    const handleRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!sliderRef.current || !beforeImgRef.current || !handleRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
        let x = pageX - rect.left - window.scrollX;

        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;

        const percentage = (x / rect.width) * 100;
        handleRef.current.style.left = `${percentage}%`;
        beforeImgRef.current.style.width = `${percentage}%`;
    };

    return (
        <main>
            {/* Hero Section */}
            <section id="hero">
                <div className="hero-bg"></div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="hero-content"
                    style={{ marginTop: '-15vh' }}
                >
                    <h2 style={{ fontSize: '3.5rem', letterSpacing: '12px', color: '#ffffff', marginBottom: '10px', fontWeight: '800', fontFamily: "'Playfair Display', serif", textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>MS TVK LTD PHOTOGRAPHY</h2>
                    <p style={{ fontSize: '1rem', letterSpacing: '6px', color: 'rgba(255,255,255,0.7)', marginBottom: '40px', textTransform: 'uppercase' }}>London • Croydon • Global</p>
                    <h1 style={{ marginTop: '0' }}>Excellence In <span>Every Frame</span></h1>
                    <div className="cta-group">
                        <Link to="/gallery" className="btn btn-primary">View Collection</Link>
                        <Link to="/contact" className="btn btn-outline" style={{ marginLeft: '20px' }}>Contact Us</Link>
                    </div>
                </motion.div>
            </section>

            {/* Philosophy */}
            <section className="philosophy-section">
                <div className="container philosophy-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="about-img"
                        style={{ position: 'relative' }}
                    >
                        <img src="/images/portrait_3.png" alt="Philosophy" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 50px 100px rgba(0,0,0,0.5)' }} />
                        <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', background: 'var(--accent-color)', padding: '40px', color: '#000', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem' }}>Born to <br />Capture</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="about-text"
                    >
                        <span style={{ color: 'var(--accent-color)', letterSpacing: '5px' }}>PREMIUM QUALITY</span>
                        <h2 style={{ fontSize: '3.5rem', margin: '20px 0' }}>Artistry Meets <br />Professionalism</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>At MS TVK LTD, we don't just take pictures; we craft visual narratives. Each shot is a blend of technical mastery and emotional intuition.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            <div>
                                <h3 style={{ color: 'var(--accent-color)', fontSize: '2rem' }}>2k+</h3>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Sessions Completed</p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--accent-color)', fontSize: '2rem' }}>900k+</h3>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>photographing</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Photography Insights */}
            <section className="anatomy-section" style={{ padding: 'var(--section-padding)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                    <span style={{ color: 'var(--accent-color)', letterSpacing: '5px' }}>BEYOND THE LENS</span>
                    <h2 style={{ fontSize: '3rem', margin: '10px 0 60px' }}>The Anatomy of a Shot</h2>

                    <div className="anatomy-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glass-card"
                            style={{ padding: '40px', textAlign: 'left' }}
                        >
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--accent-color)' }}>Light & Shadow</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>Photography literally translates to "drawing with light." Without darkness, there is no depth. We manipulate shadows just as intensely as we shape the light to create dramatic, three-dimensional portraits that feel almost sculptural.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-card"
                            style={{ padding: '40px', textAlign: 'left' }}
                        >
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--accent-color)' }}>The Decisive Moment</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>As famously described by Cartier-Bresson, the decisive moment is that split second where all elements—emotion, action, and composition—align in perfect harmony. Once it passes, it is gone forever. Our reflexes are trained precisely for this fraction of a second.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass-card"
                            style={{ padding: '40px', textAlign: 'left' }}
                        >
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--accent-color)' }}>Focal Length Psychology</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>A lens does more than zoom; it changes how subjects relate to their background. We use wide angles (24mm) to immerse the viewer in the scene, and telephoto lenses (200mm) to isolate and compress the subject against stunning out-of-focus bokeh.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Gallery */}
            <GalleryGrid initialFilter="all" />

            {/* Book Now Section */}
            <section className="booking-section" style={{ padding: 'var(--section-padding)' }}>
                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-card booking-card"
                    >
                        <h2 style={{ fontSize: '4rem', marginBottom: '30px' }}>Ready to Create <br />Masterpieces?</h2>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '20px 60px', fontSize: '1rem' }}>Initiate Creation</Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Home;
