import React, { Component } from 'react';
import PropTypes from "prop-types";
import SingleAppContainer from './SingleAppContainer.js';
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

    const { data } = this.props;    
 
    return (
      <div className="section">
        <div className="section-header">
          <h1>{data.title}</h1>
          <h3>{data.subtitle}</h3>
        </div>
        {data.charts && data.charts.map((chart) => {
            return <div className="col" key={data.id}>
                        <div className="vertical-row">
                            <h3>{chart.title}</h3>
                            {chart.apps.map(makeColumn)}
                        </div>
                    </div>
        })}
      </div>
    );
  }
}
 
export default TopCharts;

TopCharts.propTypes = {
    data: PropTypes.object.isRequired
};
