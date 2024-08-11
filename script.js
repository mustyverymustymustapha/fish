const fishTank = document.getElementById('fish-tank');
const sunMoon = document.getElementById('sun-moon');
let isDay = true;

const fishSpecies = ['goldfish', 'clownfish', 'angelfish'];
const numFishPerSpecies = 3;

class Fish {
    constructor(species) {
        this.element = document.createElement('div');
        this.element.className = `fish ${species}`;
        this.element.style.left = `${Math.random() * 560}px`;
        this.element.style.top = `${Math.random() * 360}px`;
        fishTank.appendChild(this.element);
        
        this.speed = Math.random() * 2 + 1;
        this.direction = Math.random() * 2 * Math.PI;
    }

    move() {
        let newX = parseFloat(this.element.style.left) + Math.cos(this.direction) * this.speed;
        let newY = parseFloat(this.element.style.top) + Math.sin(this.direction) * this.speed;

        if (newX < 0 || newX > 560 || newY < 0 || newY > 360) {
            this.direction = Math.random() * 2 * Math.PI;
            newX = Math.max(0, Math.min(560, newX));
            newY = Math.max(0, Math.min(360, newY));
        }

        this.element.style.left = `${newX}px`;
        this.element.style.top = `${newY}px`;

        if (Math.cos(this.direction) < 0) {
            this.element.style.transform = 'scaleX(-1)';
        } else {
            this.element.style.transform = 'scaleX(1)';
        }
    }
}

function toggleDayNight() {
    isDay = !isDay;
    if (isDay) {
        fishTank.style.backgroundColor = '#00bfff';
        sunMoon.style.backgroundColor = '#FFD700';
        sunMoon.style.boxShadow = '0 0 20px #FFD700';
    } else {
        fishTank.style.backgroundColor = '#000080';
        sunMoon.style.backgroundColor = '#F4F4F4';
        sunMoon.style.boxShadow = '0 0 20px #F4F4F4';
    }
}

let allFish = [];
fishSpecies.forEach(species => {
    for (let i = 0; i < numFishPerSpecies; i++) {
        allFish.push(new Fish(species));
    }
});

setInterval(() => {
    allFish.forEach(fish => fish.move());
}, 50);

sunMoon.style.backgroundColor = '#FFD700';
sunMoon.style.boxShadow = '0 0 20px #FFD700';

setInterval(toggleDayNight, 10000);