import React, { Component } from 'react';
import '../styles.css';
import './Footer.style.css';
import {data} from './data.js';

class Footer extends Component {
    render() {
        const makeColumn = item => (
            <div className="col" key={item.id}>
                <div className="vertical-row">
                    <h3>{item.title}</h3>
                    {item.subcategories.map((value, index) => {
                        return <a href={value.url} className="footer-link" key={index}>{value.title}</a>
                    })}
                </div>
            </div>
        );

        return (
            <div className="footer-section">
                <div className="footer-left">
                    <h2>{data.title}</h2>
                </div>
                <div className="footer-right">
                    {data.categories.map(makeColumn)}
                </div>
            </div> 
        );
    }
}
export default Footer;
