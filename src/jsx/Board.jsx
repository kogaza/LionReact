import React from 'react';
import ReactDOM from 'react-dom';
import Field from "./Field.jsx";
import Dots from "./Dots.jsx";
import WaitingRoom from "./WaitingRoom.jsx";

class Board extends React.Component{
  
  handleClickPawn = (pawn) => {
    if (pawn) {
        if(pawn.available === true){
          this.props.moveHere(pawn.cellNumber);
        }
        else {
          this.props.clickPawn(pawn.cellNumber);
        }
    }
  }

  startGame = () => {
    console.log("start gry");
    location.reload();
  }

  render(){

    let fieldIndex = 0;
    let rowNumber = 1;
    let boardFields = [];
    let startState = this.props.state;
    let fields = this.props.game;
    let waitingRoomGreen = this.props.waitingRoomGreen;
    let waitingRoomBlue = this.props.waitingRoomBlue;
    
    for(let i=0; i<5; i++){
      
      if(i==0){
        boardFields.push(  <tr className="row">
                    <td></td>
                    <td className="cell-label">A</td>
                    <td className="cell-label">B</td>
                    <td className="cell-label">C</td>
                  </tr>
                );
      }else{

        boardFields.push(  <tr className="row">
                    <td>{rowNumber++}</td>
                    {
                      fields.filter((v,i) => (i>=fieldIndex && i<fieldIndex+3) )
                          .map( (p,i) => {
                          if( p === null || p.type === null){
                            return (
                                <td 
                                key={i} 
                                data-index={fieldIndex+i}
                                className={`cell ${p && p.available ? 
                                  (this.props.whoMoves === "blue" ? 
                                    'cell-available-blue' :
                                    'cell-available-green' ) : ''}`}
                                onClick={() => this.handleClickPawn(p)}/>
                            );
                          }else{
                            let classes = "animal " + p.classes.join(' ');
                            let moves = "cell";
                            if(this.props.whoMoves === p.player){
                              moves += " cell-move";
                            }

                            if(p.selected === true){
                              moves += " cell-selected";
                            }
                            if(p.available === true){
                              if(this.props.whoMoves === "blue"){
                                moves += " cell-available-blue";
                              }else {
                                moves += " cell-available-green";
                              }
                            }
                                
                            return <td key={i} data-index={fieldIndex+i} className={moves} 
                            onClick={() => this.handleClickPawn(p)}>
                                
                                <Dots field={p} classes={classes}/>

                              </td>;
                          }
                          })
                     
                    }
                  </tr>
                );
        fieldIndex +=3;
        
      }
      
    }

    let board = <div className="container"> 
            <WaitingRoom
              color="blue"
              whoMoves={this.props.whoMoves}
              waitingPowns={waitingRoomBlue}
              clickMiniPawn={this.props.clickMiniPawn}
            />
            <div className="wrapper">
              <table className="game-box">
                <tbody>{boardFields}</tbody>
              </table>
              <h1>Złap Lwa</h1>
              <button className="start-game" onClick={() => this.startGame()}>Nowa gra</button>
            </div>
            <WaitingRoom
              color="green"
              whoMoves={this.props.whoMoves}
              waitingPowns={waitingRoomGreen}
              clickMiniPawn={this.props.clickMiniPawn}
            />
            <div className="buttons">
            </div>
          </div>;

    return  board;

  }
}

Board.propTypes = {
    moveHere: React.PropTypes.func,
    clickPawn: React.PropTypes.func
}

module.exports = Board;