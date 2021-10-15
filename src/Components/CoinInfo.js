import React from 'react'

const CoinInfo = () => {
    return (
        <div className='info-container'>
            <div className='info-row'>
                <p className='market-name'>Name</p>

                <div className='info'>
                    <p className='market-price'>Price</p>
                    <p className='market-percent'>24h %</p>
                    <p className='market-vol'>Volume(24h)</p>
                    <p className='market-cap'>Market Cap</p>
                </div>
            </div>
        </div>
    )
}

export default CoinInfo
