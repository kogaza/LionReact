import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import Pawn from './Pawn.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPlaying: true, //gra aktywna
            whoMoves: 0, //czyj ruch: 0 - gracz blue (góra), 1 - gracz dół (green)
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

    clickPawn(indexElem){
        console.log(indexElem);
    }

  render(){
        return (
            <Board game={this.state.board} clickPawn={this.clickPawn} />
            
        )    
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});