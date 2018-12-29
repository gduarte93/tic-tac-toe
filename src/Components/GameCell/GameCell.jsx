import React, { Component } from 'react';
import './GameCell.css';

class GameCell extends Component {
    constructor(props) {
        super();
        let width    = props && props.width,
            row      = props && props.row,
            col      = props && props.col,
            nextTurn = props && props.nextTurn,
            state    = props && props.state,
            turn     = state && state.turn;

        this.state = {
            width,
            row,
            col,
            disabled: false,
            turn
        }

        this.handleClick = this.handleClick.bind(this);
        this.nextTurn = nextTurn;
    }

    componentWillReceiveProps(newProps) {
        let boardState = newProps.state,
            turn       = boardState && boardState.turn;

        this.setState({turn})
    }

    getStyle() {
        return {
            width: this.state.width,
            height: this.state.width,
            float: 'left'
        }
    }

    handleClick() {
        let me       = this,
            state    = me && me.state,
            disabled = state && state.disabled,
            turn     = state && state.turn;

        if (!disabled) {
            me.setState({
                disabled: true,
                player: turn
            });
            me.nextTurn();

            me.checkBoardState();
        }
    }

    checkBoardState() {
        // End the game if there is a winner or there is a tie; Else do nothing (keep playing)
        // me.checkForWinner();
        // me.checkForTie();
    }

    render() {
        let me            = this,
            state         = me && me.state,
            row           = state && state.row,
            col           = state && state.col,
            disabled      = state && state.disabled,
            disabledClass = disabled ? 'gamecell--disabled' : '',
            player        = state && state.player,
            mark          = typeof player !== 'undefined' ? (player === 0 ? 'O' : 'X') : '';

        return (
            <div
                className={`gamecell gamecell_row--${row} gamecell_col--${col} ${disabledClass}`}
                style={this.getStyle()}
                onClick={this.handleClick}
            >
                {mark}
            </div>
        );
    }
}

export default GameCell;
