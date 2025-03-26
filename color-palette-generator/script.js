const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generateBtn');

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generatePalette() {
    palette.innerHTML = ''; // Clear previous palette
    for (let i = 0; i < 6; i++) {
        const color = generateRandomColor();
        const col = document.createElement('div');
        col.classList.add('col-md-2');
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color;
        colorBox.textContent = color;
        colorBox.addEventListener('click', () => {
            navigator.clipboard.writeText(color);
            alert(`Color code ${color} copied to clipboard!`);
        });
        col.appendChild(colorBox);
        palette.appendChild(col);
    }
}

generateBtn.addEventListener('click', generatePalette);

generatePalette(); // Generate initial palette