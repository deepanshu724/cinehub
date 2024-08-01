import React, { useEffect, useState } from 'react';
import Sidenav from '../template/sidenav';
import Topnav from '../template/Topnav';
import axios from '../utils/axios';
import Header from '../template/Header';
import Horizontalcards from '../template/Horizontalcards';
import Dropdown from '../template/dropdown';
import Loading from './Loading';

const Home = () => {
    document.title = "SCSDB Homepage";
    const [category,setCategory]=useState("all")
    const[trending,setrending]=useState(null)
    const[menu,setmenu]=useState(true)
    const togglemenu=(i)=>{
        return setmenu(i)
    }
    const gettrending= async()=>{
            try {
                const{data}=await axios.get(`/trending/${category}/day`)
                
                setrending(data.results)

            } catch (error) {
                console.log("error is:",error)
            }
    }
    useEffect(()=>{
        gettrending()
    },[category])

    return trending ? (
        <>
            <Sidenav setmenu={togglemenu} menu={menu} />
            <div className='w-full lg:w-[80%] h-screen  overflow-x-hidden '>
                <Topnav setmenu={togglemenu} />
                <Header type={category} />
                <div className='my-6 px-5  flex justify-between relative z-0 '>
               <h1 className=' text-2xl md:text-3xl font-semibold text-zinc-400'>Treanding</h1>
                <Dropdown title='Filter' options={["tv","movie","all"]}  func={(value) => setCategory(value)} /> 
               </div>
                <Horizontalcards data={trending} />
            </div>
        </>
    ) : <div className='w-full h-screen flex items-center justify-center'>
    <Loading />
  </div>
}

export default Home;
