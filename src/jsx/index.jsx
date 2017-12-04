import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import Pawn from './Pawn.jsx';
import Field from './Field.jsx';
import CanMove from './CanMove.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPlaying: true, //gra aktywna
            whoMoves: 'green', //czyj ruch: gracz blue (góra), gracz dół (green)
            selectedCell: false, //które pole jest kliknięte
            availableCells: [], //dostępne pola do ruchu dla zaznaczonego
            //opis figur na planszy
            board: [
                new Pawn(0, 'giraffe', "blue"),
                new Pawn(1, 'lion', "blue"),
                new Pawn(2, 'elephant', "blue"),
                null,
                new Pawn(4, 'chicken', "blue"),
                null,
                null,
                new Pawn(7, 'chicken', "green"),
                null,
                new Pawn(9, 'elephant', "green"),
                new Pawn(10, 'lion', "green"),
                new Pawn(11, 'giraffe', "green"),
              ]
              
            
        }
    }

    clickPawn = (indexElem) => {
        
        document.querySelectorAll(`[data-index]`).forEach(el=>el.classList.remove('cell-available'));

        let canMove = this.state.board[indexElem].canMove;
        let availableCells = new Field(parseInt(indexElem)).availableCells;
        
        let canAvailableCells = [];
        for(let i = 0; i < canMove.length; i++){
            for(let j = 0; j < availableCells.length; j++){
                if(availableCells[j] === canMove[i]){
                    canAvailableCells.push(availableCells[j]);
                }
            }
        }

        let oneTeamPowns = [];
        for(let i = 0; i < this.state.board.length; i++){
            if(this.state.board[i] !== null && this.state.board[i].player === this.state.board[indexElem].player){
                oneTeamPowns.push(this.state.board[i].cellNumber);    
            }
        }

        for(let i = 0; i < canAvailableCells.length; i++){
            for(let j = 0; j < oneTeamPowns.length; j++){
                if(oneTeamPowns[j] === canAvailableCells[i]){
                    let index = canAvailableCells.indexOf(oneTeamPowns[j]);
                    canAvailableCells.splice(index,1);
                }
            }
        }
        
        canAvailableCells.forEach( v => {
            document.querySelector(`[data-index="${v}"]`).classList.toggle('cell-available')
        });
    }

  render(){
        return (
            <Board  game={this.state.board}
                    clickPawn={this.clickPawn} 
                    whoMoves={this.state.whoMoves}
                    />
            
        )    
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});