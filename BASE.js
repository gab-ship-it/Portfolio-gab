document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    
    const isTouchDevice = () => {
        return ('ontouchstart' in window) ||
               (navigator.maxTouchPoints > 0) ||
               (navigator.msMaxTouchPoints > 0);
    };
    
    if (isTouchDevice()) {
        cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
    }
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    const experiencePhotos = [
        {
            src: "machine.jpg",
            alt: "Frontend Development Project",
            caption: "Web Development Project (2023)"
        },
        {
            src: "graphic.jpg",
            alt: "UI/UX Design Project",
            caption: "Mobile App Design (2024)"
        },
        {
            src: "client.jpg",
            alt: "Team Collaboration",
            caption: "Team Project Collaboration (2024)"
        }
    ];

    const experienceContainer = document.getElementById('experiencePhotos');
    
    experiencePhotos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'experience-item';
        
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.alt;
        img.className = 'experience-photo';
        
        const caption = document.createElement('p');
        caption.textContent = photo.caption;
        caption.className = 'photo-caption';
        
        photoDiv.appendChild(img);
        photoDiv.appendChild(caption);
        experienceContainer.appendChild(photoDiv);
    });
});