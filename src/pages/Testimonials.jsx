import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        { 
            name: "Victoria Kensington", 
            role: "London Wedding", 
            img: "https://picsum.photos/seed/client_1/60/60", 
            text: "MS TVK LTD captured our wedding day with such grace and artistry. Every photo feels like a work of art." 
        },
        { 
            name: "David Thorne", 
            role: "Watch & Co. CEO", 
            img: "https://picsum.photos/seed/client_2/60/60", 
            text: "The commercial session for our luxury watch brand was perfectly executed. The technical mastery is unmatched." 
        },
        { 
            name: "Elena Moretti", 
            role: "Private Client", 
            img: "https://picsum.photos/seed/client_3/60/60", 
            text: "From start to finish, the team at MS TVK LTD provided a premium service. The final gallery surpassed our expectations." 
        }
    ];

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('https://picsum.photos/seed/testimonials_hero/1920/1080')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Client Feedback</p>
                    <h1>Kind <span>Words</span></h1>
                </motion.div>
            </section>

            <section style={{ padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {reviews.map((r, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card"
                            >
                                <div style={{ display: 'flex', color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '20px' }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-color)" />)}
                                </div>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontStyle: 'italic' }}>"{r.text}"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <img src={r.img} alt={r.name} style={{ borderRadius: '50%' }} />
                                    <div>
                                        <h4 style={{ color: 'var(--text-main)' }}>{r.name}</h4>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>{r.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Testimonials;
