import React from 'react'

const TrendCardSm = () => {
  return (
    <div className='trendcardsm'>
        <img src="../.././img/3.jpeg" alt="person" />
        <div className='trendcard-det'>
            <h2>Rick and Morty</h2>
            <p>2022</p>
            <div className='trendcard-det-rating'>
                <div className='rating'>
                  <button disabled="disabled" className='rating-btn'>IMDB</button>
                  <p>6 rating</p>
                </div>
                <div className='trendcard-watch'>
                    <button className='watch-btn'>Watch Now</button>
                    <div className='btn-add'>
                        +
                        {/* <IoAddCircleOutline /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrendCardSm