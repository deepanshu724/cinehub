import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidenav = ({ setmenu, menu }) => {
  return (
    <div
      className={`w-72 z-20 h-full ${menu === false ? 'flex' : 'hidden'} bg-[#1F1E24] fixed md:relative border-r-2 border-zinc-400 p-10 md:flex flex-col overflow-auto`}
    >
      <div className='font-bold text-2xl flex justify-between'>
        <h1 className='text-white'>
          <i className='ri-clapperboard-fill text-[#6556CD] mr-2'></i>CineHub
        </h1>
        <i
          className='ri-close-fill md:hidden text-2xl text-gray-100'
          onClick={() => setmenu(true)}
        ></i>
      </div>
      <nav className='flex flex-col text-xl text-zinc-400 gap-1'>
        <h1 className='mt-10 mb-5 text-xl font-semibold text-white'>
          News Feeds
        </h1>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300 ${
              isActive ? 'bg-[#6556CD] text-white' : ''
            }`
          }
        >
          <i className='ri-home-fill mr-2'></i>Home
        </NavLink>
        <NavLink
          to='/trending'
          className={({ isActive }) =>
            `hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300 ${
              isActive ? 'bg-[#6556CD] text-white' : ''
            }`
          }
        >
          <i className='ri-fire-fill mr-1'></i>Trending
        </NavLink>
        <NavLink
          to='/popular'
          className={({ isActive }) =>
            `hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300 ${
              isActive ? 'bg-[#6556CD] text-white' : ''
            }`
          }
        >
          <i className='ri-bard-fill mr-2'></i>Popular
        </NavLink>
        <NavLink
          to='/movie'
          className={({ isActive }) =>
            `hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300 ${
              isActive ? 'bg-[#6556CD] text-white' : ''
            }`
          }
        >
          <i className='ri-movie-2-fill mr-2'></i>Movies
        </NavLink>
        <NavLink
          to='/tv'
          className={({ isActive }) =>
            `hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300 ${
              isActive ? 'bg-[#6556CD] text-white' : ''
            }`
          }
        >
          <i className='ri-tv-fill mr-2'></i>Tv Shows
        </NavLink>
        <NavLink
          to='/person'
          className={({ isActive }) =>
            `hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300 ${
              isActive ? 'bg-[#6556CD] text-white' : ''
            }`
          }
        >
          <i className='ri-team-fill mr-2'></i>People
        </NavLink>
      </nav>
      <hr className='h-[1px] border-none bg-zinc-400' />
      <nav className='flex flex-col items-center justify-center text-xl text-zinc-400 pb-0 gap-3'>
        <h1 className='mt-10 lg:mb-5 pr-3 text-nowrap text-xl font-semibold text-white'>
          Website Information
        </h1>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            `hover:bg-[#6556CD] hover:text-white rounded-lg p-5 pl-0  pr-12 duration-300 text-nowrap ${
              isActive ? 'bg-[#6556CD] text-white' : ''
            }`
          }
        >
          <i className='ri-information-2-fill mr-2'></i>About Us
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            `hover:bg-[#6556CD] hover:text-white rounded-lg p-5 pl-0 pr-10 duration-300 ${
              isActive ? 'bg-[#6556CD] text-white' : ''
            }`
          }
        >
          <i className='ri-phone-fill mr-2'></i>Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidenav;
