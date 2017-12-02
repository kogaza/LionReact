import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import Field from './Field.jsx';
import Moves from './Moves.jsx';





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
                // <Field type="giraffe" />,
                // <Field type="empty" />,
                // <Field type="giraffe" />,
                // <Field type="giraffe" />,

                ["giraffe", 0],
                ["lion", 0],
                ["elephant", 0],
                [],
                ["chicken", 0],
                [],
                [],
                ["chicken", 1],
                [],
                ["elephant", 1],
                ["lion", 1],
                ["giraffe", 1],
              ]
            
        }
    }

  render(){
        return (
            <Board />,
            <Field />
        )    
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});