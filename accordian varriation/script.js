function moveText() {
    const container = document.querySelector('.container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    container.innerHTML = '';

    const numElements = 50;

    for (let i = 0; i < numElements; i++) {
        const textElement = document.createElement('div');
        textElement.textContent = '龍';
        textElement.classList.add('moving-text');


        const angle = (i / numElements) * Math.PI * 2;
        const radius = Math.min(containerWidth, containerHeight) * 0.4;
        const spread = 1.5;
        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;
        const x = centerX + Math.cos(angle) * radius * spread;
        const y = centerY + Math.sin(angle) * radius * spread;

        textElement.style.left = x + 'px';
        textElement.style.top = y + 'px';

        
        const randomFontSize = Math.floor(Math.random() * 90) + 10;
        textElement.style.fontSize = randomFontSize + 'px';

        
        container.appendChild(textElement);
    }
}

window.onload = function () {
    moveText();
    window.addEventListener('resize', moveText);
};



