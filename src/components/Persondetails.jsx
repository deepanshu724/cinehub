import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { asyncloadperson, removeperson } from '../store/actions/personactions';
import { Link } from 'react-router-dom';
import Personcard from '../template/personcard';
import Loading from './Loading';

const Persondetails = () => {
    const { id } = useParams();
    const { info } = useSelector((state) => state.person);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(asyncloadperson(id));
        return () => {
            dispatch(removeperson());
        };
    }, [dispatch, id]);
    if (!info || !info.detail) {
      return <div className='w-full h-screen flex items-center justify-center'><Loading/></div>;
  }
    console.log(info)
    const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${info.detail.profile_path}`;
    const data = info.combinedcredits.cast;

  

    return (
       <div
       style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
    }}
       className='w-screen min-h-screen overflow-auto text-gray-100 px-[10%] '>
                         <nav className="w-full flex  sm:flex-row gap-3 sm:gap-10 mt-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="hover:text-[#6556CD] flex items-center gap-2 text-base sm:text-lg"
                        >
                            <i className="ri-arrow-left-line"></i> Back
                        </button>
                        
                    </nav>

                    <div className='w-full flex flex-col sm:flex-row mt-10 mb-10 gap-5 items-start'>
                <div className='w-72 rounded h-80 mb-14 md:mb-0'>
                    <img src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} className='rounded w-full h-full object-top object-cover mb-5' alt={info.detail.original_title} />
               </div>
                <div className='flex flex-col md:text-start'>
                    <h1 className='text-zinc-200 text-3xl font-semibold'>{info.detail.name || info.detail.original_title}</h1>
                    <h2 className='text-sm pt-2 text-zinc-100'>Birth Date: {info.detail.birthday}</h2>
                    <h2 className='text-sm pt-2 text-zinc-100'>Known For: {info.detail.known_for_department}</h2>
                    <h2 className='text-sm pt-1 text-zinc-100'>Place Of Birth: {info.detail.place_of_birth}</h2>
                    <h2 className='text-sm pt-1 text-zinc-100'>Biography:</h2>
                    <div className='h-20 md:h-40 overflow-y-auto '>
                    <h2 className='text-sm mt-1 max-w-[36rem]  text-zinc-100'> {info.detail.biography}</h2>
                    </div>
  
                </div>
               
            </div>
            <div className='w-full mt-10'>
                <hr className='mb-2' />
                <h1 className='text-2xl pb-2 text-zinc-100 font-semibold mt-2 mb-2'>Movie/Show Roles</h1>
                <Personcard data={data} />
            </div>
       </div>
    );
};

export default Persondetails;
