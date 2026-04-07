import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../data/galleryData';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = ({ initialFilter = 'all' }) => {
    const [filter, setFilter] = useState(initialFilter);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = ['all', 'wildlife', 'wedding', 'portrait', 'nature', 'commercial', 'event'];

    const filteredImages = filter === 'all' 
        ? Object.values(galleryData).flat() 
        : galleryData[filter] || [];

    const openLightbox = (img, index) => {
        setSelectedImage(img);
        setCurrentIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const navigate = (dir) => {
        let next = currentIndex + dir;
        if (next < 0) next = filteredImages.length - 1;
        if (next >= filteredImages.length) next = 0;
        setSelectedImage(filteredImages[next]);
        setCurrentIndex(next);
    };

    return (
        <section className="portfolio-container" style={{ paddingTop: '50px' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="filter-controls">
                    {categories.map(cat => (
                        <button 
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`} 
                            onClick={() => setFilter(cat)}
                        >
                            {cat === 'all' ? 'All Excellence' : cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="gallery-grid">
                    <AnimatePresence>
                        {filteredImages.map((img, idx) => (
                            <motion.div 
                                key={img.url + idx}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="gallery-item"
                                onClick={() => openLightbox(img, idx)}
                            >
                                <img src={img.url} alt={img.title} loading="lazy" />
                                <div className="gallery-overlay">
                                    <div className="item-info">
                                        <span>{img.category}</span>
                                        <h4>{img.title}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox"
                        style={{ display: 'flex' }}
                        onClick={closeLightbox}
                    >
                        <div className="lightbox-close" onClick={closeLightbox}><X size={40} /></div>
                        
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedImage.url} alt={selectedImage.title} className="lightbox-img" />
                            
                            <div className="lightbox-nav">
                                <div className="lightbox-arrow" onClick={() => navigate(-1)}><ChevronLeft size={60} /></div>
                                <div className="lightbox-arrow" onClick={() => navigate(1)}><ChevronRight size={60} /></div>
                            </div>
                            
                            <div className="lightbox-info">
                                <h3 id="lightbox-title">{selectedImage.title}</h3>
                                <p style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>
                                    {selectedImage.category}
                                </p>
                                <Link to={`/portfolio-details?cat=${selectedImage.category.toLowerCase()}&idx=${currentIndex}`} className="btn btn-outline" style={{ marginTop: '20px', fontSize: '0.7rem', padding: '10px 20px' }}>
                                    Story Behind Image
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
