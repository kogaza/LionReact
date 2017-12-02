import React from 'react';
import ReactDOM from 'react-dom';
import Field from "./Field.jsx";

class Board extends React.Component{
    
    loadPicture = () => {
        console.log(this.props.game);
    }

    render(){
        return <div className="wrapper">
            <table className="game-box">
                <tbody>
                    <tr className="row">
                        <td></td>
                        <td className="cell-label">A</td>
                        <td className="cell-label">B</td>
                        <td className="cell-label">C</td>
                    </tr>
                    <tr className="row">
                        <td className="cell-label">1</td>
                        <td className="cell chicken" data-id="0" data-pos="2-1"></td>
                        <td className="cell" onLoad={this.loadPicture()} data-id="1"></td>
                        <td className="cell" data-id="2"></td>
                    </tr>
                    <tr className="row">
                        <td className="cell-label">2</td>
                        <td className="cell" data-id="3"></td>
                        <td className="cell" data-id="4"></td>
                        <td className="cell" data-id="5"></td>
                    </tr>
                    <tr className="row">
                        <td className="cell-label">3</td>
                        <td className="cell" data-id="6"></td>
                        <td className="cell" data-id="7"></td>
                        <td className="cell" data-id="8"></td>
                    </tr>
                    <tr className="row">
                        <td className="cell-label">4</td>
                        <td className="cell" data-id="9"></td>
                        <td className="cell" data-id="10"></td>
                        <td className="cell" data-id="11"></td>
                    </tr>
                </tbody>
            </table>
            <h1>Catch The Lion</h1>
        </div>
    }
}

module.exports = Board;