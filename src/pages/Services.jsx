import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlassWater, Camera, Briefcase, PawPrint } from 'lucide-react';

const Services = () => {
    const services = [
        { icon: <GlassWater size={40} />, title: "Event Photography", desc: "Capturing the energy and essence of high-end galas and intimate celebrations." },
        { icon: <Camera size={40} />, title: "Portrait Photography", desc: "Editorial and creative portraits that reveal the true character through the lens." },
        { icon: <Briefcase size={40} />, title: "Commercial Photography", desc: "High-fidelity product and lifestyle imagery designed for brands with impact." },
        { icon: <PawPrint size={40} />, title: "Wildlife Photography", desc: "Documenting the raw beauty of nature's most majestic and vulnerable moments." }
    ];

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('https://picsum.photos/seed/services_hero/1920/1080')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Curated Experiences</p>
                    <h1>Our <span>Expertise</span></h1>
                </motion.div>
            </section>

            <section style={{ padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div className="services-grid">
                        {services.map((s, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="service-card"
                            >
                                <div className="service-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <Link to="/contact" className="btn btn-outline" style={{ marginTop: '20px' }}>Book This Service</Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
