import React, {Component} from 'react';
import './App.css';
import TopCharts from './Clusters/TopCharts/TopCharts.js';
import MusicApps from './Clusters/MusicApps/MusicApps.js';
import RecommendedCategories from './Clusters/RecommendedCategories/RecommendedCategories.js';

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
        <MusicApps />
        <TopCharts />
        <RecommendedCategories />
      </div>
    );
  }
}

export default App;
