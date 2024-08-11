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