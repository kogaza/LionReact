import React from 'react';
import ReactDOM from 'react-dom';

class WaitingRoomGreen extends React.Component{
  
  clickMiniPawn = (pawn) => {
    if (pawn) {
        // console.log('clicked ' + pawn.cellNumber);
        if(1){
          console.log("kliku kliku");
          this.props.clickMiniPawn(pawn);
        }
        else if(pawn.available === true){
          this.props.moveHere(pawn.cellNumber);
        }
        else {
          this.props.clickPawn(pawn.cellNumber);
        }
    }
  }

  render(){
    let waitingPowns = this.props.waitingPowns;
console.log("WaitingRoom",waitingPowns);
    let board = <div className="taken taken-green">
            {waitingPowns.map( (p,i) => 
              <div key={i} className={`${p.classes.join(' ')} mini-animal`}
              onClick={() => this.clickMiniPawn(p)}/>
              

            )}

          </div>
          

    return  board;

  }
}

// WaitingRoomGreen.propTypes = {
//     moveHere: React.PropTypes.func,
//     clickPawn: React.PropTypes.func
// }

module.exports = WaitingRoomGreen;