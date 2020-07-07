import React, {Component} from 'react';
import './App.css';
import TopCharts from './Clusters/TopCharts/TopCharts.js';
import RecommendedCategories from './components/cluster/RecommendedCategories/RecommendedCategories.js';


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
        <TopCharts />
        <RecommendedCategories />
      </div>
    );
  }
}

export default App;
