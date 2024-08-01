import React, { useEffect } from 'react'
import Sidenav from '../template/sidenav';
import Dropdown from '../template/dropdown';
import Topnav from '../template/Topnav';
import axios from '../utils/axios';
import { useState } from 'react';
import Cards from '../template/cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
    const [popular, setpopular] = useState([])
    const [Category,setCategory] = useState("movie")
    const [page, setpage]= useState(1)
    const [Hasmore,setHasMore]=useState(true)
    const [menu, setMenu] = useState(true);
    const togglemenu=(i)=>{
      return setMenu(i)
  }
    const fetchdata=async()=>{
        try {
             const{data}= await axios.get(`${Category}/popular?page=${page}`)
             if(data.results.length>0){
                setpopular((prev)=>[...prev ,...data.results])
                setpage((prev)=>prev+1)

             }
             else{
                setHasMore(false)

             }
             
             
        } catch (error) {
            console.log("error is:",error)
        }
        
    }
    const refresh = () => {
        setpopular([]);
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
          <h1 className='text-xl pr-2 sm:text-3xl font-semibold text-zinc-400'>Popular
          <small className="ml-2 text-sm text-zinc-600">
          ({Category})
          </small>
          </h1>
          <div className='flex flex-nowrap text-wrap gap-4 mt-0'>
            <Dropdown title='Category' options={["tv","movie"]} func={(value) => setCategory(value)}/>
          </div>
        </div>

        <div className='w-full h-screen'>
        <InfiniteScroll
            dataLength={popular.length}
            next={fetchdata}
            hasMore={Hasmore}
         
            endMessage={<p>No more data to load.</p>}
          >
            {popular.length === 0 ? <Loading /> : <Cards data={popular} title={Category} />}
          </InfiniteScroll>
        </div>
      </div>
    </>
  )
};

export default Popular