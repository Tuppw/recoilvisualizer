let points = [];

document.getElementById('visualization-container').addEventListener('click', function(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    points.push({ x, y });
    visualizeRecoil();
});

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

function pointsToDictionary() {
    const dictionary = {};
    points.forEach((point, index) => {
        dictionary[`point${index + 1}`] = { x: point.x, y: point.y };
    });

    alert(JSON.stringify(dictionary, null, 2));
}
