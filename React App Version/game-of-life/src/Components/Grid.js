import React from 'react';


class Box extends React.Component{
    selectBox = () => {
      this.props.selectBox(this.props.row, this.props.col);
    }
    render(){
      return(
        <div className={this.props.boxClass}
        id={this.props.id}
        onClick={this.selectBox}
       />
      );
    }
  }
  
class Grid extends React.Component{
    render(){
      let rowsArr = [];
      let boxClass = "";
      for(let x = 0; x<this.props.rows; x++){
        for(let y = 0; y<this.props.columns; y++){
          boxClass = this.props.grid[x][y] ? 'box on' : 'box off';
          rowsArr.push(
            <Box
              boxClass={boxClass}
              key={x+y}
              boxId={x+y}
              row={x}
              col={y}
              selectBox={this.props.selectBox}/>
          )
        }
      }
      
      return (
        <div className='grid' style={{width: this.props.columns * 16}}>
          {rowsArr}
        </div>
      )
    }
  }

export default Grid