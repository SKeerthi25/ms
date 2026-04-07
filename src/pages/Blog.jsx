import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        { 
            img: "https://picsum.photos/seed/blog_1/500/300", 
            cat: "Photography Tips", 
            title: "Capturing Magic in Golden Hour", 
            desc: "Mastering the soft light of the setting sun to create ethereal and timeless portraits." 
        },
        { 
            img: "https://picsum.photos/seed/blog_2/500/300", 
            cat: "Behind the Scenes", 
            title: "Inside a High-End Safari", 
            desc: "A look into the technical and creative process of capturing wildlife in its most candid moments." 
        },
        { 
            img: "https://picsum.photos/seed/blog_3/500/300", 
            cat: "Industry Insights", 
            title: "The Future of Digital Art", 
            desc: "How AI and advanced tech are reshaping the landscape of professional architectural photography." 
        }
    ];

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('https://picsum.photos/seed/blog_hero/1920/1080')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Insights & Tips</p>
                    <h1>Our <span>Journal</span></h1>
                </motion.div>
            </section>

            <section style={{ padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div className="blog-grid">
                        {posts.map((post, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="blog-card"
                            >
                                <img src={post.img} alt={post.title} />
                                <div className="blog-card-content">
                                    <span className="blog-category">{post.cat}</span>
                                    <h3 style={{ margin: '15px 0' }}>{post.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>{post.desc}</p>
                                    <Link to="#" style={{ color: 'var(--accent-color)', fontWeight: '600', textDecoration: 'none' }}>Read More →</Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
