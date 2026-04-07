import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SitemapPage = () => {
    const sitemapData = [
        {
            title: "Main Pages",
            links: [
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Philosophy", path: "/philosophy" },
                { name: "Collections", path: "/collections" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" }
            ]
        },
        {
            title: "Client & Information",
            links: [
                { name: "Pricing & Packages", path: "/pricing" },
                { name: "Frequently Asked Questions", path: "/faq" },
                { name: "Client Testimonials", path: "/testimonials" },
                { name: "Contact & Booking", path: "/contact" },
                { name: "Success Stories (Blog)", path: "/blog" }
            ]
        },
        {
            title: "Portfolio Categories",
            links: [
                { name: "Wildlife Photography", path: "/gallery?filter=wildlife" },
                { name: "Wedding Photography", path: "/gallery?filter=wedding" },
                { name: "Portrait Photography", path: "/gallery?filter=portrait" },
                { name: "Commercial Shoots", path: "/gallery?filter=commercial" }
            ]
        }
    ];

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('https://picsum.photos/seed/sitemap_hero/1920/1080')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Navigation Guide</p>
                    <h1>Site <span>Map</span></h1>
                </motion.div>
            </section>

            <section style={{ padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px' }}>
                        {sitemapData.map((section, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <h3 style={{ color: 'var(--accent-color)', marginBottom: '30px', fontSize: '1.5rem', borderLeft: '3px solid var(--accent-color)', paddingLeft: '20px' }}>{section.title}</h3>
                                <ul style={{ listStyle: 'none' }}>
                                    {section.links.map((link, i) => (
                                        <li key={i} style={{ marginBottom: '15px' }}>
                                            <Link to={link.path} style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: '0.3s' }}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SitemapPage;
