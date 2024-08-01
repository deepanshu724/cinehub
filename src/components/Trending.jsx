import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from '../template/Topnav';
import Dropdown from '../template/dropdown';
import Sidenav from '../template/sidenav';
import axios from '../utils/axios';
import Cards from '../template/cards';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';

const Trending = () => {
  const navigate = useNavigate();
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState('day');
  const [menu, setMenu] = useState(true);
  const togglemenu=(i)=>{
    return setMenu(i)
}
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("error is", error);
    }
  };

  const refresh = () => {
    setTrending([]);
    setPage(1);
    setHasMore(true);
  };

  useEffect(() => {
    refresh();
  }, [category, duration]);

  useEffect(() => {
    fetchData();
  }, [page]);

 

  return  (
    <>
      <Sidenav setmnu={togglemenu} menu={menu} />
      <div className='w-full lg:w-[80%] h-screen overflow-y-auto overflow-x-hidden'>
        <Topnav setmenu={togglemenu} />
        <div className='my-6 px-2 flex justify-between relative z-0'>
          <h1 className='text-xl pr-2 sm:text-3xl font-semibold text-zinc-400'>Trending
          <small className="ml-2 text-sm text-zinc-600">
          ({category})
          </small>
          </h1>
          <div className='flex flex-nowrap text-wrap gap-4 mt-0'>
            <Dropdown title='Category' options={["movie", "tv", "all"]} func={(value) => setCategory(value)}/>
            <Dropdown title='Duration' options={["day", "week"]} func={(value) => setDuration(value)} />
          </div>
        </div>

        <div className='w-full h-screen'>
        <InfiniteScroll
            dataLength={trending.length}
            next={fetchData}
            hasMore={hasMore}
         
            endMessage={<p>No more data to load.</p>}
          >
            {trending.length === 0 ? <Loading /> : <Cards data={trending} />}
          </InfiniteScroll>
        </div>
      </div>
    </>
  )
};

export default Trending;
