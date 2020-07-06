import React, { Component } from 'react';
import SingleAppContainer from './SingleAppContainer.js';
import {topFree, topGrossing, topPaid, trending} from './mockData.js';
import './TopChartsStyle.css';
import '../styles.css';
 
class TopCharts extends Component {
  render() {
    const makeColumn = item => (
        <div key={item.appId}>
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
        <div class="section-header">
          <h1>Top Charts</h1>
          <h2>For Wear OS</h2>
        </div>
 
        {charts.map((value, index) => {
            return <div class="col" key={index}>
                        <div class="vertical-row">
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
