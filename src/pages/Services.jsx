import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlassWater, Camera, Briefcase, PawPrint, Heart, User, Mountain } from 'lucide-react';

const Services = () => {
    const services = [
        { icon: <GlassWater size={40} />, title: "Event Photography", desc: "From high-stakes corporate galas to vibrant private celebrations, we capture the rhythm, the people, and the pulse of your most significant events." },
        { icon: <Heart size={40} />, title: "Wedding Photography", desc: "Documenting the raw emotion and timeless elegance of your special day. We specialize in luxury ceremonies that deserve to be remembered forever." },
        { icon: <PawPrint size={40} />, title: "Wildlife Photography", desc: "Go into the wild with us. Our award-winning approach captures majestic creatures in their natural habitats with unparalleled detail and respect." },
        { icon: <Briefcase size={40} />, title: "Commercial Photography", desc: "Elevate your brand with high-fidelity product, lifestyle, and architectural imagery that commands attention and drives deep consumer engagement." },
        { icon: <User size={40} />, title: "Studio Portraiture", desc: "In our controlled lighting environment, we craft portraits that go beyond the surface, capturing the soul and identity of the subject in artistic clarity." },
        { icon: <Mountain size={40} />, title: "Adventure Photography", desc: "Taking photography to the edge. We follow the journey over mountains and across oceans to document the true spirit of human exploration and grit." }
    ];

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('/images/hero.png')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Curated Experiences</p>
                    <h1>Our <span>Expertise</span></h1>
                </motion.div>
            </section>

            <section style={{ padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                        {services.map((s, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="service-card"
                                style={{ 
                                    padding: '50px', 
                                    background: 'var(--bg-secondary)', 
                                    border: '1px solid var(--glass-border)',
                                    textAlign: 'center',
                                    borderRadius: '8px'
                                }}
                            >
                                <div className="service-icon" style={{ color: 'var(--accent-color)', marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{s.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '0.95rem' }}>{s.desc}</p>
                                <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '0.8rem' }}>Book Now</Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
