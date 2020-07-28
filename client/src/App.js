import React, {Component} from 'react';
import './App.css';
import AppOfTheWeek from './Clusters/AppOfTheWeek/AppOfTheWeek.js';
import Footer from './Clusters/Footer/Footer.js';
import Header from './Header/header.js';
import RecommendedCategories from './Clusters/RecommendedCategories/recommended_categories.js';
import StandardCluster from './Clusters/StandardCluster/standard_cluster.js';
import TopCharts from './Clusters/TopCharts/TopCharts.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('/api/v1/stream')
        .then((response) => {
            if(response.status === 200) {
                return response.json()
            }})
        .then((streamData) => {this.setState({streamData})})
  }

  render() {
    if (this.state.streamData == null) {
        return null;
    }
    return (
      <div className='App'>
        <Header />
        <AppOfTheWeek />
        {this.state.streamData.clusters.map((cluster) => {
            switch(cluster.type) {
            case "StandardCluster":
                return <StandardCluster data={cluster} key={cluster.id} />
            case "TopCharts":
                return <TopCharts data={cluster} key={cluster.id} />
            case "RecommendedCategories":
                return <RecommendedCategories data={cluster} key={cluster.id} />
            default:
                return null;
        }
        })}
        <Footer />
      </div>
    );
  }
}

export default App;
