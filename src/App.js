import React, { Component } from 'react';
import GameBoard from './Components/GameBoard/GameBoard';
const DEFAULT_SIZE = 3;

class App extends Component {
    constructor(props) {
        super();

        this.state = {
            size: DEFAULT_SIZE,
            board: <GameBoard size={DEFAULT_SIZE}></GameBoard>
        }

        this.resetBoard = this.resetBoard.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(event) {
        let newSize = parseInt(event.target.value);

        if (isNaN(newSize)) {
            newSize = '';
        }

        // if (isNaN(newSize)) {
        //     console.log('isNaN')
        //     newSize = 0;
        // }

        this.setState({size: newSize});
    }

    resetBoard(event) {
        event.preventDefault();

        this.setState({board: ''});
        setTimeout(() => {
            this.setState({board: <GameBoard size={this.state.size}></GameBoard>});
        }, 0)
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.resetBoard}>
                    <input type="text" value={this.state.size} onChange={this.handleTextChange}></input>
                    <input type="submit" value="Reset"></input>
                </form>
                {this.state.board}
            </React.Fragment>
        );
    }
}

export default App;
