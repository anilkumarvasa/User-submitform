// Function to create a flower and animate it
function createFlower() {
    const flower = document.createElement("img");
    flower.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf5yuwcqCbxN_LcGDUqTTYk8jAbJ0-69oCg&s"; // Flower emoji URL
    flower.classList.add("flower");
    
    // Random position and animation duration
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = Math.random() * 3 + 2 + "s"; 

    document.body.appendChild(flower);

    // Remove flower after falling
    setTimeout(() => {
        flower.remove();
    }, 5000);
}

// Generate flowers every 500ms
setInterval(createFlower, 300);
