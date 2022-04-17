import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

const TrendingC = () => {
  return (
    <div className='trendingcard'>
        <div className='trending-wrapper'>
            <div className="trending-info">
                <h1>Frozen Two</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur recusandae, cupiditate beatae aut quod at? Repudiandae nihil in dicta minima.</p>
                <button>Watch Trailer <IoMdArrowDropright /></button>
            </div>
            <div className="trending-img">
                <img src="../.././img/Wallpaper.png" className='trending-arrow' alt="ricknmorty" />
            </div>
        </div>
    </div>
  )
}

export default TrendingC