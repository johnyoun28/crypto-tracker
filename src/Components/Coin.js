import React from 'react'

const Coin = (props) => {

    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <img src={props.coin.image} alt='crypto'/>
                <h1>{props.coin.name}</h1> 

                <div className= 'coin'>
                <p className='coin-symbol'>{props.coin.symbol}</p>
            <p className='coin-price'>${props.coin.current_price.toLocaleString()}</p>

            {
                props.coin.price_change_percentage_24h.toFixed(2) < 0 ?
                <p style={{color: 'red'}}>{props.coin.price_change_percentage_24h.toFixed(2)}%</p> :
                 <p style={{color: '#32CD32'}}>+{props.coin.price_change_percentage_24h.toFixed(2)}%</p>
            }

            <p className='coin-volume'>${props.coin.total_volume.toLocaleString()}</p>
            <p className='coin-cap'>${props.coin.market_cap.toLocaleString()}</p>
                </div>

            </div>
        </div>
    )
}

export default Coin
