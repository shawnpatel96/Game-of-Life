//Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
// These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const size = 800;
const scale = 8;
const resolution = size / scale;
const speed = 50    
let cells;

setup();
randomCells()
drawCells();
step()
setInterval(step, speed)
console.log(getNeighborCount(resolution-1,resolution-1))
// Setup of Canvas/Pixel Sizes
function setup(){
    canvas.width= size;
    canvas.height=size;
    context.scale(scale,scale);
    context.fillstyle="black";
    cells = createCells();
}
function createCells(){
    //Generations
    let arr= new Array(resolution);
    for(let x =0; x < resolution; x++){
        let cols = new Array(resolution);
        for (let y=0; y< resolution; y++){
            //Initialize as False
            cols[y] = false;
        }
        arr[x] = cols;
    }
    return arr
};
function randomCells(){
    // Keep track of Cell State (alive or dead) 
    for (let y=0; y < resolution; y++){
        for (let x=0; x < resolution; x++){
            if(Math.random() < 0.5) cells[x][y] = true
        
        }
    }
}

function drawCells(){
    context.fillStyle='white';
    context.fillRect(0,0, resolution, resolution);
    context.fillStyle="black";
    //Loop Through All Arrays
    for(let y=0; y < resolution; y++){
        for(let x=0; x < resolution; x++){
            if (cells[x][y]) context.fillRect(x, y , 1, 1)
        }
    }
}

function step(){
    //Create new Empty Array
    let newCells = createCells();
    for(let y = 0; y < resolution; y++){
        for(let x = 0; x < resolution; x++){
        const neighbors = getNeighborCount(x,y);
            if(cells[x][y] && neighbors < 2) newCells[x][y];
            // If amount of neighbors is less/greater than or equal to 2/3, live on to the next generation of arrays
            if(cells[x][y] && neighbors >= 2 && neighbors <=3) newCells[x][y]= true;
            // If dead cell has exactly 3 neighbors, newcells=true
            else if(!cells[x][y] && neighbors ===3) newCells[x][y]= true;
        
        }
    }
    cells = newCells;
    drawCells();

}

function getNeighborCount(x, y) {
    let count = 0;
      //Check Cell Status in 3 by 3 grid around each Cell
    for (let yy = -1; yy < 2; yy++) {
      for (let xx = -1; xx < 2; xx++) {
        if (xx === 0 && yy === 0) continue;
        if (x + xx < 0 || x + xx > resolution - 1) continue;
        if (y + yy < 0 || y + yy > resolution - 1) continue;
        if (cells[x + xx][y + yy]) count++;
      }
    }
    return count;
  }