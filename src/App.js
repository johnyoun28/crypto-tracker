import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import SearchBar from './Components/SearchBar';
import CoinList from './Components/CoinList';


const App = () => {
  const [coins, setCoin] = useState([])

  const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    axios.get(URL)
    .then(res => {
      setCoin(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
    <div className="App">
      <h1>Hi</h1>
      <SearchBar />
      <CoinList coins={coins}/>
    </div>
  );
}

export default App;
