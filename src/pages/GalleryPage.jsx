import React from 'react';
import GalleryGrid from '../components/GalleryGrid';

const GalleryPage = () => {
    return (
        <main style={{ paddingTop: 'var(--header-height)' }}>
            <section className="portfolio-container" style={{ paddingTop: '50px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '4rem', marginBottom: '50px' }}>Visual <span>Collections</span></h2>
                    <GalleryGrid />
                </div>
            </section>
        </main>
    );
};

export default GalleryPage;
