document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');

    const moveButton = () => {
        const newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    };

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('focus', moveButton); // For keyboard navigation
});
