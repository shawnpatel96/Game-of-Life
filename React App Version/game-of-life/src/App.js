import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './Components/Grid'
import Buttons from './Components/Buttons'

class App extends React.Component{
    constructor(){
      super();
      this.speed = 25;
      this.rows =40;
      this.columns = 50;
  
      this.state={
        generation:0,
        //Grid Creation, An Array of Rows and an Array of Columns, set to false state to begin with
        grid: Array(this.rows).fill().map(()=> Array(this.columns).fill(false))
      }
    }
    selectBox = (row, col) =>{
      let gridCopy = arrayClone(this.state.grid);
      gridCopy[row][col] = !gridCopy[row][col];
      this.setState({
        grid: gridCopy
      })
    }
    // Buttons
    playButton = () =>{
      clearInterval(this.intervalId)
      this.intervalId = setInterval(this.play, this.speed);
    }
    pauseButton = () =>{
      clearInterval(this.intervalId)
    }
    clearButton = () =>{
      var grid = Array(this.rows).fill().map(() => Array(this.columns).fill(false));
          this.setState({
              grid: grid,
              generation: 0
          });
    }
    //Helper Functions
    fast = () =>{
      this.speed = this.speed - 100
      this.playButton()
    }
    slow = () =>{
        this.speed = this.speed + 100
        this.playButton()
      }
    play = () =>{
      let g = this.state.grid;
      let g2 = arrayClone(this.state.grid);
      // Game of Life Rules
      for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.columns; y++) {
              let count = 0;
              if (x > 0) if (g[x - 1][y]) count++;
              if (x > 0 && y > 0) if (g[x - 1][y - 1]) count++;
              if (x > 0 && y < this.columns - 1) if (g[x - 1][y + 1]) count++;
              if (y < this.columns - 1) if (g[x][y + 1]) count++;
              if (y > 0) if (g[x][y - 1]) count++;
              if (x < this.rows - 1) if (g[x + 1][y]) count++;
              if (x < this.rows - 1 && y> 0) if (g[x + 1][y - 1]) count++;
              if (x < this.rows - 1 && y < this.columns - 1) if (g[x + 1][y + 1]) count++;
              if (g[x][y] && (count < 2 || count > 3)) g2[x][y] = false;
              if (!g[x][y] && count === 3) g2[x][y] = true;
            }
      }
      this.setState({
            grid: g2,
            generation: this.state.generation += 1
          });
    }
    randomize =()=>{
      console.log("RUNNING SEED")
      let gridCopy = arrayClone(this.state.grid);
      for(let x = 0; x< this.rows; x++){
        for(let y = 0; y< this.columns; y++){
          if (Math.floor(Math.random() * 4) ===1){
            console.log('Running Math Random')
            gridCopy[x][y] = true;
          }
        }
      }
      this.setState({
        grid: gridCopy
      });
    }
    render(){
      return(
        <div className='parent-side'>
          <div className="right-side">
          <Grid 
            grid={this.state.grid} 
            rows={this.rows} 
            columns={this.columns}
            selectBox={this.props.selectBox}
          />
          <Buttons 
            playButton={this.playButton}
              pauseButton={this.pauseButton}
              slow={this.slow}
              fast={this.fast}
              clearButton={this.clearButton}
              randomize={this.randomize}
            
            />
             <h2>Generations: {this.state.generation}</h2>
            </div>
          <div className="left-side">
            
          <h1>John Conway's Game of Life(R.I.P John Conway)</h1>
          <div className='rules'>
              <h2 className="rules-header">Rules</h2>
            <ul>
                <li>Any alive cell that is touching less than two alive neighbours dies.</li>
                <li>Any alive cell touching four or more alive neighbours dies.</li>
                <li>Any alive cell touching two or three alive neighbours does nothing.</li>
                <li>Any dead cell touching exactly three alive neighbours becomes alive.</li>
            </ul>
            </div>
          </div>
          
         
        </div>
      )
    }
  }
  function arrayClone(arr){
    return JSON.parse(JSON.stringify(arr));
  }

export default App