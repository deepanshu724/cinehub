import React from 'react';
import { Link } from 'react-router-dom';

const Personcard = ({ data }) => {
  return (
    <div className='w-full overflow-y-hidden px-5'>
      <div className='w-full flex h-full gap-18 lg:gap-2'>
        {data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`} key={d.id} className='w-full h-64 mr-5 mb-5 flex '>
            <div className='flex flex-col justify-end gap-3'>
                <h1 className='-rotate-90 text-xl w-14 text-white font-semibold text-right relative right-4 whitespace-nowrap top-8'>{d.character}</h1>
              <h1 className='-rotate-90 text-xl w-14 text-white font-semibold text-right relative left-2 whitespace-nowrap bottom-3'>
                ({(d.title || d.name || d.original_name || d.original_title).slice(0, 20)})
              </h1>
              <h1 className='text-2xl text-[#6556CD] font-black text-right pr-1'>{i < 9 ? "0" + (i + 1) : i + 1}</h1>
            </div>
            <div className='w-full h-[100%] flex   gap-3'>
              <img className='w-full min-w-44 max-w-48 h-[100%] object-cover object-center' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Personcard;
