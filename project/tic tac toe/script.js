function celebrate() {
    const container = document.querySelector('.confetti-container');
    
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = getRandomColor();
      container.appendChild(confetti);
  
      setTimeout(() => confetti.remove(), 2000);
    }
  }
  
  function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  