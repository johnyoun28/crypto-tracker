import React from 'react'
import Coin from './Coin'

const CoinList = (props) => {
    return (
        <div>
            {
                props.coins.map((coin, idx) => (
                    <Coin key={idx} coin={coin}/>
                ))

            }
    
        </div>
    )
}

export default CoinList
