const image = document.getElementById('image');
const xSmallBtn = document.getElementById('xSmallBtn');
const smallBtn = document.getElementById('smallBtn');
const mediumBtn = document.getElementById('mediumBtn');
const largeBtn = document.getElementById('largeBtn');
const xLargeBtn = document.getElementById('xLargeBtn');

// Ajuste de anchos para cada nivel
xSmallBtn.addEventListener('click', () => {
    image.style.width = '70px';
});

smallBtn.addEventListener('click', () => {
    image.style.width = '120px';
});

mediumBtn.addEventListener('click', () => {
    image.style.width = '200px';
});

largeBtn.addEventListener('click', () => {
    image.style.width = '300px';
});

xLargeBtn.addEventListener('click', () => {
    image.style.width = '420px';
});