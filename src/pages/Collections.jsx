import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Collections = () => {
    const banners = [
        { 
            title: "Royal Wedding Collection", 
            cat: "wedding", 
            img: "/images/wedding.png", 
            desc: "Immerse yourself in moments of pure elegance. Our curated selection of high-end ceremonies from the most stunning venues across the globe.", 
            series: "SERIES 01",
            align: 'left'
        },
        { 
            title: "Wild Savanna Expedition", 
            cat: "wildlife", 
            img: "/images/wildlife_1.png", 
            desc: "Witness the raw power and silent majesty of nature's apex predators, captured across the sprawling plains of Africa and the dense jungles of Asia.", 
            series: "SERIES 02",
            align: 'right'
        },
        { 
            title: "The Portrait Series", 
            cat: "portrait", 
            img: "/images/portrait_3.png", 
            desc: "A deep exploration of the human gaze. We work to uncover the honest identity and character that exists beyond the surface levels of each face.", 
            series: "SERIES 03",
            align: 'left'
        },
        { 
            title: "Commercial Pulse", 
            cat: "commercial", 
            img: "/images/commercial.png", 
            desc: "Precision and impact. Our commercial selection is designed to elevate luxury brands through technical mastery in facade and product photography.", 
            series: "SERIES 04",
            align: 'right'
        },
        { 
            title: "Silent Alpine Echoes", 
            cat: "nature", 
            img: "/images/nature_2.png", 
            desc: "Experience the quietude and vast scale of our planet's high-altitude environments, where every sunset tells a new story of geological time.", 
            series: "SERIES 05",
            align: 'left'
        }
    ];

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('/images/hero.png')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Exclusive Series</p>
                    <h1>Our <span>Masterpieces</span></h1>
                </motion.div>
            </section>

            {banners.map((b, idx) => (
                <section 
                    key={idx}
                    className="collection-banner" 
                    style={{ 
                        backgroundImage: `url(${b.img})`, 
                        padding: '180px 8%', 
                        position: 'relative', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        backgroundAttachment: 'fixed',
                        minHeight: '80vh',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <div style={{ position: 'absolute', inset: 0, background: b.align === 'left' ? 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 70%)' : 'linear-gradient(to left, rgba(0,0,0,0.3) 0%, transparent 70%)' }}></div>
                    <motion.div 
                        initial={{ opacity: 0, x: b.align === 'left' ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="container" 
                        style={{ position: 'relative', zIndex: 1, textAlign: b.align }}
                    >
                        <span style={{ color: 'var(--accent-color)', letterSpacing: '8px', fontSize: '0.8rem', fontWeight: '600' }}>{b.series}</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: '15px 0 25px', color: '#fff', textShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>{b.title}</h2>
                        <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: '#f0f0f0', marginBottom: '40px', marginLeft: b.align === 'right' ? 'auto' : '0', lineHeight: '1.7' }}>{b.desc}</p>
                        <Link to={`/gallery?filter=${b.cat}`} className="btn btn-primary" style={{ padding: '15px 40px' }}>Enter Collection</Link>
                    </motion.div>
                </section>
            ))}
        </main>
    );
};

export default Collections;
