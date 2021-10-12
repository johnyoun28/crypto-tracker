import React from 'react'

const Coin = (props) => {
    return (
        <div className='coin-container'>
            <h2>{props.coin.name}</h2> 


            <h2>{props.coin.symbol}</h2>
            <h2>{props.coin.current_price}</h2>
            <h2>{props.coin.market_cap}</h2>

    

            
        </div>
    )
}

export default Coin
