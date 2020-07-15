import React, {Component} from 'react';
import './App.css';
import TopCharts from './Clusters/TopCharts/TopCharts.js';
import MusicApps from './Clusters/MusicApps/MusicApps.js';
import RecommendedCategories from './Clusters/RecommendedCategories/recommended_categories.js';
import AppOfTheWeek from './Clusters/AppOfTheWeek/AppOfTheWeek.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    fetch('/api/v1/stream')
        .then((response) => response.text())
        .then((text) => {this.setState({text})})
  }

  render() {
    return (
      <div className='App'>
        <AppOfTheWeek />
        <MusicApps />
        <TopCharts />
        <RecommendedCategories />
      </div>
    );
  }
}

export default App;
