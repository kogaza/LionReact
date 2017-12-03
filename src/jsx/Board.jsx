import React from 'react';
import ReactDOM from 'react-dom';
import Field from "./Field.jsx";

class Board extends React.Component{
    


    loadPicture = () => {
        // var classNames = require('classnames');
        console.log(this.props.game);
        // classNames('cell','lion');
    }

    handleClickPawn = (e) => {
        console.log('clicked '+e.target.dataset.index);
        if(typeof this.props.clickPawn === 'function'){
            this.props.clickPawn(e.target.dataset.index);
        }
    }

    render(){

       
        let fieldIndex = 0;
        let rowNumber = 1;
        let boardFields = [];
        let fields = this.props.game;
        
        for(let i=0; i<5; i++){
          
            if(i==0){
                boardFields.push(    <tr className="row">
                                        <td></td>
                                        <td className="cell-label">A</td>
                                        <td className="cell-label">B</td>
                                        <td className="cell-label">C</td>
                                    </tr>
                                );
            }else{

                boardFields.push(    <tr className="row">
                                        <td>{rowNumber++}</td>
                                        {
                                            fields.filter((v,i) => (i>=fieldIndex && i<fieldIndex+3) )
                                                  .map( (p,i) => {
                                                    if( p === null){
                                                        return <td key={i} data-index={fieldIndex+i} className="cell" onClick={this.handleClickPawn}></td>;
                                                    }else{
                                                        let classes = p.classes.concat() + ' cell';
                                                        return <td key={i} data-index={fieldIndex+i} className={classes} onClick={this.handleClickPawn}></td>;
                                                    }
                                                  })
                                         
                                        }
                                    </tr>
                                );
                fieldIndex +=3;
                
            }
            
        }
        console.log(boardFields);

        let board = <div className="wrapper">
                        <table className="game-box">
                            <tbody>{boardFields.concat('')}</tbody>
                        </table>
                        <h1>Catch The Lion</h1>
                    </div>;


        return  board;

        
    }
}

module.exports = Board;