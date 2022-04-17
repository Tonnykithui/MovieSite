import React from 'react'
import TrendCard from './TrendCard'
import { AiOutlineStar   } from "react-icons/ai";
import TrendCardSm from './TrendCardSm';

const Home = () => {
  return (
    <div className='w-full h-full mr-2 pt-2 mb-3 overflow-hidden'>
      <h1 className='text-lg font-semibold'>Trending Movies</h1>
      <div className='grid grid-cols-2 gap-4 w-full'>
        <TrendCard />
        <TrendCard />
      </div>
      <div className='top-rated'>
        <h1 className='top-rated-h'><span>Top Rated</span><AiOutlineStar className='star'/></h1>
        <div className='grid grid-cols-4 gap-2 gap-y-3 w-full'>
        <TrendCardSm />
        <TrendCardSm />
        <TrendCardSm />
        <TrendCardSm />
        <TrendCardSm />
        <TrendCardSm />
        <TrendCardSm />
        <TrendCardSm />
        </div>
      </div>
    </div>
  )
}

export default Home