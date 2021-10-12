import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import SearchBar from './Components/SearchBar';


const App = () => {
  const [coin, setCoin] = useState([])

  return (
    <div className="coin-container">
      <h1>Hi</h1>
      <SearchBar />
    </div>
  );
}

export default App;
