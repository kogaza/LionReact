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
                new Pawn(0, 'giraffe', 0),
                new Pawn(1, 'lion', 0),
                new Pawn(2, 'elephant', 0),
                null,
                new Pawn(4, 'chicken', 0),
                null,
                null,
                new Pawn(7, 'chicken', 1),
                null,
                new Pawn(9, 'elephant', 1),
                new Pawn(10, 'lion', 1),
                new Pawn(11, 'giraffe', 1),
              ]
            
        }
    }

  render(){
        return (
            <Board game={this.state.board}/>
            
        )    
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});