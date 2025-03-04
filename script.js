const container = document.querySelector('.container')
// Create function  for grid divs cretion in container
function createGrid(rows) {
    for(let i = 0; i < rows * rows; i++) {
       const gridDiv = document.createElement('div')
        gridDiv.classList.add('grid-div');
        container.appendChild(gridDiv)
        gridDiv.style.width = `${container.clientWidth  / rows }px `;
        gridDiv.style.height = `${container.clientHeight / rows }px`;
        gridDiv.addEventListener('mouseover', () => {
            gridDiv.style.backgroundColor  = 'black';
        })   
    }
}
// Create function for random colors
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
// Create function for button prompt when user click button to choose how many grids want
function buttonPrompt(){
    const promptButton = document.querySelector('.change-size')
    let choice = '';
    promptButton.addEventListener('click', () => {
            choice =  prompt('How many grid you want from 0 to 100?')
            if(isNaN(choice)||choice > 100 || choice < 0) {
                choice = prompt('Not available choose from 0 to  100?')
                return
            } 
            console.log(choice)
            container.innerHTML = '';
            createGrid(choice)
    })
    
}
// Create event listener for random colors on divs 
const colorButton = document.querySelector('.random-color');
colorButton.addEventListener('click', () => {
    const allGridDivs = document.querySelectorAll('.grid-div')
    allGridDivs.forEach(gridDiv => {
        gridDiv.addEventListener('mouseover',() => {
            gridDiv.style.backgroundColor = getRandomColor()
        })

    })
    }
)



createGrid(16)
buttonPrompt()
