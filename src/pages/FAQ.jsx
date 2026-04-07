import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        { q: "How do I book a session?", a: "You can book a session by visiting our Booking Page and filling out the contact form. Alternatively, you can reach out via WhatsApp or email." },
        { q: "What is the typical delivery time?", a: "Portrait sessions take 7-10 business days. Weddings and commercial shoots take 3-5 weeks, with same-day teaser images provided." },
        { q: "Do you travel internationally?", a: "Yes, we are based in London but travel globally for assignments. We have extensive experience in destination weddings." },
        { q: "Do you provide raw unedited files?", a: "We pride ourselves on providing a complete, polished product, so we generally do not provide raw files." }
    ];

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('https://picsum.photos/seed/faq_hero/1920/1080')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Your Questions</p>
                    <h1>Common <span>Queries</span></h1>
                </motion.div>
            </section>

            <section style={{ padding: 'var(--section-padding)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="accordion">
                        {questions.map((item, idx) => (
                            <div key={idx} className={`accordion-item ${activeIndex === idx ? 'active' : ''}`}>
                                <div className="accordion-header" onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}>
                                    <h4>{item.q}</h4>
                                    <ChevronDown size={20} style={{ transform: activeIndex === idx ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }} />
                                </div>
                                <AnimatePresence>
                                    {activeIndex === idx && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="accordion-content"
                                        >
                                            <p>{item.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FAQ;
