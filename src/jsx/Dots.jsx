import React from 'react';
import ReactDOM from 'react-dom';
import Board from "./Board.jsx";

class Dots extends React.Component{
    
    render(){

        var dotsMove;

        if(this.props.field.animal === "elephant"){
            dotsMove = <div className={this.props.classes}>
                    <div className = "dot dot-top-left"></div>
                    <div className = "dot dot-top-right"></div>
                    <div className = "dot dot-bottom-right"></div>
                    <div className = "dot dot-bottom-left"></div>
                </div>
        }
        else if(this.props.field.animal === "lion"){
            dotsMove = <div className={this.props.classes}>
                    <div className = "dot dot-left"></div>
                    <div className = "dot dot-top-left"></div>
                    <div className = "dot dot-top"></div>
                    <div className = "dot dot-top-right"></div>
                    <div className = "dot dot-right"></div>
                    <div className = "dot dot-bottom-right"></div>
                    <div className = "dot dot-bottom"></div>
                    <div className = "dot dot-bottom-left"></div>
                </div>
        }
        else if(this.props.field.animal === "giraffe"){
            dotsMove = <div className={this.props.classes}>
                    <div className = "dot dot-left"></div>
                    <div className = "dot dot-top"></div>
                    <div className = "dot dot-right"></div>
                    <div className = "dot dot-bottom"></div>
                </div>
        }
        else if(this.props.field.animal === "chicken" ){
            dotsMove = <div className={this.props.classes}>
                    <div className = "dot dot-top"></div>
                </div>
        }

        else if(this.props.field.animal === "superChicken"){
            dotsMove = <div className={this.props.classes}>
                    <div className = "dot dot-left"></div>
                    <div className = "dot dot-top-left"></div>
                    <div className = "dot dot-top"></div>
                    <div className = "dot dot-top-right"></div>
                    <div className = "dot dot-right"></div>
                    <div className = "dot dot-bottom"></div>
                </div>
        
        }
        
        return <div> {dotsMove} </div>
               
    }
}

module.exports = Dots;