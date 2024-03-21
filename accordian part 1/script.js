function moveText() {
    const container = document.querySelector('.container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const numElements = 50;
  
    for (let i = 0; i < numElements; i++) {
        const textElement = document.createElement('div');
        textElement.textContent = '龍';
        textElement.classList.add('moving-text');
      
    
        const randomLeft = Math.floor(Math.random() * containerWidth);
        const randomTop = Math.floor(Math.random() * containerHeight);
        textElement.style.left = randomLeft + 'px';
        textElement.style.top = randomTop + 'px';
  
        
        const randomFontSize = Math.floor(Math.random() * 90) + 10;
        textElement.style.fontSize = randomFontSize + 'px';
  
        
        container.appendChild(textElement);
    }
}

window.onload = moveText;



  