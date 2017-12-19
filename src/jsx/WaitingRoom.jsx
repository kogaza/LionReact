import React from 'react';
import ReactDOM from 'react-dom';

class WaitingRoom extends React.Component {

  clickMiniPawn = (pawn, i) => {
    if (pawn) {
      this.props.clickMiniPawn(pawn, i);

    }
  }

  render() {

    let waitingPowns = this.props.waitingPowns;

    let board = <div className={`taken taken-${this.props.color}`}>
      {waitingPowns.map((p, i) => {

        let classMini = p.classes.join(' ') + " mini-animal";
        if(this.props.whoMoves === p.player){
          classMini += " cell-move";
        }

        if(p.selected === true){
          classMini += " cell-selected";
        }

        return <div key={i} className={classMini}
          onClick={() => this.clickMiniPawn(p, i)} />
      }
      )}

    </div>


    return board;

  }
}

// WaitingRoomGreen.propTypes = {
//     moveHere: React.PropTypes.func,
//     clickPawn: React.PropTypes.func
// }

module.exports = WaitingRoom;