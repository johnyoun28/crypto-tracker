import React from 'react'

const Coin = ({coin}) => {

    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <img src={coin.image} alt='crypto'/>
                <h1>{coin.name}</h1> 

                <div className= 'coin'>
                <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-price'>${coin.current_price.toLocaleString()}</p>

            {
                coin.price_change_percentage_24h.toFixed(2) < 0 ?
                <p style={{color: 'red'}}>{coin.price_change_percentage_24h.toFixed(2)}%</p> :
                 <p style={{color: '#32CD32'}}>+{coin.price_change_percentage_24h.toFixed(2)}%</p>
            }

            <p className='coin-volume'>${coin.total_volume.toLocaleString()}</p>
            <p className='coin-cap'>${coin.market_cap.toLocaleString()}</p>
                </div>

            </div>
        </div>
    )
}

export default Coin
