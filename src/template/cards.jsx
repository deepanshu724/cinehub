import React from 'react';
import { Link } from 'react-router-dom';
import noimage from './noimage.png';

const Cards = ({ data, title }) => {
  // Function to handle image error
  
  return (
    <div className='w-full h-screen flex justify-around flex-wrap m-2 gap-1 '>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Link to={`/${item.media_type || title}/details/${item.id}`} key={index}>
            <div className='mb-14'>
              <div className='md:w-72 md:h-96 w-64 h-80'>
                <img
                  className='w-full h-full object-cover object-center'
                  src={item.backdrop_path || item.poster_path || item.profile_path?`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path || item.profile_path}`:noimage}
                  alt={item.title || item.name || item.original_name || item.original_title}
                 
                />
              </div>
              <h1 className='p-2 text-zinc-200 text-xl text-wrap w-72'>
                {item.title || item.name || item.original_name || item.original_title}
              </h1>
              <h1 className='p-2 pt-0 text-xs text-yellow-400 text-wrap w-72 mb-3'>
                <i className={`ri-star-s-fill ${item.vote_average ? "flex" : "hidden"}`}>
                  {item.vote_average?.toFixed(1) || ''}
                </i>
              </h1>
            </div>
          </Link>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Cards;
