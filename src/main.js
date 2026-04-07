import './style.css'
import galleryData from './gallery-data.json'

document.addEventListener('DOMContentLoaded', () => {
    /* -----------------------------------------
       1. Advanced Scroll Reveal
       ----------------------------------------- */
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    const initReveal = () => {
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => revealObserver.observe(el));
    };
    initReveal();

    /* -----------------------------------------
       2. Sticky Header & Menu Toggle
       ----------------------------------------- */
    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars-staggered');
            icon.classList.toggle('fa-xmark');
        });
    }

    /* -----------------------------------------
       3. Dynamic Gallery Loading (20 per category)
       ----------------------------------------- */
    const galleryGrid = document.getElementById('main-gallery');
    
    const loadGallery = (filter = 'all') => {
        if (!galleryGrid) return;
        galleryGrid.innerHTML = '';
        
        const categories = filter === 'all' ? Object.keys(galleryData) : [filter];
        
        categories.forEach(cat => {
            if (!galleryData[cat]) return;
            galleryData[cat].forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'gallery-item reveal';
                itemDiv.setAttribute('data-category', cat);
                itemDiv.setAttribute('data-id', `${cat}_${index}`);
                itemDiv.innerHTML = `
                    <div class="skeleton" style="width:100%; aspect-ratio:3/4; border-radius:4px;">
                        <img src="${item.url}" alt="${item.title}" loading="lazy" style="opacity:0; transition: opacity 0.5s;">
                    </div>
                    <div class="gallery-overlay">
                        <div class="item-info">
                            <span>${item.category}</span>
                            <h4>${item.title}</h4>
                        </div>
                    </div>
                `;
                
                galleryGrid.appendChild(itemDiv);
                
                // Lightbox mapping
                itemDiv.addEventListener('click', () => {
                    openLightbox(item, cat, index);
                });
            });
        });
        
        // Re-init reveal for new items
        initReveal();
        
        // Handle image load
        const imgs = galleryGrid.querySelectorAll('img');
        imgs.forEach(img => {
            img.onload = () => {
                img.parentElement.classList.remove('skeleton');
                img.style.opacity = '1';
            };
        });
    };

    if (galleryGrid) {
        // Initial load
        const urlParams = new URLSearchParams(window.location.search);
        const initialFilter = urlParams.get('filter') || 'all';
        loadGallery(initialFilter);
        
        // Filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            if(btn.getAttribute('data-filter') === initialFilter) {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                loadGallery(btn.getAttribute('data-filter'));
            });
        });
    }

    /* -----------------------------------------
       4. Lightbox Logic (Modified for Dynamic)
       ----------------------------------------- */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCategory = document.getElementById('lightbox-category');
    const detailsBtn = document.getElementById('view-details-btn');
    const closeBtn = document.getElementById('close-lightbox');

    const openLightbox = (item, cat, index) => {
        if (!lightbox) return;
        lightboxImg.src = item.url;
        lightboxTitle.textContent = item.title;
        lightboxCategory.textContent = item.category;
        if (detailsBtn) detailsBtn.href = `/portfolio-details.html?cat=${cat}&idx=${index}`;
        
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    /* -----------------------------------------
       5. Before/After Slider Logic (Home Page Only)
       ----------------------------------------- */
    const sliderContainer = document.getElementById('ba-slider');
    const handle = document.getElementById('ba-handle');
    const beforeImg = document.getElementById('ba-before-img');

    if (sliderContainer && handle && beforeImg) {
        const moveSlider = (e) => {
            const rect = sliderContainer.getBoundingClientRect();
            let pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
            let x = pageX - rect.left - window.scrollX;
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;
            const percentage = (x / rect.width) * 100;
            handle.style.left = `${percentage}%`;
            beforeImg.style.width = `${percentage}%`;
        };
        sliderContainer.addEventListener('mousemove', moveSlider);
        sliderContainer.addEventListener('touchmove', moveSlider);
    }
});
