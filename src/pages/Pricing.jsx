import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const Pricing = () => {
    const plans = [
        { 
            name: "Basic", 
            price: "£495", 
            tag: "Essential", 
            feats: ["2-Hour Session", "20 Retouched Images", "Online Gallery"], 
            not: ["Physical Print Box", "Same-Day Teaser"], 
            premium: false 
        },
        { 
            name: "Premium", 
            price: "£1,250", 
            tag: "Professional choice", 
            feats: ["5-Hour Session", "50 Retouched Images", "Online Gallery", "10 Physical Prints", "Same-Day Teaser"], 
            not: [], 
            premium: true 
        },
        { 
            name: "Luxury", 
            price: "£3,500", 
            tag: "Ultimate luxury", 
            feats: ["Full-Day (12H) Coverage", "All High-Res Images", "Lifetime Online Gallery", "Leather Bound Album", "Second Photographer"], 
            not: [], 
            premium: false 
        },
        { 
            name: "Majestic", 
            price: "£10,000", 
            tag: "World Class Experience", 
            feats: ["3-Day Global Coverage", "Exclusive Art Book", " Travel", "Bespoke Portfolio", "Personal Camera"], 
            not: [], 
            premium: true 
        }
    ];

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('/images/hero.png')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Investment in Art</p>
                    <h1>Our <span>Packages</span></h1>
                </motion.div>
            </section>

            <section style={{ padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div className="pricing-grid">
                        {plans.map((p, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`pricing-card ${p.premium ? 'premium' : ''}`}
                            >
                                <span style={{ color: p.premium ? 'var(--accent-color)' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem', fontWeight: '700' }}>{p.tag}</span>
                                <h3>{p.name}</h3>
                                <div className="price">{p.price}</div>
                                <ul>
                                    {p.feats.map((f, i) => <li key={i}><Check size={16} style={{ marginRight: '15px', color: 'var(--accent-color)' }} /> {f}</li>)}
                                    {p.not.map((f, i) => <li key={i}><X size={16} style={{ marginRight: '15px', color: 'var(--text-muted)' }} /> {f}</li>)}
                                </ul>
                                <Link to="/contact" className={`btn ${p.premium ? 'btn-primary' : 'btn-outline'}`} style={{ marginTop: '30px', width: '100%', textAlign: 'center' }}>
                                    BOOK NOW
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Pricing;
