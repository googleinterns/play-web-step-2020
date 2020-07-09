import React, { Component } from 'react';
import SingleAppContainer from './SingleAppContainer.js';
import {topFree, topGrossing, topPaid, trending} from './mockData.js';
import './TopChartsStyle.css';
import '../styles.css';
 
class TopCharts extends Component {
  render() {
    const makeColumn = item => (
        <div key={item.id}>
            <SingleAppContainer
            listNum={item.listNum}
            url={item.url}
            title={item.title}
            category={item.category}
            rating={item.rating}
            />
        </div>
    );

    const charts = [topFree, topGrossing, trending, topPaid];

    return (
      <div className="section">
        <div className="section-header">
          <h1>Top Charts</h1>
          <h3>For Wear OS</h3>
        </div>
 
        {charts.map((value, index) => {
            return <div className="col" key={index}>
                        <div className="vertical-row">
                            <h3>{value.title}</h3>
                            {value.cards.map(makeColumn)}
                        </div>
                    </div>
        })}
      </div>
    );
  }
}
 
export default TopCharts;
