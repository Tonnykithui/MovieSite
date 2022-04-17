import React from 'react'
import { AiOutlineHome, AiOutlineFire } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import { CgScreen } from "react-icons/cg";
import { BiBookmarkHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul className='sidebar-ul'>
          <li className='active'><Link to='/'><AiOutlineHome/><span>Home</span></Link></li>
          <li><Link to='/popular'><AiOutlineFire/><span>Popular</span></Link></li>
          <li><Link to='/shows'><CgScreen /><span>Show</span></Link></li>
          <li><Link to='trending'><FiTrendingUp /><span>Trending</span></Link></li>
          <li><Link to='bookmarked'><BiBookmarkHeart /><span>BookMarked</span></Link></li>
        </ul>
    </div>
  )
}

export default Sidebar