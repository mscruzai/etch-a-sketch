
const MAXSIZE = 100;

const canvasDiv = document.querySelector('.canvas');

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
        canvasDiv.appendChild(gridRow);
    }
}

let gridSize = 16; //prompt("Please enter grid size:");
createGrid(gridSize);

function chgCellColor(color){

}
