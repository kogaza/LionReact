
class Pawn {
  constructor(cellNumber,animal,player, selected, available){
    this.cellNumber = cellNumber;
    this.animal = animal;
    this.player = player;
    this.selected = selected;
    this.available = available;
    this.classes = [animal,player];
    this.whatMoves();
    
  }
 
  getState() {
      return {
          animal: this.animal,
          player: this.player,
          cellNumber: this.cellNumber,
          classes: this.classes,
          canMove: this.canMove,
          selected: this.selected,
          available: this.available,
          
      }
  }

  whatMoves() {

    if(this.animal === "elephant") {
      this.canMove = [
        this.cellNumber - 4,
        this.cellNumber - 2,
        this.cellNumber + 2,
        this.cellNumber + 4
      ].filter((cell)=>(cell >=0 && cell<12))
    }   
    else if(this.animal === "lion") {
      this.canMove = [
        this.cellNumber - 4,
        this.cellNumber - 3,
        this.cellNumber - 2,
        this.cellNumber - 1,
        this.cellNumber + 1,
        this.cellNumber + 2,
        this.cellNumber + 3,
        this.cellNumber + 4
      ].filter((cell)=>(cell >=0 && cell<12))
    }
    else if(this.animal === "giraffe") {
      this.canMove = [
        this.cellNumber - 3,
        this.cellNumber - 1,
        this.cellNumber + 1,
        this.cellNumber + 3
      ].filter((cell)=>(cell >=0 && cell<12))
    }
    else if(this.animal === "chicken") {
      if(this.player === "blue") this.canMove = [ this.cellNumber + 3 ]
      else this.canMove = [this.cellNumber - 3]
    }
    else if(this.animal === "superChicken") {
      if(this.player === 0){
        this.canMove = [
          this.cellNumber - 4,
          this.cellNumber - 3,
          this.cellNumber - 2,
          this.cellNumber - 1,
          this.cellNumber + 1,
          this.cellNumber + 3
        ].filter((cell)=>(cell >=0 && cell<12))
      }
      else{
        this.canMove = [
          this.number - 3,
          this.number - 1,
          this.number + 1,
          this.number + 2,
          this.number + 3,
          this.number + 4
        ].filter((cell)=>(cell >=0 && cell<12))
      }
    }
  }

  
  
  getAvailableMoves(boardArray) {
    this.availableMoves = [];
    
  }
}


module.exports = Pawn;