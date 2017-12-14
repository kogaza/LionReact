import React from 'react';
import ReactDOM from 'react-dom';

class WaitingRoomBlue extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     waitingRoom: []
  //   }
  // }
  
  // handleClickPawn = (pawn) => {
  //   if (pawn) {
  //       console.log('clicked ' + pawn.cellNumber);
  //       if(pawn.available === true){
  //         this.props.moveHere(pawn.cellNumber);
  //       }
  //       else {
  //         this.props.clickPawn(pawn.cellNumber);
  //       }
  //   }
  // }

  render(){
    let waitingPowns = this.props.waitingPowns;
console.log("WaitingRoom",waitingPowns);
    let board = <div className="taken taken-blue">
            {waitingPowns.map( (p,i) => 
              <div key={i} className={`${p.classes.join(' ')} mini-animal blue`}></div>

            )}

          </div>
          

    return  board;

  }
}

// WaitingRoomBlue.propTypes = {
//     moveHere: React.PropTypes.func,
//     clickPawn: React.PropTypes.func
// }

module.exports = WaitingRoomBlue;