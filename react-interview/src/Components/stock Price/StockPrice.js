import React, { useState, useEffect } from 'react';

// Simulate fetching stock prices
function getRandomStockPrices() {
  const stockSymbols = [
    'RELIANCE',
    'TCS',
    'HDFCBANK',
    'INFY',
    'HINDUNILVR',
    'ITC',
    'KOTAKBANK',
    'BAJFINANCE',
    'SBIN',
    'L&T',
  ];

  function generateRandomPrice() {
    return (Math.random() * (5000 - 100) + 100).toFixed(2);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const stockPrices = stockSymbols.map(symbol => ({
        stockSymbol: symbol,
        price: generateRandomPrice(),
      }));
      resolve(stockPrices);
    }, 500);
  });
}

// React Component
const StockPrice = () => {
  const [stockPrices, setStockPrices] = useState([]);
  const [interval, setInterval] = useState(1);

  // Fetch stock prices
  const fetchStockPrices = async () => {
    const prices = await getRandomStockPrices();
    setStockPrices(prices);
  };

  // Effect to auto-refresh based on selected interval
  useEffect(() => {
    fetchStockPrices(); // Initial fetch
    const intervalId = setInterval(() => {
      fetchStockPrices();
    }, interval * 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount or interval change
  }, [interval]);

  return (
    <div>
      <h1>Stock Prices</h1>
      <select
        value={interval}
        onChange={(e) => setInterval(Number(e.target.value))}
      >
        <option value={1}>1 Second</option>
        <option value={2}>2 Seconds</option>
        <option value={3}>3 Seconds</option>
        <option value={4}>4 Seconds</option>
        <option value={5}>5 Seconds</option>
      </select>

      <ul>
        {stockPrices.map(stock => (
          <li key={stock.stockSymbol}>
            {stock.stockSymbol}: ₹{stock.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockPrice;
