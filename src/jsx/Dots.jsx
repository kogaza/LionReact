import React from 'react';
import ReactDOM from 'react-dom';
import Board from "./Board.jsx";

class Dots extends React.Component{
    
    whatDots(animal,player){
        if(animal === "elephant"){
            dotsMove = 
                <div className = "dot dot-top-left"></div>
                <div className = "dot dot-top-right"></div>
                <div className = "dot dot-bottom-right"></div>
                <div className = "dot dot-bottom-left"></div>
            
        }
        else if(animal === "lion"){
            dotsMove = 
                <div className = "dot dot-left"></div>
                <div className = "dot dot-top-left"></div>
                <div className = "dot dot-top"></div>
                <div className = "dot dot-top-right"></div>
                <div className = "dot dot-right"></div>
                <div className = "dot dot-bottom-right"></div>
                <div className = "dot dot-bottom"></div>
                <div className = "dot dot-bottom-left"></div>
            
        }
        else if(animal === "giraffe"){
            dotsMove = 
                <div className = "dot dot-left"></div>
                <div className = "dot dot-top"></div>
                <div className = "dot dot-right"></div>
                <div className = "dot dot-bottom"></div>
            
        }
        else if(animal === "chicken" && player === "green"){
            dotsMove = 
                <div className = "dot dot-top"></div>
            
        }
        else if(animal === "chicken" && player === "blue"){
            dotsMove = 
                <div className = "dot dot-bottom"></div>
            
        }
        else if(animal === "superChicken" && player === "green"){
            dotsMove = 
                <div className = "dot dot-left"></div>
                <div className = "dot dot-top-left"></div>
                <div className = "dot dot-top"></div>
                <div className = "dot dot-top-right"></div>
                <div className = "dot dot-right"></div>
                <div className = "dot dot-bottom"></div>
            
        }
        else if(animal === "superChicken" && player === "blue"){
            dotsMove = 
                <div className = "dot dot-left"></div>
                <div className = "dot dot-top"></div>
                <div className = "dot dot-right"></div>
                <div className = "dot dot-bottom-right"></div>
                <div className = "dot dot-bottom"></div>
                <div className = "dot dot-bottom-left"></div>
            
        }
        
    }
    
    render(){

       
        

        let board = <div className="wrapper">
                        <table className="game-box">
                            <tbody>{boardFields.concat('')}</tbody>
                        </table>
                        <h1>Catch The Lion</h1>
                    </div>;


        return  board;

        
    }
}

module.exports = Dots;