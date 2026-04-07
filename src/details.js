import './style.css'
import galleryData from './gallery-data.json'

document.addEventListener('DOMContentLoaded', () => {
    const detailImg = document.getElementById('detail-img');
    const detailTitle = document.getElementById('detail-title');
    const detailCategory = document.getElementById('detail-category');
    const detailStory = document.getElementById('detail-story');

    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get('cat') || 'wildlife';
    let idx = parseInt(urlParams.get('idx') || '0');

    const updateContent = (category, index) => {
        if (!galleryData[category] || !galleryData[category][index]) return;
        const item = galleryData[category][index];
        
        detailImg.src = item.url;
        detailTitle.textContent = item.title;
        detailCategory.textContent = item.category;
        
        const stories = [
            "Capturing this moment required patience, light, and a connection between the lens and the subject. Every detail tells a unique journey.",
            "Witnessing the interplay of shadow and highlights in this frame, we aimed to emphasize the emotional resonance of the scene.",
            "A rare perspective from our latest expedition. The textures and deep tones create a narrative that speaks to the soul.",
            "Technical mastery meets intuitive timing. This shot represents our commitment to excellence and authentic storytelling."
        ];
        
        detailStory.textContent = stories[index % stories.length];
        
        // Update URL
        const newUrl = `${window.location.pathname}?cat=${category}&idx=${index}`;
        window.history.pushState({path: newUrl}, '', newUrl);
    };

    window.navigateDetail = (direction) => {
        const categoryData = galleryData[cat];
        idx += direction;
        if (idx < 0) idx = categoryData.length - 1;
        if (idx >= categoryData.length) idx = 0;
        updateContent(cat, idx);
    };

    updateContent(cat, idx);
});
