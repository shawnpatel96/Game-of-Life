import React from 'react';
import ReactDOM from 'react-dom';

class Buttons extends React.Component{
    render() {
      return (
        <div>
          <button className=''onClick={this.props.playButton}>Play</button>
          <button className=''onClick={this.props.pauseButton}>Pause</button>
          <button className=''onClick={this.props.clearButton}>Clear</button>
          <button className=''onClick={this.props.randomize}>Randomize</button>
          <div><h3>Speed:<button className=''onClick={this.props.fast}>+</button><button className=''onClick={this.props.slow}>-</button></h3></div>
          
       
  
        </div>
      )
    }
  }

export default Buttons