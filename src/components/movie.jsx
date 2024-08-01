import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from '../template/Topnav';
import Dropdown from '../template/dropdown';
import Sidenav from '../template/sidenav';
import axios from '../utils/axios';
import Cards from '../template/cards';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';

const Movie = () => {
  const navigate = useNavigate();
  const [movie, setmovie] = useState([]);
  const [category, setCategory] = useState('now_playing');
  const [menu, setMenu] = useState(true);
  const togglemenu=(i)=>{
    return setMenu(i)
}
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      const filteredMovies = data.results.filter(movie => movie.vote_average > 0);
      if (filteredMovies.length > 0) {
        setmovie((prev) => [...prev, ...filteredMovies]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("error is", error);
    }
  };

  const refresh = () => {
    setmovie([]);
    setPage(1);
    setHasMore(true);
  };

  useEffect(() => {
    refresh();
  }, [category]);
  console.log(movie)

  useEffect(() => {
    fetchData();
  }, [page]);

 

  return  (
    <>
      <Sidenav setmnu={togglemenu} menu={menu} />
      <div className='w-full lg:w-[80%] h-screen overflow-y-auto overflow-x-hidden'>
        <Topnav setmenu={togglemenu} />
        <div className='my-6 px-2 flex justify-between relative z-0'>
          <h1 className='text-xl pr-2 sm:text-3xl font-semibold text-zinc-400'>Movies
          <small className="ml-2 text-sm text-zinc-600">
          ({category})
          </small>
      </h1>
          <div className='flex flex-nowrap text-wrap gap-4 mt-0'>
            <Dropdown title='Category' options={["upcoming","top_rated", "popular", "now_playing"]} func={(value) => setCategory(value)}/>
          </div>
        </div>

        <div className='w-full h-screen'>
        <InfiniteScroll
            dataLength={movie.length}
            next={fetchData}
            hasMore={hasMore} 
         
            endMessage={<p>No more data to load.</p>}
          >
            {movie.length === 0 ? <Loading /> : <Cards data={movie} title="movie" />}
          </InfiniteScroll>
        </div>
      </div>
    </>
  )
};

export default Movie;
