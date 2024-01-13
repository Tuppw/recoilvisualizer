let points = [];

function addPoint() {
    const newX = parseFloat(prompt('Enter X Coordinate:'));
    const newY = parseFloat(prompt('Enter Y Coordinate:'));

    if (!isNaN(newX) && !isNaN(newY)) {
        points.push({ x: newX, y: newY });
        visualizeRecoil();
    }
}

function visualizeRecoil() {
    const visualizationDiv = document.getElementById('visualization');
    visualizationDiv.innerHTML = "";

    points.forEach((point, index) => {
        const pointDiv = document.createElement('div');
        pointDiv.className = 'point';
        pointDiv.textContent = `${index + 1}`;
        pointDiv.style.left = `${point.x}px`;
        pointDiv.style.top = `${point.y}px`;

        pointDiv.onclick = () => editPoint(index);

        visualizationDiv.appendChild(pointDiv);
    });
}

function editPoint(index) {
    const newX = parseFloat(prompt('Enter new X Coordinate:'));
    const newY = parseFloat(prompt('Enter new Y Coordinate:'));

    if (!isNaN(newX) && !isNaN(newY)) {
        points[index] = { x: newX, y: newY };
        visualizeRecoil();
    }
}
