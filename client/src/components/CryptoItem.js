import React from 'react';
import "../App.css"
import LineChart from "./LineChart"

const CryptoItem = ({stock}) => {
    console.log(stock.history);
    return(
        <div className="stock-container">
        <div className="stock-data">
            <h3>{stock.name}</h3>
            <h2>{stock.symbol}</h2>
            <h2>{stock.currentPrice}</h2>
            </div>
        <div className="chart-area">
            {stock.history ? <LineChart history={stock.history} title={stock.name} symbol={stock.symbol} /> : null} 
            </div>
    </div>
    )
}

export default CryptoItem;