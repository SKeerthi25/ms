import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { galleryData } from '../data/galleryData';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioDetails = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const cat = query.get('cat') || 'wildlife';
    const [idx, setIdx] = useState(parseInt(query.get('idx') || '0'));

    const categoryData = galleryData[cat] || [];
    const item = categoryData[idx];

    if (!item) return <div>Image not found.</div>;

    const navigateDetail = (direction) => {
        let next = idx + direction;
        if (next < 0) next = categoryData.length - 1;
        if (next >= categoryData.length) next = 0;
        setIdx(next);
    };

    const stories = [
        "Capturing this moment required patience, light, and a connection between the lens and the subject. Every detail tells a unique journey.",
        "Witnessing the interplay of shadow and highlights in this frame, we aimed to emphasize the emotional resonance of the scene.",
        "A rare perspective from our latest expedition. The textures and deep tones create a narrative that speaks to the soul.",
        "Technical mastery meets intuitive timing. This shot represents our commitment to excellence and authentic storytelling."
    ];

    return (
        <main style={{ paddingTop: 'var(--header-height)' }}>
            <section style={{ padding: '100px 8%' }}>
                <div className="container">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={cat + idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="reveal active"
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '80px', alignItems: 'center' }}>
                                <div style={{ position: 'relative' }}>
                                    <img src={item.url} alt={item.title} style={{ width: '100%', borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }} />
                                    <div className="detail-nav" style={{ position: 'absolute', bottom: '30px', right: '30px', display: 'flex', gap: '10px' }}>
                                        <button className="btn btn-primary" onClick={() => navigateDetail(-1)}><ChevronLeft size={20} /></button>
                                        <button className="btn btn-primary" onClick={() => navigateDetail(1)}><ChevronRight size={20} /></button>
                                    </div>
                                </div>
                                <div>
                                    <span style={{ color: 'var(--accent-color)', letterSpacing: '5px', textTransform: 'uppercase' }}>{item.category}</span>
                                    <h1 style={{ fontSize: '4rem', margin: '20px 0' }}>{item.title}</h1>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 2, marginBottom: '40px' }}>{stories[idx % stories.length]}</p>
                                    
                                    <div className="glass-card" style={{ padding: '20px', fontSize: '0.8rem', letterSpacing: '2px' }}>
                                        <p>SHOT ON: <span style={{ color: 'var(--text-main)' }}>Fujifilm GFX 100S</span></p>
                                        <p>LENS: <span style={{ color: 'var(--text-main)' }}>GF 110mm f/2 R LM WR</span></p>
                                        <p>LOCATION: <span style={{ color: 'var(--text-main)' }}>Global Expeditions</span></p>
                                    </div>

                                    <Link to="/gallery" className="btn btn-outline" style={{ marginTop: '50px' }}>Back to Gallery</Link>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </main>
    );
};

export default PortfolioDetails;
