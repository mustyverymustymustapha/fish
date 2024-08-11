const fishTank = document.getElementById('fish-tank');
const numFish = 5;

function createFish() {
    const fish = document.createElement('div');
    fish.className = 'fish';
    fish.style.left = `${Math.random() * 560}px`;
    fish.style.top = `${Math.random() * 360}px`;
    fish.style.backgroundColor = getRandomColor();
    fishTank.appendChild(fish);
    return fish;
}

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function moveFish(fish) {
    const newX = Math.random() * 560;
    const newY = Math.random() * 360;
    fish.style.left = `${newX}px`;
    fish.style.top = `${newY}px`;
}

function changeColor(fish) {
    fish.style.backgroundColor = getRandomColor();
}

for (let i = 0; i < numFish; i++) {
    const fish = createFish();
    setInterval(() => moveFish(fish), Math.random() * 2000 + 1000);
    setInterval(() => changeColor(fish), Math.random() * 3000 + 2000);
}