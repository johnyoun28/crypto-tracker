import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import CoinList from './Components/CoinList';
import CoinInfo from './Components/CoinInfo'


const App = () => {
  const [coins, setCoin] = useState([])
  const [search, setSearch] = useState('')

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

  const changeHandler = evt => {
      setSearch(evt.target.value)
  }

  const results = coins.filter(coin => {
      return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
      <h1 className='main-header'>Today's Cryptocurrency Prices by Market Cap</h1>
      <form>
          <input
          className='form-input'
          type='text'
          placeholder= 'Search'
          onChange={changeHandler}
          ></input>
        </form>
      <CoinInfo />
      <CoinList coins={results}/>
    </div>
  );
}

export default App;
