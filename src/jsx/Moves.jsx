// import React from 'react';
// import ReactDOM from 'react-dom';
import Field from "./Field.jsx";

class Moves extends Field {
    constructor(cellNumber,animal,player){
        super(cellNumber);
        this.animal = animal;
        this.player = player;
        this.canMove = [];
    }
    whatMovesl() {
        if(this.animal === "Elephant") {
            this.canMove = [
                this.number - 4,
                this.number - 2,
                this.number + 2,
                this.number + 4
            ]
        }   
        else if(this.animal === "Lion") {
            this.canMove = [
                this.number - 4,
                this.number - 3,
                this.number - 2,
                this.number - 1,
                this.number + 1,
                this.number + 2,
                this.number + 3,
                this.number + 4
            ]
        }
        else if(this.animal === "Giraffe") {
            this.canMove = [
                this.number - 3,
                this.number - 1,
                this.number + 1,
                this.number + 3
            ]
        }
        else if(this.animal === "Chicken") {
            if(this.player === 0) this.canMove = [ this.number + 3 ]
            else this.canMove = [this.number - 3]
        }
        else if(this.animal === "SuperChicken") {
            if(this.player === 0){
                this.canMove = [
                    this.number - 4,
                    this.number - 3,
                    this.number - 2,
                    this.number - 1,
                    this.number + 1,
                    this.number + 3
                ]
            }
            else{
                this.canMove = [
                    this.number - 3,
                    this.number - 1,
                    this.number + 1,
                    this.number + 2,
                    this.number + 3,
                    this.number + 4
                ]
            }
        }
    }
    moves() {

    }
}
let giraffe = new Moves(3,'Chicken',0);
giraffe.whatMovesl();
// console.log(giraffe);

module.exports = Moves;