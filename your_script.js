let points = [];

function addPoint() {
    const x = parseFloat(document.getElementById('x-coordinate').value);
    const y = parseFloat(document.getElementById('y-coordinate').value);

    if (!isNaN(x) && !isNaN(y)) {
        points.push({ x, y });
        visualizeRecoil();
        clearInputFields();
    }
}

function visualizeRecoil() {
    const visualizationDiv = document.getElementById('visualization');
    visualizationDiv.innerHTML = "";

    points.forEach((point, index) => {
        const pointDiv = document.createElement('div');
        pointDiv.className = 'point';
        pointDiv.textContent = `${index + 1}`;
        pointDiv.style.position = 'absolute';
        pointDiv.style.left = `${point.x}px`;
        pointDiv.style.top = `${point.y}px`;

        pointDiv.onclick = () => editPoint(index);

        visualizationDiv.appendChild(pointDiv);
    });
}

function editPoint(index) {
    const newX = parseFloat(prompt('Enter new X coordinate:'));
    const newY = parseFloat(prompt('Enter new Y coordinate:'));

    if (!isNaN(newX) && !isNaN(newY)) {
        points[index] = { x: newX, y: newY };
        visualizeRecoil();
    }
}

function clearInputFields() {
    document.getElementById('x-coordinate').value = "";
    document.getElementById('y-coordinate').value = "";
}
