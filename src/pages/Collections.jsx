import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Collections = () => {
    const banners = [
        { 
            title: "The Royal Wedding Collection", 
            cat: "wedding", 
            img: "/images/wedding.png", 
            desc: "Deep dive into the moments of pure elegance and eternal vows. A curated selection of high-end ceremonies.", 
            series: "SERIES 01",
            align: 'left'
        },
        { 
            title: "Wild Savanna Expeditions", 
            cat: "wildlife", 
            img: "/images/wildlife_1.png", 
            desc: "Witness the raw power of nature captured in its most majestic and vulnerable states Across Africa and Asia.", 
            series: "SERIES 02",
            align: 'right'
        },
        { 
            title: "Alpine Whispers & Echoes", 
            cat: "nature", 
            img: "/images/nature_2.png", 
            desc: "Breathtaking landscapes from the Alps to the Andes. Earth's silent conversations through light and shadow.", 
            series: "SERIES 03",
            align: 'left'
        }
    ];

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('https://picsum.photos/seed/collections_hero/1920/1080')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Featured Works</p>
                    <h1>Our <span>Masterpieces</span></h1>
                </motion.div>
            </section>

            {banners.map((b, idx) => (
                <section 
                    key={idx}
                    className="collection-banner" 
                    style={{ 
                        backgroundImage: `url(${b.img})`, 
                        padding: '200px 8%', 
                        position: 'relative', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        backgroundAttachment: 'fixed' 
                    }}
                >
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }}></div>
                    <motion.div 
                        initial={{ opacity: 0, x: b.align === 'left' ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="container" 
                        style={{ position: 'relative', zIndex: 1, textAlign: b.align }}
                    >
                        <span style={{ color: 'var(--accent-color)', letterSpacing: '5px' }}>{b.series}</span>
                        <h2 style={{ fontSize: '4rem', margin: '20px 0' }}>{b.title}</h2>
                        <p style={{ maxWidth: '600px', color: 'var(--text-main)', marginBottom: '40px', marginLeft: b.align === 'right' ? 'auto' : '0' }}>{b.desc}</p>
                        <Link to={`/gallery?filter=${b.cat}`} className="btn btn-primary">Enter Collection</Link>
                    </motion.div>
                </section>
            ))}
        </main>
    );
};

export default Collections;
