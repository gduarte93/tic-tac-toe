import React, { Component } from 'react';
import GameCell from '../GameCell/GameCell';
import './GameBoard.css';

class GameBoard extends Component {
    constructor(props) {
        super();
        let size = (props && props.size) || 3;

        this.state = {
            size,
            turn: 0
        }

        this.refCallback = this.refCallback.bind(this);
    }

    refCallback(element) {
        let rect  = element && element.getBoundingClientRect(),
            width = rect && rect.width;
        
        this.setState({ width });
    };

    drawCells() {
        let me       = this,
            state    = me && me.state,
            width    = state && state.width,
            size     = state && state.size,
            cellSize = width / size,
            cellAry  = [];

        if (!cellSize) return;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let row, col;

                row = i === 0 ? 'top' :
                      i === size - 1 ? 'bottom' :
                      'middle';
                col = j === 0 ? 'left' :
                      j === size - 1 ? 'right' :
                      'middle';

                cellAry.push(
                    <GameCell
                        key={`${i}_${j}`}
                        state={state}
                        width={cellSize}
                        row={row}
                        col={col}
                        nextTurn={me.nextTurn.bind(me)}
                    ></GameCell>
                );
            }
        }

        return cellAry;
    }

    nextTurn() {
        let me       = this,
            state    = me && me.state,
            turn     = state && state.turn,
            nextTurn = turn === 0 ? 1 : 0;

        me.setState({turn: nextTurn});
    }

    render() {
        return (
            <div className="gameboard" ref={this.refCallback}>
                {this.drawCells()}
            </div>
        );
    }
}

export default GameBoard;
