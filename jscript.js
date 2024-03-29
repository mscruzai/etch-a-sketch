
const MAXSIZE = 100;
const DEFAULTSIZE = 16;

let sketchMode = 'black';

const canvasContainer = document.querySelector('.canvas');

const grayColorVal = 220;
let darkenAmount = Math.ceil(grayColorVal / 10);

function createGrid(size){

    let gridRow;
    let rowCell;

    for(let i=0; i < size; i++){
        gridRow = document.createElement("div");
        gridRow.classList.add("row");
        for(let j=0; j < size; j++){
            rowCell = document.createElement("div");
            rowCell.classList.add("cell");
            rowCell.addEventListener("mouseover",
                (theEvent) => {
                    if(sketchMode == 'black') {
                        theEvent.target.style.background = 'black';
                    } else if(sketchMode == 'randomRGB'){
                        theEvent.target.style.background = rndRGB();
                    } else if(sketchMode == 'grayscale') {
                        //const computedStyle = getComputedStyle(theEvent.target);
                        gridColor = theEvent.target.style['background-color'];
                        if(!gridColor){ //not colored yet
                            theEvent.target.style.background = `rgb(${grayColorVal}, ${grayColorVal}, ${grayColorVal})`;
                        } else {
                            const [r, g, b] = gridColor.match(/\d+/g);
                            const newR = r - darkenAmount;
                            const newG = g - darkenAmount;
                            const newB = b - darkenAmount;
                            theEvent.target.style.background = `rgb(${newR}, ${newG},${newB})`;
                        }
                        
                    } else {
                        alert('Invalid sketch mode!');
                    }  
                }
            );
            gridRow.appendChild(rowCell);
        }
        canvasContainer.appendChild(gridRow);
    }
}

let gridSize = DEFAULTSIZE; //prompt("Please enter grid size:");
createGrid(gridSize);

const gridSizBtn = document.querySelector("#grid-size-button");
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
);

const rndRGB = () => {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    return `rgb(${[r,g,b].join(',')})`;
};

const resetBtn = document.querySelector("#reset-button");
resetBtn.addEventListener('click' ,
    () => {
        canvasContainer.replaceChildren();
        createGrid(gridSize);
    }
);

const rgbBtn = document.querySelector("#rgb-button");
rgbBtn.addEventListener('click' ,
    () => {
        sketchMode = 'randomRGB';
    }
);

const blkBtn = document.querySelector("#black-button");
blkBtn.addEventListener('click' ,
    () => {
        sketchMode = 'black';
    }
);

const grayBtn = document.querySelector("#grayscale-button");
grayBtn.addEventListener('click' ,
    () => {
        sketchMode = 'grayscale';
    }
);

