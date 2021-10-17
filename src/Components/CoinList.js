import React from 'react'
import Coin from './Coin'
import '../App.css'

const CoinList = ({coins}) => {
    return (
        
        <div>
            {
                coins.map((coin, idx) => (
                    <Coin key={idx} coin={coin}/>
                ))
            }
        </div>
    )
}

export default CoinList
