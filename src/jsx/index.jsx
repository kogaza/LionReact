import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import Pawn from './Pawn.jsx';
import MiniPawn from './MiniPawn.jsx';
import Field from './Field.jsx';
import Move from './Move.jsx';
import WaitingRoomGreen from './WaitingRoomGreen.jsx';
import WaitingRoomBlue from './WaitingRoomBlue.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true, //gra aktywna
      whoMoves: 'green', //czyj ruch: gracz blue (góra), gracz dół (green)
      selectedCell: false, //które pole jest kliknięte
      availableCells: [], //dostępne pola do ruchu dla zaznaczonego
      waitingRoomGreen: [],
      waitingRoomBlue: [],
      //opis figur na planszy
      board: [
        new Pawn(0, 'giraffe', "blue").getState(),
        new Pawn(1, 'lion', "blue").getState(),
        new Pawn(2, 'elephant', "blue").getState(),
        null,
        new Pawn(4, 'chicken', "blue").getState(),
        null,
        null,
        new Pawn(7, 'chicken', "green").getState(),
        null,
        new Pawn(9, 'elephant', "green").getState(),
        new Pawn(10, 'lion', "green").getState(),
        new Pawn(11, 'giraffe', "green").getState(),
      ]


    }
  }

  clickPawn = (indexElem) => {
    // robimy kopien z aktualnego state
    const newState = JSON.parse(JSON.stringify(this.state));
    // sprawdzam czy zaznaczono odpowiedni knefel
    if (this.state.board[indexElem].player !== this.state.whoMoves) {
      return;
    }
    // czyszczenie selected i available
    newState.board = newState.board.map((pawn) =>
      pawn ?
        new Pawn(
          pawn.cellNumber,
          pawn.animal,
          pawn.player,
          false, false
        ).getState() :
        null
    );
    const currentPawn = newState.board[indexElem];

    // ustawiamy selected elemen
    newState.selectedCell = indexElem;
    newState.board[indexElem] = new Pawn(
      currentPawn.cellNumber,
      currentPawn.animal,
      currentPawn.player,
      true, false
    ).getState();

    let canMove = this.state.board[indexElem].canMove;
    let availableCells = new Field(parseInt(indexElem)).availableCells;

    let canAvailableCells = [];
    for (let i = 0; i < canMove.length; i++) {
      for (let j = 0; j < availableCells.length; j++) {
        if (availableCells[j] === canMove[i]) {
          canAvailableCells.push(availableCells[j]);
        }
      }
    }

    let oneTeamPowns = [];
    for (let i = 0; i < this.state.board.length; i++) {
      if (this.state.board[i] !== null && this.state.board[i].player === this.state.board[indexElem].player) {
        oneTeamPowns.push(this.state.board[i].cellNumber);
      }
    }
    for (let i = 0; i < canAvailableCells.length; i++) {
      for (let j = 0; j < oneTeamPowns.length; j++) {
        if (oneTeamPowns[j] === canAvailableCells[i]) {
          let index = canAvailableCells.indexOf(oneTeamPowns[j]);
          canAvailableCells.splice(index, 1);
        }
      }
    }

    // ustawiamy available to move here
    canAvailableCells.forEach(id => {
      const pawn = newState.board[id];
      const newPawn = pawn ?
        new Pawn(
          pawn.cellNumber,
          pawn.animal,
          pawn.player,
          false, true
        ).getState() :
        { type: null, available: true, cellNumber: id }
      newState.board[id] = newPawn;
    })

    this.setState(newState);
  }
  
  clickMiniPawn = (pawn) => {
    console.log("Działa clickMiniPawn");
     // robimy kopien z aktualnego state
     const newState = JSON.parse(JSON.stringify(this.state));
         // sprawdzam czy zaznaczono odpowiedni knefel
    // if (this.state.board[indexElem].player !== this.state.whoMoves) {
    //    return;
    // }
    // czyszczenie selected i available
    newState.board = newState.board.map((pawn) =>
    pawn ?
        new Pawn(
        pawn.cellNumber,
        pawn.animal,
        pawn.player,
        false, false
        ).getState() :
        null
    );

    //
    //ustawienie select dla miniPawn
    //

    this.setState(newState);
  }

  moveHere = (here) => {
    console.log('move here', here, 'from', this.state.selectedCell);
    // robimy kopien z aktualnego state
    const newState = JSON.parse(JSON.stringify(this.state));
    
    newState.board = newState.board.map((pawn) =>
    pawn ?
      new Pawn(
        pawn.cellNumber,
        pawn.animal,
        pawn.player,
        false, false
      ).getState() :
      null
    );

    const pawnToMove = newState.board[this.state.selectedCell];

    //superChicken
    if(
      pawnToMove.animal === "chicken" && 
      pawnToMove.player === "green" &&
      (here === 0 || here === 1 || here === 2)
    ){
      pawnToMove.animal = "superChicken";
    }
    if(
      pawnToMove.animal === "chicken" && 
      pawnToMove.player === "blue" &&
      (here === 9 || here === 10 || here === 11)
    ){
      pawnToMove.animal = "superChicken";
    }

    console.log("SC",pawnToMove, "here",here);
    const newPawn = 
      new Pawn(
        here,
        pawnToMove.animal,
        pawnToMove.player,
        false, false
      ).getState()

    console.log("Stare pole",newState.board[here]);
    newState.board[here].player = newState.board[here].player == "green" ? "blue" : "green";
    const newMiniPawn = 
      new MiniPawn(
          newState.board[here].animal,
          newState.board[here].player
      ).getState()
      console.log("aaaaaa",newMiniPawn);

    newState.board[here].animal !== undefined && 
      (newState.whoMoves === "green" ?
        newState.waitingRoomGreen.push(newMiniPawn) :
        newState.waitingRoomBlue.push(newMiniPawn)
      );
    newState.board[here] = newPawn;
    newState.board[this.state.selectedCell] = null;
    newState.whoMoves = newState.whoMoves == "green" ? "blue" : "green"; 

    this.setState(newState);
  }

  render() {
    return (
      <Board
        game={this.state.board}
        whoMoves={this.state.whoMoves}
        clickPawn={(id) => this.clickPawn(id)}
        moveHere={(here) => this.moveHere(here)}
        clickMiniPawn={(pawn) => this.clickMiniPawn(pawn)}
        waitingRoomGreen={this.state.waitingRoomGreen}
        waitingRoomBlue={this.state.waitingRoomBlue}
      />

    )
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});