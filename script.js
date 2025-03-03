const container = document.querySelector('.container');
function createGrid (rows) {
    for(let i = 0; i < rows * rows; i++)  {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div')
        container.appendChild(gridDiv)
        gridDiv.style.width = `${container.offsetWidth / rows}px`
        gridDiv.style.height = `${container.offsetWidth / rows}px`
    }
}
createGrid(16)

console.log(container.childElementCount)