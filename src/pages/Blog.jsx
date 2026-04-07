import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
    const posts = [
        { 
            img: "/images/hero.png", 
            cat: "Photography Tips", 
            title: "Capturing Magic in Golden Hour", 
            desc: "The 'Golden Hour' is the short period during sunrise or sunset when the sun is at a specific angle and creates a warm, diffuse light. Mastering this requires more than just being there at the right time. You need to understand how to use backlighting to create ethereal silhouettes and how to expose correctly for the sky's dynamic range while keeping your subject's skin tones vibrant and honest. The result is consistently timeless and dreamlike." 
        },
        { 
            img: "/images/wildlife_1.png", 
            cat: "Behind the Scenes", 
            title: "Inside a High-End Safari", 
            desc: "A wildlife shoot is as much about patience as it is about reflexes. We spent twelve days in the Serengeti tracking a single leopard pride to capture a signature interaction. From managing extreme dust in sensitive camera sensors to working with silent, electric-powered camera vehicles, the process is a grueling but rewarding dance with the elements. We prioritize animal welfare and ecological respect over reaching the 'perfect' shot." 
        },
        { 
            img: "/images/nature.png", 
            cat: "Nature Insights", 
            title: "The Silent Alps and Their Voices", 
            desc: "Landscapes are not static; they are in a state of constant, slow-motion vibration. In the high-altitude Alps, the weather can shift from a calm sun to a violent, snow-laden wind in under ten minutes. Capturing this transition requires a deep understanding of geological scale and the ability to manipulate long exposures to give the clouds a sense of weight and cinematic motion." 
        },
        { 
            img: "/images/portrait_3.png", 
            cat: "Studio Art", 
            title: "The Anatomy of a Portrait", 
            desc: "In our studio sessions, we work closely with the subject to break down the barriers between the lens and the person. Lighting is our brush, and we use a mix of softbox modifiers and direct strobe work to create a sculptural effect on the face. Every shadow is intentional, every highlight is earned. A true portrait is a collaboration that uncovers something the subject didn't know about themselves." 
        },
        { 
            img: "/images/commercial.png", 
            cat: "Industry Focus", 
            title: "Luxury Branding in Architecture", 
            desc: "Commercial architecture photography is more than documenting a building. It's about capturing the intention of the architect and the lifestyle of the intended inhabitant. We use tilt-shift lenses and precise time-blending techniques to ensure vertical lines remain absolute and light hits every texture of the facade exactly as the original vision intended, creating a premium marketing asset." 
        },
        { 
            img: "/images/wedding_2.png", 
            cat: "Celebration", 
            title: "Documenting Eternal Vows", 
            desc: "A wedding is a high-stakes, fast-moving environment where there are no second takes. Our approach is to blend journalistic honesty with editorial elegance. We focus on the 'moments between moments'—the quiet glance from a parent, the deep exhale before the walk down the aisle—because these are the raw, unscripted truths that will bear the most weight in the decades to come." 
        }
    ];

    return (
        <main>
            <section className="page-header" style={{ backgroundImage: "url('/images/hero.png')" }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="page-header-content">
                    <p>Insights & Experience</p>
                    <h1>Photography <span>Journal</span></h1>
                </motion.div>
            </section>

            <section style={{ padding: 'var(--section-padding)' }}>
                <div className="container">
                    <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '50px' }}>
                        {posts.map((post, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', overflow: 'hidden', borderRadius: '8px' }}
                            >
                                <img src={post.img} alt={post.title} style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                                <div style={{ padding: '40px' }}>
                                    <span style={{ color: 'var(--accent-color)', fontSize: '0.7rem', letterSpacing: '4px', textTransform: 'uppercase' }}>{post.cat}</span>
                                    <h3 style={{ margin: '20px 0', fontSize: '1.8rem' }}>{post.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.9' }}>{post.desc}</p>
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
