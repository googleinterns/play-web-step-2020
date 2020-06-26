import React, { Component } from 'react';
import './App.css';

class App extends Component {
    componentDidMount() {
        fetch("/api/v1/test-servlet")
            .then((response) => response.text())
            .then((text) => {
                console.log("here is the text from servlet: ", text);
            });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
            </div>
        );
    }
}

export default App;
