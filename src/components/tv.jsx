import React, { useEffect } from 'react'
import Sidenav from '../template/sidenav';
import Dropdown from '../template/dropdown';
import Topnav from '../template/Topnav';
import axios from '../utils/axios';
import { useState } from 'react';
import Cards from '../template/cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Tv = () => {
    const [tv, settv] = useState([])
    const [Category,setCategory] = useState("popular")
    const [page, setpage]= useState(1)
    const [Hasmore,setHasMore]=useState(true)
    const [menu, setMenu] = useState(true);
    const togglemenu=(i)=>{
      return setMenu(i)
  }
    const fetchdata=async()=>{
        try {
             const{data}= await axios.get(`tv/${Category}?page=${page}`)
             const filteredMovies = data.results.filter(movie => movie.vote_average > 0);
             if (filteredMovies.length > 0) {
               settv((prev) => [...prev, ...filteredMovies]);
               setpage((prevPage) => prevPage + 1);
             } else {
               setHasMore(false);
             }
             
             
        } catch (error) {
            console.log("error is:",error)
        }
        
    }
    const refresh = () => {
        settv([]);
        setpage(1);
        setHasMore(true);
      };
  useEffect(()=>{
    refresh()
  },[Category])
  

    useEffect(()=>{
       fetchdata();
    },[page])
  return (
    <>
      <Sidenav setmnu={togglemenu} menu={menu} />
      <div className='w-full lg:w-[80%] h-screen overflow-y-auto overflow-x-hidden'>
        <Topnav setmenu={togglemenu} />
        <div className='my-6 px-2 flex justify-between relative z-0'>
          <h1 className='text-xl pr-2 sm:text-3xl font-semibold text-zinc-400'>Tv
          <small className="ml-2 text-sm text-zinc-600">
          ({Category})
          </small>
          </h1>
          <div className='flex flex-nowrap text-wrap gap-4 mt-0'>
            <Dropdown title='Category' options={["top_rated","on_the_air","airing_today","popular"]} func={(value) => setCategory(value)}/>
          </div>
        </div>

        <div className='w-full h-screen'>
        <InfiniteScroll
            dataLength={tv.length}
            next={fetchdata}
            hasMore={Hasmore}
         
            endMessage={<p>No more data to load.</p>}
          >
            {tv.length === 0 ? <Loading /> : <Cards data={tv} title="tv" />}
          </InfiniteScroll>
        </div>
      </div>
    </>
  )
};

export default Tv