import React from 'react'
import PopularMov from './PopularMov'

const Popular = () => {
  return (
    <div className='popular'>
      <div className='flex flex-row justify-between pr-20'>
        <h1 className='text-xl font-semibold'>Popular</h1>
        <div>
          <button className='btn-prev'>Prev</button>
          <button className='btn-next'>Next</button>
        </div>
      </div>
      <div className="pop-movies">
        <PopularMov />
        <PopularMov />
        <PopularMov />
      </div>
    </div>
  )
}

export default Popular