import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('https://picsum.photos/seed/about_hero/1920/1080')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>The Artistic Vision</p>
                    <h1>About <span>Us</span></h1>
                </motion.div>
            </section>

            <section style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container about-grid">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="about-img" 
                        style={{ position: 'relative' }}
                    >
                        <img src="https://picsum.photos/seed/philosophy_img/800/1000" alt="Photographer Journey" style={{ width: '100%', borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }} />
                        <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', background: 'var(--accent-color)', padding: '40px', color: '#000', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem' }}>Artistry in <br />Execution</div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="about-text"
                    >
                        <span style={{ color: 'var(--accent-color)', letterSpacing: '5px' }}>MS TVK LTD</span>
                        <h2 style={{ fontSize: '3.5rem', margin: '20px 0' }}>The Heart of <br />Photography</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>At MS TVK LTD, we believe that photography is more than just capturing an image; it's about preserving a feeling. Our studio is dedicated to creating high-end visual narratives that resonate on a deep, emotional level.</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>With a focus on luxury weddings, wildlife, and commercial fine art, we combine technical mastery with an intuitive artistic approach.</p>
                    </motion.div>
                </div>
            </section>

            <section style={{ padding: 'var(--section-padding)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '60px' }}>Global Expeditions</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 50px', fontSize: '1.2rem', lineHeight: '1.8' }}>
                        Our pursuit of the perfect image takes us to the furthest corners of the earth. From the icy expanses of Antarctica to the vibrant, dense jungles of the Congo, we travel extensively to capture rare beauty and document profound human connections globally.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { title: 'The Serengeti', desc: 'Tracking the Great Migration and photographing apex predators in their natural habitat.', img: '/images/wildlife_1.png' },
                            { title: 'Alpine Weddings', desc: 'Capturing breathtaking high-altitude ceremonies in the Swiss and Italian Alps.', img: '/images/wedding.png' },
                            { title: 'Amazon Basin', desc: 'Documenting rare flora and indigenous cultures deep within the rainforest.', img: '/images/nature.png' }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card"
                                style={{ padding: '0', overflow: 'hidden', textAlign: 'left' }}
                            >
                                <img src={item.img} alt={item.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                                <div style={{ padding: '30px' }}>
                                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '15px' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
