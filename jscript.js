
const MAXSIZE = 100;
const DEFAULTSIZE = 16;

const canvasContainer = document.querySelector('.canvas');

function createGrid(size){

    let gridRow;
    let rowCell;

    for(let i=0; i < size; i++){
        gridRow = document.createElement("div");
        gridRow.classList.add("row");
        //gridRow.style.border = "1px solid green";
        for(let j=0; j < size; j++){
            rowCell = document.createElement("div");
            rowCell.classList.add("cell");
            rowCell.addEventListener("mouseover",
                (theEvent) => {
                    theEvent.target.style.background = "black";
                }
            );
            gridRow.appendChild(rowCell);
        }
        canvasContainer.appendChild(gridRow);
    }
}

let gridSize = DEFAULTSIZE; //prompt("Please enter grid size:");
createGrid(gridSize);

const gridSizBtn = document.querySelector("#gridSizButton");
gridSizBtn.addEventListener("click",
    () => {
        let newGridSize = prompt("Enter size of grid)");
        if(Number.isInteger(parseInt(newGridSize)) && newGridSize > 0){
            if(newGridSize > MAXSIZE){
                alert("Only max size of 100 is allowed");
                gridSize = MAXSIZE;
            } else {
            gridSize = newGridSize;
            canvasContainer.replaceChildren();
            createGrid(gridSize);
            }
        } else if(newGridSize==null){
            alert("No new size set");
        } else {
            alert("Invalid size");
        } 
    }
)