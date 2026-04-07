import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
    const philosophies = [
        {
            title: "The Emotional Resonance",
            text: "We believe a photograph is a heartbeat captured in time. It shouldn't just show what something looked like, but how it felt to be in that moment.",
            icon: "✧"
        },
        {
            title: "Technical Excellence",
            text: "Artistry is built on a foundation of technical mastery. We push the boundaries of light, optics, and digital processing to achieve perfection.",
            icon: "◈"
        },
        {
            title: "The Silent Narrative",
            text: "Every frame tells a story. We look for the subtle details—the glance, the shadow, the texture—that speak volumes without a word.",
            icon: "☯"
        },
        {
            title: "Timeless Stewardship",
            text: "Our work is destined for generations. We avoid fleeting trends in favor of a timeless aesthetic that will remain relevant for decades.",
            icon: "♾"
        },
        {
            title: "The Natural Truth",
            text: "Especially in wildlife and portraiture, we seek the unvarnished truth. Authenticity is the most precious element we can capture.",
            icon: "⚘"
        },
        {
            title: "Collaborative Vision",
            text: "We are the brush, but the vision is shared. We work in deep harmony with our clients to ensure their soul is reflected in the final work.",
            icon: "🤝"
        },
        {
            title: "Ethical wildlife",
            text: "In our nature work, the welfare of the subject is paramount. We observe without disturbing, ensuring that our presence leaves no trace.",
            icon: "🐾"
        },
        {
            title: "The Golden Ratio",
            text: "Mathematical beauty exists in nature and art. We use classical principles of composition to create balance and harmony in every frame.",
            icon: "📐"
        },
        {
            title: "Light as Medium",
            text: "We don't photograph things; we photograph light reflecting off things. Understanding light is our lifelong pursuit.",
            icon: "☀"
        },
        {
            title: "Legacy of Excellence",
            text: "We believe in creating a legacy. Every project is an opportunity to contribute something meaningful to the history of visual culture.",
            icon: "🏛"
        }
    ];

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('https://picsum.photos/seed/philosophy_hero/1920/1080')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Our Core Beliefs</p>
                    <h1>The <span>Philosophy</span></h1>
                </motion.div>
            </section>

            <section style={{ padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
                        {philosophies.map((p, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card"
                                style={{ padding: '60px 40px', textAlign: 'center' }}
                            >
                                <div style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '30px' }}>{p.icon}</div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '2' }}>{p.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Philosophy;
