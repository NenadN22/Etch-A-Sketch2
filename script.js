const container = document.querySelector('.container')
// Create function 
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
function buttonPrompt(){
    const promptButton = document.querySelector('button')
    let choice = '';
    promptButton.addEventListener('click', () => {
            choice =  prompt('How many grid you want from 0 to 100?')
            if(choice > 100) {
                choice = prompt('Not available choose from 0 to  100?')
            } 
            console.log(choice)
            container.innerHTML = '';
            createGrid(choice)
    })
    
}


createGrid(16)
buttonPrompt()
