const container = document.querySelector('.container')
// Create function 
function createGrid(rows) {
    for(let i = 0; i < rows * rows; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');
        container.appendChild(gridDiv)
        gridDiv.style.width = `${container.offsetWidth / rows}px`;
        gridDiv.style.height = `${container.offsetHeight / rows}px`;
    }

}
createGrid(16)