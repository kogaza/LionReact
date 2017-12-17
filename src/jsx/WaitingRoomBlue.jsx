import React from 'react';
import ReactDOM from 'react-dom';

class WaitingRoomBlue extends React.Component{

  clickMiniPawn = (pawn) => {
    if (pawn) {
      
          this.props.clickMiniPawn(pawn);
        
    }
  }

  render(){
    let waitingPowns = this.props.waitingPowns;

    let board = <div className="taken taken-blue">
            {waitingPowns.map( (p,i) => 
              <div key={i} className={`${p.classes.join(' ')} mini-animal blue`}
              onClick={() => this.clickMiniPawn(p)}/>

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