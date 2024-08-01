import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axios';
import noimage from './noimage.png';

const Topnav = ({ setmenu }) => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results || []);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    if (query) {
      getData();
    } else {
      setSearches([]);
    }
  }, [query]);

  return (
    <div className='relative flex items-center p-4 md:ml-20 text-white'>
      {/* Menu Icon for Mobile */}
      <i className="ri-menu-line text-3xl text-gray-100 mr-24 md:hidden cursor-pointer" onClick={() => setmenu(false)}></i>

      {/* Search Icon */}
      <i className="ri-search-2-line text-3xl text-gray-300 mr-4 "></i>

      {/* Search Input */}
      <div className='relative w-full md:w-[70%]'>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className='w-full text-gray-200 bg-transparent p-3 pr-12 outline-none placeholder-gray-400'
          type="text"
          placeholder='Search here'
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery('')}
            className="ri-close-fill text-3xl text-gray-300 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          ></i>
        )}
      </div>

      {/* Search Results */}
      {searches.length > 0 && (
        <div className='absolute top-full left-4 w-full md:w-[70%] bg-gray-700 mt-2 border border-gray-600 rounded-lg max-h-[50vh] overflow-auto z-[5]'>
          {searches.map((s, i) => (
            <Link to={`/${s.media_type }/details/${s.id}`}
              key={i}
              className='p-4 flex items-center border-b border-gray-600 hover:bg-gray-600'
            >
              <img
                className='w-[5vh] h-[5vh] md:w-[10vh] md:h-[10vh] object-cover rounded mr-4'
                src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage}
                alt={s.title || s.name || s.original_name || s.original_title}
              />
              <span>{s.title || s.name || s.original_name || s.original_title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
