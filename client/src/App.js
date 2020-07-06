import React, {Component} from 'react';
import './App.css';
import RecommendedCategories from './cluster/RecommendedCategories/RecommendedCategories.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    fetch('/api/v1/test-servlet')
        .then((response) => response.text())
        .then((text) => {this.setState({text})})
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome to React</h2>
          {this.state.text}
        </div>
        <RecommendedCategories />
      </div>
    )
  }
}

export default App;
