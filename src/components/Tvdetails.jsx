import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { asyncloadtv, removetv } from '../store/actions/tvactions';
import { Link } from 'react-router-dom';
import Horizontalcards from '../template/Horizontalcards';
import Loading from './Loading';
import Seasoncards from '../template/seasoncards';

const Tvdetails = () => {
    const { id } = useParams();
    const { info } = useSelector((state) => state.tv);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(asyncloadtv(id));
        return () => {
            dispatch(removetv());
        };
    }, [dispatch, id]);

    if (!info || !info.detail) {
        return <div className='w-full h-screen flex items-center justify-center'><Loading/></div>;
    }

    
    const seasondata = info.detail.seasons.filter((data)=>data.name!=="Specials")

    const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path}`;
    console.log(info);

    // Ensure recommendation and similar data are defined and not empty
    const recommendations = info.recommendations && info.recommendations.length > 0 ? info.recommendations : null;
    const similar = info.similar && info.similar.length > 0 ? info.similar : null;
    const data = recommendations || similar || [];

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
            }}
            className='relative w-full min-h-screen overflow-auto px-[10%] flex flex-col justify-between items-start text-zinc-100 text-xl'
        >
                            <nav className="w-full flex  sm:flex-row gap-3 sm:gap-10 mt-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="hover:text-[#6556CD] flex items-center gap-2 text-base sm:text-lg"
                        >
                            <i className="ri-arrow-left-line"></i> Back
                        </button>
                        <a
                            href={info.detail.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#6556CD] flex items-center gap-2 text-base sm:text-lg"
                        >
                            <i className="ri-external-link-fill"></i> Homepage
                        </a>
                        <a
                            href={`https://www.imdb.com/title/${info.detail.imdb_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#6556CD] flex items-center gap-2 text-base sm:text-lg"
                        >
                            <i className="ri-earth-fill"></i> IMDb
                        </a>
                    </nav>


            <div className='w-full flex flex-col sm:flex-row mt-5 mb-10 gap-5 items-start'>
                <div className='w-60 rounded h-80 mb-14 md:mb-0'>
                    <img src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path}`} className='rounded w-full h-full object-cover mb-5' alt={info.detail.original_title} />
                    <Link className='bg-[#6556CD] inline-block w-full text-center text-white text-base px-3 py-2 rounded' to={info.videos?`${pathname}/trailer`:"#"}>{info.videos?"Watch Trailer":"No Trailer Available"}</Link>
                </div>
                <div className='flex flex-col md:text-start'>
                    <h1 className='text-zinc-200 text-3xl font-semibold'>{info.detail.name || info.detail.original_title}</h1>
                    <h2 className='text-sm pt-1 text-zinc-100'>Release Date: {info.detail.first_air_date}</h2>
                    <h2 className='text-sm pt-1 text-zinc-100'>Genres: {info.detail.genres.map((genre) => genre.name).join(', ')}</h2>
                    <h2 className='text-sm pt-1 text-zinc-100'>Language: {info.detail.spoken_languages.map((lang) => lang.english_name).join(', ')}</h2>
                    <h2 className='text-sm pt-2 text-zinc-100'>Seasons: {info.detail.number_of_seasons}</h2>
                    <h2 className='text-sm pt-2 text-zinc-100'>Total No. Of Episodes: {info.detail.number_of_episodes}</h2>


                    <h2 className='text-sm pt-3 max-w-[36rem] text-zinc-100'>{info.detail.overview}</h2>
                    <div>
                        {info.watchproviders && info.watchproviders.flatrate && (
                            <div className='flex flex-col md:items-start'>
                               
                                <h1 className='text-base font-medium pt-1 text-zinc-100'>Watch On:</h1>
                                <div className=' flex gap-3'>
                                {info.watchproviders.flatrate.map((logo, id) => (
                                    <img key={id} className="w-[3.5vh] h-[3.5vh] rounded-full mt-2" src={`https://image.tmdb.org/t/p/original/${logo.logo_path}`} alt={logo.provider_name} />
                                ))}
                                 </div>
                               
                            </div>
                        )}
                        {info.watchproviders && (info.watchproviders.buy || info.watchproviders.rent) && (
                            <div className='flex flex-col pb-10 md:items-start'>
                                <h1 className='text-base font-medium pt-1 text-zinc-100'>Buy or Rent:</h1>
                                <div className='flex gap-3 mt-2 md:items-start'>
                                    {(info.watchproviders.buy || info.watchproviders.rent).map((logo, id) => (
                                        <img key={id} className="w-[3.5vh] h-[3.5vh] rounded-full" src={`https://image.tmdb.org/t/p/original/${logo.logo_path}`} alt={logo.provider_name} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
               
            </div>
            <div className='w-full mt-10 '>
                <hr className='mb-2' />
                <h1 className='text-2xl pb-2 text-zinc-100 font-semibold'>Seasons</h1>
                
                <Seasoncards data={seasondata}  />
           
               
            </div>
            <div className='w-full mt-10'>
                <hr className='mb-2' />
                <h1 className='text-2xl pb-2 text-zinc-100 font-semibold'>Recommended for you</h1>
                <Horizontalcards data={data} />
            </div>
            <Outlet/>
        </div>
    );
};

export default Tvdetails;
