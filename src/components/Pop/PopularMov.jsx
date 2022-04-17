import React from 'react'

const PopularMov = () => {
  return (
    <div className='movie'>
        <div className="img-time">
            <img src="../.././img/book4.jpg" alt="movie" />
            <div className='time'>
                <p>2:30hrs</p>
            </div>
        </div>
        <div className="pop-movie-det">
            <h1>The Beauty And The Beast.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, modi distinctio soluta, ex nostrum non accusantium pariatur laborum esse molestiae assumenda et error magni repellat repellendus quis reiciendis totam eveniet cupiditate voluptates harum est architecto iure! Praesentium deleniti est nesciunt.</p>
            <button>+ Add To WatchList</button>
        </div>
    </div>
  )
}

export default PopularMov