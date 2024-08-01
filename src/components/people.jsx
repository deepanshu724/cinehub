import React, { useEffect, useState } from 'react';
import Sidenav from '../template/sidenav';
import Dropdown from '../template/dropdown';
import Topnav from '../template/Topnav';
import axios from '../utils/axios';
import Cards from '../template/cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);
  const [Hasmore, setHasMore] = useState(true);
  const [menu, setMenu] = useState(true);

  const togglemenu = (i) => {
    return setMenu(i);
  };

  const fetchdata = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);
      if (data.results.length > 0) {
        setperson((prev) => [...prev, ...data.results]);
        setpage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("error is:", error);
    }
  };

  const refresh = () => {
    setperson([]);
    setpage(1);
    setHasMore(true);
  };

  useEffect(() => {
    refresh();
    fetchdata(); // Fetch the initial data on component mount or category change
  }, []);

  useEffect(() => {
    if (page !== 1) fetchdata(); // Fetch data only if the page is not 1 (handled by refresh)
  }, [page]);

  const scrolltotop=()=>{
    window.scrollTo(0,0)
  }

  return (
    <>
      <Sidenav setmnu={togglemenu} menu={menu} />
      <div className='w-full lg:w-[80%] h-screen overflow-y-auto overflow-x-hidden'>
        <Topnav setmenu={togglemenu} />
        <div className='my-6 px-2 flex justify-between relative z-0'>
          <h1 className='text-xl pr-2 sm:text-3xl font-semibold text-zinc-400'>
            Person
          </h1>
        </div>

        <div className='w-full h-screen'>
          <InfiniteScroll
            dataLength={person.length}
            next={fetchdata}
            hasMore={Hasmore}
            endMessage={<p>No more data to load.</p>}
           
          >
            {person.length === 0 ? <Loading /> : <Cards data={person} title="person" />}
            

          </InfiniteScroll>

        </div>
      </div>
    </>
  );
};

export default People;
